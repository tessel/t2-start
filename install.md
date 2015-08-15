{::options parse_block_html="true" /}

# Install Tessel

Select the operating system you are working on.

<dl id="install-tabs" data-tab="" class="tabs contained three-up">
<dd class="active">
[OSX](#tab-osx)
</dd>
<dd>
[Linux](#tab-linux)
</dd>
<dd>
[Windows](#tab-pc)
</dd>
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

<div id="tab-pc" class="content">

On Windows, Tessel drivers will install automatically when you plug in.

On Windows 7, you may receive the notification "Device driver software was not successfully installed". If you do, click on the notification, click the "Change settings..." button, and then select "Install driver software from Windows Update if it is not found on my computer." Save changes and re-try.

Next, install [Node.JS](http://nodejs.org). You need this to interact with Tessel from the command line.

After installing the Tessel drivers and Node.js, run this in cmd.exe:

<big>`npm install -g t2-cli`</big>

</div>
</div>

### Update Tessel's Firmware

Take a quick field trip to our current [firmware update instructions](https://github.com/tessel/t2-docs/blob/master/cli.md#updating-tessel-2-on-board-osfirmware) and update Tessel's firmware, then come back to this page.

Once the firmware update is complete, continue to the
next step.
