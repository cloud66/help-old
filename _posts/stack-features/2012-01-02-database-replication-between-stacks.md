---
layout: post
template: two-col
title:  "Database replication between stacks"
so_title: "replication"
nav_sticky: false
date:   2099-01-01 16:27:22
categories: stack-features
lead: Use the data in one stack in other stacks
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
		<a href="#setup">Initiating replication</a>
	</li>
	<li>
		<a href="#disable-replication">Disabling replication</a>
	</li>
	<li>
		<a href="#env-vars">Environment variables</a>
	</li>
</ul>

<h2 id="intro">Introduction</h2>

Cloud 66 allows you to replicate your databases between your stacks. These are some scenarios in which you might use this feature:

- Prepare a fail-over for an existing stack
- Move your stack to a different cloud/region
- Use your database in applications like reporting tools

Replication between stacks is supported for **MySQL**, **PostgreSQL** and **Redis** databases.

<h2 id="setup">Initiating replication</h2>

Before we start replicating data between stacks, go ahead and deploy your code from your first stack (_source_) to a fresh stack (_target_).

You can enable replication between stacks once this code has been successfully deployed to the _target_. You can then go to your database server detail page (on your _target_ stack) and click on the _Configure data replication_ icon in the top right corner.

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/data_source.png)

This page will display a list of available replication sources for this server.

![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/data_source_modal.png)

<div class="notice">
	<h3>Note</h3>
	<p>You need <i>Control stack</i> access rights to see the <i>Configure data replication</i> icon.</p>
	<p>Additionally, you will only see stacks that have <b>managed backup installed</b> and that you have <i>Stack administrator</i> rights to in the <i>Select stack</i> field.</p>
</div>

Select the stack you want to use as a <i>source</i> and confirm, which will start the replication between the stacks. The following steps will be initiated:

- We take a full backup of the primary database server in your <i>source</i> stack and restore it on the <i>target</i> server
- The _target_ server is configured to be a slave of the _source_ database
- The _source_ database is configured to be a master of the _target_ database
- The relevant environment variables are updated for use in your code and scripts

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your <i>source</i> and <i>destination</i> databases for the duration of this process.</p>
</div>

The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you configure or disable data replication between stacks.

<h2 id="disable-replication">Disabling replication</h2>

To disable replication between stacks, go to your database server detail page (on your _target_ stack) and click on the _Configure data replication_ icon in the top right corner.

This page will display a list of available replication sources for this server.

Now select the _Disable replication_ from the list and confirm, which will disable the replication between your stacks. The following steps will be initiated:

- We disable the replication on your _target_ database server, and configure it to be a stand-alone database server
- The _target_ database server is removed as a slave from the primary database server on the _source
- The _source_ database server is configured as a stand-alone database server
- The relevant environment variables are updated for use in your code and scripts

<h2 id="env-vars">Environment variables</h2>
Cloud 66 generates and populates a set of [environment variables automatically](/stack-features/env-vars.html#auto-gen) on each of your stack servers.

The value of some environment variables will change during the enabling/disabling of replication between stacks.

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
			<td>This variable will be assigned the internal IP address of the new slave</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_EXT</td>
			<td>This variable will be assigned the external IP address of the new slave</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_DATABASE</td>
			<td>No change</td>
			<td>This variable will be assigned the database name of the master</td>
		</tr>
		<tr>
			<td>MYSQL_USERNAME</td>
			<td>No change</td>
			<td>This variable will be assigned the database username of the master</td>
		</tr>
		<tr>
			<td>MYSQL_PASSWORD</td>
			<td>No change</td>
			<td>This variable will be assigned the database password of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_INT</td>
			<td>This variable will be assigned the internal IP address of the new slave</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_EXT</td>
			<td>This variable will be assigned the external IP address of the new slave</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_DATABASE</td>
			<td>No change</td>
			<td>This variable will be assigned the database name of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_USERNAME</td>
			<td>No change</td>
			<td>This variable will be assigned the database username of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_PASSWORD</td>
			<td>No change</td>
			<td>This variable will be assigned the database password of the master</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_INT</td>
			<td>This variable will be assigned the internal IP address of the new slave</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_EXT</td>
			<td>This variable will be assigned the external IP address of the new slave</td>
			<td>No value.</td>
		</tr>
	</tbody>
</table>

As with any environment variable change, you will need to redeploy the stack to propagate the variable changes to all servers.

The environment variables will be available on all servers including web and database servers. This excludes HAProxy servers.
