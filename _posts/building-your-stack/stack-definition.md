---
layout: post
template: one-col
title:  "Stack definition"
nav: true
cloud66_text: "Try Cloud 66 for free"
date:   2038-01-25 16:27:22
categories: building-your-stack
lead: Everything you need to know about stacks
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What is a stack?</a>
	</li>
	<li>
		<a href="#components">Stack components</a>
	</li>
        <ul style="margin-bottom:0em">
	        <li><a href="#lb">Load balancer (optional)</a></li>
	        <li><a href="#web">Web servers</a></li>
	        <li><a href="#background">Background workers (optional)</a></li>
	        <li><a href="#db">Database servers (optional)</a></li>
	        <li><a href="#os">Operating system</a></li>
	        <li><a href="#cloud">Cloud vendor</a></li>
        </ul>
	<li>
		<a href="#envs">Stack environments</a>
	</li>
	<li>
		<a href="#stackscore">StackScore</a>
	</li>
	<li>
		<a href="#build">Build a stack</a>
	</li>
	<li>
		<a href="#edit">Edit stack properties</a>
	</li>
	<li>
		<a href="#clone">Clone a stack</a>
	</li>
	<li>
		<a href="#delete">Delete a stack</a>
	</li>
</ul>

<h2 id="what">What is a stack?</h2>
A web application stack is a set of hardware and software components needed for your application to run. Each level of the stack represents an abstraction layer that provides a high-level overview of your setup.

For example, your stack might be comprised of a load balancer, a number of web servers, process and database servers, your operating system and finally the hardware provided by your cloud vendor:

<p align="center"><img src="http://cdn.cloud66.com/images/help/cloud66_stack.png"></p>

<hr>

<h2 id="components">Stack components</h2>
You have a great degree of freedom when choosing the different components of your stack.

<h3 id="lb">Load balancer (optional)</h3>
A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

The type of [load balancer deployed in your stack](/web-server/load-balancing) is dependent on your cloud provider.

<h3 id="web">Web servers</h3>
By default, your applications are served with Nginx, and you are also free to [customize this selection](/web-server/custom-web-servers) for Rack-based stacks. You can [scale your web server](/deployment/scaling) with the click of a button.

<h3 id="background">Background workers (optional)</h3>
To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes. Cloud 66 makes it easy for you to [control and monitor these processes](/deployment/running-background-processes), as well as [scale them](/deployment/scaling) at the click of a button.

<h3 id="db">Database servers (optional)</h3>
You can choose between any of four supported databases:

- MySQL
- PostgreSQL
- MongoDB
- Redis

Cloud 66 makes it easy for you to [backup your database](/database-management/database-backup), [verify the backup](/database-management/backup-verification) and [replicate your databases](/database-management/database-replication).

<h3 id="os">Operating system</h3>
Your servers will be deployed with <b>Ubuntu 14.04 LTS</b>. On the operating system level, you can [monitor disk, CPU and memory](/managing-your-stack/server-monitoring) from the dashboard.

<h3 id="cloud">Cloud vendor</h3>
You can either [deploy to your cloud](/deployment/deploy-to-your-cloud) or [deploy to your own server](/deployment/deploy-to-your-own-server).

<hr>

<h2 id="envs">Stack environments</h2>
To reflect the different stages of your software, you can deploy your stacks in different environments:

* **Development**: Use this when you're developing your application
* **Production**: For live applications
* **QA**: Used for quality assurance
* **Staging**: Mirrors the production environment but is only used for testing

In addition to these environments, you can define your own environments from the _Account_ page, in the _Setting_ -> _Custom environment_ menu. Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack. Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` (for Rack-based stacks) having the correct values. The usage of those custom values is up to your application.

Depending on your configuration, your application will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` that contains settings for each environment.

With the exception of _development_, there is no difference between these environments when it comes to features and supported tools apart from what you define in your code. Development environments are free of charge on Cloud 66, and are restricted in the following regards:

* Database backups are disabled for development stacks
* Development stacks don't support load balancing or scaling of frontend, background processes or database replication

<hr>

<h2 id="stackscore">What is StackScore?</h2>
StackScore&trade; is a score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers. It consists of five key metrics that are graded from <b>A</b> to <b>F</b>, and the overall StackScore is the lowest of the scores across these five metrics.

- <b>Code:</b> Ensures your code does not have security issues by checking for known vulnerabilities.
- <b>Backups and data integrity:</b> This tracks whether or not you are backing up your databases (with managed and/or unmanaged backups), and whether or not you verify your backups.
- <b>Connectivity:</b> Checks whether or not you are sharing your frontend and backend on the same server. This is affected by how much memory you have on your servers, among other factors.
- <b>Performance:</b> Checks if you have a load balancer, as well as different server configuration metrics.
- <b>Security:</b> Tracks your firewall settings for potential security issues.

<div class="notice">
	<h3>Suggestion</h3>
	<p>Always try to keep your stacks at an <b>A</b> StackScore&trade; level to ensure stack health.</p>
</div>

Cloud 66 constantly seeks to update and improve the StackScore algorithm to consider new data points as well as external conditions, which means that your StackScore will change over time.

<hr>

<h2 id="build">Build a stack</h2>
To build your first stack, see our [Introduction to Cloud 66](/introduction-to-cloud-66/introduction-to-cloud-66). If you have existing stack(s), simply click _New Docker Stack_ from your Cloud 66 Dashboard.

<hr>

<h2 id="edit">Edit stack properties</h2>
You can access your _Stack information_ page from the right sidebar of your stack page. This page shows you general information about your stack, the different servers it consists of and information about your application.

It also allows you to edit your stack name, and you can edit your Docker service configuration under the _Service configurations_ menu on the stack details page. For Rack-based stacks, you can edit your Git repository and branch by clicking the _Edit_ button next to each field on the _Stack information_ page. Editing your stack name has an important implication.

<div class="notice notice-danger notice-standalone">
		<h3>Important</h3>
		<p>Internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.</p>
</div>

Unless you use [Failover groups](/network/failover-groups), you will have to update your DNS to point at the new address to keep your application accessible. By using Failover groups, this will be updated automatically for you.

<hr>

<h2 id="clone">Clone a stack</h2>
There are various reasons for cloning an existing stack - for example, you may want to deploy a production environment of an existing development stack, or migrate across regions or data centers.

To clone a stack, visit your stack page and click _Clone this stack_ from the right sidebar. This will allow you to choose a new stack name and environment. Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.

<hr>

<h2 id="delete">Delete a stack</h2>
<div class="notice notice-danger notice-standalone">
		<h3>Important</h3>
		<p>Deleting a stack will not delete your cloud servers - remember to delete the servers from your cloud account.</p>
</div>

To delete a stack, visit your stack page and click _Delete Stack_ from the right sidebar. You will have to confirm this action.