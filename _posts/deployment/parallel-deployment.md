---
layout: post
template: one-col
title:  "Parallel deployments"
so_title: "parallel deployment"
nav_sticky: false
date:   2091-02-28 16:27:22
categories: deployment
lead: Save time by deploying the servers in your stack in parallel
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What is parallel deployment?</a>
	</li>
	<li>
		<a href="#configure">Configure parallel deployment</a>
	</li>
</ul>

<h2 id="what">What is parallel deployment?</h2>
When you deploy in parallel, all the deployment tasks for the servers in your stack will run in parallel as opposed to running in serial. In other words, the tasks will run against each server simultaneously instead of running on one server at a time. For large stacks, this can have significant time benefits.

Deploying in serial involves removing each server from your load balancer, deploying to it, and re-adding it to the load balancer. When you deploy in parallel, your servers won't be removed from the load balancer, because you could end up with no servers serving the load balancer if this were the case.

<div class="notice">
	<h3>Note</h3>
	<p>To run database migrations during deployment, it is advisable to deploy in serial.</p>
</div>

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations](/database-management/database-management) for more information.

<h2 id="configure">Configure parallel deployment</h2>
To activate parallel deployments, access your _Stack settings_ page and select _Redeploy in parallel_. Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your stack set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

Parallel deployments are activated by default for [Rack-based stacks with a custom web server](/web-server/custom-web-servers) (eg. Unicorn as it supports zero downtime restarts), but not for stacks based on Passenger.