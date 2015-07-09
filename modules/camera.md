{::options parse_block_html="true" /}

<div class="row">

<div class="large-12 columns fre-container"><span>![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/camera.png)</span>

## <span style="padding-left:10px;">Camera</span>

<span style="padding-left:20px;">[_View Source_](https://github.com/tessel/camera-vc0706)</span></div>

</div>

<div id="camera" class="row">

<div class="large-12 columns">

<div class="row">

<div class="large-12 columns">

Step 1

</div>

</div>

<div class="row">

<div class="large-12 columns">

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir camera</kbd>` into your command line, then change directory into that folder: `<kbd>cd camera</kbd>`

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 2

</div>

</div>

<div class="row">

<div class="large-6 columns">

Plug the camera module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/camera.jpeg)</div>

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

Install by typing `<kbd>npm install camera-vc0706</kbd>` into the command line.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/camera.jpg)</div>

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

Save this code in a text file called `camera.js`:

    // Any copyright is dedicated to the Public Domain.
    // http://creativecommons.org/publicdomain/zero/1.0/

    /*********************************************
    This camera example takes a picture. If a
    directory is specified with the --upload-dir
    flag, the picture is saved to that directory.
    *********************************************/

    var tessel = require('tessel');
    var camera = require('camera-vc0706').use(tessel.port['A']);

    var notificationLED = tessel.led[3]; // Set up an LED to notify when we're taking a picture

    // Wait for the camera module to say it's ready
    camera.on('ready', function() {
    notificationLED.high();
    // Take the picture
    camera.takePicture(function(err, image) {
    if (err) {
    console.log('error taking image', err);
    } else {
    notificationLED.low();
    // Name the image
    var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
    // Save the image
    console.log('Picture saving as', name, '...');
    process.sendfile(name, image);
    console.log('done.');
    // Turn the camera off to end the script
    camera.disable();
    }
    });
    });

    camera.on('error', function(err) {
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

In your command line, `<kbd>tessel run camera.js --upload-dir ./</kbd>`  
 The flag <span class="inlineCode">--upload-dir</span> lets you specify where to save the image. Uploading to <span class="inlineCode">.</span> saves the image in the current directory. Otherwise set <span class="inlineCode">process.env.TESSEL_UPLOAD_DIR</span> to run without the flag.  

Take pictures!  

**Bonus:** Change the code to take an image with a different resolution. (Hint: you might have to check the documentation.)  

To see what else you can do with the camera module, see the module docs [here](https://github.com/tessel/camera-vc0706).

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/camera.gif)</div>

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

What else can you do with a camera module? Try a [community-created project.](http://tessel.io/projects)

</div>

</div>

<div class="row">

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/spbreed/tezure/embed" width="360"></iframe></div>

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/motion-activated-camera/embed" width="360"></iframe></div>

</div>

<div class="row">

<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [camera forums](http://forums.tessel.io/category/camera).

</div>

</div>

</div>

</div>
