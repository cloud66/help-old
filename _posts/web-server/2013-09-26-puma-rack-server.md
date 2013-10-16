---
layout: post
title:  "Puma Rack Server"
date:   2013-09-24 10:51:22
categories: web-server
---


<p class="lead">Run your Rack apps with Puma</p>

<p class="weighted">
    You need to choose your web server at the <strong>time of initial build</strong> of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. <strong>Passenger is used by default</strong>.
</p>

## Choosing Puma as your Rack server
To run a Puma Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec puma -e $RACK&#95;ENV -b unix:///tmp/web&#95;server.sock --pidfile /tmp/web&#95;server.pid -d
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

### Restart the web server (hot-restart)
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>