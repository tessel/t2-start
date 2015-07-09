{::options parse_block_html="true" /}

<div class="row">

<div class="large-12 columns fre-container"><span>![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/servo.png)</span>

## <span style="padding-left:10px;">Servo</span>

<span style="padding-left:20px;">[_View Source_](https://github.com/tessel/servo-pca9685)</span></div>

</div>

<div id="servo" class="row">

<div class="large-12 columns">

<div class="row">

<div class="large-12 columns">

Step 1

</div>

</div>

<div class="row">

<div class="large-12 columns">

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir servo</kbd>` into your command line, then change directory into that folder: `<kbd>cd servo</kbd>`

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 2

</div>

<div class="large-5 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/servo_servo.jpeg)</div>

<div class="large-6 columns right">

<div>Plug servo into port "1" on the module as shown.  

*   the brown wire (ground) goes to `-`
*   the red wire (power) goes to `+`
*   the yellow wire (signal) goes to `S`

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 3

</div>

</div>

<div class="row">

<div class="large-6 columns">

Plug 5V adapter into the barrel jack on the servo module, then plug into wall power.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_special/servo_power.png)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 4

</div>

</div>

<div class="row">

<div class="large-6 columns">

Plug the servo module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/servo.jpeg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 5

</div>

</div>

<div class="row">

<div class="large-6 columns">

Install by typing `<kbd>npm install servo-pca9685</kbd>` into the command line.

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/servo.jpg)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 6

</div>

</div>

<div class="row">

<div class="large-12 columns left">

Save this code in a text file called `servo.js`:

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

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 7

</div>

</div>

<div class="row">

<div class="large-6 columns">

In your command line, `<kbd>tessel run servo.js</kbd>`  
 Watch your servo move!  

**Bonus:** Make the servo turn all the way to position 1 in one fell swoop, and then back to position 0.  

To see what else you can do with the servo module, see the module docs [here](https://github.com/tessel/servo-pca9685).

</div>

<div class="large-6 columns">

<div class="row">

<div class="large-12 columns">![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/servo.gif)</div>

</div>

</div>

</div>

<div class="row">

<div class="large-12 columns">

Step 8

</div>

</div>

<div class="row">

<div class="large-12 columns">

What else can you do with a servo module? Try a [community-created project.](http://tessel.io/projects)

</div>

</div>

<div class="row">

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rc-sumobot/embed" width="360"></iframe></div>

<div class="large-6 columns left"><iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/jcoppieters/tessel-rater/embed" width="360"></iframe></div>

</div>

<div class="row">

<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [servo forums](http://forums.tessel.io/category/servo).

</div>

</div>

</div>

</div>
