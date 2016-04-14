{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/hqZ399I.png"> Ambient

[<i class="fa fa-github"></i> View source on Github](https://github.com/tessel/ambient-attx4)

### Step 1

Make a directory inside your "tessel-code" folder called "ambient", change directory into that folder, and initialize a tessel project:

`mkdir ambient; cd ambient; t2 init`

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

![](//i.imgur.com/WWtJyIJ.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

Rename "index.js" to "ambient.js" and replace the file's contents with the following:

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
  setInterval( function () {
    ambient.getLightLevel( function(err, lightdata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sounddata) {
        if (err) throw err;
        console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
      });
    });
  }, 500); // The readings will happen every .5 seconds
});

ambient.on('error', function (err) {
  console.log(err);
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

In your command line, `t2 run ambient.js`  
 Watch light and sound values appear in your terminal! Try clapping or shining a flashlight at it.  

**Bonus:** Test out setting triggers with light and sound (hint: there is an example in [the ambient module's examples folder](https://github.com/tessel/ambient-attx4/tree/master/examples)).  

To see what else you can do with the ambient module, see the module docs [here](https://github.com/tessel/ambient-attx4).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/SuvbD9O.gif)

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

If you run into any issues you can check out the [ambient forums](https://forums.tessel.io/c/modules/ambient).

</div>
</div>
