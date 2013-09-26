---
layout: post
title:  "Puma Rack Server"
date:   2013-09-24 10:51:22
categories: stack-features
---


<p class="lead">You can run your Rack apps with Puma</p>

<div class="notice">
	<h3>Important</h3>
	<p>You need to choose your web server at the time of initial build of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. Passenger is used by default.</p>
</div>

## Choosing Puma as your Rack server
To run a Puma Rack server, add a line to your Procfile labeled as custom_web. Here is an example:

<pre class='terminal-commands'>
custom_web: bundle exec puma -e $RACK_ENV -b unix:///tmp/web_server.sock --pidfile /tmp/web_server.pid -d
</pre>
Please take note that Puma is running in Daemon mode with the `-d` parameter.

## Web server process management
Cloud 66 uses the following signal to control Puma:

### kill -USR2 &lt;pid>
Perform hot-restart

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

### Restart the web server (hot-restart)
<p>
<kbd>
	sudo bluepill cloud66_web_server restart
</kbd>
</p>