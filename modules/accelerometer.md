{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/7qR5OZJ.png"> Accelerometer

[<i class="fa fa-github"></i> View source on Github](https://github.com/tessel/accel-mma84)

### Step 1

Make a directory inside your "tessel-code" folder called "accelerometer", change directory into that folder, and initialize a tessel project:

`mkdir accelerometer; cd accelerometer; t2 init`

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the accelerometer module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/aaQT2wC.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install accel-mma84` into the command line.

</div>
<div class="large-6 columns">

![](//i.imgur.com/7ZJQwQI.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

</div>
</div>

<div class="row">
<div class="large-12 columns">

Rename "index.js" to "accelerometer.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

// Initialize the accelerometer.
accel.on('ready', function () {
// Stream accelerometer data
accel.on('data', function (xyz) {
  console.log('x:', xyz[0].toFixed(2),
    'y:', xyz[1].toFixed(2),
    'z:', xyz[2].toFixed(2));
});

});

accel.on('error', function(err){
  console.log('Error:', err);
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

In your command line, `t2 run accelerometer.js`

Watch x, y, and z values appear in your terminal! Move the Tessel module around to see acceleration along different axes.  

**Bonus:** Change the code to make the accelerometer output information once per second (every 1000ms).  

To see what else you can do with the accelerometer module, see the module docs [here](https://github.com/tessel/accel-mma84).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/KnXf6uL.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with a accelerometer module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/rickyrobinett/a-sleep-tracker-for-your-dog-using-tessel-and-twilio/embed" width="360"></iframe>
</div>
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/svdockum/tesselneobullseyelevel/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [accelerometer forums](https://forums.tessel.io/c/modules/accelerometer).

</div>
</div>
