{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/camera.png"> Camera

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/camera-vc0706)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir camera` into your command line, then change directory into that folder: `cd camera`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the camera module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/camera.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install camera-vc0706` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/camera.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `camera.js`:

{% highlight js %}
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
{% endhighlight %}

### Step 5

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run camera.js --upload-dir ./` The flag <span class="inlineCode">--upload-dir</span> lets you specify where to save the image. Uploading to <span class="inlineCode">.</span> saves the image in the current directory. Otherwise set <span class="inlineCode">process.env.TESSEL_UPLOAD_DIR</span> to run without the flag.  

Take pictures!  

**Bonus:** Change the code to take an image with a different resolution. (Hint: you might have to check the documentation.)  

To see what else you can do with the camera module, see the module docs [here](https://github.com/tessel/camera-vc0706).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/camera.gif)

</div>
</div>

### Step 6

What else can you do with a camera module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/spbreed/tezure/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/motion-activated-camera/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [camera forums](http://forums.tessel.io/category/camera).
