---
layout: api_post
title:  'Add New Device'
categories:
  - api
  - users
type: 'POST'
path: '/users/devices'
scope: 'users'
---

Adds a new device for the user.

### Request

All parameters are required.

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>device_type</td><td>Device type.</td><td>1 = iOS</td></tr>
		<tr><td>sub_type</td><td>Device sub type</td><td>1 = iPhone, 2 = iPad, 3 = iPod Touch</td></tr>
		<tr><td>token</td><td>Unique Device Token</td><td></td></tr>
	</tbody>
</table>

### Response

<code class="inline-code">bad\_request - missing parameters
invalid\_resource - invalid device parameters
conflict - device exists with the same token</code>