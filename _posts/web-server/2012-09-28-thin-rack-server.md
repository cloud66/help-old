---
layout: post
template: two-col
title:  "Thin rack server"
date:   2036-09-24 10:51:22
categories: web-server
lead: Run your Rack apps with Thin
---


<p class="weighted">
    You need to choose your web server at the <strong>time of initial build</strong> of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. <strong>Passenger is used by default</strong>.
</p>

## Choosing Thin as your Rack server
To run a Thin Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec thin start --socket /tmp/web&#95;server.sock --pid /tmp/web&#95;server.pid -e $RACK&#95;ENV -d
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