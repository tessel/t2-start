{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/ambient.png"> Ambient

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/ambient-attx4)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir ambient` into your command line, then change directory into that folder: `cd ambient`

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the ambient module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/RLmPhfw.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install ambient-attx4` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/ambient.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

Save this code in a text file called `ambient.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This ambient module example console.logs
ambient light and sound levels and whenever a
specified light or sound level trigger is met.
*********************************************/

var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
  // Get points of light and sound data.
  setInterval(function () {
    ambient.getLightLevel( function(err, ldata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sdata) {
        if (err) throw err;
        console.log("Light level:", ldata.toFixed(8), " ", "Sound Level:", sdata.toFixed(8));
      });
    })
  }, 500); // The readings will happen every .5 seconds unless the trigger is hit

  ambient.setLightTrigger(0.5);

  // Set a light level trigger
  // The trigger is a float between 0 and 1
  ambient.on('light-trigger', function(data) {
    console.log("Our light trigger was hit:", data);

    // Clear the trigger so it stops firing
    ambient.clearLightTrigger();

    // After 1.5 seconds reset light trigger
    setTimeout(function () {
      ambient.setLightTrigger(0.5);
    }, 1500);
  });

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.1);

  ambient.on('sound-trigger', function(data) {
    console.log("Something happened with sound: ", data);

    // Clear it
    ambient.clearSoundTrigger();

    //After 1.5 seconds reset sound trigger
    setTimeout(function () {
      ambient.setSoundTrigger(0.1);
    }, 1500);
  });
});

ambient.on('error', function (err) {
  console.log(err);
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

In your command line, `tessel run ambient.js`  
 Watch light and sound values appear in your terminal! Try clapping or shining a flashlight at it.  

**Bonus:** Change the code so the sound trigger activates with just a whisper.  

To see what else you can do with the ambient module, see the module docs [here](https://github.com/tessel/ambient-attx4).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/ambient.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with an ambient module? Try a [community-created project.](http://tessel.io/projects)

</div>
</div>

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/audio-visualizer/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/tessel-clap-switch/embed" width="360"></iframe>
</div>
</div>

<div class="row">
<div class="large-12 columns">

What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [ambient forums](http://forums.tessel.io/category/ambient).

</div>
</div>
