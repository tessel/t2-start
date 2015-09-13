{::options parse_block_html="true" /}

<div class="row">
<div class="large-4 columns right">
![](http://i.imgur.com/jDRIX06.jpg)
</div>

<div class="large-8 columns">
# Hello, (Physical) World!

Blinking some lights is the "Hello World" of hardware. Let's make those LEDs built into Tessel 2 dance for us.

In your command line, make a folder for your Tessel code, then initialize a Tessel project in that folder.

{% highlight sh %}
mkdir tessel-code
cd tessel-code
t2 init
{% endhighlight %}

Great! Now you're set up to run code on Tessel. Your `tessel-code` folder now contains a `package.json` with some metadata Node uses for your project, and a file called `index.js`.

`index.js` contains the code to make the blue and green LEDs blink. Let's take a look:

{% highlight javascript %}
// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy (1) initial state sets the pin high
// Falsy (0) sets it low.
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function () {
console.log("I'm blinking! (Press CTRL + C to stop)");
  // Toggle the led states
  led1.toggle();
  led2.toggle();
}, 100);
// 100 = 100 milliseconds. So: repeat everything in the setInterval every 100ms
{% endhighlight %}

In your command line, enter

{% highlight sh %}
t2 run blinky.js
{% endhighlight %}

to run your code in Tessel's RAM.

**Look at your Tessel!** The blue and green LEDs on your Tessel's LED panel should blink back and forth.

**Bonus:** mess with the code to make the LEDs blink in sync.
</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="index.html" class="bottomButton button">Prev: Install</a>
</div>

<div class="large-6 columns right">
  <a href="wifi.html" class= "bottomButton right button">Next: Wifi</a>
</div>
</div>
