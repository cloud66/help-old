---
layout: post
template: one-col
title:  "Database replication"
so_title: "replication"
nav_sticky: false
date:   2099-04-01 16:27:22
categories: database-management
lead: Scale your databases by setting up replication
search-tags: []
tags: ['Database', 'Database replication']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
    	<a href="#about">About database replication</a>
    </li>
	<li>
		<a href="#how">How it works</a>
	</li>
	        <li>
                <ul>
                <li><a href="#mysql">MySQL</a></li>
                <li><a href="#postgresql">PostgreSQL</a></li>
                <li><a href="#mongodb">MongoDB</a></li>
                <li><a href="#redis">Redis</a></li>
                </ul>
            </li>
	<li>
		<a href="#vars">Environment variables</a>
	</li>
	<li>
		<a href="#enable">Enable database replication</a>
	</li>
	<li>
		<a href="#disable">Disable database replication</a>
	</li>
	<li>
		<a href="#Slave">Create slave database</a>
	</li>

</ul>

<h2 id="about">About database replication</h2>
Database replication involves configuring a master and slave database architecture, whereby the slave is an exact replica of the master at all times. This feature is supported for MySQL, PostgreSQL, Redis and MongoDB databases.

Database replication can be set up for a single stack, or between stacks, with various benefits:

<h3>Single stack</h3>

- Improved read performance: The slave server only allows reads and is ideal for use with reporting tools, and any database backups are taken from the slave rather than the master.
- Improved application reliability: Having a second server with your data, in case of hardware issues (reducing a single point of failure).

<h3>Between stacks</h3>

- Improved redundancy: Allows you to have a failover stack in a different region.
- Data migration: Makes it easy to migrate your stack with minimal downtime.

Note that <b>replication between stacks is not supported for MongoDB.</b>

<h2 id="how">How it works</h2>
When you start replicating your database, the Cloud 66 will commence the following process:

<ol class="list">
	<li>We take a full backup of the master database server in your source stack
	    <ul style="margin-bottom:0em">
	        <li>Single stack: we create a secondary database server in your cloud and restore your backup on it</li>
	        <li>Between stacks: we restore your backup on the secondary database server</li>
	    </ul>
	</li>
	<li>The secondary database is configured to be a slave of the source database</li>
	<li>The source database is configured to be a master of the secondary database</li>
	<li>The relevant environment variables are updated for use in your code and scripts</li>
</ol>

<p>Similarly, when you disable replication, the following steps are initiated:</p>

<ul class="list">
	<li>We disable replication on your master database, and configure it to be a standalone database server</li>
	<li>The secondary database server is removed as a slave from the master database server on the source</li>
	<li>The source database server is configured as a standalone database server</li>
	<li>The relevant environment variables are updated for use in your code and scripts</li>
</ul>

<h3 id="mysql">MySQL</h3>
MySQL database replication is configured as per the [MySQL manual](http://dev.mysql.com/doc/refman/5.7/en/replication.html). There is one master server and all other servers are set up as read-only replicas.

<h3 id="postgresql">PostgreSQL</h3>
PostgreSQL database replication is configured with [streaming replication](http://wiki.postgresql.org/wiki/Streaming_Replication). There is one master server and all other servers are set up as read-only replicas.

<h3 id="mongodb">MongoDB</h3>
MongoDB database replication is configured with a [replica set](http://docs.mongodb.org/manual/replication/). This requires an odd number of servers, so if you have one MongoDB server, it will fire up an additional two to run your replica set on a total of three servers. The next scale up will create another two servers and run your cluster on five servers. This also applies to scaling down - deleting one server from a five-server cluster will result in two servers being removed from it to get the total down to three servers.

See our documentation on <a href="/database-management/mongodb-replica-sets">MongoDB replica sets</a> for best practices.

<h3 id="redis">Redis</h3>
Redis database replication is configured as per the [Redis manual](http://redis.io/topics/replication). There is one master and all other servers are setup as replicas.

<h2 id="vars">Environment variables</h2>
Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Environment variable</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of your slave</td>
		</tr>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address your slave</td>
		</tr>
		<tr>
			<td>MYSQL_DATABASE</td>
			<td>The database name of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of your slave</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of your slave</td>
		</tr>
		<tr>
			<td>POSTGRESQL_DATABASE</td>
			<td>The database name of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_USERNAME</td>
			<td>The database username of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_PASSWORD</td>
			<td>The database password of the master</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of your slave</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of your slave</td>
		</tr>
	</tbody>
</table>

In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.

<h2 id="enable">Enable database replication</h2>

The process of enabling database replication varies slightly for a single stack as opposed to replication between stacks.

<div class="notice notice-danger">
	<h3>Important</h3>
	<p>Database replication will disrupt the database serving your application during the replication configuration process. The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you scale your server.</p>
</div>

<h3>Single stack</h3>
To enable replication on a single stack, visit your stack detail page, click on the database server group (eg. _MySQL server_) and click <i>Scale Up</i> in the top right corner. This will allow you to choose your new server size. Your new server should contain at least two times more disk space than the size of your database backup, and we recommend that it is comparable to your master server (in terms of memory).

<h3>Between stacks</h3>
To enable replication between stacks, ensure that you have a secondary stack deployed, and that its database server contains at least two times more disk space than the size of your database backup. Visit your stack detail page, click on the database server group (eg. _MySQL server_) click into your main database server page. Next, click _Configure data replication_ in the right sidebar, and select a source stack. Confirm to commence the replication process.

<h2 id="disable">Disable database replication</h2>
To disable replication between stacks, visit your stack detail page, click on the database server group (eg. _MySQL server_) click into your main database server page. Next, click _Configure data replication_ in the right sidebar, and select _Disable replication_. Confirm to commence the replication process.

<h2 id="Slave">Create slave database</h2>

To add a slave database server you need to follow the below steps. To add multiple you need to scale up one by one.

1. If you don't have a managed backup you will need to set up one by using add-ins.
2. Go on your stack page, database servers page (For instance PostgreSQL Servers)
3. On the right sidebar click on `SCALEUP DATABASE` (this won't be shown if you have not set up database backup)



