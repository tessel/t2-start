{::options parse_block_html="true" /}

<div class="row">

<div class="large-12 columns fre-container"><span>![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/microsd.png)</span>

## <span style="padding-left:10px;">MicroSD</span>

<span style="padding-left:20px;">[_View Source_](https://github.com/tessel/sdcard)</span></div>

</div>

<div id="microsd" class="row">

<div class="large-12 columns">

<div class="row">

<div class="large-12 columns">

Step 1

</div>

</div>

<div class="row">

<div class="large-12 columns">

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir microsd</kbd>` into your command line, then change directory into that folder: `<kbd>cd microsd</kbd>`

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 2

</div>

</div>

<div class="row">

<div class="large-6 columns">

Insert SD card into module.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_clipped/microsd.png)</div>

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

Plug the microSD module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/microsd.jpeg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 4

</div>

</div>

<div class="row">

<div class="large-6 columns">

Install by typing `<kbd>npm install sdcard</kbd>` into the command line.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/microsd.jpg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 5

</div>

</div>

<div class="row">

<div class="large-12 columns left">

Save this code in a text file called `microsd.js`:

    // Any copyright is dedicated to the Public Domain.
    // http://creativecommons.org/publicdomain/zero/1.0/

    /*********************************************
    This MicroSD card example writes a text file
    to the sd card, then reads the file to the
    console.
    *********************************************/

    var tessel = require('tessel');
    var sdcardlib = require('sdcard');

    var sdcard = sdcardlib.use(tessel.port['A']);

    sdcard.on('ready', function() {
    sdcard.getFilesystems(function(err, fss) {
    var fs = fss[0];
    console.log('Writing...');
    fs.writeFile('someFile.txt', 'Hey Tessel SDCard!', function(err) {
    console.log('Write complete. Reading...');
    fs.readFile('someFile.txt', function(err, data) {
    console.log('Read:\n', data.toString());
    });
    });
    });
    });

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 6

</div>

</div>

<div class="row">

<div class="large-6 columns">

In your command line, `<kbd>tessel run microsd.js</kbd>`  
 Write to and read from your SD card!  

**Bonus:** Change the code to write a text file to the SD card.  

To see what else you can do with the microSD module, see the module docs [here](https://github.com/tessel/sdcard).

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/microsd.gif)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 7

</div>

</div>

<div class="row">

<div class="large-12 columns">

What else can you do with a microSD module? Try a [community-created project.](http://tessel.io/projects)

</div>

</div>

<div class="row">

<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [microSD forums](http://forums.tessel.io/category/microsd).

</div>

</div>

</div>

</div>
