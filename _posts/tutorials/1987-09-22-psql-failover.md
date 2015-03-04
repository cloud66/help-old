---
layout: post
template: two-col
title:  "PostgreSQL failover procedure"
so_title: "psql"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1897-09-24 10:51:22
categories: 
lead: How to deal with a primary server failure
search-tags: ['']
tags: ['Database', 'Failover Group']
tutorial: true
difficulty: 0
---

When you use [database replication](http://help.cloud66.com/database-management/database-replication) with PostgreSQL, we configure [streaming replication](http://wiki.postgresql.org/wiki/Streaming_Replication) between your master and slave databases.
The first server in the group will be the master server, and the others will be configured as slave servers.

If the master server fails, you should begin failover procedures on your standby server:

<ol class="article-list">
<li>Connect to one of your standby servers via <a href="http://help.cloud66.com/managing-your-stack/ssh-to-your-server">SSH</a>.</li>
<li>Run <code>touch /tmp/postgresql.trigger</code> to turn the slave into a master.</li>
<li>You now need to point your application to use this new master. Edit your <i>POSTGRESQL_ADDRESS</i> <a href="http://help.cloud66.com/deployment/environment-variables">environment variable</a> to {{POSTGRESQL_SLAVE_ADDRESSES_INT}} - this format references the value of that variable.</li>
</ol>

If and when the old primary restarts, it will no longer be the primary server and you must have a mechanism to stop it.
This is sometimes known as _STONITH_ (Shoot The Other Node In The Head), which is necessary to avoid situations where both
servers think they are the primary. Such a situation could lead to confusion and ultimately data loss.

We recommend that you attempt running this procedure in your testing environment - setting up your system for high availability
is not of much use if you wait for a disaster before trying a recovery.