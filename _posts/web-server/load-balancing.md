---
layout: post
template: one-col
title: "Load balancing"
date: 2040-09-26 15:33:13
categories: web-server
lead: Improve the reliability of your stack
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What is load balancing? </a>
	</li>
	<li>
		<a href="#add">Add a load balancer</a>
	</li>
</ul>

<h2 id="what">What is load balancing?</h2>
A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

Depending on which cloud provider you use, this load balancer will be set up differently:

- **Amazon AWS**: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- **DigitalOcean**: [HAProxy](http://haproxy.1wt.eu/)
- **Google Cloud Engine**: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- **Linode**: [NodeBalancer](https://www.linode.com/nodebalancers/)
- **Microsoft Azure**: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- **Rackspace**: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- **Vexxhost**: [HAProxy](http://haproxy.1wt.eu/)
- **CloudA**: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. <strong>All your existing web servers</strong> will automatically be added to the load balancer.

<h2 id="add">Add a load balancer</h2>
<div class="notice">
	<h3>Note</h3>
	<p>This feature is only available if you have deployed using a cloud vendor, and for non-development stacks.</p>
</div>

To add a load balancer to your stack, start by visiting your stack detail page. Next, navigate to the add-ins page by clicking _Install add-ins_ in the right sidebar. On the next page, clicking _Load balancer_ will display a brief summary of what will happen next. Click _Install load balancer_ to add a load balancer.