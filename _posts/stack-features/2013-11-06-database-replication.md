---
layout: post
title:  "Database Replication"
date:   2013-11-06 10:51:22
categories: stack-features
---

<p class="lead">Scale your databases by setting up replication with a single click.</p>

## Database Scaling (beta)
With Cloud 66 you can [add a HTTP or WebSocket load balancer](/stack-features/load-balancers.html) with a single click.

You can also scale your backend worker processes [on the same server](/stack-features/proc-files.html) or move them to [dedicated process servers](/stack-features/standalone-process-servers.html).

Now, you can also scale your databases just as easily.

Database replication is supported for **MySQL**, **PostgreSQL**, **Redis** and **MongoDB**.

<div class="notice">
	<h3>Note</h3>
	<p>You need to have a managed backup setup for your stack to use DB replication.</p>
</div>


### Scaling Up

To enable replication, click on the DB Server group of your stack and click on the Scale Up button. 

![](http://cdn.cloud66.com/images/help/db_scaleup.png)

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/db_scaled.png)

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your database serving your application for the duration of scaling up and sclaing down.</p>
</div>

That's it!

#### Here is what just happened!

- We will fire up another server in your cloud for you. 
- The same version of database server will be deployed onto the new server.
- A full backup of your database is taken and restored on the slave database to seed the new database.
- The database server will be configured to be a slave of the main database.
- The master database will be configured to cater for this new setup.
- A new set of environment variables will be generated to be available on all your servers pointing to the new server(s), so you can use it in your code or scripts.

As with any database replication, it might take a while for the data to be fully replicated across the whole cluster. A full backup of the master database is taken and restored on the slave to speed this process up.

### Scaling Down
Scaling down your database cluster is as easy as removing the servers from your database group by clicking on the x icon.

That's it!

Here is what happens when you scale down a server group:

- The server is removed from replication cluster (but it is not deleted physically from your cloud).
- The master in the cluser, will be configured to reflect that change.
- If the remaining server is the only server in the group, it will be configured back to be a standalone server.
- All environment variables for master and replica databases will be updated and pushed to all servers.

### Database Specifics
Each database server has some specific settings, listed below:

#### MySQL
There is only 1 master server setup with MySQL. All other servers will be setup as read-only replicas.

#### PostgreSQL
There is only 1 master server setup with PostgreSQL. All other servers will be setup as read-only replicas. PostgreSQL replication is setup as [Streaming Replication](http://wiki.postgresql.org/wiki/Streaming_Replication).

#### MongoDB
Scaling up a MongoDB will result in building a [MongoDB Replica Set](http://docs.mongodb.org/manual/replication/). This scale up builds an odd number of servers, so if you have 1 MongoDB server, it will fire up another 2 to run your Replica Set on 3 servers. The next scale up will create another 2 servers and run your cluster on 5 servers.

The same rule applies to scaling down. Deleting 1 server from a 5-server cluster, will result in 2 servers being removed from it to get the total down to 3 servers.

#### Redis
There is only 1 master Redis server setup. All other servers will be setup as replias and any change in them will be overwritten by the master.

### Environment Variables
Cloud 66 generates and populates a set of [environment variables automatically](/stack-features/auto-generated-environment-variables.html) on each one of your stack servers.

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
			<td>MONGODB_ADDRESSES_INT</td>
			<td>MongoDB servers internal addresses</td>
		</tr>
		<tr>
			<td>MONGODB_ADDRESSES_EXT</td>
			<td>MongoDB servers external addresses</td>
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

As with any environment variable change, you will need to redeploy the stack to propgate the variable changes to all servers. 

The environment variables will be available on all servers including web and database servers. This excludes HAProxy servers.