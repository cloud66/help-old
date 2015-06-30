---
layout: post
template: two-col
title:  "Docker container troubleshooting"
so_title: "docker"
date:   1905-09-26 15:33:13
categories: 
lead: How to troubleshoot Docker container issues
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#start">Troubleshooting a container that won't start</a>
	</li>
	<li>
		<a href="#access">Troubleshooting a container that has started</a>
	</li>
</ul>

<h2 id="start">Troubleshooting a container that won't start</h2>

When you deploy your Docker stack with Cloud 66, the containers created from your image may have issues starting, and this guide will walk you through how to troubleshoot this. You should ensure that your [containers run in development](http://blog.cloud66.com/running-docker-in-development/) before deploying with Cloud 66, as this will avoid the most common issues.

<ol>
<li>Start by <a href="http://help.cloud66.com/managing-your-stack/ssh-to-your-server">SSHing to your server</a>.</li>
<li>We will automatically output the logs for your container start process to <code>/var/log/containers</code> on your host.<br/><br/>

The log files are named in the following convention: <code>&#60;service&#62;_start_errors.log</code>. These log files are a good starting point in understanding why your service cannot start.</li>

<li>Check for any running containers with <code>docker ps</code> - if the container isn't running, there may be an issue preventing it from starting.</li>

<li>In this case, we can run <code>docker ps -a</code> to check for old containers that have failed to start (or are no longer running). Take note of the container ID for your latest deployment, as we'll need it in the next step.</li>
<li>Now let's check the log of that failed container by running <code>docker logs &#60;container-id&#62;</code> - this will contain any error messages that will tell you why the container couldn't start.</li>
</ol>

<h2 id="access">Troubleshooting a container that has started</h2>
If your container has started, but isn't outputting the expected results, you can follow these steps to troubleshoot.

1. Identify the container in question by running `docker ps`, and then run <code>docker logs &#60;container-id&#62;</code> to see any log output from that container.

2. It may be that the server inside your container is experiencing issues - to troubleshoot this, we'll [attach to the container with the toolbelt](http://help.cloud66.com/toolbelt/toolbelt-container-management#container-attach) and see what's happening:

<pre class="prettyprint">
cx containers attach -s &#60;stack&#62; &#60;container id&#62;
</pre>

Once you're inside the container, you'll be able to verify why the server isn't running as expected. 