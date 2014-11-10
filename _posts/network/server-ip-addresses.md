---
layout: post
template: one-col
title:  "Server IP addresses and hostnames"
so_title: "ip addresses"
nav_sticky: false
date:   2086-01-25 16:27:22
categories: network
lead: We keep track of your IP addresses for you
search-tags: []
tags: ['DNS']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#agent">Cloud 66 Agent</a>
	</li>
	<li>
		<a href="#new">New IP addresses</a>
	</li>    
	<li>
		<a href="#hosts">Cloud 66 hostnames</a>
	</li>    
	<li>
		<a href="#finding">Finding your Cloud 66 hostname</a>
	</li>    		     
</ul>

<h2 id="agent">Cloud 66 Agent</h2>
<div class="notice">
    <h3>Important</h3>
    <p>Some cloud providers assign a new IP address to restarted servers</p>
</div>

Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the `WEB_ADDRESS_INT` and `WEB_ADDRESS_EXT` environment variables (among others) when necessary.

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB&#95;ADDRESS environment variable, which by default is set to `{{WEB_ADDRESS_INT}}` but can be modified by the user.

<h2 id="new">New IP addresses</h2>

If the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address subsequently change, we are notified by the agent, which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, ActiveProtect is reconfigured and DNS records are updated accordingly. Furthermore, if required, the load balancer is updated to serve the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the stack.


<h2 id="hosts">Cloud 66 hostnames</h2>

Every server fired up with Cloud 66 has a unique animal-themed name. This should help you find and identify your server quickly in your stack. All servers are accessible by their Cloud 66 DNS name: `[server_name].[stack_name].[environment].c66.me`. For example, the DNS could look like `tiger.myapp.test.c66.me`.

Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like `[stack_name].[environment].c66.me`. For example, the DNS could look like: `myapp.test.c66.me`. Production stacks don't have the environment in their names, for example `myapp.c66.me`.

<h2 id="finding">Finding your Cloud 66 hostname</h2>
To find your Cloud 66 hostname, start by visiting your stack detail page. From there, click into the web server group for the server you would like the hostname for (eg. _Rails server_). Next, click the name of your server. This page displays your server _Primary address_ (hostname) as well as the _Secondary address_ (IP address).