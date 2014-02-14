---
layout: post
template: two-col
title:  "Database replication between stacks"
so_title: "replication"
nav_sticky: false
date:   2099-01-01 16:27:22
categories: stack-features
lead: Use data of your stack in other stacks
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#setup-data-source">Setup data source</a>
	</li>
	<li>
		<a href="#disable-replication">Disable replication</a>
	</li>
	<li>
		<a href="#env-vars">Environment variables</a>
	</li>
</ul>

You can use data of your stack in other stacks. These are some scenarios that you might use this feature :

- Prepare a failover for your current stack
- Move your stack to other clouds/region
- Use your data in other Application like reporting tools

Replication between stacks is supported for **MySQL**, **PostgreSQL** and **Redis** databases.

<h2 id="setup-data-source">Setup data source</h2>

To enable replication between stacks, go to your database server detail page and click on the _Setup data source_ icon in the top right corner.
You will see a window with list of stacks available as replication source for this server.

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/data_source.png)

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/data_source_modal.png)

<div class="notice">
	<h3>Note</h3>
	<p>You need to have edit access right to see the _Setup data source_ icon.</p>
</div>

<div class="notice">
	<h3>Note</h3>
	<p>You only see the stacks that managed backup is installed on them and you have admin access right.</p>
</div>

Now select the stack you want as source and click Ok button.
We are going to set up replication between your two stacks. During the process we are following below steps.

- A full backup of the primary database server of your source stack is taken and restored on the destination server
- The destination server is configured as a slave of the primary database server of your source stack
- The master database is configured according to this new setup
- Updating related environment variables for use in your code and scripts


<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your _source_ and _destination_ database serving your applications for the duration of _Setup data source_ or _Disabling data source_.</p>
</div>

The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you setup a data source or disabling it.

<h2 id="disable-replication">Disable replication</h2>

To disable replication between stacks, go to your destination database server detail page and click on the _Setup data source_ icon in the top right corner.
You will see a window with list of stacks available as replication source for this server.

Now select the "No data source" from list and click Ok button.
We are going to disable replication between your two stacks.During the process we are following below steps.

- Disabling replication on destination database server and configure it as a stand-alone database server.
- Configuring primary database server of source stack and remove destination server from its slaves list
- Configuring primary database server of source stack as a stand-alone database server if there is no slave remain.
- Updating related environment variables for use in your code and scripts


<h2 id="env-vars">Environment variables</h2>
Cloud 66 generates and populates a set of [environment variables automatically](/stack-features/env-vars.html#auto-gen) on each of your stack servers.


During enabling/disabling replication between stacks, the value of some of environment variables will change

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Environment Variable</th>
			<th>Master</th>
			<th>Slave</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_DATABASE</td>
			<td>No change</td>
			<td>Database name of master will be set to this var</td>
		</tr>
		<tr>
			<td>MYSQL_USERNAME</td>
			<td>No change</td>
			<td>Database username of master will be set to this var</td>
		</tr>
		<tr>
			<td>MYSQL_PASSWORD</td>
			<td>No change</td>
			<td>Database password of master will be set to this var</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_DATABASE</td>
			<td>No change</td>
			<td>Database name of master will be set to this var</td>
		</tr>
		<tr>
			<td>POSTGRESQL_USERNAME</td>
			<td>No change</td>
			<td>Database username of master will be set to this var</td>
		</tr>
		<tr>
			<td>POSTGRESQL_PASSWORD</td>
			<td>No change</td>
			<td>Database password of master will be set to this var</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of new slave will add to this var.</td>
			<td>No value.</td>
		</tr>
	</tbody>
</table>


As with any environment variable change, you will need to redeploy the stack to propagate the variable changes to all servers.

The environment variables will be available on all servers including web and database servers. This excludes HAProxy servers.
