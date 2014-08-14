---
layout: post
template: two-col
title:  "Database replication between stacks"
so_title: "replication"
nav_sticky: false
date:   2099-01-01 16:27:22
categories: stack-features
lead: Use the data in one stack in other stacks
search-tags: []
tags: ['Database', 'Database replication']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">About replicating between stacks</a>
	</li>
	<li>
		<a href="#env-vars">Environment variables</a>
	</li>
	<li>
		<a href="#setup">Enable replication</a>
	</li>
	<li>
		<a href="#disable-replication">Disable replication</a>
	</li>
</ul>

<h2 id="intro">About replicating between stacks</h2>

Cloud 66 allows you to replicate your databases between your stacks. These are some scenarios in which you might use this feature:

- Prepare a fail-over for an existing stack
- Move your stack to a different cloud/region
- Use your database in applications like reporting tools

Replication between stacks is supported for **MySQL**, **PostgreSQL** and **Redis** databases.

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your source and destination databases for the duration of this process.</p>
</div>

The disruption time depends entirely on your database type and size, and different databases may require a restart and/or a complete backup in order to warm-up the new server. This disruption will occur every time you configure or disable data replication between stacks.

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
			<td>Internal IP address of the new slave will be appended</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of the new slave will be appended</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>MYSQL_DATABASE</td>
			<td>No change</td>
			<td>This variable will be assigned the database name of the master</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_INT</td>
			<td>Internal IP address of the new slave will be appended</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>POSTGRESQL_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of the new slave will be appended</td>
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
			<td>Internal IP address of the new slave will be appended</td>
			<td>No value.</td>
		</tr>
		<tr>
			<td>REDIS_SLAVE_ADDRESSES_EXT</td>
			<td>External IP address of the new slave will be appended</td>
			<td>No value.</td>
		</tr>
	</tbody>
</table>

As with any environment variable change, you will need to redeploy the stack to propagate the variable changes to all servers.

The environment variables will be available on all servers including web and database servers. This excludes HAProxy servers.

<h2 id="setup">Enable replication</h2>

Before we start replicating data between stacks, go ahead and deploy the code from your first stack (source) to a fresh stack (target). You need _Control stack_ access rights for the target stack.

<ol>
<li>Go to your database server detail page on your target stack.</li>
<li>Click the <i>Configure data replication</i> icon in the right sidebar, which opens a dialog box.</li>
<li>In the <i>Select stack</i> list, select the stack you want to use as a source and confirm. You will only see stacks that have a managed backup installed and that you have <i>Stack administrator</i> rights to.</li>

Once your replication starts, the following steps will be initiated:<br/>

<ul style="margin-bottom:0em">
<li>We take a full backup of the primary database server in your source stack and restore it on the target stack database</li>
<li>The target database is configured to be a slave of the source database</li>
<li>The source database is configured to be a master of the target database</li>
<li>The relevant environment variables are updated for use in your code and scripts</li>
</ul>
</ol>

<h2 id="disable-replication">Disable replication</h2>
<ol>
<li>Go to your database server detail page on your target stack.</li>
<li>Click the <i>Configure data replication</i> icon in the right sidebar, which opens a dialog box.</li>
<li>Select <i>Disable replication</i> from the list and confirm. The following steps will be initiated:</li>

<ul style="margin-bottom:0em">
<li>We disable the replication on your target database server, and configure it to be a stand-alone database server</li>
<li>The target database server is removed as a slave from the primary database server on the source</li>
<li>The source database server is configured as a stand-alone database server</li>
<li>The relevant environment variables are updated for use in your code and scripts</li>
</ul>
</ol>