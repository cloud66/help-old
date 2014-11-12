---
layout: post
template: one-col
title:  "Memcached"
date:   2075-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: stack-add-ins
lead: Add Memcached to your stack with ease
search-tags: ['memcached']
tags: ['Add in']
---

## What is Memcached?
[Memcached](http://memcached.org/) is an open source, high-performance, distributed memory object caching system, and it's easy to add to your stack as an add-in.

## Add Memcached
To add Memcached to your stack, access the add-ins menu, click _Memcached_ and confirm the installation.

## Customize Memcached
To customize Memcached, use the following syntax in your [manifest file](/building-your-stack/manifest-files):

<pre class="terminal">
production:
    memcached:
        shared&#95;group: db
        configuration:
            memory: 1024
            port: 11215
            listen&#95;ip: 127.0.0.1
</pre>