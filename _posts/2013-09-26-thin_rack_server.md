---
layout: post
title:  "Thin Rack Server"
date:   2013-09-24 10:51:22
categories: web-server
---

<p class="lead">You can run your Rack apps with Thin</p>

<div class="notice">
	<h3>Important</h3>
	<p>You need to choose your web server at the time of initial build of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. Passenger is used by default.</p>
</div>

## Choosing Thin as your Rack server
To run a Thin Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

<pre class='terminal'>
custom_web: bundle exec thin start --socket /tmp/web_server.sock --pid /tmp/web_server.pid -e $RACK_ENV -d
</pre>
Please take note that Thin is running in Daemon mode with the `-d` parameter.

## Web server process management
Cloud 66 uses the following signals to control custom web servers:

### kill -QUIT &#60;pid&#62;
Stop the process

## Manual control of the web servers
To control your web servers manually you can use the following commands:

### Stop the web server
<p>
<kbd>
	sudo bluepill cloud66_web_server stop
</kbd>
</p>

### Start the web server
<p>
<kbd>
	sudo bluepill cloud66_web_server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66_web_server.pill
</kbd>
</p>

<div class="notice">
	<h3>Important</h3>
	<p>Your web server is not automatically restarted during redeployment. If you would like for it to restart automatically, you can accomplish this using a <a href='/help/redeployment_hook'>redeployment hook</a>.</p>
</div>