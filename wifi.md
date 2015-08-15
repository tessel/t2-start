{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Connect Tessel to Wifi

Let's get online! Tessel has Wifi connectivity built into the board, so you can use online APIs right away.

*Note: This step is optional. If you don't have internet right now, just go ahead to the next step: [add modules](modules.html)*

</div></div>
<div class="row">
<div class="large-6 columns">

**To connect to a new network,** enter in your command line (without brackets)

`t2 wifi -n [network name] -p [password]`

The yellow Wifi LED should start blinking within a few seconds.

Tessel 2's Wifi LED blinks with every packet it receives.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/wifi.JPG)

</div>
</div>

<hr>

<div class="row">
<div class="large-12 columns">
Tessel saves network credentials and tries to reconnect automatically on startup.

To check whether you're connected, run

`t2 wifi -l`

This lists available wifi networks and will also show your connection status.

<hr>

<div class="row">
<div class="large-12 columns">

On Tessel 2, you can run and push your code over Wifi, not just USB. In fact, it's actually faster than over USB! Let's get that set up. Run:

`t2 provision`

This authorizes your computer to push code to the connected Tessel.

Now, run:

`t2 list`

You should see a Tessel pop up with LAN connection, something like:

{% highlight sh %}
INFO Searching for nearby Tessels...
	Tessel-Bulbasaur	LAN
{% endhighlight %}

</div>
<div class="large-4 columns">

Want to try it out? Power Tessel by plugging it into something other than your laptop:

</div>
<div class="large-4 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/doc+pictures/tessel-battery.jpg)

</div>
<div class="large-4 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/doc+pictures/tessel-plug.jpg)

</div>

<div class="large-12 columns">
Now navigate to wherever you saved your blinky code.

`t2 run blinky.js`

As usual. Now watch your Tessel blink from across the room!
</div>
