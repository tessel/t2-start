{::options parse_block_html="true" /}

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

Its dock icon looks like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/mac-term-icon.png), and the terminal will look something like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/mac-term.png)

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

Its icon looks like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/mac-term-icon.png), and the terminal will look something like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/mac-term.png)

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

Its icon looks like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/win-term-icon.png), and the application (the terminal) will look something like ![](https://s3.amazonaws.com/technicalmachine-assets/fre+assets/win-term.png)

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
<div class="large-12 columns fre-container">

<div id="text-editor">
### Text Editors

You will also need a text editor to save your JavaScript files. This means a plaintext editor, not a Word document.

Here are some good options:

* [Sublime Text](http://www.sublimetext.com/)
* [Atom](https://atom.io/)
* [Notepad++](http://notepad-plus-plus.org/)

</div>

Typically, directions that belong in the command line
are one line, whereas longer scripts, such as anything in
JavaScript, should be typed into the text editor and
saved, then run through the command line.

In the context of this tutorial, things that should be
run in the command line look `like this`

And scripts that should be saved in the text editor
will look

<pre class="prettyprint">
  <code>like this</code>
</pre>

</div>
</div>

<div class="greyBar"></div>

<div class="row">
<div class="large-12 columns right">
<a href="index.html" class="bottomButton right button">Next: Install</a>
</div>
</div>
