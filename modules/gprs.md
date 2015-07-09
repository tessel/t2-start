{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/gprs.png"> GPRS

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/gprs-sim900)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir gprs` into your command line, then change directory into that folder: `cd gprs`

### Step 2

<div class="row">
<div class="large-6 columns">

Attach antenna and insert an unlocked (pre-paid) SIM card [not included] into GPRS module as pictured.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/gprs-goodies.png)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Make sure the Power select jumper in the top right corner of the module is set to 3.3V. You may have to pull off the jumper pin from its location at 'External' and move it to 3.3V.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/gprs-3v.jpeg)

</div>
</div>

### Step 4

<div class="row">
<div class="large-6 columns">

Plug the GPRS module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/gprs.jpeg)

</div>
</div>

### Step 5

<div class="row">
<div class="large-6 columns">

Install by typing `npm install gprs-sim900` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/gprs.jpg)

</div>
</div>

### Step 6

Save this code in a text file called `gprs.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Use the GPRS module to send a text to a phone
number of your choice.
*********************************************/

var tessel = require('tessel');
var hardware = tessel.port['A'];
var gprslib = require('gprs-sim900');

var phoneNumber = '##########'; // Replace the #s with the String representation of the phone number, including country code (1 for USA)
var message = 'Text from a Tessel!';

//  Port, callback
var gprs = gprslib.use(hardware);
gprs.on('ready', function() {
  console.log('GPRS module connected to Tessel. Searching for network...')
  //  Give it 10 more seconds to connect to the network, then try to send an SMS
  setTimeout(function() {
    console.log('Sending', message, 'to', phoneNumber, '...');
    // Send message
    gprs.sendSMS(phoneNumber, message, function smsCallback(err, data) {
      if (err) {
        return console.log(err);
      }
      var success = data[0] !== -1;
      console.log('Text sent:', success);
      if (success) {
        // If successful, log the number of the sent text
        console.log('GPRS Module sent text #', data[0]);
      }
    });
  }, 10000);
});

//  Emit unsolicited messages beginning with...
gprs.emitMe(['NORMAL POWER DOWN', 'RING', '+']);

gprs.on('NORMAL POWER DOWN', function powerDaemon () {
  gprs.emit('powered off');
  console.log('The GPRS Module is off now.');
});

gprs.on('RING', function someoneCalledUs () {
  var instructions = 'Someone\'s calling!\nType the command \'ATA\' to answer and \'ATH\' to hang up.\nYou\'ll need a mic and headset connected to talk and hear.\nIf you want to call someone, type \'ATD"[their 10+digit number]"\'.';
  console.log(instructions);
});

gprs.on('+', function handlePlus (data) {
  console.log('Got an unsolicited message that begins with a \'+\'! Data:', data);
});

//  Command the GPRS module via the command line
process.stdin.resume();
process.stdin.on('data', function (data) {
  data = String(data).replace(/[\r\n]*$/, '');  //  Removes the line endings
  console.log('got command', [data]);
  gprs._txrx(data, 10000, function(err, data) {
    console.log('\nreply:\nerr:\t', err, '\ndata:');
    data.forEach(function(d) {
      console.log('\t' + d);
    });
    console.log('');
  });
});

//  Handle errors
gprs.on('error', function (err) {
  console.log('Got an error of some kind:\n', err);
});
{% endhighlight %}

### Step 7

<div class="row">
<div class="large-6 columns">

Replace '##########' in the code with a phone number to text (including country code) and save again.

In your command line, `tessel run gprs.js` After 10-20 seconds, check the phone you specified for a text!

If it didn't work, check the green 'NET LIGHT' LED on your GPRS module. If it is blinking more quickly than once every three seconds, you don't have enough bars of phone service to send a text.  

**Bonus:** Try interacting with the module using the command line.

Once your Tessel has successfully sent you a text, text it back. If all goes well, you should see a notification in your command line when the Tessel receives the SMS from your phone. To read the text you sent the Tessel, enter `at+cmgr=x`, where x is the number mentioned in the 'unsolicited event' notification.  

To see what else you can do with the GPRS module, see the module docs [here](https://github.com/tessel/gprs-sim900).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/gprs.gif)

</div>
</div>

### Step 8

<div class="row">
<div class="large-6 columns">

The GPRS module can be externally powered through the External power pins. This allows the module to draw more current and get a better connection to the cell network. If you're seeing the Tessel become unresponsive after running the GPRS module, switch to external power.  

First switch the jumper in the green area to connect External the 3.3V pins. Then connect an external GND to one of the two black arrows in the pink circle and external power to one of the two red arrows.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_clipped/gprs-external-power.jpg)

</div>
</div>

### Step 9

What else can you do with a GPRS module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/paigereads/gprs-trigger/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/heikki74/tessel-tracker-demo/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [GPRS forums](http://forums.tessel.io/category/gprs).
