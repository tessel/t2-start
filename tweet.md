{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Tessel's First Tweet

Because Tessel runs Node, we can leverage the [thousands of libraries](//npmjs.com) that the Node community has made.

This code snippet makes Tessel send a tweet from a dummy account <a href="https://twitter.com/TesselTweet" target="0">(@TesselTweet)</a> that we've created for this purpose.


</div>
</div>
<div class="row">
<div class="large-6 columns">

_If you want to post from your own account, go to <a href="https://apps.twitter.com/" target="0">apps.twitter.com</a>, create your own OAuth tokens with read and write permissions, and paste them into the script._

</div>
<div class="large-6 columns right">

[![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/tessel-tweet-2.png)](https://twitter.com/intent/tweet?text=OAuth%20is%20hard.%20But%20at%20least%20I%20can%20sign%20requests%20from%20my%20microcontroller.%23Tessel)

</div>
</div>
<div class="row">
<div class="large-12 columns">

<hr>

Create a new directory within your "tessel-code" directory:

`mkdir tessel-tweet; cd tessel-tweet; t2 init`

Use npm to install [the Twitter library](https://www.npmjs.org/package/twitter) that the Node.js community has built:

`npm install twitter`

Rename the "index.js" file you've just created to "tweet.js", then copy and paste the below script over the existing text:

{% highlight javascript %}
// Node requires
var twitter = require('twitter');

var twitterHandle = '@tesselproject';
// The status to tweet
var status = 'Hello ' + twitterHandle + '. This is your #Tessel 2 speaking.';

// Enter the oauth key and secret information
var twit = new twitter({
  consumer_key: 'O7oc0pvsZn4xjgcuHuYdX4FaC',
  consumer_secret: 'iJYuHFz2sD46Nvk3mcwzX8uih14aEAMgVWdWoR59nx8v6Zl7ZX',
  access_token_key: '2529232909-luARGU89K4CKFMvfzBjCgG6ubefzDkdDWkSB85i',
  access_token_secret: 'GXQfuzvGdjLEs3t1HEYfhQ9x9bdBcSBVXjBkbRgwYlOE0'
});

// Make a tweet!
twit.post('statuses/update', {status: status}, function(error, tweet, response){
  if (error) {
    console.log('error sending tweet:', error);
  } else {
    console.log('Successfully tweeted! Tweet text:', tweet.text);
  }
});
{% endhighlight %}

Change the "twitterHandle" var to your own Twitter handle and save.


Make sure you're [connected to Wifi]({{ site.baseurl }}/wifi.html), then run:

`t2 run tweet.js --slim`

_That `--slim` command is a new feature we're testing out which cleverly checks the dependencies you're using to reduce the file size - so just now, we avoided passing over any unused files in the Twitter library. You can append `--slim` to any `t2 run`._

<a href="https://twitter.com/TesselTweet" target=
"0">**Check Twitter for your tweet!**</a>

<hr>

**Bonus:** Try making Tessel tweet output from a module.

**Extra bonus:** What's another Node module you can try out? Maybe Twilio, PubNub, Plotly, Firebase? Surf around on [npm](//npmjs.com) until you find a Node library you like, then try using it with Tessel.

<div class="greyBar"></div>
</div>
</div>

<div class="row">
<div class="large-5 columns left">
  <a href="modules.html" class="bottomButton button">Prev:
  Modules</a>
</div>
<div class="large-6 columns right">
  <a href="ap.html" class=
  "bottomButton right button">Next: Build Your Internet</a>
</div>
</div>
