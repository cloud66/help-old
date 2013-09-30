---
layout: post
title:  "Server Group Attributes"
date:   2013-09-24 10:51:22
categories: API
---

<p class="lead">Server Group attribute values</p>

## Server Group Type Values
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Server Group Type</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
		<tbody>
			<tr><td>SRG_WEB</td><td>0</td><td>Web Server Group (ie. Rails)</td></tr>
			<tr><td>SRG_DB</td><td>1</td><td>Database Server Group</td></tr>
			<tr><td>SRG_HA_PROXY</td><td>2</td><td>HA Proxy Server Group</td></tr>
			<tr><td>SRG_REDIS</td><td>3</td><td>Redis Server Group</td></tr>
		</tbody>
	</thead>
</table>


## Server Group Subtype Values
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Server Group Subtype</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
		<tbody>
			<tr><td>SUB_RAILS</td><td>0</td><td>Rails Servers. Applies to SRG_WEB</td></tr>
			<tr><td>SUB_MYSQL</td><td>1</td><td>MySQL Servers. Applies to SRG_DB</td></tr>
			<tr><td>SUB_POSTGRESQL</td><td>2</td><td>PostgreSQL Servers. Applies to SRG_DB</td></tr>
			<tr><td>SUB_MONGODB</td><td>3</td><td>MongoDB Servers. Applies to SRG_DB</td></tr>
			<tr><td>SUB_HAPROXY</td><td>3</td><td>HA Proxy Servers. Applies to SRG_HA_PROXY</td></tr>
			<tr><td>SUB_REDIS</td><td>3</td><td>Redis Servers. Applies to SRG_REDIS</td></tr>
		</tbody>
	</thead>
</table>
