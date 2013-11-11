---
layout: post
title:  "Server IP Addresses"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Cloud 66 automatically generates and updates environment variables for your server IP addresses</p>

## Cloud 66 Agent
<div class="notice">
    <h3>Important</h3>
    <p>Some cloud providers will assign a new IP address to restarted servers.</p>
</div>

Cloud 66 automatically detects the internal and external IP addresses of your servers through an agent installed on each server. This agent sends information about your server back to us at a 5 minute interval, which is used to auto-generate the WEB&#95;ADDRESS&#95;INT and WEB&#95;ADDRESS&#95;EXT [environment variables](/stack-features/auto-generated-env-vars.html) (among others) when necessary.

<div class="notice">
    <h3>Note</h3>
    <p><b>Linode users:</b> In order to enable Linode internal networking, you need to manually modify your "/etc/network/interfaces" file as described in the <a href="https://library.linode.com/networking/configuring-static-ip-interfaces">Linode documentation</a>.</p>
</div>

To allow users the flexibility of choosing which one to use in their application, we also provide a WEB&#95;ADDRESS environment variable, which by default is set to {% raw %} `{{WEB_ADDRESS_INT}}` {% endraw %} but can be modified by the user.

#### New IP addresses


In the case that the agent fails to send us information for 20 minutes, the server owner is notified by email. Should the server IP address change, we are notified by the agent which in turn updates the environment variables affected.

If the new IP address is reachable, Cloud 66 ensures that firewall rules are reconstructed, fail2ban is reconfigured and DNS records are updated accordingly. Furthermore, if required, the load balancer is updated to serve the server on the new IP address. Once this process is complete, the server owner receives a notification of success by email and will be encouraged to redeploy the stack.