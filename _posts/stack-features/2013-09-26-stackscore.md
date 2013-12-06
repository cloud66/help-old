---
layout: post
template: two-col
title:  "StackScore"
nav_sticky: false
date:   2038-01-25 16:27:22
categories: stack-features
lead: Helping you improve your stack
---


## Your application reliability score

StackScore&trade; is an <b>A</b> to <b>F</b> score that provides an indication of how reliable, resilient and performant your application is when deployed on your servers.

![Cloud 66 StackScore](http://cdn.cloud66.com.s3.amazonaws.com/images/help/stackscore_overall.png)

StackScore&trade; consists of five key metrics, each scored from <b>A</b> to <b>F</b>:

- **Code**: Ensures your code does not have security issues
- **Backup and data integrity**: Ensures you have [database backups](/stack-features/db-backup.html) set up
- **Connectivity**: Checks whether or not you are sharing your frontend and backend on the same server
- **Performance**: Checks for whether or not you have [load balancers](/stack-features/load-balancers.html) set up
- **Security**: Checks for open ports on your firewall

The overall StackScore&trade; is the lowest of the scores across these five metrics:

![Cloud 66 StackScore](http://cdn.cloud66.com.s3.amazonaws.com/images/help/stackscore_detail.png)

### Code
This uses a combination of known security vulnerabilities and [Gemnasium](https://gemnasium.com/).

### Backups and data integrity
This tracks whether or not you are backing up your databases. Managed Backups will score <b>A</b>, manual backups will get a <b>B</b> and no backups will fail with an <b>F</b>. Regularity of backups also plays a part in the score.

### Connectivity
This metric will look at how your servers are arranged: sharing a database server with frontend web servers will get a C while dedicated servers pass with an <b>A</b>. This will be affected by the memory you have on your servers and other factors.

### Performance
Performance looks at load balancing. Having load balancers is an <b>A</b> while not having one will score a D. Web server configuration metrics also affects this metric.

### Security
This metric tracks your firewall settings. Leaving shell ports to external IP addresses is an <b>F</b> while locking your servers down gets better scores.

<div class="notice">
	<h3>Important</h3>
	<p>Always try to keep your stacks at an <b>A</b> StackScore&trade; level.</p>
</div>

## It is a dynamic score

We will improve and add more details to the StackScore&trade; information both based on what we find about your stacks and also about the threats and trends we see in the bigger picture of all of our customers and cloud vendors.

This means your StackScore&trade; will change over time and you should always try to have all <b>A</b>s!
