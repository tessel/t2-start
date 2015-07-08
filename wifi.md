{::options parse_block_html="true" /}

# Connect Tessel to Wifi

Tessel can only connect to **802.11b/g** networks using **channels 1 through 11**. The wifi chip does not support 802.11n or channels 12 - 14\. If you are having trouble connecting, make sure the router has b/g mode enabled and isn't using channels 12, 13, or 14.

**To connect to a new network,** enter in your command line (without brackets)

`tessel wifi -n [network name] -p [password] -s [security type*]`

NOTE: The security type flag is optional; default is `wpa2`.

<hr>

<div class="row">
<div class="large-6 columns">

Tessel will blink the yellow status light while connecting, and will leave the yellow light on if it connects. Tessel saves network credentials and tries to reconnect automatically on startup.

To check whether you're connected, run

`tessel wifi -l`

This lists available wifi networks and will also show your connection status.

If the red status light goes on, it means Tessel tried to connect to a network but was unable to succeed. The red LED also turns on if the wifi connection drops.

*   Steady yellow LED = Tessel is connected to wifi
*   Steady red LED = Tessel is not connected to wifi

All 4 LEDS (red, blue, green, and yellow) are accessible through Tessel's [hardware API](https://tessel.io/docs/hardwareAPI#api-array-Pin-tessel-led). If user pushed code is changing the state of the yellow/red LEDs, they will no longer be reliable indicators of Wifi state.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/wifi.JPG)

</div>
</div>

<hr>

Here is an example of requesting a website over Tessel's Wifi connection:

Make a wifi directory

{% highlight sh %}
mkdir wifi
cd wifi
npm init
{% endhighlight %}

Save the following code in a file called `wifi.js`:

{% highlight javascript %}
var http = require('http');

var statusCode = 200;
var count = 1;

setImmediate(function start () {
  console.log('http request #' + (count++))
  http.get("http://httpstat.us/" + statusCode, function (res) {
    console.log('# statusCode', res.statusCode)

    var bufs = [];
    res.on('data', function (data) {
      bufs.push(new Buffer(data));
      console.log('# received', new Buffer(data).toString());
    })
    res.on('end', function () {
      console.log('done.');
      setImmediate(start);
    })
  }).on('error', function (e) {
    console.log('not ok -', e.message, 'error event')
    setImmediate(start);
  });
});
{% endhighlight %}

Run the code on your Tessel by typing this in the terminal:

`tessel run wifi.js`

Watch Tessel ping the website in your console!

<hr>

Tessel's wifi can also be controlled programatically. The full API docs can be found [here.](https://tessel.io/docs/wifi)

Save the following in a file called `wifi-control.js`:

{% highlight javascript %}
/* the wifi-cc3000 library is bundled in with Tessel's firmware,
* so there's no need for an npm install. It's similar
* to how require('tessel') works.
*/
var wifi = require('wifi-cc3000');
var network = '#####'; // put in your network name here
var pass = '#####'; // put in your password here, or leave blank for unsecured
var security = 'wpa2'; // other options are 'wep', 'wpa', or 'unsecured'
var timeouts = 0;

function connect(){
  wifi.connect({
    security: security
    , ssid: network
    , password: pass
    , timeout: 30 // in seconds
  });
}

wifi.on('connect', function(data){
  // you're connected
  console.log("connect emitted", data);
});

wifi.on('disconnect', function(data){
  // wifi dropped, probably want to call connect() again
  console.log("disconnect emitted", data);
})

wifi.on('timeout', function(err){
  // tried to connect but couldn't, retry
  console.log("timeout emitted");
  timeouts++;
  if (timeouts > 2) {
    // reset the wifi chip if we've timed out too many times
    powerCycle();
  } else {
    // try to reconnect
    connect();
  }
});

wifi.on('error', function(err){
  // one of the following happened
  // 1\. tried to disconnect while not connected
  // 2\. tried to disconnect while in the middle of trying to connect
  // 3\. tried to initialize a connection without first waiting for a timeout or a disconnect
  console.log("error emitted", err);
});

// reset the wifi chip progammatically
function powerCycle(){
  // when the wifi chip resets, it will automatically try to reconnect
  // to the last saved network
  wifi.reset(function(){
    timeouts = 0; // reset timeouts
    console.log("done power cycling");
    // give it some time to auto reconnect
    setTimeout(function(){
      if (!wifi.isConnected()) {
        // try to reconnect
        connect();
      }
    }, 20 *1000); // 20 second wait
  })
}
{% endhighlight %}

**If you run into errors:** First, check to make sure the yellow status light is on. If it is not, you are not connected to Wifi. Try power cycling your Tessel and then run the `tessel wifi` command again.

If you're still having trouble, please log your error on the [Wifi forums](http://forums.tessel.io/category/wifi).
