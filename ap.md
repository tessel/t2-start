{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">
# Build Your Own Internet
</div>
<div class="large-7 small-12 columns">

As explained in [wifi tutorial](/wifi.html), Tessel 2 can easily connect to wifi networks using the command line tool. If we're using a device connected to the same network as the Tessel, then we can connect to it through our device's web browser. Like most network-connected devices, communication over the web depends on a shared router, or access point, to direct requests and responses between every device on the network or through the Internet. This is fine and dandy if we want to use Tessel in a place with an available network, but what happens when that's not possible? 

</div>
<div class="large-5 small-12 columns right">
![router](./images/router.png)
</div>
<div class="large-7 small-12 columns">
Instead of requiring a shared network through a standalone router, we can use the command line tool for configuring Tessel to emit a custom Wifi network and use it as an access point. Then, using Node, we can also start a web server for communicating with any connected device. Unfortunately, we won't be able to connect to the Internet but there is still a lot we can do without that. By the end of this article, we'll be able to control the Tessel LEDs through a web app served by the Tessel.
</div>
<div class="large-5 small-12 columns right">
![router](./images/Tessel-AP.png)
</div>
</div>

<div class="row">
<div class="large-12 columns">

<hr>
In your command line, make a folder for your Tessel code, then initialize a Tessel project in that folder by running each of the following commands in the terminal:

`mkdir tessel-router`

`cd tessel-router`

`t2 init`

Rename the “index.js” file you’ve just created to “ap.js”, then copy and paste the below script over the existing text:

{% highlight javascript %}
// Import the interface to Tessel hardware
var tessel = require('tessel');
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with "Hello from Tessel!" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from Tessel!\n");
});

// Listen on port 8080, IP defaults to 192.168.1.101. Also accessible through [tessel-name].local
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://192.168.1.101:8080/");

{% endhighlight %}

Now that our server is in place, let's get our access point set up. In the terminal, run the following command:

`t2 ap -n TesselRouter`

This will make an open, or password-less, wifi network called TesselRouter. If you open the wifi setting of your computer or a separate device like a smartphone or tablet, and scan for new devices, you should be able to see and connect to this new network. For info about making a secure network, take a look at [the cli docs](https://tessel.io/docs/cli#usage). After connecting to TesselRouter, run the following command in your terminal:

`t2 run ap.js`

<div class="small-12 large-6 columns">
Once you see "Server running at http://192.168.1.101:8080/" in the terminal, we can connect to that URL (or http://tessel.local:8080/, replacing "tessel" with the name of your Tessel) in a web browser of the device connected to the TesselRouter network.
</div>

<div class="small-12 large-6 columns">
![web app screenshot](./images/hello-tessel.png)
</div>

Now let's take it up a notch by adding some interactivity between the web page and the Tessel!

<hr>

Let's start this next part by building out the web page we want Tessel to send to your web browser. Create a file called `index.html` in your project directory and open it up in your preferred text editor to add the initial html for our web page:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tessel Web App</title>
</head>
<body>
  <h1>Hello from Tessel!</h1>
  <p>Press a button to toggle an LED.</p>
  <ul>
    <li>
      <button class="led-button" data-led="2">Green</button>
      Status: <span class="led-status"></span>
    </li>
    <li>
      <button class="led-button" data-led="3">Blue</button>
      Status: <span class="led-status"></span>
    </li>
  </ul>
</body>
</html>
{% endhighlight %}

<div class="small-12 large-6 columns">
In that html, we have a heading, a line of instructions for the user, and a list of buttons for controlling a corresponding LED on the Tessel. Below that list of buttons we'll add some JavaScript for communicating with the Tessel:
</div>

<div class="small-12 large-6 columns">
![web app screenshot](./images/ap-web-app-preview.png)
</div>

We will add the following JavaScript before `</body>` tag:

{% highlight html %}
<script type="text/javascript">
  // Get a NodeList of elements with the class 'led-button'
  var buttons = document.querySelectorAll('.led-button');

  // Iterate through that Nodelist and add a 'click' EventListener
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', toggleLed);
  });

  // Our event handler function for 'click' event on the LED buttons
  function toggleLed (event) {
    var button = event.target;
    var ledIndex = button.getAttribute('data-led'); // The index of the led in the Tessel.led array
    var statusNode = button.parentNode.querySelector('.led-status'); // The sibling status <span> to update

    // Create a new XHR for communicating requests to our Tessel server
    var req = new XMLHttpRequest();

    // Open a GET request to '/leds/:index'
    req.open('GET', '/leds/' + ledIndex);

    // Once the request gets a successful response, update that statusNode with the status of the LED.
    req.onload = function(e) {
      if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        statusNode.textContent = response.on ? 'ON' : 'OFF';
      } else { 
        console.log('Error', e); // If something went wrong, log that event to the console.
      }
    }
    req.send(); // Send our request to the server
  }
