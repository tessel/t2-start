{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/YwkoH6L.png"> Climate

[<i class="fa fa-github"></i> View source on Github](https://github.com/tessel/climate-si7020)

### Step 1

**Note: Temperature and humidity readings can be skewed by the operating temperature of the Tessel. Distancing the the climate module from the Tessel via [wires](https://www.adafruit.com/products/1954) is recommended for accurate readings.**

Make a directory inside your "tessel-code" folder called "climate", change directory into that folder, and initialize a tessel project:

`mkdir climate; cd climate; t2 init`

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the climate module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/mMAJoEZ.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install climate-si7020` into the command line.

</div>
<div class="large-6 columns">

![](//i.imgur.com/QS1OgRo.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

Rename "index.js" to "climate.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic climate example logs a stream
of temperature and humidity to the console.
*********************************************/

var tessel = require('tessel');
var climatelib = require('climate-si7020');

var climate = climatelib.use(tessel.port['A']);

climate.on('ready', function () {
  console.log('Connected to climate module');

  // Loop forever
  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      climate.readHumidity(function (err, humid) {
      console.log('Degrees:', temp.toFixed(4) + 'F', 'Humidity:', humid.toFixed(4) + '%RH');
      setTimeout(loop, 300);
      });
    });
  });
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
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

In your command line, `t2 run climate.js` See the temperature and humidity change if you cup your hands and breathe on the module.  

**Bonus:** Change the code so the temperature reads out in celsius rather than Fahrenheit.  

To see what else you can do with the climate module, see the module docs [here](https://github.com/tessel/climate-si7020).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/CSMwFdM.gif)

</div>
</div>


<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with a climate module? Try a [community-created project.](http://tessel.io/projects)

</div>
</div>

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ehannum/tessel-greenhouse/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/peterchaivre/enviroreport/embed" width="360"></iframe>
</div>
</div>

<div class="row">
<div class="large-12 columns">

What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [climate forums](https://forums.tessel.io/c/modules/climate).

</div>
</div>
