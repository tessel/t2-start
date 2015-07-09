{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/audio.png"> Audio

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/audio-vs1053b)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir audio` into your command line, then change directory into that folder: `cd audio`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug in headphones or a speaker to the Headphones/Line out jack on your module. (You can also plug in a microphone to Line in, or just use the Mic built into the module.)

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/audio-headphones.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Plug the audio module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/audio.jpeg)

</div>
</div>

### Step 4

<div class="row">
<div class="large-6 columns">

Install by typing `npm install audio-vs1053b` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/audio.jpg)

</div>
</div>

### Step 5

<div class="row">
<div class="large-12 columns left">

Save this code in a text file called `audio.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This Audio Module demo will record audio through
the mic while the CONFIG button is held down.
When the CONFIG button is released, the recorded
audio will be played back through the audio
out jack.
*********************************************/

var tessel = require('tessel');
var audio = require('audio-vs1053b').use(tessel.port['A']);

var chunks = [];

// When we get data, push it into our array
audio.on('data', function(data) {
  chunks.push(data);
});

// Wait for the module to connect
audio.on('ready', function() {
  console.log('Hold the config button to record...');
  // When the config button is pressed, start recording
  tessel.button.once('press', startRecording);
});

function startRecording() {
  // Tell the audio module to start recording
  audio.startRecording('voice', function() {
    console.log('Recording...');
    // Once the button is released, stop recording
    tessel.button.once('release', stopRecording);
  });
}

function stopRecording() {
  // Tell the audio module to stop recording
  console.log('stopping the recording...');
  audio.stopRecording(function() {
    console.log('Playing it back...');
    // Concat the data and play it
    audio.play(Buffer.concat(chunks), function(err) {
      // When we're done playing, clear recordings
      chunks = [];
      console.log('Hold the config button to record...');
      // Wait for a button press again
      tessel.button.once('press', startRecording);
    });
  });
}

// If there is an error, report it
audio.on('error', function(err) {
  throw err;
});
{% endhighlight %}

### Step 6

<div class="row">
<div class="large-6 columns">

Locate the config button on Tessel. You'll be holding down this button to record sound.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/config_button.jpg)

</div>
</div>

### Step 7

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run audio.js` When prompted, hold down the config button and speak loudly at the Audio module. When you release the button the recording will be played back to you.  

**Bonus:** Change the code so that recording stops automatically after 5 seconds.  

To see what else you can do with the audio module, see the module docs [here](https://github.com/tessel/audio-vs1053b).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/audio.gif)

</div>
</div>

### Step 8

What else can you do with a audio module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/davidfekke/tessel-halloween/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/driesdroesbeke/tessel-notifications/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [audio forums](http://forums.tessel.io/category/audio).
