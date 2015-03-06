---
layout: post
template: two-col
title:  "Toolbelt introduction"
date:   2050-01-30 01:01:01
nav_sticky: true
categories: toolbelt
lead: Toolbelt is a command line tool to interact with Cloud 66
search-tags: ['toolbelt','commandline']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">What is toolbelt?</a>
	</li>
	<li>
		<a href="#install">Install the toolbelt</a>
	</li>
	<li>
		<a href="#init">Initialize the toolbelt</a>
	</li>
	<li>
		<a href="#quick">View toolbelt information</a>
	</li>
	<li>
		<a href="#update">Toolbelt Update</a>
	</li>
	<li>
		<a href="#shortcuts">Toolbelt shortcuts</a>
	</li>
	<li>
		<a href="#contrib">Contributing</a>
	</li>
</ul>

<h2 id="intro">What is toolbelt?</h2>

The Cloud 66 toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line, and is available for Linux, Mac and Windows. 

<h2 id="install">Install the toolbelt?</h2>
To get started, simply download the <a href="https://app.cloud66.com/toolbelt" target="_blank">toolbelt executable</a>, unzip and copy it to a directory accessible in your PATH. On Mac OS X, your PATH is likely `/usr/local/bin`, but you can run `echo $PATH` in your terminal to determine your specific path. Placing the executable in this folder allows it to be used globally.

<h2 id="init">Initialize the toolbelt</h2>
Before using the toolbelt, you need to link it to your Cloud 66 account. You can do this by issuing one of the available commands, which will return a URL that you need to copy and paste into your browser.

<pre class="prettyprint">
$ cx stacks
</pre>

Following this URL will redirect you to your account (you need to be logged in) and ask for your authorization to allow the toolbelt to view, edit, redeploy and administrate your stacks and servers.

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in the <b>~/.cloud66/cx.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>

Once authorized, you will be presented with an authorization code to paste into your toolbelt.

<div class="notice notice-warning">
	<h3>Note</h3>
    <p>To deauthorize the toolbelt, login to your Cloud 66 account and click on the <i>Revoke access</i> button under your <i>Account</i> page.</p>
</div>

<h2 id="quick">View toolbelt information</h2>
- `cx help` lists available commands
- `cx info` shows information about your toolbelt
- `cx --version` outputs your toolbelt version
- `cx stacks list` lists available stacks
- `cx servers list` lists available servers
- `cx open` opens your web browser to visit the app server in your stack

Refer to the right sidebar for more available commands and how to use them.

<h2 id="shortcuts">Toolbelt shortcuts</h2>
<b>Stack links</b>

To make life easier for you, the Cloud 66 toolbelt <b>detects the Git URL and branch for each directory it is run in</b>. As such,
you won't have to specify which stack you want to run the toolbelt on if you're in the git folder and branch of one of your stacks.

<b>Naming shortcuts</b>

We apply naming shortcuts to both stack and server names, as well as server roles in the toolbelt.

We just need you to type enough of a name for it to be unique. For example, if you only have one stack that starts with _m_, you can simply type _m_.
Similarly, if you only have one web server, you can type _w_ instead of _web_.

<b>Auto-complete</b>

Follow our [instructions](https://github.com/cloud66/cx/wiki/Setting-up-Auto-complete-for-the-toolbelt) to add an auto-complete feature to your toolbelt, which will make typing commands out by hand much quicker.

<h2 id="contrib">Contributing</h2>
Fork our [repository](https://github.com/cloud66/cx), create a feature branch (and commit/push your changes) and then create a pull request.

<h2 id="update">Toolbelt Update</h2>
<ul>
<p>We rollout update for our Toolbelt periodically to allow users to have more features accessible through the command line.</p>
<p>We always try to keep our customers updated to the latest version of the toolbelt. Whenever a user executes <code>cx</code> command it will verify with the latest version, and if you are using the older version it will automatically do a silent update to the latest version.</p>
<li>You can check the toolbelt version with the following command :</li>
<pre class="prettyprint">
$ cx -v
</pre>
For example:
<pre class="prettyprint">
$ cx -v
0.1.20
</pre>

<li>How to update the latest version of Toolbelt?</li>
<p>Having the latest version will allow you to manage your servers with the features released with the latest Toolbelt version. You can update the latest version with the following command.</p>
<pre class="prettyprint">
$ cx update 
</pre>
<li>Do a user needs sudo command to update the Toolbelt?</li>
<p>Basically you don't need to use the sudo commnad to update the Toolbelt. There are many case, where the toolbelt is installed in the shared folder and so the toolbelt will not get automatically updated to the latest version. To be able to update the toolbelt you can elevate your permissions to SuperUser and execute the <code>cx update </code>command.</p>
<p><code>sudo su</code> - will put you into a root environment but it will ask you for your user password and than you can update the Toolbelt.
<p>You can have alook at the example below :</p>
<pre class="prettyprint">
$ sudo su
Password:
# cx update
# cx -v
0.1.20
# exit
$ cx info
</pre>
<p>Once you have updated the Toolbelt in root environment. You can check the detail of toolbelt with the following command <code>cx info</code></p></ul>