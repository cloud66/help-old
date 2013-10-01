---
layout: post
title:  "Custom Web Servers"
date:   2013-09-24 10:51:22
categories: web-server
---

<p class="lead">You can run your Rack apps with Passenger, Puma, Unicorn or Thin</p>

<div class="notice">
	<h3>Important</h3>

	<p>You need to choose your web server at the time of initial build of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. Passenger is used by default.</p>
</div>

## Choosing your Rack server
There are many servers that can serve a Rack application: Puma, Unicorn and Thin are the most famous ones.

By default, stacks deployed by Cloud 66 run on <a href="https://www.phusionpassenger.com/" target="_blank">Phusion Passenger</a> behind <a href="http://wiki.nginx.org/Main" target="_blank">nginx</a>. You can use [Procfiles](/stack-features/proc-files.html) should you wish to change this.

## Configurations for your Rack server
You need to configure your Rack server based on the recommended configuration settings of each specific server. Please see the Cloud 66 documentation for configuring
* [Puma](/web-server/puma_rack_server.html)
* [Unicorn](/web-server/unicorn_rack_server.html)
* [Thin](/web-server/thin_rack_server.html)

If you would like to use a different server, there are some points you'd need to consider for it to work with a Cloud 66 stack. These conventions will allow Cloud 66 to redirect traffic to your servers and manage them for availability, memory consumption and restart cycles.

### Traffic Socket
For the traffic to be redirected to your web server, it should use a Unix socket at `/tmp/web_server.sock`

### PID file
For the web server to be managed and restarted properly by Cloud 66, it needs to have it's PID file at `/tmp/web_server.pid`

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

### Restart the web server
If supported by your web server, you can use the following command to restart the web server with no down time (this will send a USR2 signal to your webserver)
<p>
<kbd>
	sudo bluepill cloud66_web_server restart
</kbd>
</p>