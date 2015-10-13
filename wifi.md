{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Using Tessel's Wifi

Tessel 2 has robust Wifi built into the board. Let's get connected!

</div></div>

<hr>

<div class="row">
<div class="large-12 columns">

### Connect

</div></div>

<div class="row">
<div class="large-6 columns">

To connect to a new network, enter in your command line (without brackets)

`t2 wifi -n <network-name> -p <password>`

Tessel 2 will save network credentials and attempt to reconnect automatically on startup. Wifi connectivity is indicated by the ob-board Wifi LED, which will blink with every packet it receives.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/91pkDCQ.gif)

</div>
</div>

<hr>

<div class="row">
<div class="large-12 columns">

### Authorize

On Tessel 2, you can run and push your code over Wifi, not just USB. In fact, it's actually faster than over USB! Let's get that set up. Run:

`t2 provision`

This authorizes your computer to push code to the connected Tessel 2.

Now, run:

`t2 list`

Assuming your computer is connected to the same network as your Tessel 2, you should see it listed by name, as a "LAN" connection, something like:

{% highlight sh %}
INFO Searching for nearby Tessels...
	Bulbasaur	LAN
	Bulbasaur	USB
{% endhighlight %}

You might see (as in the example) that your Tessel is connected via both USB and LAN. The connection will automatically prefer LAN, since it's faster, but you can control this by adding `--lan` or `--usb` to any command.

<hr>

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Update

Great! now that we're connected and authorized, let's check for updates. Run:

`t2 update`

This command will check for a new version of the Tessel 2 firmware. If there is an update available, it will be downloaded and installed.

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="index.html" class="bottomButton button">Prev: Install</a>
</div>

<div class="large-6 columns right">
  <a href="blinky.html" class= "bottomButton right button">Next: Blink lights</a>
</div>
</div>
