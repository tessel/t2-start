{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/climate.png"> Climate

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/climate-si7020)

### Step 1

**Note: Temperature and humidity readings can be skewed by the operating temperature of the Tessel. Distancing the the climate module from the Tessel via [wires](https://www.adafruit.com/products/1950?gclid=CjwKEAiA_s2lBRCe1YPXxtSe-DcSJACCIh3LlrKOKB5hJLKIxjIwgeJPYVW_or_As5UMK6fqwk-YERoCxGXw_wcB) is recommended for accurate readings.**

Make a directory inside your "tessel-code" folder: enter `mkdir climate` into your command line, then change directory into that folder: `cd climate`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the climate module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/climate.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install climate-si7020` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/climate-si7020.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `climate.js`:

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

### Step 5

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run climate.js` See the temperature and humidity change if you cup your hands and breathe on the module.  

**Bonus:** Change the code so the temperature reads out in celsius rather than Fahrenheit.  

To see what else you can do with the climate module, see the module docs [here](https://github.com/tessel/climate-si7020).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/climate.gif)

</div>
</div>

### Step 6

What else can you do with a climate module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ehannum/tessel-greenhouse/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/peterchaivre/enviroreport/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [climate forums](http://forums.tessel.io/category/climate).
