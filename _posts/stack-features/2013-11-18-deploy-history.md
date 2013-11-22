---
layout: post
template: two-col
title:  "Deploy History"
date:   2013-11-18 11:35:00
categories: stack-features
lead: See your stack deployment history and rollback deployments.
---


## Who, When, What and How
Every time you deploy your stack, a new record is created to keep track of it. It shows who triggered the deploy (developer), what is in the deployment (git commits, git hash), when was it deployed and how the deployment was triggered (Web, [API](/api/basics.html) or [redeployment hooks](/stack-features/redeployment-hook.html))

![deployment_hisotry](http://cdn.cloud66.com/images/help/cloud66_deployment_history.png)

## Deployment Status
A Deployment with "Live" status means the code in that deployment is the one on all of your servers.

A Red deployment is a failed one.

"Reverted" deployment is one that is no longer on your servers (the stack was rolled back to an earlier deployment). This is equal to a hollow circle on the line for the reverted deployment.

## Rollback Your Deployments
You can rollback to a successful deployment by clicking on the arrow icon on top right of each deployment information box.

<div class="notice">
	<h3>Note</h3>
	<p>This will only revert the code on all servers and not the data. To revert your database back to a previous state, please use the <a href="/add-ins/one-click-database-backup.html">Managed Backups</a>.</p>
</div>
