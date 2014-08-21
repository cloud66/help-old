---
layout: post
template: two-col
title:  "Server IP addresses"
so_title: "ip addresses"
nav_sticky: false
date:   2086-01-25 16:27:22
categories: dns
lead: We keep track of your IP addresses for you
search-tags: []
tags: ['DNS']
---

## Cloud 66 Agent
<div class="notice">
    <h3>Important</h3>
    <p>Some cloud providers assign a new IP address to restarted servers</p>
</div>

Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the `WEB_ADDRESS_INT` and `WEB_ADDRESS_EXT` [environment variables](/stack-features/env-vars.html#auto-gen) (among others) when necessary.

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB&#95;ADDRESS environment variable, which by default is set to {% raw %} `{{WEB_ADDRESS_INT}}` {% endraw %} but can be modified by the user.

## New IP addresses

If the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address subsequently change, we are notified by the agent, which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, ActiveProtect is reconfigured and DNS records are updated accordingly. Furthermore, if required, the load balancer is updated to serve the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the stack.
