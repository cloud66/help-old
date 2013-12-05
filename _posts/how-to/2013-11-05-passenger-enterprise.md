---
layout: post
template: two-col
title:  "Deploy with Passenger Enterprise"
date:   2013-11-05 15:33:13
categories: how-to
lead: Cloud 66 supports deploying with Passenger Enterprise
---


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

2. Add a `PASSENGER_ENTERPRISE_DOWNLOAD_TOKEN` [environment variable](/stack-features/using-env-vars.html) which contains the value of your Passenger Enterprise download token.

If both these conditions are met, any Passenger-based server is deployed with the Enterprise edition installed.