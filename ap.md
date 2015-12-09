{::options parse_block_html="true" /}

<div class="row">
<div class="large-8 columns">
# Build Your Own Internet

Along with connecting to an existing Wifi network, Tessel 2 can also act as a portable router and emit a custom Wifi network. We can use this functionality to connect directly with our Tessel through a web browser. By the end of this article, we'll be able to control the Tessel LEDs through a web app served by the Tessel.  

In your command line, make a folder for your Tessel code, then initialize a Tessel project in that folder by running each of the following commands in the terminal:

`mkdir tessel-router`

`cd tessel-router`

`t2 init`

Great! Now you're set up to run code on Tessel. Your "tessel-router" folder now contains a "package.json" with some metadata Node uses for your project, and a file called "index.js".
</div>
</div>

<div class="row">
<div class="large-12 columns">

<hr>

"index.js" contains code to make the blue and green LEDs blink. We're going to replace that with our initial server setup. Let's take a look:

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

// Listen on port 8080, IP defaults to 192.168.1.101
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://192.168.1.101:8080/");

{% endhighlight %}

Now that our server is in place, let's get our access point set up. In the terminal, run the following command:

`t2 ap -n TesselRouter`

This will make an open wifi network called TesselRouter. If you open the wifi setting of your computer or a separate device like a smartphone or tablet, and scan for new devices, you should be able to see and connect to this new network. After connecting to TesselRouter, run the following command in your terminal:

`t2 run index.js`

Once you see "Server running at http://192.168.1.101:8080/" in the terminal, go to http://192.168.1.101:8080/ in the web browser of the device connected to the TesselRouter network. You should "Hello from Tessel!" appear on the screen. You can press "Control+C" while in your terminal to stop this server. 

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

In that html, we have a heading, a line of instructions for the user, and a list of buttons for controlling a corresponding LED on the Tessel. Below that list of buttons we'll add some JavaScript for communicating with the Tessel:

{% highlight html %}
<script type="text/javascript">
  // Get a NodeList of elements with the class 'led-button'
  var buttons = document.querySelectorAll('.led-button');

  // Iterate through that Nodelist and add a 'click' EventListener
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', toggleLed);
  });

  // Our event handler function for 'click' events on the LED buttons
  function toggleLed (event) {
    var button = event.target;
    var ledIndex = button.getAttribute('data-led'); // The index of the led in the Tessel.led array
    var statusNode = button.parentNode.querySelector('.led-status'); // The sibling status span to update

    // create a new XHR for communicating requests to our Tessel server
    var req = new XMLHttpRequest();

    // Open a GET request to '/leds/:index'
    req.open('GET', '/leds/' + ledIndex);

    // Once the request gets a successful response, update that statusNode with the status of the LED.
    req.onload = function(e) {
      if (req.readyState == 4 && req.status == 200) {
        if (req.status == 200) {
          var response = JSON.parse(req.responseText);
          statusNode.textContent = response.on ? 'ON' : 'OFF';
        } else { 
          console.log('Error'); 
        }
      }
    }
    req.send(); // send our request to the server
  }
</script>
{% endhighlight %}

While there are some comments in the previous code snippet, the summary is when a button with the class "led-button" is clicked, we grab the info from its "data-led" attribute and make a request to our Tessel server with that info in the url. After we get a successful response from the server, we update the "Status" field next to the button with the state of the corresponding LED. 

Now let's check out `index.js` again to finish up the project. First, we're going to make a few changes to our server set up:

{% highlight javascript %}
// These two dependencies remain the same
var tessel = require('tessel');
var http = require('http');

// Require two other core Node.js modules
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
  // here is the biggest change
  var urlParts = url.parse(request.url, true); // break up the url into easier-to-use parts
  var ledRegex = /leds/; // a Regex to catch requests to toggle LEDs

  if (urlParts.pathname.match(ledRegex)) {
    // if there is a request containing 'leds' call a function, toggleLED
    toggleLED(urlParts.pathname, request, response);
  } else {
    // all other request will call a function, showIndex
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
// respond to the request with our index.html page
function showIndex (url, request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  // use fs to read in index.html
  fs.readFile(__dirname + '/index.html', function (err, content) {
    if (err) {
      throw err;
    }

    // serves the content of index.html read in by fs
    response.end(content);
  });
}

// toggle the led specified in the url and respond with its state
function toggleLED (url, request, response) {
  var indexRegex = /(\d)$/; // Regex to find the number at the end of the url
  var result = indexRegex.exec(url); // capture the number, returns an array
  var index = +result[1]; // grab the captured result from the array and make sure it's a Number

  var led = tessel.led[index]; // use the index to refence the correct LED

  // toggle the state of the led and call the callback after that's done
  led.toggle(function (err) {
    if (err) {
      // log the error and send back a 500 (internal server error) response to the client
      console.log(err);
      response.writeHead(500, {"Content-Type": "application/json"});
      response.end(JSON.stringify({error: err}));
    } else {
      // the led was successfully toggled, so respond with the state of the toggled led using led.isOn
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify({on: led.isOn}));
    }
  });
}
{% endhighlight %}

In our `showIndex` function, we grab the content of `index.html` using the Node.js `fs` module and respond to the web browser request with that content. In our toggleLED function, we use a Regex to search the url for the index of the led we want to toggle and pass that index into the `tessel.led` array. Now that we have the led we want, we toggle it and use the callback to respond to the server request with the current state of the led using `isOn` property.

One last step is to create a `.tesselignore` file in the project directory and add any non-JavaScript files we want to deploy with `index.js`. For this project, that means adding one line: `index.html`. 

Finally, let's fire up our server again by running:

`t2 run index.js`

Just like before, once you see the "Server running at http://192.168.1.101:8080/" message in your terminal, you should be able to connect to that url in the web browser of the device connected to the TesselRouter network. After connecting, you should see the index.html view we built earlier and, after clicking/tapping the buttons, see either the blue or green LEDs on the Tessel should be toggled on or off. 

[Show demo video here?]

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="blinky.html" class="bottomButton button">Prev: Blinky</a>
</div>

<div class="large-6 columns right">
  <a href="modules.html" class= "bottomButton right button">Next: Add modules</a>
</div>
</div>
