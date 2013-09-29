---
layout: post
title:  "Users API"
date:   2013-09-24 10:51:22
categories: API
---

<p class="lead">Allows addition and removal of mobile devices to users list of used devices.</p>

The users API is used by mobile apps wanting to control user's Cloud 66 account remotely. These apps can use this API to add and remove devices to the user's account for push notification purposes.

## Listing All User Devices
#### Endpoint
<p><kbd>/users/devices.json</kbd></p>
#### Method
GET
#### Required Scope
users
#### Description
Lists all the devices on users account
### Results
JSON array of all devices belonging to the user.
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
		<tr><td>device_type</td><td>Device type.</td><td>1 = iOS</td></tr>
		<tr><td>sub_type</td><td>Device sub type</td><td>1 = iPhone, 2 = iPad, 3 = iPod Touch</td></tr>
		<tr><td>token</td><td>Unique Device Token</td><td></td></tr>
		<tr><td>enabled</td><td>Device is enabled or not</td><td></td></tr>
		<tr><td>created_at</td><td>Record created at</td><td>Date Time in UTC</td></tr>
		<tr><td>updated_at</td><td>Record updated at</td><td>Date Time in UTC</td></tr>
	</tbody>
</table>

## Add a new device
#### Endpoint
<p><kbd>/users/devices.json</kbd></p>
#### Method
POST
#### Required Scope
users
#### Description
Adds a new device for the user.
### Input
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

#### Error
<pre class="terminal">
bad_request - missing parameters
invalid_resource - invalid device parameters
conflict - device exists with the same token
</pre>

## Remove a device
#### Endpoint
<p><kbd>/users/devices/:device_token.json</kbd></p>
#### Method
DELETE
#### Required Scope
users
#### Description
Removes a device from the user account
### Input
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

#### Error
<pre class="terminal">
bad_request - missing parameters
not_found - device not found
</pre>

