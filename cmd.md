{::options parse_block_html="true" /}

<script src="javascripts/custom/install.js"></script>

<div class="row">
<div class="large-12 columns">

# Command Line Basics

Using Tessel is just like web development. But if
you're not familiar with web development, you might want
to take a minute or two to get comfortable with some key
tools of the trade: the command line (the "terminal",
where you execute commands) and the text editor, where
you will work on and save your programs.

Select the operating system you are working on.

<dl id="install-tabs" data-tab="" class="tabs contained three-up">
| [OSX](#tab-osx) || [Linux](#tab-linux) || [Windows](#tab-windows) |
</dl>

<div id="install-content" class="tabs-content">

<div id="tab-osx" class="content active">

Open up the application on your computer called   “Terminal” by pressing ⌘ + SPACE and typing “Terminal”.

Its dock icon looks like ![](http://i.imgur.com/y5U2cZ2.png), and the terminal will look something like ![](http://i.imgur.com/SQSbFrE.png)

You can use the terminal to write commands to your computer (this is the “command line”). Let’s try it out!

In your terminal, type

`ls`

and hit enter.

The `ls` command, short for “list”,   tells your computer to list all of the file names for   the folder you’re in. Your list of files probably   includes “Desktop” and “Documents”, among others.

Let’s try another command: type

`cd Documents`

and hit enter.

You are now in the Documents folder; `cd` means “change directory”. If you try `ls` again, you should see the contents of your Documents folder listed out. If you want to compare, open up Finder and look in Documents to see the same files.

Let’s get back to the folder we were in before: `cd ..`

You changed directory again! `ls`
to see what we have here. You’re back where you started! The `..` after `cd` tells it to go up one folder in the directory.

Ok, now you're a cool hacker who can use the terminal (or "console") to write in the command line.

(If you want to learn more commands, there are a whole bunch of them <a href="http://ss64.com/bash/" target="1">here</a>. I recommend `pwd`,   `open`, `mkdir`, `touch`, `mv`, and `cp`.)

</div>

<div id="tab-linux" class="content">

Open up the application on your computer called “Terminal” by tapping the SUPER key (Windows or Apple key, depending on your hardware) and typing “Terminal”.

Its icon looks like ![](http://i.imgur.com/ySRfyMC.png), and the terminal will look something like ![](http://i.imgur.com/VjVWZD8.png)

You can use the terminal to write commands to your computer (this is the “command line”). Let’s try it out!

In your terminal, type

`ls`

and hit enter.

The `ls` command, short for “list”,   tells your computer to list all of the file names for   the folder you’re in. Your list of files probably   includes “Desktop” and “Documents”, among others.

Let’s try another command: type

`cd Documents`

and hit enter.

You are now in the Documents folder; `cd` means “change directory”. If you try `ls` again, you should see the contents of your Documents folder listed out. If you want to compare, open up Finder and look in Documents to see the same files.

Let’s get back to the folder we were in before: `cd ..`

You changed directory again! `ls`
to see what we have here. You’re back where you started! The `..` after `cd` tells it to go up one folder in the directory.

Ok, now you're a cool hacker who can use the terminal (or "console") to write in the command line.

(If you want to learn more commands, there are a whole bunch of them <a href="http://ss64.com/bash/" target="1">here</a>. I recommend `pwd`,   `open`, `mkdir`, `touch`, `mv`, and `cp`.)

</div>

<div id="tab-windows" class="content">

Open up the application on your computer called “Command Prompt”.

If you’re not on Windows 8, go to the start menu and type “Command Prompt”.

If you are on Windows 8+, swipe right to find “Windows System”, within which you can find “Command Prompt”.

Its icon looks like ![](http://i.imgur.com/ySRfyMC.png), and the application (the terminal) will look something like ![](http://i.imgur.com/VjVWZD8.png)

You can use the terminal to write commands to your computer (this is the “command line”). Let’s try it out!

In your terminal, type

`dir`

and hit enter.

The `dir` command, short for “directory”, tells your computer to list all of the file names for the folder you’re in. Your list of files probably includes “Desktop” and “Documents”, among others. Let’s try another command:

Now type

`cd Documents`

into your command line and press enter.

You are now in the Documents folder; `cd` means “change directory”. If you try `dir` again, you should see the contents of your Documents folder listed out. If you want to compare, open up My Comuter and look in Documents to see the same files.

Let’s get back to the folder we were in before:

`cd ..`

You changed directory again!

`dir`

to see what we have here. You’re back where you started! The `..` after `cd` tells it to go up one folder in the directory.

Now you’re a cool hacker who can use the terminal to write in the command line. (If you want to learn more commands, there are a whole bunch of them <a href="http://ss64.com/nt/" target="1">here</a>.)

</div>
</div>
</div>
</div>

<div class="row">
<div class="large-12 columns">

When you use a command line tool, you're using a grammar-like structure. Items are separated by spaces, and it's usually like this:

`tool action object -flag <flag-object>`

The "tool" is like a program you're calling; the "action" is the action you want the tool to perform, and the "object" is the object you want the tool to perform the action on. "Flags" are for passing in extra objects For example, on the next page you will do:

`npm install t2 -g`

This means:

"use the tool called 'npm' to perform the 'install' action on the item called 't2'. Do this globally." `t2` is the command line tool you will use to talk to the Tessel 2. `-g` stands for globally– which is to say, you want `npm` to install such that you can use the `t2` tool even outside the folder you were in when you installed it.

<hr>

### Text Editors

You will also need a text editor to save your JavaScript files. This means a plaintext editor, not a Word document.

We recommend that you download one of these (you can download for free):

* [Sublime Text](http://www.sublimetext.com/)
* [Atom](https://atom.io/)
* [Notepad++](http://notepad-plus-plus.org/)

Typically, directions that belong in the command line are one line, whereas longer scripts, such as anything in JavaScript, should be typed into the text editor and saved, then run through the command line.

In the context of this tutorial, things that should be run in the command line look

`like this`

And scripts that should be saved in the text editor will look

{% highlight javascript %}
like this
{% endhighlight %}

You'll see this when you get to the [blinking lights example]({{ site.baseurl }}/blinky.html). But don't skip ahead– you'll need the tools we install in the next step.

<div class="greyBar"></div>
</div>
</div>

<div class="row">
<div class="large-12 columns right">
<a href="index.html" class="bottomButton right button">Next: Install</a>
</div>
</div>
