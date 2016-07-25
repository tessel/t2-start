{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Install Tessel 2

</div>
</div>
<div class="row">
<div class="large-10 columns">

These are instructions for Tessel 2. Start [here for Tessel 1](//tessel.io/t1-start).

*New to the command line? [Take a step back and learn the basics.](cmd.html)*

Select the operating system you are working on.

</div>
<div class="large-2 columns">

![](https://raw.githubusercontent.com/rwaldron/tessel-io/master/fritzing/tessel.png)

</div>
</div>
<div class="row">
<div class="large-12 columns">

<dl id="install-tabs" data-tab="" class="tabs contained three-up">
| [OSX](#tab-osx) || [Linux](#tab-linux) || [Windows](#tab-windows) |
</dl>

<div id="install-content" class="tabs-content">

<div id="tab-osx" class="content active">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. Tessel currently supports the Long Term Support (LTS) version of Node.js. You can install it from the [official website](http://nodejs.org/) (select the LTS option), or if you have [brew](http://brew.sh/) installed: `brew install homebrew/versions/node4-lts`

Once Node.js is installed, run this installation script from your terminal:

<big>`npm install -g t2-cli`</big>

*Note: If you get the common npm EACCES error, correct it by [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) and then running `npm install -g t2-cli` again.*
</div>

<div id="tab-linux" class="content">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. Tessel currently supports the Long Term Support (LTS) version of Node.js. You can install it from the [official website](http://nodejs.org/) (select the LTS option), or following [these instructions from Node.js](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions):

`curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

*Note: Piping a script into a shell with root access can be a security issue. Feel free to [read the script contents](https://deb.nodesource.com/setup_4.x) before executing the commands.*

Once Node is installed, install USB dependencies:

`apt-get install libusb-1.0-0-dev libudev-dev`

Then, install the Tessel 2 command line interface:

`npm install -g t2-cli`

*Note: If you get the common npm EACCES error, correct it by [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) and then running `npm install -g t2-cli` again. Using sudo is not recommended. Here is a handy [shell script](https://github.com/glenpike/npm-g_nosudo#npm-g_nosudo) to fix permissions issues.*

Finally, you will need to install Tessel USB rules:

`sudo t2 install-drivers`

*Note: This is a one-time operation that uses `sudo` and you should not use it for any other Tessel commands.*

</div>

<div id="tab-windows" class="content">

On Windows, Tessel drivers should install automatically when you plug this device into your computer..

On Windows 7, you may receive the notification "Device driver software was not successfully installed". If you do, click on the notification, click the "Change settings..." button, and then select "Install driver software from Windows Update if it is not found on my computer." Save changes and retry.

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. Tessel currently supports the Long Term Support (LTS) version of Node.js. You can install it from the [official website](http://nodejs.org/) (select the LTS option).

After installing the Tessel drivers and Node.js, run this in cmd.exe:

<big>`npm install -g t2-cli`</big>

*Note: If you get the common npm EACCES error, correct it by [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) and then running `npm install -g t2-cli` again.*

</div>
</div>

### Find your Tessel

</div>
</div>
<div class="row">
<div class="small-10 columns">

Plug in your Tessel over USB (use Tessel's microUSB port, between the USB ports and the module ports).

*It takes ~30s to finish booting up (track the issue [here](https://github.com/tessel/t2-firmware/issues/117)); lights will flash during this process.*

Run:

`t2 list`

</div>
<div class="small-2 columns">
![](http://i.imgur.com/jDRIX06.jpg)
</div>
</div>
<div class="row">
<div class="large-12 columns">

You should be able to see your Tessel (and any other Tessels connected to the same network as your computer):

{% highlight sh %}
INFO Searching for nearby Tessels...
  USB Tessel-AF768F095
{% endhighlight %}

Yay, you found it! At this point, your Tessel is operational and in communication with your computer.

<hr>

**Bonus:** give your Tessel a name, like "Frank" or "Bulbasaur":

`t2 rename <name>`

If you run `t2 list` again, you'll see your Tessel has changed its name:

{% highlight sh %}
INFO Searching for nearby Tessels...
  USB Bulbasaur
{% endhighlight %}

<div class="greyBar"></div>
</div>
</div>

<div class="row">
<div class="large-6 columns left">
  <a href="cmd.html" class="bottomButton button">Prev: Command line</a>
</div>

<div class="large-6 columns right">
  <a href="wifi.html" class= "bottomButton right button">Next: Get connected</a>
</div>
</div>
