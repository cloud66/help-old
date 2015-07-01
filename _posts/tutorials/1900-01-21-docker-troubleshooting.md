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

Use [LiveLogs](http://help.cloud66.com/managing-your-stack/live-logs) from your stack page on Cloud 66 to check the logs from your containers. The <code>&#60;service&#62;_start_errors.log</code> logs should provide enough information to help you figure out why the container can't start.

<h2 id="access">Troubleshooting a container that has started</h2>
If your container has started, but isn't outputting the expected results, you can follow these steps to troubleshoot.

1. Use [LiveLogs](http://help.cloud66.com/managing-your-stack/live-logs) to check the log output from your containers.

2. Use the toolbelt to `exec` into the given container to troubleshoot:

<pre class="prettyprint">
cx containers exec -s &#60;stack&#62; &#60;container_id&#62; /bin/bash
</pre>

Once you're inside the container, you'll be able to verify why the server isn't running as expected.