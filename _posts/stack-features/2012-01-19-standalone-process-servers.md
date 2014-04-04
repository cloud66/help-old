---
layout: post
template: two-col
title:  "Standalone process servers"
so_title: "processes"
nav_sticky: false
date:   2082-01-25 16:27:22
categories: stack-features
lead: Scale your processes to standalone process servers
---

Your [processes](/stack-features/proc-files.html) are run on your web server by default:
![Processes in Dashboard](http://cdn.cloud66.com/images/help/processes_page.png)

Use the <i>Scale up</i> button on the process server page to add a standalone process server: <img src="http://cdn.cloud66.com/images/help/scale_up_button.png" align="middle">

You can now scale up/down processes on both the web server and the process server. For example, you may wish to move all processes to the standalone server by reducing the number of processes on the web server to zero and adding them to the process server.
![Standalone Process Server](http://cdn.cloud66.com/images/help/standalone_process_server.png)

The standalone server is very much like a web server as it needs all the code and dependencies for most workers. By default however, it will not serve web content.

If you would like the process server to serve web content, you can add a load balancer to your stack from either your stack page or by clicking on the process server (as seen below).
![Process Server Page](http://cdn.cloud66.com/images/help/process_server_page.png)

Once you have added a load balancer, you can toggle serving web content from your process server <i>On</i> and <i>Off</i> from the load balancer page:
![Load Balancer Page](http://cdn.cloud66.com/images/help/load_balancer_page.png)

You can at any point switch a server serving web content to being a process server by toggling the above setting to <i>Off</i>.




