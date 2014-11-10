---
layout: post
template: one-col
title:  "Puma rack server"
so_title: "puma"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2030-09-24 10:51:22
categories: web-server
lead: Run your Rack apps with Puma
search-tags: ['']
tags: ['Web server']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About running apps with Puma</a>
    </li>         
        <ul style="margin-bottom:0em">            
            <li><a href="#stop">Stop the web server</a></li>
            <li><a href="#start">Start the web server</a></li>
            <li><a href="#hot-restart">Restart the web server (hot-restart)</a></li>
        </ul>   
    <li>
        <a href="#deploy">Deploy with Puma</a>
    </li>         
</ul>

<h2 id="about">About running apps with Puma</h2>
[Puma](http://puma.io/) is a light-weight Rack server built for speed and parallelism. Cloud 66 uses the following signals to control Puma:

<h3 id="stop">Stop the web server</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server stop
</kbd>
</p>

<h3 id="start">Start the web server</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66&#95;web&#95;server.pill
</kbd>
</p>

<h3 id="hot-restart">Restart the web server (hot-restart)</h3>
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>
<p>
<kbd>
	kill -USR2 &lt;pid>
</kbd>
</p>

<h2 id="deploy">Deploy with Puma</h2>
You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Puma Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec puma -e $RACK&#95;ENV -b unix:///tmp/web&#95;server.sock --pidfile /tmp/web&#95;server.pid -d
</pre>

Take note that Puma is running in Daemon mode with the `-d` parameter.

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>Should you have any issues, please ensure that you are using an up-to-date version of Puma with the correct configurations.</p>
    <p>We recommend that you run <a href="/web-server/unicorn-rack-server.html">Unicorn</a>, as you may have to handle server restarts manually with Puma.</p>
</div>

To solve the issue of manual restarts with Puma, you can use an <i>after_rails</i> [deploy hook](/deployment/deploy-hooks.html) to manually run the following command in case you find that it is not responding to the SIGUSR2 that Cloud 66 issues.
<pre class='terminal'>bundle exec pumactl -P /tmp/web_server.pid restart</pre>