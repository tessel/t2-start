{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/technical-io/modules/usb.png"> Storage (Flash Drive)

[<i class="fa fa-github"> View source on Github</i>](https://github.com/nodejs/node/blob/master/lib/fs.js)

### Step 1

Make a directory inside your "tessel-code" folder called "storage", change directory into that folder, and initialize a tessel project:

`mkdir storage; cd storage; t2 init`

### Step 2
</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug Tessel into your computer via USB, then plug a USB mass storage device (flash drive) into either of Tessel's USB ports.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/uifn1p7.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

Make sure your Tessel is connected to a wifi network as shown on the [wifi page](/wifi.html). Then gain root access to the Tessel shell:

`t2 root`

This command gives you direct access to the Linux system running on Tessel. We need this in order to power up the USB dongle. Run this command:

`hciconfig hci0 up`

Then exit the root shell:

`exit`

### Step 4

You don't need to install a library to use a USB storage module. We will use the [fs](https://nodejs.org/api/fs.html) (filesystem) library that's built into Node.js to interact USB mass storage devices.

In the folder where you ran `t2 init`, rename "index.js" to "storage.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
TODO what do we want in the example
*********************************************/
// Import the fs library
var fs = require('fs');
// USB modules don't have to be explicitly connected

// Copy a file, access a file, make example..

{% endhighlight %}

Save the file.

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your command line, `t2 run storage.js`

Hooray, you've moved a file around!

**Bonus:** Try saving some data from a sensor module into a file.

To see what else you can do with a USB storage module, read the [fs](https://nodejs.org/api/fs.html) documentation.

</div>
<div class="large-6 columns">

![](storage gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 7

What else can you do with a USB mass storage device? Get inspired by a [community-created project.](http://tessel.io/projects)

What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [module forums](http://forums.tessel.io/c/modules).

</div>
</div>
