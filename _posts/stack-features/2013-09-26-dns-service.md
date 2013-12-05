---
layout: post
template: two-col
title:  "DNS Service"
nav_sticky: false
nav: true
nav_prev: ""
nav_next: ""
date:   2038-03-28 16:27:22
categories: stack-features
lead: Use our DNS service for your stack servers
---

## Server Names
Every server fired up with Cloud 66 has a unique animal-themed name. This should help you find and identify your server quickly in your stack.

All servers are accessible by their Cloud 66 DNS name:

<p><kbd>[server&#95;name].[stack&#95;name].[environment].c66.me</kbd></p>

For example, the DNS could look like this:

<p><kbd>tiger.myapp.test.c66.me</kbd></p>

## Load Balancer Names
Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like this:

<p><kbd>[stack&#95;name].[environment].c66.me</kbd></p>

For example, the DNS could look like this:

<p><kbd>myapp.test.c66.me</kbd></p>

Production stacks don't have the environment in their names. For example:

<p><kbd>myapp.c66.me</kbd></p>


