---
layout: post
template: two-col
title:  "Deploy to your cloud"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1985-09-24 10:51:22
categories: deployment
lead: x
search-tags: ['']
tags: ['']
---

## About deploying to the cloud
## Cloud providers
Cloud 66 currently supports the following cloud providers:

<ul>
    <li><a href="/cloud-providers/cloud-aws.html" target="_blank">Amazon Web Services</a></li>
    <li><a href="/cloud-providers/cloud-do.html" target="_blank">Digital Ocean</a></li>
    <li><a href="/cloud-providers/cloud-gce.html" target="_blank">Google Compute Engine</a></li>
    <li><a href="/cloud-providers/cloud-joyent.html" target="_blank">Joyent</a></li>
    <li><a href="/cloud-providers/cloud-linode.html" target="_blank">Linode</a></li>
    <li><a href="/cloud-providers/cloud-rackspace.html" target="_blank">Rackspace</a></li>
    <li><a href="/cloud-providers/cloud-telefonica.html" target="_blank">Telefonica</a></li>
    <li><a href="/cloud-providers/cloud-vexxhost.html" target="_blank">Vexxhost</a></li>
</ul>

By providing us with your unique cloud provider API keys, Cloud 66 can provision new servers under your account.

![cloud keys](http://cdn.cloud66.com/images/help/cloud_connect.png)

Once you've deployed to your cloud, you still have full root access and control over your servers. The servers are, and will always be yours.

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

As it's hard for us to determine if you're using your servers for other activities, we won't delete them on your cloud provider if you delete your stack.

If you don't want to use a cloud provider with Cloud 66, you're welcome to [deploy to your own servers](/getting-started/standalone-servers.html), although some features will not be available.

<h2 id="remove">Removing or editing clouds</h2>

If at any point you would like to remove or edit a cloud connection, you can do so from your <i>Account</i> page under the <a href="https://app.cloud66.com/clouds" target="_blank"><i>Cloud Keys menu</i></a>:

![cloud keys](http://cdn.cloud66.com/images/help/cloud_keys.png)

## Deployment status indicators
## Pre-deployment options
#### Environment variables
[Environment variables](/stack-features/env-vars.html) are dynamically-named values that are easy for you to reference in your code and/or scripts. For example,
you may wish to use environment variables to store your database username and password instead of hard-coding these values.

For your convenience, Cloud 66 will [automatically generate and update certain environment variables](/stack-features/env-vars.html#auto-gen) such as server IP addresses.

#### Deployment hooks
[Deployment hooks](/stack-features/deploy-hooks.html) help you automate your stack build and/or deployment by taking action at various points during the process. A simple example might be to copy a script to a location on your server and executing it after your stack has been successfully built.

#### Manifest files
[Manifest files](/stack-features/manifest-files.html) allow you to be more explicit about your stack composition by specifying additional packages you wish to install, server sizes/regions and other options.

#### Process files
[Process files](/stack-features/proc-files.html) can be used to ensure that your background jobs always run and are monitored. Should you wish, you can also [scale processes](/stack-features/standalone-process-servers.html) both on a single server or to a dedicated process server.

#### Custom web servers
By default, stacks deployed by Cloud 66 run on Phusion Passenger behind nginx, but you can choose to [run a custom web server](/web-server/custom-webserver.html) should you wish.

## Post-deployment options

<div class="notice">
    <h3>Note</h3>
    <p>This is not an exhaustive list of the available features.</p>
</div>

#### Terminal connection to your servers
You always have [terminal access to servers](/how-to/shell-to-your-servers.html) deployed by Cloud 66. For security reasons, we do not allow or provision password protected servers - we only use SSH key authentication.

#### Scaling
Cloud 66 makes it easy for you to scale any part of your stack with the click of a button. This includes [web servers](/stack-features/horizontal-scaling.html), [databases](/stack-features/database-replication.html) and [process servers](/stack-features/standalone-process-servers.html).

In addition, we also make it possible for you to adjust the size of your server if need be.

#### Backups
Use [unmanaged or managed backups](/add-ins/backups.html) to ensure that your data isn't lost, and use [backup verifiers](/stack-features/backup-verifiers.html) to check if your backups can actually be restored in the event of a disaster.

#### Stack security
Your stack is deployed with a fully-configured firewall and intruder detection system to improve your security. For example, database servers are only accessible by other servers in your stack to avoid third-parties gaining access to your data. Should any malicious activity be detected, the IP addresses involved are blocked.

You can see an overview of these settings on you [stack security page](/stack-features/stack-security.html).

#### Monitoring
All servers provisioned and deployed with Cloud 66 are [monitored](/stack-features/server-monitoring.html) for CPU, memory and disk space, and this information is easily available from your dashboard.

#### Deploy history and rollbacks
This feature makes it possible for you to see an overview of your deployment history, as well as rollback any deployment that might have failed.

#### Logging
[Logs](/stack-features/logging.html) are setup according to your application configuration, and can be automatically archived at regular intervals.

#### CLI toolbelt
We have a simple [command-line interface](/cloud-66-toolbelt/introduction.html) available should you wish to control your stacks through the command line.

#### Redeployment hooks
You can use [redeployment hooks](/stack-features/redeployment-hook.html) to achieve continuous deployment.

#### StackScore
Our [StackScore](/stack-features/stackscore.html) is a simple A-F score for you to understand how you best can improve your stack performance and reliability.

#### Maintenance mode
Cloud 66 allows you to place your application in [maintenance mode](/stack-features/network-configuration.html) whereby a static maintenance page is served for the duration of your maintenance.


## What is EasyDeploy?
## Deploy to your cloud
## View deployment history

#### Introduction
Whether working in a team or by yourself, it's always useful to have an overview of your deployment history. This history includes
information about who deployed, when they deployed, what code revision was deployed and how the deployment was triggered (web, [API](/api/basics/basics.html) or [redeployment hook](/stack-features/redeployment-hook.html)). In addition to this, you can also revert
back to previous commits if need be.

Reverting to a previous commit will only affect your code - you might still need to restore a <a href="/stack-features/db-backup.html">database backup</a>. If you wish, you can [switch off your database migrations](/how-to/control-db-migration.html), roll back your database and then roll back your code.

#### Usage
Accessing your stack page, you will see a drop-down with a "View Deployment History" link:

![history link](http://cdn.cloud66.com/images/help/history_link.png)

On this page, you can see your previous commits, and revert back to previous commits:

![deploy history 1](http://cdn.cloud66.com/images/help/deploy_history_1.png)

Any code revisions that have not been deployed will have a hollow circle.

#### Deployment Status
A "Live" status indicates that the code in that commit is live on your servers.

A <font color="green">green</font> deployment indicates that it has been successful, whereas a <font color="red">red</font> one indicates failure.

A reverted deployment is one that is no longer on your servers (the stack was rolled back to an earlier deployment).

## Edit cloud properties
## Delete a cloud
## About achieving zero-downtime deployment
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
