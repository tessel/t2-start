{::options parse_block_html="true" /}

<div id="anchor" class="large-12 columns fre-container">

# Install Tessel

Select the operating system you are working on.

<dl id="install-tabs" data-tab="" class="tabs contained three-up">
<dd class="active">
[OSX](index.html#tab-osx)
</dd>
<dd>
[Linux](index.html#tab-linux)
</dd>
<dd>
[Windows](index.html#tab-pc)
</dd>
</dl>

<div id="install-content" class="tabs-content">

<div id="tab-osx" class="content active">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it from the [official website](http://nodejs.org/), or if you have [brew](http://brew.sh/) installed: `brew install node`

Once Node.js is installed, run this installation script from your terminal: `npm install -g tessel`. If you get the common error shown [here](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo), correct it by running `sudo chown -R $(whoami) ~/.npm` and then running `npm install -g tessel` again.

If the installation didn't work, please post the error message to our [forums](http://forums.tessel.io/category/installation-issues) and we'll help you out.

If the scripts ran without errors, proceed to [update the firmware](index.html#firmware).

</div>

<div id="tab-linux" class="content">

[Node.js](http://nodejs.org/) is a prerequisite for installing the Tessel command line. You can install it from the [official website](http://nodejs.org) or following [these instructions for your package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

If you are running Ubuntu _13.10 or later_, you can run this:

`apt-get install nodejs nodejs-legacy`

Once Node is installed, run this in your terminal:

```
apt-get install libusb-1.0-0-dev libudev-dev
npm install -g tessel
```

If the installation didn't work, please post the error message to our [forums](http://forums.tessel.io/category/installation-issues) and we'll help you out.

If the scripts ran without errors, proceed to [update the firmware](index.html#firmware).

</div>

<div id="tab-pc" class="content">

On Windows, Tessel drivers will install automatically when you plug in.

On Windows 7, you may receive the notification "Device driver software was not successfully installed". If you do, click on the notification, click the "Change settings..." button, and then select "Install driver software from Windows Update if it is not found on my computer." Save changes and re-try.

Next, install [Node.JS](http://nodejs.org). You need this to interact with Tessel from the command line.

After installing the Tessel drivers and Node.js, run this in cmd.exe:

`npm install -g tessel`

If the installation didn't work, please post the error message to our [forums](http://forums.tessel.io/category/installation-issues) and we'll help you out.

If the scripts ran without errors, proceed to [update the firmware](index.html#firmware).

</div>
</div>

### Update Tessel's Firmware

Plug Tessel into your computer via USB. In the command
line, run `tessel update`.

The lights should blink yellow and red during the
firmware upload.

Once the firmware update is complete, continue to the
next step.

<div class="greyBar"></div>

<div class="large-6 columns left">
<a href="cmd.html" class="bottomButton button">Prev:
Command line</a>
</div>
<div class="large-6 columns right">
<a href="blinky.html" class=
"bottomButton right button">Next: Blink lights</a>
</div>
