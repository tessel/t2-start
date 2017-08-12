{::options parse_block_html="true" /}

<div class="row">
<div class="large-4 columns right">
![](http://i.imgur.com/jDRIX06.jpg)
</div>

<div class="large-8 columns">
# Hello, (Physical) World!

Blinking some lights is the "Hello World" of hardware. Let's make those LEDs built into Tessel 2 dance for us.

In your command line, make a folder for your Tessel code, then initialize a Tessel project in that folder by running each of the following commands in the terminal:

`mkdir tessel-code`

`cd tessel-code`

`t2 init --lang=rust`

Those three steps are:

1. Make a folder called "tessel-code"
2. Enter your new "tessel-code" folder
3. Initialize a Tessel project using the language Rust

Great! Now you're set up to run code on Tessel. Your "tessel-code" folder contains:

* a "Cargo.toml" with some metadata Rust uses for your project
* a folder called "src" to hold your Rust code
* an entrypoint file called "main.rs" in the src folder

</div>
</div>
<div class="row">
<div class="large-12 columns">

You can open and look at any of the files to learn more about them. But right now we're most interested in main.rs.

<hr>

"main.rs" contains the code to make the blue and green LEDs blink. Let's take a look:

{% highlight rust %}
//! A blinky example for Tessel

// Import the tessel library
extern crate rust_tessel;
// Import the Tessel API
use rust_tessel::Tessel;
// Import sleep from the standard lib
use std::thread::sleep;
// Import durations from the standard lib
use std::time::Duration;

fn main() {
    // Create a new Tessel
    let mut tessel = Tessel::new();

    // Turn on one of the LEDs
    tessel.led[2].on().unwrap();

    println!("I'm blinking! (Press CTRL + C to stop)");

    // Loop forever
    loop {
        // Toggle each LED
        tessel.led[2].toggle().unwrap();
        tessel.led[3].toggle().unwrap();
        // Re-execute the loop after sleeping for 100ms
        sleep(Duration::from_millis(100));
    }
}
{% endhighlight %}

</div>
</div>
<div class="row">
<div class="large-9 columns">

When we work with Rust, commands are executed through the Cargo file. In your command line, enter

`t2 run Cargo.toml`

to run your code in Tessel's RAM.

**Look at your Tessel!** The blue and green LEDs on your Tessel's LED panel should blink back and forth.

</div>
<div class="large-3 columns">

![](http://i.imgur.com/kZIZNcL.gif)

</div>
</div>
<div class="row">
<div class="large-12 columns">
<hr>

**Bonus:** mess with the code to make the LEDs blink in sync.

**Extra bonus:** Want to untether your computer from your Tessel? Run:

`t2 push Cargo.toml`

Now plug Tessel in to USB power, just like plugging in a phone or an original Tessel.

<div class="row">
<div class="large-4 columns">

Wait for it to boot up, then... lights will blink!

Tired of the blinking lights? `t2 erase` will clear the saved code.

If you're connected over LAN, you can run any of these commands remotely, without plugging Tessel back into your computer.

Learn more `t2` commands by running `t2 -h` or looking at the [T2 CLI docs](https://tessel.io/docs/cli).

</div>
<div class="large-4 columns">

![](http://i.imgur.com/2JXAPKt.jpg)

</div>
<div class="large-4 columns">

![](http://i.imgur.com/kFHhIim.jpg)

</div>
</div>

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="wifi.html" class="bottomButton button">Prev: Wifi</a>
</div>

<div class="large-6 columns right">
  <a href="modules.html" class= "bottomButton right button">Next: Add Modules</a>
</div>
</div>
