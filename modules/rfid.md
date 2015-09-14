{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/JsHkR2D.png"> RFID

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/rfid-pn532)

### Step 1

Make a directory inside your "tessel-code" folder called "rfid", change directory into that folder, and initialize a tessel project:

`mkdir rfid; cd rfid; t2 init`

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the RFID module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/aYlr7Bd.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install rfid-pn532` into the command line.

</div>
<div class="large-6 columns">

![](//i.imgur.com/JPTWSFj.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

Rename "index.js" to "rfid.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic RFID example listens for an RFID
device to come within range of the module,
then logs its UID to the console.
*********************************************/

var tessel = require('tessel');
var rfidlib = require('rfid-pn532');

var rfid = rfidlib.use(tessel.port['A']);

rfid.on('ready', function (version) {
  console.log('Ready to read RFID card');

  rfid.on('data', function(card) {
    console.log('UID:', card.uid.toString('hex'));
  });
});

rfid.on('error', function (err) {
  console.error(err);
});
{% endhighlight %}

Save the file.

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

</div>
</div>

<div class="row">
<div class="large-6 columns">

In your command line, `t2 run rfid.js` Tap the included RFID card on the reader to get its UID!  

**Bonus:** Change the polling rate of the RFID module so that it only checks for a card once every three seconds. (Hint: you may need to check the docs.)  

To see what else you can do with the RFID module, see the module docs [here](https://github.com/tessel/rfid-pn532).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/6nA6hJy.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 6

What else can you do with a RFID module? Try a [community-created project.](http://tessel.io/projects)

</div>
</div>

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rfid-process-tracker/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/rfid-authorization/embed" width="360"></iframe>
</div>
</div>

<div class="row">
<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [RFID forums](http://forums.tessel.io/category/rfid).

</div>
</div>
