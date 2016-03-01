{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/technical-io/modules/usb.png"> Audio

[<i class="fa fa-github">View source on Github</i>](https://github.com/tessel/tessel-av)

### Step 1

Make a directory inside your "tessel-code" folder called "audio", change directory into that folder, and initialize a tessel project:

`mkdir audio; cd audio; t2 init`

Download [this mp3](https://dl.dropboxusercontent.com/u/3531958/yoda-mudhole.mp3) into the "audio" directory, this will be the audio file we manipulate. 

In order to include static, non-require-dependency resources in your deployment, you'll need to explicitly inform Tessel's CLI. To do this, create a `.tesselinclude` file in your `audio` directory. In that file, type the name of the static asset that should be deployed with the project. For this project, your `.tesselinclude` will have at least the following in it: 

`yoda-mudhole.mp3`

(Learn more about Tessel CLI deployment [tips and tricks in the docs](https://tessel.io/docs/cli#usage))

### Step 2
</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug Tessel into your computer via USB, then plug the audio module into either of Tessel's USB ports. You will also need some kind of speaker output, headphones or [desk speakers](http://www.amazon.com/AmazonBasics-Powered-Computer-Speakers-A100/dp/B00GHY5F3K/) will do the trick.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/zbRKAVx.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

Install by typing `npm install tessel-av` into the command line.

### Step 4

Rename "index.js" to "audio.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning. 
*********************************************/

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'yoda-mudhole.mp3');
var sound = new av.Speaker(mp3);

sound.play();

sound.on('end', function(seconds) {
  sound.play();
});


{% endhighlight %}

Save the file.

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your command line, `t2 run audio.js`

Hooray! You should hear the mp3 playing in a loop!

**Bonus:** EXTRA CHALLENGE FOR AUDIO

To see what else you can do with the USB audio module, read the [tessel-av](https://github.com/tessel/tessel-av) documentation.

- Try connecting buttons to your Tessel 2 and use them to control playback. 
- Load many mp3s onto a USB storage drive and playback from that source. 

</div>
<div class="large-6 columns">


</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with an audio module? What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [module forums](http://forums.tessel.io/c/modules).

</div>
</div>
