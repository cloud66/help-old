---
layout: post
template: two-col
title:  "Database CustomConfig"
so_title: "custom config"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1958-06-26 15:33:13
categories: database
lead: Customize your database configuration
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
		<a href="#variables">Variables</a>
	</li>
	        <li>
                <ul>
                <li><a href="#global">Global</a></li>
                </ul>
            </li>
	        <li>
                <ul>
                <li><a href="#mysql">MySQL</a></li>
                </ul>
            </li>
	        <li>
                <ul>
                <li><a href="#psql">PostgreSQL</a></li>
                </ul>
            </li>
	        <li>
                <ul>
                <li><a href="#redis">Redis</a></li>
                </ul>
            </li>
	<li>
		<a href="#commit">Committing database CustomConfig</a>
	</li>
</ul>


<h2 id="intro">Introduction</h2>

You can customize the database configuration on your servers using [CustomConfig](/stack-features/custom-config.html). CustomConfig is available for PostgreSQL, MySQL, Redis and MongoDB.

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/). You can find many incredible guides and tutorials into the Liquid syntax around the web, but the syntax is easy enough to pick up in minutes.

There are variables available to use in your database CustomConfig. Some of them are general for all database types and some of them are database specific.

<h2 id="variables">Variables</h2>

<h4 id="global">Global</h2>

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


<h4 id="mysql">MySQL variables</h4>

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

<h4 id="psql">PostgreSQL variables</h4>

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

<h4 id="redis">Redis variables</h4>

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

<h2 id="commit">Committing database CustomConfig</h2>

Editing and committing database CustomConfig will complete the following steps for _every db server (of your CustomConfig type) in the stack_ one by one, sequentially:

* Check the template for basic Liquid syntax errors
* Get the correct information about server and prepare general variables
* Prepare custom variables for related database type (server_state, etc.)
* Compile database configuration based on the information from the server and database type
* Upload the configuration to the server
* Restart database

This process will halt if an error is encountered.

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>