</script>
{% endhighlight %}

Now let's check out `ap.js` again to finish up the project. First, we're going to make a few changes to our server setup:

{% highlight javascript %}
// These two dependencies remain the same
var tessel = require('tessel');
var http = require('http');

// Require two other core Node.js modules
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
  // Here is the biggest change
  var urlParts = url.parse(request.url, true); // Break up the url into easier-to-use parts
  var ledRegex = /leds/; // Create a regular expression to match requests to toggle LEDs

  if (urlParts.pathname.match(ledRegex)) {
    // If there is a request containing the string 'leds' call a function, toggleLED
    toggleLED(urlParts.pathname, request, response);
  } else {
    // All other request will call a function, showIndex
    showIndex(urlParts.pathname, request, response);
  }
});

// Stays the same
server.listen(8080);

// Stays the same
console.log('Server running at http://192.168.1.101:8080/');
{% endhighlight %}

Inside our `createServer` callback function, we've replaced the old plain text response with a basic router that catches requests to '/leds/:index' and defaults all other requests to a separate function. Let's add those functions below the `console.log`:

{% highlight javascript %}
// Respond to the request with our index.html page
function showIndex (url, request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  // Use fs to read in index.html
  fs.readFile(__dirname + '/index.html', function (err, content) {
    if (err) {
      throw err;
    }

    // Serve the content of index.html read in by fs
    response.end(content);
  });
}

// Toggle the led specified in the url and respond with its state
function toggleLED (url, request, response) {
  var indexRegex = /(\d)$/; // Create a regular expression to find the number at the end of the url
  var result = indexRegex.exec(url); // Capture the number, returns an array
  var index = +result[1]; // Grab the captured result from the array and make sure it's a Number

  var led = tessel.led[index]; // Use the index to refence the correct LED

  // Toggle the state of the led and call the callback after that's done
  led.toggle(function (err) {
    if (err) {
      // Log the error and send back a 500 (internal server error) response to the client
      console.log(err);
      response.writeHead(500, {"Content-Type": "application/json"});
      response.end(JSON.stringify({error: err}));
    } else {
      // The led was successfully toggled, so respond with the state of the toggled led using led.isOn
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify({on: led.isOn}));
    }
  });
}
{% endhighlight %}

One last step is to create a `.tesselinclude` file in the project directory and add any files not required by `ap.js` that we want to deploy with it. For this project, that means adding one line: 

```
index.html
``` 

Finally, let's fire up our server again by running:

`t2 run ap.js`

<div class="small-12 medium-6 columns">
Just like before, once you see the "Server running at http://192.168.1.101:8080/" message in your terminal, you should be able to connect to that url in the web browser of the device connected to the TesselRouter network. After connecting, you should see the index.html view we built earlier and, after clicking/tapping the buttons, see either the blue or green LEDs on the Tessel should be toggled on or off. 
</div>

<div class="small-12 medium-6 columns">
<video src="https://dl.dropboxusercontent.com/u/74986127/tessel-router-demo.mp4" controls loop class="small-12" >Video not available at the moment.</video>
</div>

<hr />

**Bonus:** Add a way to toggle the red LED as well.
</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="tweet.html" class="bottomButton button">Prev: Tweet</a>
</div>

<div class="large-6 columns right">
  <a href="gpio.html" class= "bottomButton right button">Next: Beyond modules</a>
</div>
</div>
