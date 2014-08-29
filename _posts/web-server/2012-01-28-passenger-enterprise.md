---
layout: post
template: two-col
title:  "- Passenger Enterprise"
so_title: "passenger"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2031-11-05 15:33:13
categories: web-server
lead: Cloud 66 supports deploying with Passenger Enterprise
search-tags: ['']
tags: ['Web server']
---

## What is Passenger Enterprise?  
## Deploy with Passenger Enterprise

## Introduction

Passenger is an open-source, popular multi-language (Ruby, Python, Node) web & app server which can integrate into Apache and Nginx. Cloud 66 offers enterprise customers the ability to deploy stacks with Passenger Enterprise, which has several key benefits:

- Rolling restarts
- Concurrency and multi-threading
- Deployment error resistance
- Mass deployment
- Live IRB console
- Resource control and limiting
- Ruby debugger support

Please see the [Passenger Enterprise website](https://www.phusionpassenger.com/enterprise) for more information about benefits.

## Deploying with Passenger Enterprise

We require two simple steps to deploy with Passenger Enterprise:

1. Place your `passenger-enterprise-license` file into your .cloud66, which in turn is located in the root of your repository.

2. Add a `PASSENGER_ENTERPRISE_DOWNLOAD_TOKEN` [environment variable](/stack-features/env-vars.html) which contains the value of your Passenger Enterprise download token.

If both these conditions are met, any Passenger-based server is deployed with the Enterprise edition installed.

<div class="notice">
    <h3>Important</h3>
    <p>We recommend that you choose Passenger Enterprise as your web server at the time of initial build of the stack. If you already have a stack, please <a href="/stack-features/horizontal-scaling.html">scale up</a> to a new application server and scale down the old one to add Passenger Enterprise.</p>
</div>

You will then see Passenger Enterprise listed on your _Stack information_ page:

![Passenger enterprise](http://cdn.cloud66.com/images/help/passenger_enterprise.png)