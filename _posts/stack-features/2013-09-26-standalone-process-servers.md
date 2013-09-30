---
layout: post
title:  "Standalone Process Servers"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Scale your processes to standalone process servers</p>

## Scaling Process Servers
As you can see below, your processes are run on your web server by default. See [Running Background Processes](/stack-features/proc-files.html) to learn more about processes.
![Processes in Dashboard](http://cdn.cloud66.com.s3.amazonaws.com/images/help/processes_page.png)

Use the ![Scale Up Button](http://cdn.cloud66.com.s3.amazonaws.com/images/help/scale_up_button.png) button on the process server page to add a standalone process server.
![Standalone Process Server](http://cdn.cloud66.com.s3.amazonaws.com/images/help/standalone_process_server.png)

You can now scale up/down processes on both the web server and the process server. For example, you may wish to move all processes to the standalone server by reducing the number of processes on the web server to zero and adding them to the process server.

The standalone server is very much like a web server as it needs all the code and dependencies for most workers. By default however, it will not serve web content.

If you would like the process server to serve web content, you can add a load balancer to your stack from either your stack page or by clicking on the process server (as seen below).
![Process Server Page](http://cdn.cloud66.com.s3.amazonaws.com/images/help/process_server_page.png)

Once you have added a load balancer, you can toggle serving web content from your process server "On" and "Off" from the load balancer page:
![Load Balancer Page](http://cdn.cloud66.com.s3.amazonaws.com/images/help/load_balancer_page.png)

You can at any point switch a server serving web content to being a process server by toggling the above setting to "Off".




