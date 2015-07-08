{::options parse_block_html="true" /}

<div class="large-4 columns right"><div class="row">
![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/tessel-plugged.jpg)
</div></div>

<div class="large-8 columns"><div class="row">

# Hello, (Physical) World!

In your command line, make a folder for your Tessel code, change directory into that folder, and then initialize [npm](https://www.npmjs.org/) in that folder:

{% highlight sh %}
mkdir tessel-code
cd tessel-code
npm init -y
{% endhighlight %}

You can press enter at each option within npm init to accept npm's defaults.

Great! Now you're set up to run code on Tessel.

</div></div>

<hr>

<div class="large-12 columns"><div class="row">

Blinking some lights is the "Hello World" of hardware.

Make a new file in your "tessel-code" directory called "blinky.js", and copy/paste this code into it:

{% highlight javascript %}
// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function () {
console.log("I'm blinking! (Press CTRL + C to stop)");
  // Toggle the led states
  led1.toggle();
  led2.toggle();
}, 100);
{% endhighlight %}

In your command line, enter

{% highlight sh %}
tessel run blinky.js
{% endhighlight %}

to run your code in Tessel's RAM.

**Look at your Tessel!** The blue and green LEDs on your Tessel's LED panel should blink back and forth.

**Bonus:** mess with the code to make the LEDs blink in sync.

</div>
</div>
