---
layout: post
template: two-col
title:  "Nginx CustomConfig"
so_title: "custom config"
date:   1907-08-26 15:33:13
categories: how-to
lead: Customize your Nginx configuration
---

## Nginx CustomConfig

You can customize the nginx configuration on your servers using [CustomConfig](/stack-features/custom-config.html).

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/). You can find many incredible guides and tutorials into the Liquid syntax around the web, but the syntax is easy enough to pick up in minutes.

The following variables are available to use in nginx CustomConfig.

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
			<td>passenger</td>
			<td>boolean</td>
      <td>Is nginx running passenger or a custom web server</td>
		</tr>

		<tr>
			<td>user_name</td>
			<td>string</td>
      <td>User name running the application process</td>
		</tr>

		<tr>
			<td>environment</td>
			<td>string</td>
      <td>Stack environment name (lowercase)</td>
		</tr>

		<tr>
			<td>server_address</td>
			<td>string</td>
      <td>Server address (IP or fqdn)</td>
		</tr>

		<tr>
			<td>workers</td>
			<td>integer</td>
      <td>Number of CPU cores on the server</td>
		</tr>

		<tr>
			<td>passenger_pool_max</td>
			<td>integer</td>
      <td>Size of the passenger pool (Passenger Only)</td>
		</tr>

		<tr>
			<td>use_ruby_shell</td>
			<td>boolean</td>
      <td>Used internally</td>
		</tr>

		<tr>
			<td>ruby_shell</td>
			<td>string</td>
      <td><code>/var/deploy/ruby_shell</code></td>
		</tr>

		<tr>
			<td>app_name</td>
			<td>string</td>
      <td>Stack name (lowercase)</td>
		</tr>

		<tr>
			<td>deploy_to</td>
			<td>string</td>
      <td>Stack path on the server</td>
		</tr>

		<tr>
			<td>envars</td>
			<td>hash</td>
      <td>Hash of all environment variables on the stack</td>
		</tr>

		<tr>
			<td>envars</td>
			<td>hash</td>
      <td>Hash of all environment variables on the stack</td>
		</tr>

		<tr>
			<td>passenger_location</td>
			<td>string</td>
      <td>Passenger location (Passenger only)</td>
		</tr>

		<tr>
			<td>allow_ssl</td>
			<td>boolean</td>
      <td>SSL Certificate is configured on the stack</td>
		</tr>

		<tr>
			<td>perfect_forward_secrecy</td>
			<td>boolean</td>
      <td>Perfect forward secrecy is enabled on the stack</td>
		</tr>

		<tr>
			<td>cors_enabled</td>
			<td>boolean</td>
      <td>CORS enabled on the stack</td>
		</tr>

		<tr>
			<td>cors_origin</td>
			<td>string</td>
      <td>CORS Origins</td>
		</tr>

		<tr>
			<td>cors_methods</td>
			<td>string</td>
      <td>CORS Methods</td>
		</tr>

  </tbody>
</table>

### A Note about Boolean Variables

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false`. Even if you are checking for true.

* GOOD if passenger != true
* GOOD: if passenger != false
* GOOD: if passenger == true
* GOOD: if passenger == false
* BAD: if passenger
* BAD: if !passenger

### Committing Nginx CustomConfig

Editing and committing Nginx CustomConfig will do the following steps for _every web server in the stack_ one by one, sequentially:

* Check the template for basic Liquid syntax errors
* Get the correct Passenger path (passenger stacks only)
* Check the version of the installed passenger, and determine if nginx needs to use a ruby shell wrapper.
* Count the number of cores on the server
* Compile the nginx configuration based on the information from the server
* Upload the configuration to the server
* Reload nginx

Reloading nginx does not interrupt serving traffic.

This process will be stopped if an error is encountered. For example in a 3 web server stack, if the first server cannot be updated, configuration change for the other 2 servers will be halted to avoid complete service diruption.

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>A bad nginx configuration might stop your nginx from working. Take extra care to make sure the configuration is correct.</p>
</div>
