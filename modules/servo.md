{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/servo.png"> Servo

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/servo-pca9685)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir servo` into your command line, then change directory into that folder: `cd servo</kbd>`

### Step 2

<div class="row">
<div class="large-5 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/servo_servo.jpeg)

</div>
<div class="large-6 columns right">

Plug servo into port "1" on the module as shown.  

*   the brown wire (ground) goes to `-`
*   the red wire (power) goes to `+`
*   the yellow wire (signal) goes to `S`

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Plug 5V adapter into the barrel jack on the servo module, then plug into wall power.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/servo_power.png)

</div>
</div>

### Step 4

<div class="row">
<div class="large-6 columns">

Plug the servo module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/oiKY9md.jpg)

</div>
</div>

### Step 5

<div class="row">
<div class="large-6 columns">

Install by typing `npm install servo-pca9685` into the command line.

</div>
<div class="large-6 columns">
<div class="row">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/servo.jpg)

</div>
</div>

### Step 6

Save this code in a text file called `servo.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This servo module demo turns the servo around
1/10 of its full rotation  every 500ms, then
resets it after 10 turns, reading out position
to the console at each movement.
*********************************************/

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);

var servo1 = 1; // We have a servo plugged in at position 1

servo.on('ready', function () {
  var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).

  //  Set the minimum and maximum duty cycle for servo 1.
  //  If the servo doesn't move to its full extent or stalls out
  //  and gets hot, try tuning these values (0.05 and 0.12).
  //  Moving them towards each other = less movement range
  //  Moving them apart = more range, more likely to stall and burn out
  servo.configure(servo1, 0.05, 0.12, function () {
    setInterval(function () {
      console.log('Position (in range 0-1):', position);
      //  Set servo #1 to position pos.
      servo.move(servo1, position);

      // Increment by 10% (~18 deg for a normal servo)
      position += 0.1;
      if (position > 1) {
        position = 0; // Reset servo position
      }
    }, 500); // Every 500 milliseconds
  });
});
{% endhighlight %}

### Step 7

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run servo.js` Watch your servo move!  

**Bonus:** Make the servo turn all the way to position 1 in one fell swoop, and then back to position 0.  

To see what else you can do with the servo module, see the module docs [here](https://github.com/tessel/servo-pca9685).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/servo.gif)

</div>
</div>

### Step 8

What else can you do with a servo module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rc-sumobot/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/jcoppieters/tessel-rater/embed" width="360"></iframe>
</div>
</div>


What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [servo forums](http://forums.tessel.io/category/servo).
