{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

## <img class="constrain-sm" src="//i.imgur.com/PzU7IQ1.png"> Relay

[<i class="fa fa-github"></i> View source on Github](https://github.com/tessel/relay-mono)

### Step 1

Make a directory inside your "tessel-code" folder called "relay", change directory into that folder, and initialize a tessel project:

`mkdir relay; cd relay; t2 init`

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 2

</div>
</div>

<div class="row">
<div class="large-6 columns">

If you have something to turn on and off with the Relay module, cut the power wire, strip the ends to expose the wire, and insert the two exposed ends into port 1 on the Relay module. (If you don't have something to plug in at the moment, you can still continue; you won't see anything turn on or off, but the relay makes an audible clicking noise when it latches.)

</div>
<div class="large-6 columns">

![](http://i.imgur.com/kMdQPqz.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 3

</div>
</div>

<div class="row">
<div class="large-6 columns">

Plug the relay module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/XKJHJEw.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 4

</div>
</div>

<div class="row">
<div class="large-6 columns">

Install by typing `npm install relay-mono` into the command line.

</div>
<div class="large-6 columns">

![](//i.imgur.com/1e7hZO0.jpg)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 5

Rename "index.js" to "relay.js" and replace the file's contents with the following:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This relay module demo toggles both relay
channels every two seconds, logging the new
values to the console upon latching.
*********************************************/

var tessel = require('tessel');
var relaylib = require('relay-mono');

var relay = relaylib.use(tessel.port['A']);

// Wait for the module to connect
relay.on('ready', function relayReady () {
  console.log('Ready! Toggling relays...');
  setInterval(function toggle() {
    // Toggle relay channel 1
    relay.toggle(1, function toggleOneResult(err) {
      if (err) console.log("Err toggling 1", err);
    });
    // Toggle relay channel 2
    relay.toggle(2, function toggleTwoResult(err) {
      if (err) console.log("Err toggling 2", err);
    });
  }, 2000); // Every 2 seconds (2000ms)
});

// When a relay channel is set, it emits the 'latch' event
relay.on('latch', function(channel, value) {
  console.log('latch on relay channel ' + channel + ' switched to', value);
});
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

In your command line, `t2 run relay.js` Turn some things on and off with code! This gif shows clap-activated lights which use the ambient and relay modules together.  

**Bonus:** Change the code to toggle only one relay channel, every 10 seconds.  

To see what else you can do with the relay module, see the module docs [here](https://github.com/tessel/relay-mono).

</div>
<div class="large-6 columns">

![](http://i.imgur.com/ypBLeqQ.gif)

</div>
</div>

<div class="row">
<div class="large-12 columns">

### Step 7

What else can you do with a relay module? Try a [community-created project.](http://tessel.io/projects)

</div>
</div>

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/paigereads/gprs-trigger/embed" width="360"></iframe>
</div>

<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://tessel.hackster.io/ifoundthemeaningoflife/website-down-alarm/embed" width="360"></iframe>
</div>
</div>

<div class="row">
<div class="large-12 columns">

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [relay forums](https://forums.tessel.io/c/modules/relay).

</div>
</div>
