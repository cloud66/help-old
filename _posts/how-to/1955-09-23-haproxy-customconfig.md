---
layout: post
template: two-col
title:  "HAProxy CustomConfig"
so_title: "custom config"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1944-08-26 15:33:13
categories: how-to
lead: Customize your HAProxy configuration
search-tags: ['']
tags: ['Customization']
tutorial: true
---

## HAProxy CustomConfig

You can customize the HAProxy configuration on your HAProxy server using [CustomConfig](/stack-features/custom-config.html). For example, you can follow these instructions to [allow for SSL termination](/how-to/ssl-termination-on-load-balancers.html#haproxy) with your HAProxy setup.

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/). You can find many incredible guides and tutorials into the Liquid syntax around the web, but the syntax is easy enough to pick up in minutes.

The following variables are available to use in HAProxy CustomConfig.

### Available Variables

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
		<td>haproxy_username</td>
		<td>string</td>
		<td>Your HAProxy username</td>
	</tr>
	<tr>
		<td>haproxy_password</td>
		<td>string</td>
		<td>Your HAProxy password</td>
	</tr>
	<tr>
		<td>httpchk</td>
		<td>string</td>
		<td>Default value is "HEAD / HTTP/1.0" unless specified in your manifest file</td>
	</tr>
	<tr>
		<td>balance</td>
		<td>array</td>
		<td>Default value is "roundrobin" unless specified in your manifest file</td>
	</tr>

	<tr>
		<td>errorfile_lines</td>
		<td>array</td>
		<td>Default is empty array unless specified in your manifest file</td>
	</tr>
	<tr>
		<td>servers</td>
		<td>array</td>
		<td>Array of "server" objects that are to be load balanced (see below)</td>
	</tr>
	<tr>
		<td>server.ext_ipv4</td>
		<td>string</td>
		<td>External IPv4 address (server is one of the items in the "servers" array above)</td>
	</tr>
	<tr>
		<td>server.int_ipv4</td>
		<td>string</td>
		<td>Internal IPv4 address (server is one of the items in the "servers" array above)</td>
	</tr>

</tbody>
</table>

### Committing HAProxy CustomConfig

Editing and committing HAProxy CustomConfig will do the following steps for your HAProxy web server:

* Check the template for basic Liquid syntax errors
* Compile the HAProxy configuration based on the information from your load balanced web servers
* Upload the configuration to your HAProxy server
* Reload HAProxy

This process will be stopped if an error is encountered.

<div class="notice notice-warning">
	<h3>Warning</h3>
	<p>A bad HAProxy configuration might stop your HAProxy server from working. Take extra care to make sure the configuration is correct.</p>
</div>
