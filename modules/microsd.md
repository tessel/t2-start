{::options parse_block_html="true" /}

## <img class="constrain-sm" src="https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules/microsd.png"> MicroSD

[<i class="fa fa-github"> View source on Github</i>](https://github.com/tessel/sdcard)

### Step 1

Make a directory inside your "tessel-code" folder: enter `<kbd>mkdir microsd</kbd>` into your command line, then change directory into that folder: `<kbd>cd microsd</kbd>`

### Step 2

<div class="row">
<div class="large-6 columns">

Insert SD card into module.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_clipped/microsd.png)

</div>
</div>

### Step 3

<div class="row">
<div class="large-6 columns">

Plug the microSD module into Tessel **port A** with the hexagon/icon side down and the electrical components on the top, then plug Tessel into your computer via USB.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_plugged/microsd.jpeg)

</div>
</div>

### Step 4

<div class="row">
<div class="large-6 columns">

Install by typing `npm install sdcard` into the command line.

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/modules_corners/microsd.jpg)

</div>
</div>

### Step 5

Save this code in a text file called `microsd.js`:

{% highlight js %}
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This MicroSD card example writes a text file
to the sd card, then reads the file to the
console.
*********************************************/

var tessel = require('tessel');
var sdcardlib = require('sdcard');

var sdcard = sdcardlib.use(tessel.port['A']);

sdcard.on('ready', function() {
  sdcard.getFilesystems(function(err, fss) {
    var fs = fss[0];
    console.log('Writing...');
    fs.writeFile('someFile.txt', 'Hey Tessel SDCard!', function(err) {
      console.log('Write complete. Reading...');
      fs.readFile('someFile.txt', function(err, data) {
        console.log('Read:\n', data.toString());
      });
    });
  });
});
{% endhighlight %}

### Step 6

<div class="row">
<div class="large-6 columns">

In your command line, `tessel run microsd.js` Write to and read from your SD card!  

**Bonus:** Change the code to write a text file to the SD card.  

To see what else you can do with the microSD module, see the module docs [here](https://github.com/tessel/sdcard).

</div>
<div class="large-6 columns">

![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/gifs/microsd.gif)

</div>
</div>

### Step 7

What else can you do with a microSD module? Try a [community-created project.](http://tessel.io/projects)

What are you making? [Share your invention!](http://tessel.hackster.io/)

If you run into any issues you can check out the [microSD forums](http://forums.tessel.io/category/microsd).
