{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/accelerometer.png"> Accelerometer

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/accel-mma84)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir accelerometer` into your command line, then change directory into that folder: `cd accelerometer`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the accelerometer module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/accelerometer.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install accel-mma84` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/accelerometer.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `accelerometer.js`:

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

### Step 5

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run accelerometer.js`  
 Watch x, y, and z values appear in your terminal! Move the Tessel module around to see acceleration along different axes.  

**Bonus:** Change the code to make the accelerometer output information once per second (every 1000ms).  

To see what else you can do with the accelerometer module, see the module docs [here](https://github.com/tessel/accel-mma84).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/accelerometer.gif)

</div>
</div>

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

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [accelerometer forums](http://forums.tessel.io/category/accelerometer).
