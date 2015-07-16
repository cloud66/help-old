---
layout: post
template: one-col
title:  "GlusterFS"
date:   2075-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: stack-add-ins
lead: Add GlusterFS to your stack with ease
search-tags: ['glusterfs']
tags: ['Add in']
---

## What is GlusterFS?
[GlusterFS](http://www.gluster.org/) is a scalable network filesystem, and it's easy to add to your stack as an add-in.

## Add GlusterFS
To add GlusterFS to your stack, access the add-ins menu, click _GlusterFS_ and choose the _replica count_ of your GlusterFS cluster and size of its servers. This will adds a new server group for you _GlusterFS Cluster_ and create gluster server in it. Also three environment variables will added to your stack: `GLUSTERFS_ADDRESS_INT`, `GLUSTERFS_ADDRESS_EXT` and `GLUSTERFS_ADDRESS`, which you can use to connect to your GlusterFS master vol server.