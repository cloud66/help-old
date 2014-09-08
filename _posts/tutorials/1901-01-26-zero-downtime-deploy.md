---
layout: post
template: two-col
title:  "Zero-downtime deployments"
so_title: "zero downtime"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1425-09-24 10:51:22
categories:
lead: Achieving zero-downtime deployments
tags: ['downtime']
tutorial: true
difficulty: 1
---

Depending on your application and requirements, you can achieve zero-downtime deployments in a number of ways.

<ol>
<b><li>Using a web server that supports hot rollover</li></b>
Using a web server like <a href="/web-server/unicorn-rack-server.html">Unicorn</a> or <a href="/how-to/passenger-enterprise.html">Passenger Enterprise</a> would allow you to achieve zero-downtime deployments even with a single application server.

For example, with Unicorn, when you redeploy your stack, we send a USR2 signal to Unicorn which tells it to:<br/><br/>
<ul>
<li>Fire up a new master in parallel</li>
<li>Fire up new worker processes under the new master</li>
<li>Quiet and shut down old worker processes</li>
<li>Shut down the existing master</li>
</ul>
<b><li>Deploying in serial</li></b>
When you have a load balancer in front of your application servers, you can choose to <a href="/stack-features/parallel-deployment.html">deploy in serial</a>. This would involve removing one server at a time from the load balancer, deploying your code to it and then re-adding it to the load balancer.
<br/><br/>
Assuming that you have more than one application server, this means that there will always be at least one server to respond to user requests while another server is being updated.
<br/><br/>
This is slightly more complicated if you're using <a href="/web-server/custom-webserver.html">Passenger</a> as a web server, as depending on the size of your application, the Passenger warm-up time can be longer than each server deployment. This would result in stack load time being visible to the visitor.
Passenger load time does not bounce the server, but only holds sessions in a queue. This means that traffic is served with delay and as long as the application loads in a time shorter than the HTTP timeout, the user will see no errors.
<br/><br/>
There are a number of (non-optimal) ways to get around this, but ultimately we suggest using option 1.
</ol>
