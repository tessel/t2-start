{::options parse_block_html="true" /}

<div class="row">
<div class="large-12 columns">

# Some useful commands...

You can look at all the options of Tessel's CLI by running

`t2 -h`

Or go to the [Tessel 2 CLI docs](//tessel.io/docs/cli). Here are a few of the most useful ones:

### `t2 run <script.js | path/to/folder>``

This command loads code into RAM on Tessel. When Tessel is reset (or the script ends with CTRL + C), Tessel loses the code. This command is useful for running code while developing, and is used throughout this tutorial.

This command is shown in the [blinky example.](blinky.html)

`t2 run blinky.js`

{% highlight sh %}
>> Bundling directory ...  
>> Deploying bundle ...  
>> Running script ...  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> ...  
{% endhighlight %}

### `t2 push <script.js | path/to/folder>`

This command saves code into flash memory on Tessel. This means that Tessel auto-runs this code when powered. The code will stay on here even if you restart Tessel.

If you "tessel run" while you have code saved in Flash, the new code will run until the Tessel is reset, and then Tessel will switch back to the code from Flash.

From your "tessel-code" directory, where you saved blinky.js,

`t2 push blinky.js`

{% highlight sh %}
>> Bundling directory ...  
>> Deploying bundle ...  
>> Running script ...  
>> Finished deployment  
{% endhighlight %}

### `t2 erase`

This command erases any JavaScript code saved to Tessel's flash memory. The firmware is left unchanged. If you push buggy code to Tessel, an erase can remove your code.

Try unplugging and replugging in your Tessel after you have loaded the blinky code in Flash (tessel push). After a few seconds, you should see the LEDs start to blink.

Now run:

`t2 erase`

{% highlight sh %}
>> Attempting to erase filesystem  
{% endhighlight %}

This will erase the blinky code from Tessel, and the LEDs will stop blinking.

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-6 columns left">
  <a href="tweet.html" class="bottomButton button">Prev: Tweet</a>
</div>

<div class="large-6 columns right">
  <a href="finished.html" class= "bottomButton right button">Next: Finished!</a>
</div>
</div>
