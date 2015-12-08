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

<hr />

"index.js" contains code to make the blue and green LEDs blink. We're going to replace that with our server setup. Let's take a look:

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

</div>
</div>
