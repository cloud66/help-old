---
layout: post
template: one-col
title:  "How to deal with a failover stack"
so_title: "migrate"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1913-09-26 15:33:13
categories: 
lead: Migrating your stacks is easy with Cloud 66
search-tags: ['']
tags: ['Stack failover']
tutorial: true
difficulty: 2
---

Having a failover stack can help you prevent unwanted downtime should your primary stack become unresponsive, for anything from hardware to networking issues. Follow this guide to setup your failover stack, and how to use it if necessary.

<div class="notice notice-danger">
  <h3>Important</h3>
  <p>This is a complex procedure, and we recommend that you test it in a staging environment to reduce any potential downtime.</p>
</div>

<h2>Setup the failover stack</h2>
As with any migration, you will need to deal with moving your code, data and traffic. 

<h3>1. Code</h3>
[Clone your existing stack](http://help.cloud66.com/stack-definition/stack-definition.html#clone) to a different cloud vendor or data center, and set it into [maintenance mode](http://help.cloud66.com/stack-definition/network-configuration.html#maintenance) to prevent it from serving content. We highly recommend that you build a stack with similar server specifications to your main stack to avoid issues during a switch. 

<h3>2. Data</h3>
Enable [database replication between your stacks](http://help.cloud66.com/database-management/database-replication.html) - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 

<h3>3. Traffic</h3>
Use [Elastic Address](http://help.cloud66.com/dns/elastic-address.html) to make it easy for you to switch between stacks. By pointing your domain at the Elastic Address, you will be able to switch your traffic between stacks at the click of a button.

<h2>How to use the failover stack</h2>
If and when your main stack fails, you will need to switch to the failover stack.

1. Set your main stack into [maintenance mode](http://help.cloud66.com/stack-definition/network-configuration.html#maintenance), to prevent new data being written to it.
2. Turn off the [database replication](http://help.cloud66.com/database-management/database-replication.html#disable).
3. Make your [database slave a master](http://community.cloud66.com/articles/postgresql-failover-procedure) - this will allow data to be written to the database.
4. Turn off [maintenance mode](http://help.cloud66.com/stack-definition/network-configuration.html#maintenance) on your failover stack.
5. Use your [Elastic Address](http://help.cloud66.com/dns/elastic-address.html) menu to switch your traffic to the failover stack. The TTL on the Elastic Address is 5 minutes, so you should see your users on the new stack momentarily.