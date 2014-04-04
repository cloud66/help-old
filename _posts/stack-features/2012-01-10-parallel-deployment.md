---
layout: post
template: two-col
title:  "Parallel deployments"
so_title: "parallel deployment"
nav_sticky: false
date:   2091-02-28 16:27:22
categories: stack-features
lead: Save time by deploying the servers in your stack in parallel
---

By deploying in parallel, all the deployment tasks for the servers in your stack will run in parallel as opposed to running in serial.
In other words, the tasks will run against each server simultaneously instead of running on one server at a time.

<div class="notice">
	<h3>Note</h3>
	<p>Users with existing stacks must opt-in to deploy in parallel.</p>
</div>

Parallel deployment is a _Stack setting_ that is activated by default for new [stacks with a custom web server](/web-server/custom-webserver.html) (ie. Unicorn as it supports zero downtime restarts), but not for stacks based
on [Passenger](/web-server/custom-webserver.html). New stacks based on Passenger must opt-in to deploy in parallel.

![Parallel deploy](http://cdn.cloud66.com/images/help/parallel_deploy.png)

When set to deploy in parallel, you still have the option to do a one-off deployment in serial on the _Deploy with options_ menu.

![Parallel deploy](http://cdn.cloud66.com/images/help/parallel_deploy_option.png)

Deploying in parallel means that servers won't be removed and re-added to your load balancer during deployment, as happens when you deploy in serial. This is
because you could end up with no servers serving the load balancer if this were the case.

<div class="notice">
	<h3>Note</h3>
	<p>If you need database migrations to run on deployment, it may be better to deploy in serial.</p>
</div>

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations](/how-to/control-db-migration.html) for more information.