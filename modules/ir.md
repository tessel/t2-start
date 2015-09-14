{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/okUgl3T.png"> Infrared

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/ir-attx4)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir ir` into your command line, then change directory into that folder: `cd ir`

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the IR module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/okriGCr.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install ir-attx4` into the command line.

</div>
<div class="large-6 columns">

![](//i.imgur.com/b5TdwG8.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

Save this code in a text file called `ir.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This infrared module example transmits the
power signal sequence of an Insignia brand
television every three seconds, while also
listening for (and logging) any incoming
infrared data.
*********************************************/

var tessel = require('tessel');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['A']);

// When we're connected
infrared.on('ready', function() {
  if (!err) {
    console.log("Connected to IR!");
    // Start sending a signal every three seconds
    setInterval(function () {
      // Make a buffer of on/off durations (each duration is 16 bits)
      var powerBuffer = new Buffer([0x22,0xc4,0xee,0xd0,0x2,0x58,0xfe,0xc,0x2,0x8a,0xf9,0xf2,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xf9,0xf2,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x58]);
      // Send the signal at 38 kHz
      infrared.sendRawSignal(38, powerBuffer, function(err) {
        if (err) {
          console.log("Unable to send signal: ", err);
        } else {
          console.log("Signal sent!");
        }
      });
    }, 3000); // Every 3 seconds
  } else {
    console.log(err);
  }
});

// If we get data, print it out
infrared.on('data', function(data) {
  console.log("Received RX Data: ", data);
});
{% endhighlight %}

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run ir.js` Try turning on your TV! Look at the IR LED through a camera.  

**Bonus:** Change the code to turn on a different device.  

To see what else you can do with the IR module, see the module docs [here](https://github.com/tessel/ir-attx4).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/hbGlM7N.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with a IR module? Try a [community-created project.](http://tessel.io/projects)

</div>
</div>

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/simple-remote-switch/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/roberto-hidalgo/tessel-panorama-selfie/embed" width="360"></iframe>
</div>
</div>

<div class="row">
<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [IR forums](http://forums.tessel.io/category/ir).

</div>
</div>
