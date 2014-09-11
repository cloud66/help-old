---
layout: api_post
title:  'Force IP'
categories:
  - api
  - server
type: 'POST'
path: '/servers/:server_uid/force_ip'
scope: 'admin'
search-tags: ['ip change', 'notify']
tags: ['API']
---

Notifies your stack of a server IP change. This can be changes in the internal or external IPv4 or IPv6 addresses. This notification will update all the DNS records related to the server as well. Also, if two servers share the same physical servers (like your web server and db server) the change will affect both.
Please note that this API call will try to change the IP address but the change is not guaranteed.

### Request

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>int_ipv4</td><td>Internal IPv4 address</td><td>Optional</td></tr>
		<tr><td>int_ipv6</td><td>Internal IPv6 address</td><td>Optional</td></tr>
		<tr><td>ext_ipv4</td><td>External IPv4 address</td><td>Optional. If not provided, the IP address from the HTTP header of the API call is used</td></tr>
		<tr><td>ext_ipv6</td><td>External IPv6 address</td><td>Optional</td></tr>
	</tbody>
</table>

### Response

Success or failure and the list of the IP addresses.

<code class="inline-code">{
	'ok' : true|false,
	'message' : text message about the change,
	'addresses' : list of the changed addresses
}</code>