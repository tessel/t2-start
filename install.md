{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Install Tessel 2

</div>
</div>
<div class="row">
<div class="large-10 columns">

These are instructions for Tessel 2. Start [here for Tessel 1](//tessel.io/start).

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

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it using nvm by running the following commands in your terminal:

`curl https://raw.githubusercontent.com/creationix/nvm/v0.23.2/install.sh | bash`

`source ~/.bashrc`

`nvm install 0.12.7`

*Tessel's command line currently does not work on Node 4.x or higher; if you run `node --version` and see 4.something, please follow the instructions above. [[Track issue]](https://github.com/tessel/t2-start/issues/49)*

Once Node.js is installed, run this installation script from your terminal:

<big>`npm install -g t2-cli`</big>

*Note: If you get the common npm [EACCES error](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo), correct it by running `sudo chown -R $(whoami) ~/.npm` and then running `npm install -g t2-cli` again.*
</div>

<div id="tab-linux" class="content">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it from the [official website](http://nodejs.org) or following [these instructions for your package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

If you are running Ubuntu _13.10 or later_, you can run this:

`apt-get install nodejs nodejs-legacy`

*Tessel's command line currently does not work on Node 4.x or higher; please install an earlier version. [[Track issue]](https://github.com/tessel/t2-start/issues/49)*

Once Node is installed, run this in your terminal:

`apt-get install libusb-1.0-0-dev libudev-dev`
`npm install -g t2-cli`

</div>

<div id="tab-windows" class="content">

On Windows, Tessel drivers will install automatically when you plug in.

On Windows 7, you may receive the notification "Device driver software was not successfully installed". If you do, click on the notification, click the "Change settings..." button, and then select "Install driver software from Windows Update if it is not found on my computer." Save changes and re-try.

Next, install [Node.JS](http://nodejs.org). You need this to interact with Tessel from the command line.

*Tessel's command line currently does not work on Node 4.x or higher; if you run `node --version` and see 4.something, please [install an earlier version](https://github.com/coreybutler/nvm-windows). [[Track issue]](https://github.com/tessel/t2-start/issues/49)*

After installing the Tessel drivers and Node.js, run this in cmd.exe:

<big>`npm install -g t2-cli`</big>

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
	Tessel-AF768F095	USB
{% endhighlight %}

Yay, you found it! At this point, your Tessel is operational and in communication with your computer.

<hr>

**Bonus:** give your Tessel a name, like "Frank" or "Bulbasaur":

`t2 rename <name>`

If you run `t2 list` again, you'll see your Tessel has changed its name:

{% highlight sh %}
INFO Searching for nearby Tessels...
	Bulbasaur	USB
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
