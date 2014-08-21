---
layout: post
template: two-col
title:  "Scaling vertically"
so_title: "scaling"
nav_sticky: false
date:   2087-01-25 16:27:22
categories: web-server-deployment
lead: Scaling the size of an existing server
search-tags: []
tags: ['Scaling']
---

A number of cloud vendors allow you to scale up/down an existing server via their control panel, allowing you to increase or decrease the memory and CPU for existing servers.

Cloud 66 is compatible with this behaviour, and this is how you would go about accomplishing this:

- Shut down the server through your cloud vendor dashboard
- Change its size and start it up
- Wait 5 to 10 minutes for us to pick up the change, at which point you will be asked to redeploy

Please note that if you have a load balancer and are using AWS as your cloud vendor, this is slightly more complex. AWS load balancers use a unique identifier
for each server, which is updated when you change the size of the server.

Scaling vertically on AWS with the instructions above will therefore only work with backend servers but not app servers, as these are served via the
load balancer. For app servers, we recommend that you [scale up a new server](/stack-features/horizontal-scaling.html) (with your desired size) and then delete the old one.