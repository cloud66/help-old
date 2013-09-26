---
layout: post
title:  "Load Balancers"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Adding a load balancer to your stack is as easy as clicking a button</p>

## Add a Load Balancer
To add a load balancer, click on the 'Add Load Balancer' link in the Protips of the stack.

![Add Load Balancer](http://cdn.cloud66.com.s3.amazonaws.com/images/help/load_balancer_protip.png)

Now wait a couple of minutes and your load balancer will be ready to distribute the load between your web servers.

<div class="notice">
	<div class="notice-header">
		<b>Important</b>
	</div>
	<div class="notice-body">
		<p>This feature is only available if you have deployed your stack using a cloud provider. <strong>All your existing web servers</strong> will automatically be added to the load balancer</p>
	</div>
</div>

## Deploying with a Load Balancer

Once you have a load balancer on your stack, your deployments will now take place in serial to reduce downtime. Each server will be first removed from the load balancer, then deployed to, then added back into the load balancer in sequence. This all takes place automatically!