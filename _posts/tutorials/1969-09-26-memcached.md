---
layout: post
template: two-col
title:  "Memcached"
date:   1920-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories:
lead: Improve application performance with Memcached
search-tags: ['']
tags: ['Deployment']
tutorial: true
---

[Memcached](http://memcached.org/) is a distributed key/value caching system, intended for use in speeding up dynamic web applications by alleviating database load.

To illustrate the benefits of using Memcached we'll consider the simple example below, where a user is visiting your application. This stack has a load balancer, 2 web servers (each with Memcached) and a MySQL database.

![Memcache architecture](http://cdn.cloud66.com/images/help/memcache_architecture.png)

Reaching _web server 2_ for the first time, the web server will have to query the database for some data. It will first check Memcached to see if this data exists in cache, and as it doesn't, it will retrieve it straight from the MySQL database.

Once this data has been extracted, it will be cached with Memcached for future use, meaning that the database won't need to be queried for frequently used data. By definition, having a Memcached instance on every web server will allow for distributed caching - if a key/value is not available on the local cache it will check another web server on which the key/value exists.

<div class="notice">
    <h3>Notice</h3>
    <p>Having Memcached as a separate server will not improve performance the way it does for databases such as PostgreSQL or MySQL.</p>
</div>