{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/nrf.png"> NRF

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/rf-nrf24)

### Step 1

The nRF24 Module is used for wireless communication without WiFi. It's great for low-power mesh communication between Tessels.

**Note:** the nRF24 module can only communicate to other nRF24 modules, so for this example we'll need two Tessels each with their own nRF24 module. If you have an Arduino with an nRF24 module, you can talk to the Arduino instead with [an alternate nrf24 example](https://github.com/tessel/rf-nrf24/blob/master/examples/RF24-pingpair.js).

Make a directory inside your "tessel-code" folder: enter `mkdir nrf24` into your command line, then change directory into that folder: `cd nrf24`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the NRF24 module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/nrf24.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install rf-nrf24` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/nrf24.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `nrf24.js`:

{% highlight js %}
/* tessel to tessel
* requires 2 nrf24 modules (and ideally two tessels)
* put one tessel+nrf on "ping" mode and another one on "pong" mode
*/

var tessel = require('tessel'),
NRF24 = require('rf-nrf24'),
pipes = [0xF0F0F0F0E1, 0xF0F0F0F0D2],
role = 'ping'; // swap this to pong if you want to wait for receive

var nrf = NRF24.channel(0x4c) // set the RF channel to 76\. Frequency = 2400 + RF_CH [MHz] = 2476MHz
.transmitPower('PA_MAX') // set the transmit power to max
.dataRate('1Mbps')
.crcBytes(2) // 2 byte CRC
.autoRetransmit({count:15, delay:4000})
.use(tessel.port['A']);

nrf._debug = false;

nrf.on('ready', function () {
  setTimeout(function(){
    nrf.printDetails();
  }, 5000);

  if (role === 'ping') {
    console.log("PING out");

    var tx = nrf.openPipe('tx', pipes[0], {autoAck: false}), // transmit address F0F0F0F0D2
    rx = nrf.openPipe('rx', pipes[1], {size: 4}); // receive address F0F0F0F0D2
    tx.on('ready', function () {
      var n = 0;
      setInterval(function () {
        var b = new Buffer(4); // set buff len of 8 for compat with maniac bug's RF24 lib
        b.fill(0);
        b.writeUInt32BE(n++);
        console.log("Sending", n);
        tx.write(b);
      }, 5e3); // transmit every 5 seconds
    });
    rx.on('data', function (d) {
      console.log("Got response back:", d);
    });
  } else {
    console.log("PONG back");
    var rx = nrf.openPipe('rx', pipes[0], {size: 4});
    tx = nrf.openPipe('tx', pipes[1], {autoAck: false});
    rx.on('data', function (d) {
      console.log("Got data, will respond", d);
      tx.write(d);
    });
    tx.on('error', function (e) {
      console.warn("Error sending reply.", e);
    });
  }
});

// hold this process open
process.ref();
{% endhighlight %}

### Step 5

<div class="row">
<div class="large-6 columns">

Now change the role in the example file from 'ping' to 'pong' and send the 'ping' file to one Tessel and the 'pong' file to another Tessel.  

In your command line, `tessel run nrf24.js`

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/nrf24-double.jpg)

</div>
</div>

### Step 6

<div class="row">
<div class="large-6 columns">

Watch in your command line as the NRF modules communicate back and forth.  

**Bonus:** Change the data the NRF module is sending.  

To see what else you can do with the NRF24 module, see the module docs [here](https://github.com/tessel/rf-nrf24).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/nrf24.gif)

</div>
</div>

### Step 7

What else can you do with a NRF24 module? Try a [community-created project.](http://tessel.io/projects)

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [NRF24 forums](http://forums.tessel.io/category/nrf24).
