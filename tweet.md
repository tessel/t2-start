{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Tessel's First Tweet

Make sure you're [connected to Wifi]({{ site.baseurl }}/wifi.html), then let's try a tweet!

This code snippet makes Tessel send a tweet from a dummy account <a href="https://twitter.com/TesselTweet" target="0">(@TesselTweet)</a> that we've created for this.

If you want to post from your own account, go to <a href="https://apps.twitter.com/" target="0">apps.twitter.com</a>, create your own OAuth tokens with read and write permissions, and paste them into the script.

<hr>

First, create a new directory within your "tessel-code" directory:

`mkdir tessel-tweet; cd tessel-tweet; t2 init`

Rename the "index.js" file you've just created to "tweet.js":

`mv index.js tweet.js`

Now open "tweet.js". Copy and paste the below script over the existing text:

{% highlight javascript %}
// Node requires
var twitter = require('twitter');

var twitterHandle = '@technicalhumans';
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

We're using the [Node.JS twitter library](https://www.npmjs.org/package/twitter). Install it using npm:

`npm install twitter`

</div>
</div>

<div class="row">
<div class="large-4 columns">

Now run:

`t2 run tweet.js`

<a href="https://twitter.com/TesselTweet" target=
"0">Check Twitter for your tweet!</a>

</div>
<div class="large-8 columns right">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/tessel-tweet-2.png)

</div>
</div>

<div class="row">
<div class="large-12 columns">

**Bonus:** Try making Tessel tweet output from a module.

<div class="greyBar"></div>

<div class="row">
<div class="large-5 columns left">
  <a href="modules.html" class="bottomButton button">Prev:
  Modules</a>
</div>
<div class="large-6 columns right">
  <a href="gpio.html" class=
  "bottomButton right button">Next: Beyond modules</a>
</div>
</div>
