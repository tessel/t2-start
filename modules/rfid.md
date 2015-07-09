{::options parse_block_html="true" /}

<div class="row">

<div class="large-12 columns fre-container"><span>![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/rfid.png)</span>

## <span style="padding-left:10px;">RFID</span>

<span style="padding-left:20px;">[_View Source_](https://github.com/tessel/rfid-pn532)</span></div>

</div>

<div id="rfid" class="row">

<div class="large-12 columns">

<div class="row">

<div class="large-12 columns">

Step 1

</div>

</div>

<div class="row">

<div class="large-12 columns">

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir rfid</kbd>` into your command line, then change directory into that folder: `<kbd>cd rfid</kbd>`

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 2

</div>

</div>

<div class="row">

<div class="large-6 columns">

Plug the RFID module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/rfid.jpeg)</div>

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

Install by typing `<kbd>npm install rfid-pn532</kbd>` into the command line.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/rfid.jpg)</div>

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

Save this code in a text file called `rfid.js`:

    // Any copyright is dedicated to the Public Domain.
    // http://creativecommons.org/publicdomain/zero/1.0/

    /*********************************************
    This basic RFID example listens for an RFID
    device to come within range of the module,
    then logs its UID to the console.
    *********************************************/

    var tessel = require('tessel');
    var rfidlib = require('rfid-pn532');

    var rfid = rfidlib.use(tessel.port['A']);

    rfid.on('ready', function (version) {
    console.log('Ready to read RFID card');

    rfid.on('data', function(card) {
    console.log('UID:', card.uid.toString('hex'));
    });
    });

    rfid.on('error', function (err) {
    console.error(err);
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

In your command line, `<kbd>tessel run rfid.js</kbd>`  
 Tap the included RFID card on the reader to get its UID!  

**Bonus:** Change the polling rate of the RFID module so that it only checks for a card once every three seconds. (Hint: you may need to check the docs.)  

To see what else you can do with the RFID module, see the module docs [here](https://github.com/tessel/rfid-pn532).

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/rfid.gif)</div>

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

What else can you do with a RFID module? Try a [community-created project.](http://tessel.io/projects)

</div>

</div>

<div class="row">

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rfid-process-tracker/embed" width="360"></iframe></div>

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rfid-authorization/embed" width="360"></iframe></div>

</div>

<div class="row">

<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [RFID forums](http://forums.tessel.io/category/rfid).

</div>

</div>

</div>

</div>
