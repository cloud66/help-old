---
layout: post
template: two-col
title:  "Choosing your server size"
nav_sticky: true
nav: true
nav_prev: ""
nav_next: ""
date:   2019-02-09 15:30:22
categories: 
lead: Choosing your server size
tags: ['Deployment']
tutorial: true
difficulty: 0
---

When deploying your stack, you are asked to specify a server size for the deployment. If you're testing Cloud 66, you may be inclined to do so on as small a server as possible. <b>We recommend that you do not do this, as this will come at a detriment to your experience with the service.</b>

When your stack is built for the first time, a number of packages are built from source, along with other memory intensive operations. Though we create a [swap file](http://www.computerhope.com/jargon/s/swapfile.htm) on small servers by default, to avoid it running out of memory, running on low resources will cause your build to take longer than normal.

## Under-powered server sizes (not recommended)

### Amazon Web Services
- t1.micro
- t2.micro

### Cloud-A
- 512 MB - General Purpose

### DigitalOcean
- 512MB - 1 CPU

### Google Compute Engine
- f1-micro

### Microsoft Azure
- A0

### Rackspace
- 512MB Standard Instance
- 512MB Standard Instance (HVM)

### Vexxhost
- nb.512M

**We suggest using a server with at least 1GB of memory and 4 cores**

Depending on whether or not you have deployed your application elsewhere, it may be hard to gauge the amount of resources that you need. On a PaaS like Heroku for example, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your stack with Cloud 66. We also recommend that you have a seperate server for your database in production environments.

If you have yet to deploy your application in a production environment, you can deploy to a reasonably sized server and use [load testing](/articles/optimizing-for-server-load) to determine your exact needs.