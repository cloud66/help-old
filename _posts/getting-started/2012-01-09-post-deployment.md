---
layout: post
template: two-col
title:  "Post-deployment options"
nav_sticky: true
nav: true
cloud66_text: "Try Cloud 66 for free"
nav_prev: "/getting-started/pre-deployment.html"
nav_next: "/getting-started/security.html"
date:   2037-11-20 10:51:22
categories: getting-started
lead: An overview of your post-deployment options
---

<div class="notice">
    <h3>Note</h3>
    <p>This is not an exhaustive list of our features.</p>
</div>

## Terminal connection to your servers
You always have [terminal access to servers](/how-to/shell-to-your-servers.html) deployed by Cloud 66, either from our embedded web terminal or your terminal application. For security reasons, we do not allow or provision password protected servers - we only use SSH key authentication.

## Scaling
Cloud 66 makes it easy for you to scale any part of your stack with the click of a button. This includes web servers, databases and process servers.

In addition, we also make it possible for you to adjust the size of your server if need be.

## Stack security
Your stack is deployed with a fully-configured firewall and intruder detection system to improve your security. For example, database servers are only accessible by other servers in your stack to avoid third-parties gaining access to your data. Should any malicious activity be detected, the IP addresses involved are blocked.

You can see an overview of these settings on you [stack security page](/stack-features/stack-security.html).

## Monitoring
All servers provisioned and deployed with Cloud 66 are [monitored](/stack-features/server-monitoring.html) for CPU, memory and disk space, and this information is easily available from your dashboard.

## Deploy history and rollbacks
This feature makes it possible for you to see an overview of your deployment history, as well as rollback any deployment that might have failed.

## Logging
[Logs](/stack-features/logging.html) are setup according to your application configuration, and can be automatically archived at regular intervals.

## CLI toolbelt
We have a simple [command-line interface](/getting-started/toolbelt.html) available should you wish to control your stacks through the command line.

## Redeployment hooks
You can use [redeployment hooks](/stack-features/redeployment-hook.html) to achieve continuous deployment.

## StackScore
Our [StackScore](/stack-features/stackscore.html) is a simple A-F score for you to understand how you best can improve your stack performance and reliability.

## Maintenance mode
Cloud 66 allows you to place your application in [maintenance mode](/stack-features/maintenance-mode.html) whereby a static maintenance page is served for the duration of your maintenance.