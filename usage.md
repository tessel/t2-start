{::options parse_block_html="true" /}

# Some useful commands...

You can look at all the options of Tessel's CLI by running

`tessel --help`

Here are a few of the most useful ones:

* <big> `tessel run <script.js | path/to/folder>` </big>

This command loads code into RAM on Tessel. When Tessel is reset (or the script ends with CTRL + C), Tessel loses the code. This command is useful for running code while developing, and is used throughout this tutorial.

This command is shown in the [blinky example.](blinky.html)

`tessel run blinky.js`

{% highlight sh %}
>> Bundling directory ...  
>> Deploying bundle ...  
>> Running script ...  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> ...  
{% endhighlight %}

* <big> `tessel push <script.js | path/to/folder>` </big>

This command saves code into flash memory on Tessel. This means that Tessel auto-runs this code when powered. The code will stay on here even if you reset Tessel. If you "tessel run" while you have code saved in Flash, the new code will run until the Tessel is reset, and then Tessel will switch back to the code from Flash.

From your "tessel-code" directory, where you saved blinky.js,

`tessel push blinky.js`

{% highlight sh %}
>> Bundling directory ...  
>> Deploying bundle ...  
>> Running script ...  
>> Finished deployment  
{% endhighlight %}

While Tessel is running code from flash, console logs will be hidden by default. To see output after a "push" command, enter

`tessel logs`

{% highlight sh %}
>> "I'm blinking! (Press CTRL + C to stop)"  
>> "I'm blinking! (Press CTRL + C to stop)"  
>> ...  
{% endhighlight %}

<div class="row">
<div class="large-4 columns">

The `push` command is great if you want to run Tessel from an external power source, such as a USB battery, wall USB power, solar phone charger, or another power source.

The code you've pushed will start running as soon as the Tessel receives power.

Read more about it [here.](https://tessel.io/docs/untethered)

</div>
<div class="large-4 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/doc+pictures/tessel-battery.jpg)

</div>
<div class="large-4 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/doc+pictures/tessel-plug.jpg)

</div>
</div>

* <big> `tessel erase` </big>

This command erases any JavaScript code saved to Tessel's flash memory. The firmware is left unchanged. If you push buggy code to Tessel, an erase can remove your code.

Try unplugging and replugging in your Tessel after you have loaded the blinky code in Flash (tessel push). After a few seconds, you should see the LEDs start to blink.

Now run:

`tessel erase`

{% highlight sh %}
>> Attempting to erase filesystem  
{% endhighlight %}

This will erase the blinky code from Tessel, and the LEDs will stop blinking.
