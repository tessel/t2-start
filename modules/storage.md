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

You don't need to install a library to use a USB storage module. We will use the [fs](https://nodejs.org/api/fs.html) (filesystem) library that's built into Node.js to interact with USB mass storage devices.

In the folder where you ran `t2 init`, rename "index.js" to "storage.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Write some text to a file on a USB mass storage
device, then read it back.
*********************************************/

// Import the fs library
var fs = require('fs');
var path = require('path');
var mountPoint = '/mnt/sda1'; // The first flash drive you plug in will be mounted here, the second will be at '/mnt/sdb1'
var filepath = path.join(mountPoint, 'myFile.txt');

var textToWrite = 'Hello Tessel!';

// Write the text to a file on the flash drive
fs.writeFile(filepath, textToWrite, function () {
  console.log('Wrote', textToWrite, 'to', filepath, 'on USB mass storage device.');
});

// Read the text we wrote from the file
fs.readFile(filepath, function (err, data) {
  console.log('Read', data.toString(), 'from USB mass storage device.');
});
{% endhighlight %}

Save the file.

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your command line, `t2 run storage.js`

Now you can create, write to, read from, and otherwise manipulate files on USB storage devices!

**Bonus:** Try writing some longer text (or output from a different module) by using streams. Hint: look up the fs function `createWriteStream`.

To see what else you can do with a USB storage module, read the [fs](https://nodejs.org/api/fs.html) documentation.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/wKksk4X.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

What else can you do with a USB mass storage device? Get inspired by a [community-created project.](http://tessel.io/projects)

What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [module forums](http://forums.tessel.io/c/modules).

</div>
</div>
