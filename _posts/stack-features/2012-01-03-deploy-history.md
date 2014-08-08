---
layout: post
template: two-col
title:  "Deployment history"
so_title: "deploy history"
nav_sticky: false
date:   2098-02-25 16:27:22
categories: stack-features
lead: An overview of your stack deployments and rollbacks
search-tags: []
tags: ['Deployment']
---

## Introduction
Whether working in a team or by yourself, it's always useful to have an overview of your deployment history. This history includes
information about who deployed, when they deployed, what code revision was deployed and how the deployment was triggered (web, [API](/api/basics/basics.html) or [redeployment hook](/stack-features/redeployment-hook.html)). In addition to this, you can also revert
back to previous commits if need be.

Reverting to a previous commit will only affect your code - you might still need to restore a <a href="/stack-features/db-backup.html">database backup</a>. If you wish, you can [switch off your database migrations](/how-to/control-db-migration.html), roll back your database and then roll back your code.

## Usage
Accessing your stack page, you will see a drop-down with a "View Deployment History" link:

![history link](http://cdn.cloud66.com/images/help/history_link.png)

On this page, you can see your previous commits, and revert back to previous commits:

![deploy history 1](http://cdn.cloud66.com/images/help/deploy_history_1.png)

Any code revisions that have not been deployed will have a hollow circle.

## Deployment Status
A "Live" status indicates that the code in that commit is live on your servers.

A <font color="green">green</font> deployment indicates that it has been successful, whereas a <font color="red">red</font> one indicates failure.

A reverted deployment is one that is no longer on your servers (the stack was rolled back to an earlier deployment).