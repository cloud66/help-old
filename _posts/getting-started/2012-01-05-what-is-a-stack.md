---
layout: post
template: two-col
title:  "What is a stack?"
nav_sticky: true
nav: true
nav_prev: "/getting-started/supported-frameworks.html"
nav_next: "/getting-started/your-first-stack.html"
date:   2038-01-25 16:27:22
categories: getting-started
lead: Cloud 66 makes it easy to configure and deploy your stack
---

A web application stack is a set of hardware and software components needed for your application to run. Each level of the stack represents an abstraction layer that provides a high-level overview of your setup.

For example, your stack might be comprised of a load balancer, a number of web servers, process and database servers, your operating system and finally the hardware provided by your cloud vendor:

![Cloud 66 Stack](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud66_stack.png)

You are offered a certain degree of freedom when choosing the different components of your stack.

## Load balancer (optional)
A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

The type of [load balancer deployed in your stack](/stack-features/load-balancers.html) is dependent on your cloud provider.

## Web servers
By default, your applications are served with Nginx and Phusion Passenger, and you are also free to [customize this selection](/web-server/custom-webserver.html). You can [scale your web server](/stack-features/horizontal-scaling.html) with the click of a button.

## Background workers (optional)
To relieve pressure from your application, we recommend that you use background workers to run memory-intensive processes. Cloud 66 makes it easy for you to [control and monitor these processes](/stack-features/proc-files.html), as well as [scale them](/stack-features/standalone-process-servers.html) at the click of a button.

## Database servers (optional)
You can choose between any of four supported databases when deploying your application with Cloud 66:

- MySQL
- PostgreSQL
- MongoDB
- Redis

In addition to deploying these databases, we also make it easy for you to [backup](/stack-features/db-backup.html) and [verify your backups](/stack-features/backup-verifiers.html), as well as [scale](/stack-features/database-replication.html).

## Operating system
Your servers will be deployed with <b>Ubuntu 12.04</b>, and future releases may add support for other distributions. On the operating system level, we allow you to [monitor disk, CPU and memory](/stack-features/server-monitoring.html) right from our dashboard.

## Cloud vendor
For more information about this level of abstraction, please see either [deploying to your cloud](/getting-started/supported-clouds.html) or [deploying to your own servers](/getting-started/standalone-servers.html).