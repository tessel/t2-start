{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">
# Making Tessel An Access Point
</div>
<div class="small-12 columns">

A typical WiFi setup consists of a couple of devices: a modem, which is connected by wire to the internet, and a wireless access point (also called a WAP or router), wired to the modem, which directs requests and responses between every device on the network.

As explained in [wifi tutorial](/wifi.html), Tessel 2 can easily connect to wifi networks using the command line tool. If your computer is connected to the same WAP as the Tessel, then the two devices can talk to each other. This is how we push code to Tessel over LAN (local area network).

The connection setup looks about like this:

</div>
<div class="small-12 text-center columns">
![router](./images/router.png)
</div>
<div class="small-12 columns">
This is fine and dandy if we want to use Tessel in a place where there's a modem and WAP already set up, but what happens when that's not possible?

We can't access the Internet without a modem, but we can create a LAN connection between devices by turning Tessel 2 into a WAP. Devices on the network can all talk to each other, like this:

</div>
<div class="small-12 text-center columns">
![router](./images/Tessel-AP.png)
</div>
<div class="small-12 columns">
This tutorial shows you to turn Tessel into a wireless access point, thus creating your own local network.
</div>
</div>

<div class="row">
<div class="large-12 columns">

<hr>

In the terminal, run the following command:

`t2 ap -n MyTessel`

</div>

<div class="small-12 large-6 columns">
This will make an open, or password-less, wifi network called MyTessel. 

Open the wifi setting of your computer, or a separate device like a smartphone or tablet, and scan for new devices to see and connect to this new network.  
</div>

<div class="small-12 large-6 columns">
![access point preview](./images/ap-preview.gif)
</div>

<div class="small-12 columns">
**Bonus:** Create an network that requires a password.

For info about making a secure network, take a look at [the cli docs](https://tessel.io/docs/cli#usage).

**Extra Bonus:** Check out the [webserver tutorial](/webserver.html) to learn about serving a web app from Tessel.
</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="wifi.html" class="bottomButton button">Prev: Wifi</a>
</div>

<div class="large-6 columns right">
  <a href="blinky.html" class= "bottomButton right button">Next: Blinky</a>
</div>
</div>
