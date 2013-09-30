---
layout: post
title:  "What is a Cloud 66 Stack?"
date:   2013-09-22 16:27:22
categories: [getting-started, stacks]
---

<p class="lead">Cloud 66 makes it easy to configure and deploy a set of non&mdash;proprietary tools in order to run and manage your Ruby on Rails apps</p>

![Cloud 66 Stack](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud66_stack.png)

## Cloud or Server

Cloud 66 connects to your servers directly through a secure SSH tunnel (on port 22).
You have the option of having Cloud 66 manage servers under your cloud provider or, using your existing standalone servers.

See the following for appropriate details:

- [Deploying to your cloud provider](/cloud-providers/supported-cloud-providers.html)
- [Deploying to your standalone servers](/stacks/standalone-servers.html)

## Operating System
- [Operating System Information](/stacks/operating-system-information.html)
- [Server Monitoring Information](/stacks/server-monitoring.html)

## Database Servers
- [Database Server Information](/stacks/databases.html)
- [Redis Server Information](/stacks/database-redis.html)

## Background Workers
Every server configured and deployed with Cloud 66 runs Bluepill, an open source and reliable daemon that ensures your background processes are always up and running.

With Simple Scale you can scale your processes up and down with a simple click.

Cloud 66 also [supports Procfiles](/stack-features/proc-files.html) to make it easier to define background processes you would like to run.

## Web Servers
Your Ruby on Rails apps are served with Nginx and Phusion Passenger.

You can add new instances to your web server farm using Simple Scale with a simple click in the web control panel.

## Load Balancers
Load Balancing is supported only if you use a cloud vendor. On Amazon Cloud 66 deploys and configures an AWS Elastic Load Balancer. On Joyent we deploy and configure HAProxy for load balancing. [More information on scaling behind a load balancer](/help/horizontal_scaling).