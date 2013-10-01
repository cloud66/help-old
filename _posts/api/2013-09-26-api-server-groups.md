---
layout: post
title:  "Server Groups API"
date:   2013-09-24 10:51:22
categories: API
---

<p class="lead">List Server Groups through the API</p>

## Listing Server Groups
#### Endpoint
<p><kbd>/stacks/[stack_uid]/server_groups.json</kbd></p>
#### Method
GET
#### Required Scope
public
#### Description
Lists all the server groups of a stack.
### Results
JSON array of all server groups belonging to the given stack.
Each item in the array contains the following attributes:
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>id</td><td>Server Group Id</td><td></td></tr>
		<tr><td>name</td><td>Server Group Name</td><td></td></tr>
		<tr><td>type</td><td>Server Group Type</td><td><a href="/help/server_group_types">Server Group Types</a></td></tr>
		<tr><td>sub_type</td><td>Server Group Subtype</td><td><a href="/help/server_group_types">Server Group Types</a></td></tr>
		<tr><td>load_balancer</td><td>Id of the load balancer used</td><td>id or nil if no load balancer is present</td></tr>
		<tr><td>created_at</td><td>Record created at</td><td>Date Time in UTC</td></tr>
		<tr><td>updated_at</td><td>Record updated at</td><td>Date Time in UTC</td></tr>
	</tbody>
</table>

#### Error
<pre class="terminal">
bad_request - no stack UID provided
not_found - invalid stack UID provided
</pre>

#### Example
<pre class="terminal">
{[
	"id" : 564,
	"name" : "Rails Servers",
	"type" : 0,
	"sub_type" : 0,
	"load_balancer" : 334,
	"updated_at" : "2013-01-25T14:13:18+00:00",
	"created_at" : "2013-01-25T14:13:18+00:00"
]}
</pre>

## Show Server Group Details
#### Endpoint
<p><kbd>/stacks/[stack_uid]/server_groups/[server group id].json</kbd></p>
#### Method
GET
#### Required Scope
public
#### Description
Returns the details of a single server group
### Results
JSON object of the server group:
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>id</td><td>Server Group Id</td><td></td></tr>
		<tr><td>name</td><td>Server Group Name</td><td></td></tr>
		<tr><td>type</td><td>Server Group Type</td><td><a href="/help/server_group_types">Server Group Types</a></td></tr>
		<tr><td>sub_type</td><td>Server Group Subtype</td><td><a href="/help/server_group_types">Server Group Types</a></td></tr>
		<tr><td>load_balancer</td><td>Id of the load balancer used</td><td>id or nil if no load balancer is present</td></tr>
		<tr><td>created_at</td><td>Record created at</td><td>Date Time in UTC</td></tr>
		<tr><td>updated_at</td><td>Record updated at</td><td>Date Time in UTC</td></tr>
	</tbody>
</table>

#### Example
<pre class="terminal">
{
	"id" : 564,
	"name" : "Rails Servers",
	"type" : 0,
	"sub_type" : 0,
	"load_balancer" : 334,
	"updated_at" : "2013-01-25T14:13:18+00:00",
	"created_at" : "2013-01-25T14:13:18+00:00"
}
</pre>

#### Error
<pre class="terminal">
bad_request - no stack UID provided
not_found - invalid stack UID provided
</pre>