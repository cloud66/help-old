---
layout: post
template: two-col
title:  "Issues replicating data between two versions of PostgreSQL"
so_title: "postgresql streaming replication"
date:   1900-11-01 15:33:13
categories: 
lead: Upgrading PSQL version with replication may cause issues 
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 2
---

When you initiate replication between two PostgreSQL databases on Cloud 66, we setup [streaming replication](https://wiki.postgresql.org/wiki/Streaming_Replication) between the master and slave servers. Streaming replication is based on [log shipping](http://www.postgresql.org/docs/9.4/static/warm-standby.html) between servers, which generally isn't possible between two servers running vastly different versions of PostgreSQL.

As such, we cannot establish replication between servers running different major release levels (eg. 8.4 and 9.3). Though running replication between different minor release levels (eg. 9.3 and 9.4) should work (because PostgreSQL has a policy not to make changes to disk formats between minor releases), there are also cases where this won't work.

For example, if you setup replication between a master (on 9.3) and a slave (9.4), you may see this error on the slave server:

<pre class= "prettyprint">
FATAL:  database files are incompatible with server
DETAIL:  The data directory was initialized by PostgreSQL version 9.3, which is not compatible with this version 9.4.1.
</pre>

In this case, you need to upgrade the data and libraries of the master server (9.3) with [pg_upgrade](http://www.postgresql.org/docs/9.4/static/pgupgrade.html) before starting the replication.

Remember that you can see the version of PostgreSQL to install on your stack by using a [manifest file](http://help.cloud66.com/building-your-stack/getting-started-with-manifest-files), like so:

<pre class= "prettyprint">
production:
    postgresql:
        configuration:
            version: 9.4.1
</pre>
