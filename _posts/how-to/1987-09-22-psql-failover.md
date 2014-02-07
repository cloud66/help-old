---
layout: post
template: two-col
title:  "PostgreSQL failover procedure"
so_title: "psql"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1897-09-24 10:51:22
categories: how-to
lead: How to deal with a primary server failure
---

When you scale up your PostgreSQL server group, Cloud 66 configures [Streaming Replication](http://wiki.postgresql.org/wiki/Streaming_Replication) on your servers.
The first server in the group will be the primary server, and the others will be configured as standby servers.

If the primary server fails, you should begin failover procedures on your standby server:

1. Connect to one of your standby servers via [SSH](/how-to/shell-to-your-servers.html)
2. Run `touch /tmp/postgresql.trigger` to turn the standby into a master
3. Change your application configuration to use new server address as database server

If and when the old primary restarts, it will no longer be the primary server and you must have a mechanism to stop it.
This is sometimes known as _STONITH_ (Shoot The Other Node In The Head), which is necessary to avoid situations where both
servers think they are the primary. Such a situation could lead to confusion and ultimately data loss.

We recommend that you attempt running this procedure in your testing environment - setting up your system for high availability
is not of much use if you wait for a disaster before trying a recovery.