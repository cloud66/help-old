---
layout: post
template: two-col
title:  "Thin rack server"
so_title: "thin"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2029-09-24 10:51:22
categories: web-server
lead: Run your Rack apps with Thin
---

## Choosing Thin as your Rack server
<div class="notice">
	<h3>Important</h3>
	<p>You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers after analysis.</p>
</div>

To run a Thin Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec thin start --socket /tmp/web&#95;server.sock --pid /tmp/web&#95;server.pid -e $RACK&#95;ENV -d
</pre>
Please take note that Thin is running in Daemon mode with the `-d` parameter.

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>Should you have any issues, please ensure that you are using an up-to-date version of Thin with the correct configurations.</p>
    <p>We recommend that you run <a href="/web-server/unicorn-rack-server.html">Unicorn</a>, as you may have to handle server restarts manually with Thin.</p>
</div>

## Web server process management
Cloud 66 uses the following signals to control custom web servers:

### kill -QUIT &#60;pid&#62;
Stop the process

## Manual control of the web servers
To control your web servers manually you can use the following commands:

### Stop the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server stop
</kbd>
</p>

### Start the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66&#95;web&#95;server.pill
</kbd>
</p>

<div class="notice">
	<h3>Important</h3>
	<p>Your web server is not automatically restarted during redeployment. If you would like for it to restart automatically, you can accomplish this using a <a href='/stack-features/redeployment-hook.html'>redeployment hook</a>.</p>
</div>