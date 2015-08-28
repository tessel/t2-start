{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/gps.png"> GPS

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/gps-a2235h)

### Step 1

**Note:** The time between seeing satellites and actually getting a lock is dependent on the satellite. Be in view of the open sky for best results (and even then it may take a while to get a lock). Once the module has a lock, the lock should stay for a while.

Make a directory inside your "tessel-code" folder: enter `mkdir gps` into your command line, then change directory into that folder: `cd gps`

### Step 2

<div class="row">
<div class="large-6 columns">

Plug the GPS module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](http://i.imgur.com/F4rOKN7.jpg)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Install by typing `npm install gps-a2235h` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/gps.jpg)

</div>
</div>

### Step 4

Save this code in a text file called `gps.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/**********************************************************
This gps example logs a stream of data:
coordinates, detected satellites, timestamps, and altitude.
For best results, try it while outdoors.
**********************************************************/

var tessel = require('tessel');
var gpsLib = require('gps-a2235h');
gpsLib.debug = 0; // switch this to 1 for debug logs, 2 for printing out raw nmea messages

// GPS uses software UART, which is only available on Port C
// we use Port C because it is port most isolated from RF noise
var gps = gpsLib.use(tessel.port['C']);

// Wait until the module is connected
gps.on('ready', function () {
  console.log('GPS module powered and ready. Waiting for satellites...');
  // Emit coordinates when we get a coordinate fix
  gps.on('coordinates', function (coords) {
    console.log('Lat:', coords.lat, '\tLon:', coords.lon, '\tTimestamp:', coords.timestamp);
  });

  // Emit altitude when we get an altitude fix
  gps.on('altitude', function (alt) {
    console.log('Got an altitude of', alt.alt, 'meters (timestamp: ' + alt.timestamp + ')');
  });

  // Emitted when we have information about a fix on satellites
  gps.on('fix', function (data) {
    console.log(data.numSat, 'fixed.');
  });

  gps.on('dropped', function(){
    // we dropped the gps signal
    console.log("gps signal dropped");
  });
});

gps.on('error', function(err){
  console.log("got this error", err);
});
{% endhighlight %}

### Step 5

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run gps.js` Check out your location! If you're having trouble getting a location fix, try going outside; you probably don't have satellites indoors.  

**Bonus:** Set up a geofence so that you are inside it. (Hint: you may need to check the documentation.)  

To see what else you can do with the GPS module, see the module docs [here](https://github.com/tessel/gps-a2235h).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/gps.gif)

</div>
</div>

### Step 6

What else can you do with a GPS module? Try a [community-created project.](http://tessel.io/projects)

<div class="row">
<div class="large-6 columns left">
<iframe frameborder="0" height="270" scrolling="no" src="http://www.hackster.io/heikki74/tessel-tracker-demo/embed" width="360"></iframe>
</div>
</div>

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [GPS forums](http://forums.tessel.io/category/gps).
