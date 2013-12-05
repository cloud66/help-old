---
layout: post
template: two-col
title:  "Server Monitoring"
date:   2013-09-24 10:51:22
categories: stacks
lead: All servers provisioned and deployed with Cloud 66 are monitored for CPU, Memory and Disk Space
---


Your servers running in your stacks on Cloud 66 have basic monitoring for their CPU, Memory and Disk space usage. These vital signs are reported back to Cloud 66 every 30 minutes, and you can see them as a chart on your server page. We collect and keep only 1 week worth of data for each individual server.

![Cloud 66 Server Monitoring](http://cdn.cloud66.com.s3.amazonaws.com/images/help/vital_signs.png)

## Advanced Monitoring
If you would like to have more advanced monitoring on your servers, we suggest using services like [Server Density](http://serverdensity.com/) or [Scout App](https://scoutapp.com/). Alternatively since with Cloud 66 you always have full shell root access to your own servers, you can deploy and use your favourity monitoring tool like [Nagios](http://www.nagios.org/) as well.

## Cloud 66 Server Agent
Cloud 66 pushes its open sourced agent to all the servers it deploys. This is to facilitate gathering the operating information (such as CPU, Memory and Disk space usage), and to perform delegated tasks on your server (like database backups for instance).


