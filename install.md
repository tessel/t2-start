{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Install Tessel

*New to the command line? [Take a step back and learn the basics.](cmd.html)*

Select the operating system you are working on.

<dl id="install-tabs" data-tab="" class="tabs contained three-up">
| [OSX](#tab-osx) || [Linux](#tab-linux) || [Windows](#tab-windows) |
</dl>

<div id="install-content" class="tabs-content">

<div id="tab-osx" class="content active">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it from the [official website](http://nodejs.org/), or if you have [brew](http://brew.sh/) installed: `brew install node`

Once Node.js is installed, run this installation script from your terminal:

<big>`npm install -g t2-cli`</big>

*Note: If you get the common npm [EACCES error](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo), correct it by running `sudo chown -R $(whoami) ~/.npm` and then running `npm install -g t2-cli` again.*
</div>

<div id="tab-linux" class="content">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it from the [official website](http://nodejs.org) or following [these instructions for your package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

If you are running Ubuntu _13.10 or later_, you can run this:

`apt-get install nodejs nodejs-legacy`

Once Node is installed, run this in your terminal:

{% highlight sh %}
apt-get install libusb-1.0-0-dev libudev-dev
npm install -g t2-cli
{% endhighlight %}

</div>

<div id="tab-windows" class="content">

On Windows, Tessel drivers will install automatically when you plug in.

On Windows 7, you may receive the notification "Device driver software was not successfully installed". If you do, click on the notification, click the "Change settings..." button, and then select "Install driver software from Windows Update if it is not found on my computer." Save changes and re-try.

Next, install [Node.JS](http://nodejs.org). You need this to interact with Tessel from the command line.

After installing the Tessel drivers and Node.js, run this in cmd.exe:

<big>`npm install -g t2-cli`</big>

</div>
</div>

### Update Tessel's Firmware

Plug in your Tessel over USB (use Tessel's microUSB port, between the USB ports and the module ports).

**Note: you must wait for the Tessel to finish booting up (~30s) before you can run commands. Look for the tiny green LED on the Ethernet port to turn on to signal a full bootup.**

*This bootup issue is because Tessel 2 is still in development; track the issue [here](https://github.com/tessel/t2-cli/issues/346).*

Tessel's update process works best over Wifi, so let's get connected:

<div class="row">
<div class="large-6 columns">

Enter in your command line

`t2 wifi -n <network-name> -p <password>`

The yellow Wifi LED should start blinking within a few seconds.

You also need to authorize your computer to write to this Tessel:

`t2 provision`

</div>
<div class="large-6 columns">

![](http://i.imgur.com/91pkDCQ.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

Great! now that we're connected and authorized, let's check for updates. Run:

`t2 update`

Tessel will check for new firmware versions, then download and apply them.

</div>
</div>

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="cmd.html" class="bottomButton button">Prev: Command line</a>
</div>

<div class="large-6 columns right">
  <a href="blinky.html" class= "bottomButton right button">Next: Blink lights</a>
</div>
</div>
