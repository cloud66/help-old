---
layout: post
template: two-col
title:  "Stack definition"
nav: true
cloud66_text: "Try Cloud 66 for free"
date:   2038-01-25 16:27:22
categories: stack-definition
lead: 
search-tags: ['']
tags: ['']
---

## What is a stack?
A web application stack is a set of hardware and software components needed for your application to run. Each level of the stack represents an abstraction layer that provides a high-level overview of your setup.

For example, your stack might be comprised of a load balancer, a number of web servers, process and database servers, your operating system and finally the hardware provided by your cloud vendor:

![Cloud 66 Stack](http://cdn.cloud66.com/images/help/cloud66_stack.png)

## Stack components
You are offered a certain degree of freedom when choosing the different components of your stack.

#### Load balancer (optional)
A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

The type of [load balancer deployed in your stack](/add-ins/load-balancer.html) is dependent on your cloud provider.

#### Web servers
By default, your applications are served with Nginx and Phusion Passenger, and you are also free to [customize this selection](/web-server/custom-webserver.html). You can [scale your web server](/stack-features/horizontal-scaling.html) with the click of a button.

#### Background workers (optional)
To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes. Cloud 66 makes it easy for you to [control and monitor these processes](/stack-features/proc-files.html), as well as [scale them](/stack-features/standalone-process-servers.html) at the click of a button.

#### Database servers (optional)
You can choose between any of four supported databases when deploying your application with Cloud 66:

- MySQL
- PostgreSQL
- MongoDB
- Redis

In addition to deploying these databases, we also make it easy for you to [backup](/add-ins/backups.html) and [verify your backups](/stack-features/backup-verifiers.html), as well as [scale](/stack-features/database-replication.html).

#### Operating system
Your servers will be deployed with <b>Ubuntu 12.04</b>, and future releases may add support for other distributions. On the operating system level, we allow you to [monitor disk, CPU and memory](/stack-features/server-monitoring.html) right from our dashboard.

#### Cloud vendor
For more information about this level of abstraction, please see either [deploying to your cloud](/getting-started/supported-clouds.html) or [deploying to your own servers](/getting-started/standalone-servers.html).

## Stack environments
To reflect the different stages of development, Cloud 66 lets you deploy your stacks in different environments:

* **Development**<br/>
Use this when you're developing your application. It is always <b>free</b> to deploy servers in development on Cloud 66.
* **Production**<br/>
For live applications.
* **QA**<br/>
Used for quality assurance.
* **Staging**<br/>
Mirrors the production environment but is only used for testing.

Depending on your application configuration, it will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` which contains settings for each environment.

#### Default Environments

By default, Cloud 66 supports the following environments:

* Development
* QA
* Staging
* Production

With the exception of _development_, there is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

For example, if you have a Rails application, selecting a stack to be _staging_ will result in `RAILS_ENV` to be set to `staging`.

#### Development Environments

Development environments are free of charge on Cloud 66, and are restricted in the following ways:

* You cannot setup database backups for development stacks
* Development stacks don't support [load balancing](/add-ins/load-balancer.html) or [scaling of frontend](/stack-features/horizontal-scaling.html), [background processes](/stack-features/standalone-process-servers.html) or [database replication](/stack-features/database-replication.html).

#### Custom Environments

You can define your own environments on Cloud 66. To do so, click on the _Custom Environments_ item under the _Account_ menu.

<img src="http://cdn.cloud66.com/images/help/custom_environment_menu_item.png" width="233" height="228"/>

Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack.

<img src="http://cdn.cloud66.com/images/help/custom_environment_dropdown.png" width="476" height="160">

Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` having the correct values. The usage of those custom values is up to your application.


## About using stacks with servers in different regions
There are several options to consider when dealing with the infrastructure of a multi-region stack. The most challenging part is related to the application - the infrastructure usually caters for how the application is designed to deal with scalability.

When it comes to multi-region servers, having a load balancer that distributes traffic between multiple geographical regions is the easy part and can be setup with [CustomConfig for HAProxy](/how-to/haproxy-customconfig.html). However, the big challenge is how to deal with data.

These are the possible scenarios:

1. For a static website with no database backing it, the best option is to use geographical DNS providers to distribute the traffic based on the visitor's location. Feel free to <a href="mailto:support@cloud66.com">contact us</a> and we'll help you find the best DNS provider for your needs.

2. For a website with no write operations to a database, the most viable option is to have a [read-only replication](/stack-features/database-replication.html) across different geographical locations serving local web servers.

3. For an application that has to both read and write to the database, you can either shard the data based on some algorithm that suits your requirements or have a master/master database setup which is globally distributed.

The biggest challenge in these scenarios is dealing with the data availability across geographical regions without having unacceptable latencies.

Feel free to <a href="mailto:support@cloud66.com">contact us</a> if you would like more specific advice about multi-region stacks.

## About using production data on a staging stack
## What is StackScore?
StackScore&trade; is an <b>A</b> to <b>F</b> score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers.

![Cloud 66 StackScore](http://cdn.cloud66.com/images/help/stackscore_overall.png)

StackScore&trade; consists of five key metrics, each scored from <b>A</b> to <b>F</b>:

- **Code**: Ensures your code does not have security issues
- **Backup and data integrity**: Ensures you have [database backups](/add-ins/backups.html) set up
- **Connectivity**: Checks whether or not you are sharing your frontend and backend on the same server
- **Performance**: Checks for whether or not you have [load balancers](/add-ins/load-balancer.html) set up
- **Security**: Checks for open ports on your firewall

## StackScore factors

The overall StackScore&trade; is the lowest of the scores across these five metrics:

![Cloud 66 StackScore](http://cdn.cloud66.com/images/help/stackscore_detail.png)

#### Code
This uses a combination of known security vulnerabilities and [Gemnasium](https://gemnasium.com/).

#### Backups and data integrity
This tracks whether or not you are backing up your databases. Managed Backups will score <b>A</b>, manual backups will get a <b>B</b> and no backups will fail with an <b>F</b>. Regularity of backups also plays a part in the score.

#### Connectivity
This metric will look at how your servers are arranged: sharing a database server with frontend web servers will get a C while dedicated servers pass with an <b>A</b>. This will be affected by the memory you have on your servers and other factors.

#### Performance
Performance looks at load balancing. Having load balancers is an <b>A</b> while not having one will score a D. Web server configuration metrics also affects this metric.

#### Security
This metric tracks your firewall settings. Leaving shell ports to external IP addresses is an <b>F</b> while locking your servers down gets better scores.

<div class="notice">
	<h3>Important</h3>
	<p>Always try to keep your stacks at an <b>A</b> StackScore&trade; level.</p>
</div>

### It is a dynamic score

We will improve and add more details to the StackScore&trade; information both based on what we find about your stacks and also about the threats and trends we see in the bigger picture of all of our customers and cloud vendors.

This means your StackScore&trade; will change over time and you should always try to have all <b>A</b>s!

## Add a stack
## Edit stack properties
<h2 id="intro">Introduction</h2>
You can access your _Stack information_ page by clicking the _Settings_ cog:

![Stack information](http://cdn.cloud66.com/images/help/stack_information.png)

This page shows you general information about your stack and the different servers it consists of, along with application information and versions:

![Stack information page](http://cdn.cloud66.com/images/help/stack_information_page.png)

<h2 id="edit">Editing stack information</h2>

You can edit your stack name, Git repository and branch by clicking the _Edit_ button next to each field. Editing your stack name has an important implication.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>The internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.</p>
</div>

As such, you will have to update your DNS to point at the new address to keep your application accessible.

Your current server DNS can be found on your server page, which takes the format of <i>server_name</i>.<i>stack_name</i>.c66.me:

![Cloud 66 DNS](http://cdn.cloud66.com/images/help/cloud66_dns.png)
## Clone a stack
There are many reasons why you would want to create a clone of an existing stack - for example, you might want to deploy a production version of an existing development stack. Or you might want to [migrate from one region or data center to another](/how-to/migrate-across-dc.html).

Cloud 66 makes this process easy:
![Stack clone](http://cdn.cloud66.com/images/help/stack_clone.png)

You can choose a new environment to deploy to, as well as a new stack name:
![Stack clone modal](http://cdn.cloud66.com/images/help/stack_clone_modal.png)

Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.

## Delete a stack
## Define a custom environment
## Migrate a stack across data centers