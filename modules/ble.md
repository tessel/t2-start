{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/ble.png"> BLE

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/ble-ble113a)

### Step 1

Make a directory inside your "tessel-code" folder: enter `mkdir ble` into your command line, then change directory into that folder: `cd ble`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the BLE module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/ble.jpeg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install ble-ble113a` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/ble.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `ble.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This Bluetooth Low Energy module demo scans
for nearby BLE peripherals. Much more fun if
you have some BLE peripherals around.
*********************************************/

var tessel = require('tessel');
var blelib = require('ble-ble113a');

var ble = blelib.use(tessel.port['A']);

ble.on('ready', function(err) {
  console.log('Scanning...');
  ble.startScanning();
});

ble.on('discover', function(peripheral) {
  console.log("Discovered peripheral!", peripheral.toString());
});
{% endhighlight %}

### Step 5

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run ble.js`  
 Set a Bluetooth Low Energy device to advertising and see if Tessel can find it!  

**Bonus:** Change the code to print out only the address of discovered peripherals.  

To see what else you can do with the BLE module, see the module docs [here](https://github.com/tessel/ble-ble113a).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/ble.gif)

</div>
</div>

### Step 6

What else can you do with a BLE module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/bobbins/tessel-beacon-demo/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/ble-proximity-switch/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [BLE forums](http://forums.tessel.io/category/ble).
