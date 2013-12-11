---
layout: nil
title:  'Remove Device'
categories:
  - api
  - users
type: 'DELETE'
path: '/users/devices/:device_token'
scope: 'users'
---

Removes a device from the user account.

### Request

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>token</td><td>Unique Device Token</td><td></td></tr>
	</tbody>
</table>

### Response

<code class="inline-code">bad\_request - missing parameters
not\_found - device not found</code>
