{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/technical-io/modules/usb.png"> Camera

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/tessel-av)

### Step 1

Make a directory inside your "tessel-code" folder called "camera", change directory into that folder, and initialize a tessel project:

`mkdir camera; cd camera; t2 init`

### Step 2
</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug Tessel into your computer via USB, then plug the camera module into either of Tessel's USB ports. You will also need a [UVC compatible USB camera](https://tessel.io/modules#tessel-av).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/uifn1p7.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

Install by typing `npm install tessel-av` into the command line.

### Step 4

Rename "index.js" to "camera.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Create a server that responds to every request by taking a picture and piping it directly to the browser.
*********************************************/

var av = require('tessel-av');
var os = require('os');
var http = require('http');
var port = 8080;
var camera = new av.Camera();

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpg' });

  camera.capture().pipe(response);

}).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));

{% endhighlight %}

Save the file.

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

In your command line, `t2 run camera.js`

Hooray! You should see the following:

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your terminal:

![](http://i.imgur.com/8JdxCON.gif)

</div>
<div class="large-6 columns">

In your browser:

![](http://i.imgur.com/Yjvr1Uc.png)

</div>
</div>

<div class="row">
<div class="large-12 columns">

> Note: `bishop` is just the name of my Tessel 2 board, your Tessel's URL will include whatever you've named your board!

**Bonus:** Try connecting a button to your Tessel 2 and use it as a shutter. Hint: it may help to look for the NPM module `tessel-gpio-button`.

**Extra bonus:** Use an USB storage drive to store many photos. Hint: check out the "storage" module tutorial.

To see what else you can do with the USB camera module, read the [tessel-av](https://github.com/tessel-av) documentation.

### Step 6

What else can you do with a camera module? Get inspired by a [community-created project.](http://tessel.io/projects)


What are you making? [Share your invention!](//tessel.io/projects)

If you run into any issues you can check out the [camera forums](https://forums.tessel.io/c/usb-modules/camera).

</div>
</div>
