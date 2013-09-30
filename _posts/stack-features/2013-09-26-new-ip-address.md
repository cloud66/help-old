---
layout: post
title:  "New server IP address"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">If you restart a server on your cloud provider or for intance assign an Elastic IP address to an Amazon server, your server will get a new IP address. "What will happen on Cloud 66 side for my managed servers?" It is automated ! Below some details.</p>

## Cloud 66 Agent

When an IP address changed on a server managed by Cloud 66, it will be automatically detected by the Cloud 66 Agent (located on the server). Then it will send the new IP address to the Cloud 66 application.
This one will try to reach the new IP address and if it can't, the server owner will get notified by email. If the IP address is reachable, the firewall rules will be  reconstructed, fail2ban will be reconfigured and DNS records will be updated on Cloud 66 side.

Futhermore, if required, the load balancer will be updated to serve the server  with the new IP address and the environment variables will be updated aswell.

Finally, the server owner will receive a notification of success by email and will be encouraged to redeploy the stack.