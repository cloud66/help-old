---
layout: post
template: two-col
title:  "Database Replication"
nav_sticky: false
nav: true
nav_prev: ""
nav_next: ""
date:   2038-04-01 16:27:22
categories: stack-features
lead: Scale your databases by setting up replication
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#scaling-up">Scaling up</a>
	</li>
	<li>
		<a href="#how-it-works">How it works</a>
	</li>
	<li>
		<a href="#scaling-down">Scaling down</a>
	</li>
	<li>
		<a href="#specifics">Database specifics</a>
	</li>
	        <li>
                <ul>
                <li><a href="#mysql">MySQL</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#postgresql">PostgreSQL</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#mongodb">MongoDB</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#redis">Redis</a></li>
                </ul>
            </li>
	<li>
		<a href="#env-vars">Environment variables</a>
	</li>
</ul>


Database replication is supported for **MySQL**, **PostgreSQL**, **Redis** and **MongoDB** databases.

<div class="notice">
	<h3>Note</h3>
	<p>You need to have a managed backup setup for your stack to use DB replication.</p>
</div>


<h2 id="scaling-up">Scaling Up</h2>

To enable replication, click on the DB Server group of your stack and click on the Scale Up button.

![](http://cdn.cloud66.com/images/help/db_scaleup.png)

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/db_scaled.png)

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your database serving your application for the duration of scaling up and scaling down.</p>
</div>

<h2 id="how-it-works">How it works</h2>

- We fire up another server in your cloud
- We install your database server (the same version as the original server)
- A full backup of the original server is taken and restored on the new server
- The new server is configured as a slave of the master database
- The master database is configured according to this new setup
- A new set of environment variables are made available to be used in your code and scripts

As with any database replication, it might take a while for the data to be fully replicated across the whole cluster. A full backup of the master database is taken and restored on the slave to speed this process up.

<h2 id="scaling-down">Scaling Down</h2>
Scaling down your database cluster is as easy as removing the servers from your database group by clicking on the <i>x</i> icon.

Here is what happens when you scale down a server group:

- The server is removed from the replication cluster (but it is **not** deleted physically from your cloud)
- The master in the cluster will be configured to reflect this update
- If the remaining server is the only server in the group, it will be configured to be a standalone server again
- All environment variables for master and replica databases will be updated and pushed to all servers

<h2 id="specifics">Database Specifics</h2>
Please see the the configurations required for each specific database below.

<h4 id="mysql">MySQL</h4>
There is only [one master server](http://dev.mysql.com/doc/refman/5.7/en/replication.html) setup with MySQL. All other servers are set up as read-only replicas.

<h4 id="postgresql">PostgreSQL</h4>
There is only one master server setup with PostgreSQL. All other servers are set up as read-only replicas. Replication is setup as [Streaming Replication](http://wiki.postgresql.org/wiki/Streaming_Replication).

<h4 id="mongodb">MongoDB</h4>
Scaling up a MongoDB sets up a [replica set](http://docs.mongodb.org/manual/replication/). This scale up builds an odd number of servers, so if you have one MongoDB server, it will fire up an additional two to run your replica set on a total of three servers. The next scale up will create another two servers and run your cluster on five servers.

The same rule applies to scaling down. Deleting one server from a five-server cluster, will result in two servers being removed from it to get the total down to three servers.

<h4 id="redis">Redis</h4>
There is only [one master Redis server](http://redis.io/topics/replication) set up. All other servers will be setup as replicas and any change in them will be overwritten by the master.

<h2 id="env-vars">Environment Variables</h2>
Cloud 66 generates and populates a set of [environment variables automatically](/stack-features/env-vars.html#auto-gen) on each of your stack servers.

These include environment variables to hold the address for your database servers. With database replication enabled, a second environment variable is generated that holds the list of all slave database servers.

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Environment Variable</th>
			<th>Comments</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_INT</td>
			<td>MySQL Slave Internal IP address.</td>
		</tr>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_EXT</td>
			<td>MySQL Slave External IP address</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_INT</td>
			<td>PostgreSQL Slave Internal IP address.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_EXT</td>
			<td>PostgreSQL Slave External IP address</td>
		</tr>
		<tr>
			<td>MONGODB_ADDRESSES</td>
			<td>MongoDB servers DNS names</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_INT</td>
			<td>Redis Slave Internal IP address</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_EXT</td>
			<td>Redis Slave External IP address</td>
		</tr>
	</tbody>
</table>

An example is
<pre class="terminal">
50.23.65.12
</pre>

For multiple IP addresses, the environment variable will contain a comma separated list of all IP addresses:

<pre class="terminal">
192.168.10.1,192.168.10.2
</pre>

As with any environment variable change, you will need to redeploy the stack to propagate the variable changes to all servers.

The environment variables will be available on all servers including web and database servers. This excludes HAProxy servers.
