---
layout: post
template: two-col
title:  "Streaming replication between two different postgresql version"
so_title: "postgresql streaming replication"
date:   1900-11-01 15:33:13
categories: 
lead: Replication two different version of postgresql
search-tags: ['Postgresql', 'Replication','Version']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

In cloud66 we are using [streaming replication](https://wiki.postgresql.org/wiki/Streaming_Replication) to establish replication between master and slave postgresql servers. Streaming Replication is based on [log shipping](http://www.postgresql.org/docs/9.4/static/warm-standby.html) between servers.
In general, log shipping between servers running different major PostgreSQL release levels is not possible so we can not establish streaming replication between two different major release (i.e 8.4 and 9.3). Also it is the policy of the PostgreSQL Global Development Group not to make changes to disk formats during minor release upgrades, so it is likely that running different minor release levels on primary and slave servers will work successfully but in some cases replication between two servers with minor different will break as well.

As an example if you try to have streaming replication between a Master(9.3) and ac slave(9.4), you will see this error on slave server :

<pre class= "prettyprint">
FATAL:  database files are incompatible with server
DETAIL:  The data directory was initialized by PostgreSQL version 9.3, which is not compatible with this version 9.4.1.
</pre>

In this case you need to upgrade data and libraries of the master server(9.3) with [pg_upgrade](http://www.postgresql.org/docs/9.4/static/pgupgrade.html) before starting the replication.

Remember that if you are using cloud66 you can set the version of postgresql you need to install on your stack in manifest file

<pre class= "prettyprint">
...
    postgresql:
        configuration:
            version: 9.3.4
</pre>
