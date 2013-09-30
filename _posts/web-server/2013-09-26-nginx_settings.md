---
layout: post
title:  "Nginx Configuration of Your Stack"
date:   2013-09-24 10:51:22
categories: web-server
---

<p class="lead">Nginx is configured automatically for your stack. Here is some details about it</p>

## General
<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>user</td>
			<td>nginx</td>
		</tr>
		<tr>
			<td>worker_processes</td>
			<td>Dynamicly set <a href="/help/vendor_instances">based on instance size</a></td>
		</tr>
		<tr>
			<td>error_log</td>
			<td><code>/var/deploy/[stack_name]/web_head/shared/log/nginx_error.log</code></td>
		</tr>
	</tbody>
</table>

## Events
<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>worker_connections</td>
			<td>1024</td>
		</tr>
	</tbody>
</table>

## Http
<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>gzip</td>
			<td>on</td>
		</tr>
		<tr>
			<td>gzip_min_length</td>
			<td>100</td>
		</tr>
		<tr>
			<td>gzip_proxied</td>
			<td>expired no-cache no-store private auth</td>
		</tr>
		<tr>
			<td>gzip_types</td>
			<td>text/plain application/xml text/css application/x-javascript text/javascript</td>
		</tr>
		<tr>
			<td>gzip_disable</td>
			<td>"MSIE [1-6]\."</td>
		</tr>
		<tr>
			<td>passenger_root</td>
			<td><code>[passenger location]</code></td>
		</tr>
		<tr>
			<td>passenger_ruby</td>
			<td><code>[stack ruby shell]</code></td>
		</tr>
		<tr>
			<td>passenger_ruby</td>
			<td>nginx</td>
		</tr>
		<tr>
			<td>passenger_pool_idle_time</td>
			<td>0</td>
		</tr>
		<tr>
			<td>passenger_max_pool_size</td>
			<td>15</td>
		</tr>
		<tr>
			<td>ssl_session_cache</td>
			<td>shared:SSL:10m</td>
		</tr>
		<tr>
			<td>ssl_session_timeout</td>
			<td>10m</td>
		</tr>
		<tr>
			<td>underscores_in_headers</td>
			<td>on</td>
		</tr>
		<tr>
			<td>default_type</td>
			<td>application/octet-stream</td>
		</tr>
		<tr>
			<td>client_max_body_size</td>
			<td>50m</td>
		</tr>
		<tr>
			<td>sendfile</td>
			<td>on</td>
		</tr>
		<tr>
			<td>server_tokens</td>
			<td>off</td>
		</tr>
		<tr>
			<td>keepalive_timeout</td>
			<td>65</td>
		</tr>
	</tbody>
</table>

## Server
<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>listen</td>
			<td>80 default_server</td>
		</tr>
		<tr>
			<td>server_name</td>
			<td><code>_</code> or <code>SSL server name</code></td>
		</tr>
		<tr>
			<td>rails_env</td>
			<td><code>[stack environment]</code></td>
		</tr>
		<tr>
			<td>client_max_body_size</td>
			<td>50m</td>
		</tr>
		<tr>
			<td>root</td>
			<td><code>/var/deploy/[stack name]/web_head/current/public</code></td>
		</tr>
		<tr>
			<td>passenger_enabled</td>
			<td>on</td>
		</tr>
		<tr>
			<td>ssl_certificate_key</td>
			<td><code>/etc/ssl/localcerts/[ssl cerificate file name].key</code></td>
		</tr>
		<tr>
			<td>ssl_certificate</td>
			<td><code>/etc/ssl/localcerts/[ssl cerificate file name].crt</code></td>
		</tr>
	</tbody>
</table>