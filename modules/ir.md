{::options parse_block_html="true" /}

<div class="row">

<div class="large-12 columns fre-container"><span>![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/ir.png)</span>

## <span style="padding-left:10px;">IR</span>

<span style="padding-left:20px;">[_View Source_](https://github.com/tessel/ir-attx4)</span></div>

</div>

<div id="ir" class="row">

<div class="large-12 columns">

<div class="row">

<div class="large-12 columns">

Step 1

</div>

</div>

<div class="row">

<div class="large-12 columns">

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir ir</kbd>` into your command line, then change directory into that folder: `<kbd>cd ir</kbd>`

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 2

</div>

</div>

<div class="row">

<div class="large-6 columns">

Plug the IR module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/ir.jpeg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 3

</div>

</div>

<div class="row">

<div class="large-6 columns">

Install by typing `<kbd>npm install ir-attx4</kbd>` into the command line.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/ir.jpg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 4

</div>

</div>

<div class="row">

<div class="large-12 columns left">

Save this code in a text file called `ir.js`:

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
    setInterval(function() {
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

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 5

</div>

</div>

<div class="row">

<div class="large-6 columns">

In your command line, `<kbd>tessel run ir.js</kbd>`  
 Try turning on your TV! Look at the IR LED through a camera.  

**Bonus:** Change the code to turn on a different device.  

To see what else you can do with the IR module, see the module docs [here](https://github.com/tessel/ir-attx4).

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/ir.gif)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 6

</div>

</div>

<div class="row">

<div class="large-12 columns">

What else can you do with a IR module? Try a [community-created project.](http://tessel.io/projects)

</div>

</div>

<div class="row">

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/simple-remote-switch/embed" width="360"></iframe></div>

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/roberto-hidalgo/tessel-panorama-selfie/embed" width="360"></iframe></div>

</div>

<div class="row">

<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [IR forums](http://forums.tessel.io/category/ir).

</div>

</div>

</div>

</div>
