---
layout: post
template: one-col
title:  "Database management"
so_title: "database"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1959-09-26 15:33:13
categories: database-management
lead: Deploying and managing your database with Cloud 66
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About deploying databases</a>
    </li>
    <li>
        <a href="#types">Database deployment types</a>
    </li>
        <ul style="margin-bottom:0em">
            <li><a href="#no">No database (external)</a></li>
            <li><a href="#local">Local database</a></li>
            <li><a href="#ded">Dedicated database</a></li>
        </ul>       
    <li>
        <a href="#upgrade">Upgrading your database</a>
    </li>
    <li>
        <a href="#migrations">Control your Rails database migrations</a>
    </li> 
    <li>
        <a href="#customize">Customize your database configuration</a>
    </li>                         
        <ul style="margin-bottom:0em">
            <li><a href="#variables">Database customization variables</a></li>
        </ul>    
</ul>

<h2 id="about">About deploying databases</h2>

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL
* PostgreSQL
* MongoDB
* Redis
* Elasticsearch
* RabbitMQ
* SQLite (only in development environments)

When creating a Docker stack, you can [add as many databases as you need in your service configuration during the stack build](/building-your-stack/docker-service-configuration#database-configs). For Rack-based stacks, Cloud 66 automatically detects whether your application relies on a database or not during your code analysis. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. If you haven't specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.

<h2 id="types">Database deployment types</h2>

<h3 id="no">No database (external)</h3>
This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally.
Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

<h3 id="local">Local database</h3>
This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

<h3 id="ded">Dedicated database</h3>
This option will automatically create a new server for your database and configure your application accordingly.

<h2 id="upgrade">Upgrading your database</h2>
Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack.

<h2 id="migrations">Control your Rails database migrations</h2>
You can control your Rails database migrations by accessing your stack detail page, then clicking _Stack settings_ in the right sidebar. This page gives you the option of running migrations or not. When you have disabled database migrations in _Stack settings_ page, you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.

<h2 id="customize">Customize your database configuration</h2>

You can customize the database configuration on your servers using [CustomConfig](/database-management/database-management#customize). CustomConfig is available for MySQL, PostgreSQL, Redis and MongoDB.

Editing and committing your database CustomConfig will perform the following steps on every database server in your stack, one by one, sequentially:

- Check your template for Liquid syntax errors
- Determine the correct server configuration and prepare general variables
- Prepare custom variables for your database type (eg. server_state)
- Compile the database configuration based on the information from the server and database type
- Upload the configuration to the server
- Restart your database

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>

<h3 id="variables">Database customization variables</h3>
There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

<b>Global variables</b>

The following variables are available to any database CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server</td>
			<td>Hash</td>
            <td>Hash containing information about your server</td>
		</tr>
		<tr>
			<td>cloud</td>
			<td>string</td>
      		<td>Stack cloud</td>
		</tr>
		<tr>
			<td>memory</td>
			<td>integer</td>
            <td>Server memory size (bytes)</td>
		</tr>
		<tr>
			<td>core</td>
			<td>integer</td>
            <td>Server core count</td>
		</tr>
  </tbody>
</table>


<b>MySQL variables</b>

The following variables are only available in the MySQL CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>mysql_master</i> or <i>mysql_slave</i> based on your server status</td>
		</tr>
		<tr>
			<td>server_id</td>
			<td>integer</td>
            <td>An ID used by MySQL replication to identify your server&#42;</td>
		</tr>
		<tr>
			<td>db_name</td>
			<td>string</td>
            <td>Database name</td>
		</tr>
  </tbody>
</table>
<h5>&#42;It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers</h5>

<b>PostgreSQL variables</b>

The following variables are only available in the PostgreSQL CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>pg_master</i> or <i>pg_slave</i> based on your server status</td>
		</tr>
  </tbody>
</table>

<b>Redis variables</b>

The following variables are only available in the Redis CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>redis_master</i> or <i>redis_slave</i> based on your server status</td>
		</tr>
		<tr>
			<td>master_address</td>
			<td>string</td>
            <td>IP address of replication master (empty string if server is stand alone or master)</td>
		</tr>
		<tr>
			<td>master_port</td>
			<td>integer</td>
            <td>Will be 6379 when server is <i>redis_slave</i> , otherwise it is 0</td>
		</tr>
  </tbody>
</table>