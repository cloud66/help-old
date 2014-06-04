---
layout: post
template: two-col
title:  "Scaling horizontally"
so_title: "scaling"
nav_sticky: false
date:   2088-01-25 16:27:22
categories: stack-features
lead: Scaling up your web servers is easy with Cloud 66
---

You can fire up additional web servers by clicking on the "+" button on the <i>Web servers</i> page.

<div class="notice">
		<h3>Important</h3>
		<p>This feature is only available if you have deployed using your cloud provider and you have added a <a href="/add-ins/load-balancer.html">load balancer</a> to your stack.</p>
</div>

![Scaling Web Servers](http://cdn.cloud66.com/images/help/horizontal_scaling.png)

Your new server(s) will be added to your load balancer automatically after they have completed provisioning and deployment - ready to serve traffic!

## Scale down your web servers
If you have scaled up additional web servers to deal with increased traffic, you can always scale down again. Simply click on the "-" button next to the server you want to shut down. This server will automatically be removed from your load balancer and terminated from your cloud provider.
Note that your primary (initially created) web server cannot be destroyed.
