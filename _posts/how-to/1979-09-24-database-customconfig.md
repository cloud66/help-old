---
layout: post
template: two-col
title:  "Database CustomConfig"
so_title: "custom config"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1907-08-26 15:33:13
categories: how-to
lead: Customize your Database configuration
---

## Database CustomConfig

You can customize the database configuration on your servers using [CustomConfig](/stack-features/custom-config.html). CustomConfig is available for Postgresql , Mysql, Redis and Mongodb .

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/). You can find many incredible guides and tutorials into the Liquid syntax around the web, but the syntax is easy enough to pick up in minutes.

There are variables available to use in your database CustomConfig. Some of them are general for all database types and some of them are database specific.

The following variables are available to use in any database CustomConfig.

### General Variables

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
            <td>Hash contains information about server that CustomConfig will going to push to it.</td>
		</tr>
		<tr>
			<td>cloud</td>
			<td>string</td>
      		<td>Stack cloud</td>
		</tr>
		<tr>
			<td>memory</td>
			<td>integer</td>
            <td>Server memory size</td>
		</tr>
		<tr>
			<td>core</td>
			<td>integer</td>
            <td>Server core count</td>
		</tr>
  </tbody>
</table>


The following variable is available only to use in Postgresql CustomConfig.

### Postgresql Variable

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
            <td>Value can be stand_alone, pg_master or pg_slave based on your server status</td>
		</tr>
  </tbody>
</table>

The following variables are available only to use in Mysql CustomConfig.

### Mysql Variables

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
            <td>Value can be stand_alone, mysql_master or mysql_slave based on your server status</td>
		</tr>
		<tr>
			<td>server_id</td>
			<td>integer</td>
            <td>The id that mysql replication knows your server with. It will be 0 for stand alone servers, 1 for master servers and a number greater than 1 for slave servers</td>
		</tr>
		<tr>
			<td>db_name</td>
			<td>string</td>
            <td>Database name</td>
		</tr>
  </tbody>
</table>

The following variables are available only to use in Rerdis CustomConfig.

### Redis Variables

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
            <td>Value can be stand_alone, redis_master or redis_slave based on your server status</td>
		</tr>
		<tr>
			<td>master_address</td>
			<td>string</td>
            <td>IP address of replication master. It will be empty string If server is stand alone or master</td>
		</tr>
		<tr>
			<td>master_port</td>
			<td>integer</td>
            <td>Will be 6379 when server is redis_slave , otherwise it is 0</td>
		</tr>
  </tbody>
</table>


### Committing Database CustomConfig

Editing and committing Database CustomConfig will do the following steps for _every db server (of your CustomConfig type) in the stack_ one by one, sequentially:

* Check the template for basic Liquid syntax errors
* Get the correct information about server and prepare general variables
* Prepare custom variables for related database type (server_state,...)
* Compile database configuration based on the information from the server and database type
* Upload the configuration to the server
* Restart database

This process will be stopped if an error is encountered.

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>
