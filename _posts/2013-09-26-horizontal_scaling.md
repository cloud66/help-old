---
layout: post
title:  "Scaling Horizontally"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Scaling up your web servers is super easy with Cloud 66</p>

You can fire up additional web servers by clicking on the "+" button of the Web Servers page.

<div class="notice">
		<h3>Important</h3>
		<p>This feature is only available if you have deployed using your cloud provider, and you have a load balancer on your stack. Don't fret if you haven't added a load balancer yet, it's <a href="/help/load_balancers">really easy to do</a></p>
</div>

![Scaling Web Servers](http://cdn.cloud66.com.s3.amazonaws.com/images/help/server_scaling.png)

Your new server(s) will be added to your load balancer automatically after they have completed provisioning and deployment - ready to serve traffic!

## Scale down your Web Servers
If you have scaled up additional web servers to deal with increased traffic, you can always scale down again. Simply click on the "-" button next to the server you want to shut down. This server will automatically be removed from your load balancer and terminated from your cloud provider.
Note that your primary (initially created) web server cannot be destroyed.
