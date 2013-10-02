---
layout: post
title:  "StackScore"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">A simple and easy to understand guide to improving performance, reliability and resilience of your applications deployed on your own servers.</p>

## Your application reliability score

StackScore&trade; is a score calculated automatically form <b>A</b> to <b>F</b> that tells you how reliable, resilient and performant your application is when deployed on your servers.

![Cloud 66 StackScore](http://cdn.cloud66.com.s3.amazonaws.com/images/help/stackscore_overal.png)

StackScore&trade; consists of 4 key metrics, each scored from <b>A</b> to <b>F</b>:

- Backup and Data Integrity
- Connectivity
- Performance
- Security

The overall StackScore&trade; is the lowest of the scores across these four metrics.

![Cloud 66 StackScore](http://cdn.cloud66.com.s3.amazonaws.com/images/help/stackscore_detail.png)

### Backups and Data Integrity
This tracks if you are backing up your databases. Managed Backups will score <b>A</b>, manual backups will get a B and no backups will fail with an <b>F</b>. Regularity of backups also plays a part in the score.

### Connectivity
This metric will look at how your servers are arranged: sharing a database server with frontend web servers will get a C while dedicated servers pass with an <b>A</b>. This will be affected by the memory you have on your servers and other factors.

### Performance
Performance looks at load balancing. Having load balancers is an <b>A</b> while not having one will score a D. Web server configuration metrics also affects this metric.

### Security
This metric tracks your firewall settings. Leaving shell ports to external IP addresses is an <b>F</b> while locking your servers down gets better scores.

<div class="notice">
	<h3>Important</h3>
	<p>Always try to keep your stacks at an A StackScore&trade; level.</p>
</div>

## It is a dynamic score

We will improve and add more details to the StackScore&trade; information both based on what we find about your stacks and also about the threats and trends we see in the bigger picture of all of our customers and cloud vendors.

This means your StackScore&trade; will change over time and you should always try to have all <b>A</b>s!
