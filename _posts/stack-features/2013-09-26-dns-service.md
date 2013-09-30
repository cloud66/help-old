---
layout: post
title:  "Cloud 66 DNS Service"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Cloud 66 provides a free DNS service for all servers and load balancers running under your stacks</p>

## Server Names
Every server fired up with Cloud 66 has a unique animal themed name. This should help you find and identify your server quicker in your stack.

All servers are accessible by their Cloud 66 DNS name:

<p><kbd>[server_name].[stack_name].[environment].c66.me</kbd></p>

so that would be something like:

<p><kbd>tiger.myapp.test.c66.me</kbd></p>

## Load Balancer Names
Load Balancers also get a name from Cloud 66 DNS. The load balancer names look like this:

<p><kbd>[stack_name].[environment].c66.me</kbd></p>

so that would be something like

<p><kbd>myapp.test.c66.me</kbd></p>

Production stacks don't have the environment in their names. For example:

<p><kbd>myapp.c66.me</kbd></p>


