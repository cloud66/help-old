---
layout: post
template: two-col
title:  "Nginx configuration"
so_title: "nginx"
date:   2034-09-24 10:51:22
categories: web-server-deployment
lead: Nginx is configured automatically for your stack
search-tags: ['']
tags: ['Web server']
---



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
			<td>worker&#95;processes</td>
			<td>Dynamically set <a href="/web-server/nginx-workers.html">based on instance size</a></td>
		</tr>
		<tr>
			<td>error&#95;log</td>
			<td><code>/var/deploy/[stack&#95;name]/web&#95;head/shared/log/nginx&#95;error.log</code></td>
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
			<td>worker&#95;connections</td>
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
			<td>gzip&#95;min&#95;length</td>
			<td>100</td>
		</tr>
		<tr>
			<td>gzip&#95;proxied</td>
			<td>expired no-cache no-store private auth</td>
		</tr>
		<tr>
			<td>gzip&#95;types</td>
			<td>text/plain application/xml text/css application/x-javascript text/javascript</td>
		</tr>
		<tr>
			<td>gzip&#95;disable</td>
			<td>"MSIE [1-6]\."</td>
		</tr>
		<tr>
			<td>passenger&#95;root</td>
			<td><code>[passenger location]</code></td>
		</tr>
		<tr>
			<td>passenger&#95;ruby</td>
			<td><code>[stack ruby shell]</code></td>
		</tr>
		<tr>
			<td>passenger&#95;ruby</td>
			<td>nginx</td>
		</tr>
		<tr>
			<td>passenger&#95;pool&#95;idle&#95;time</td>
			<td>0</td>
		</tr>
		<tr>
			<td>passenger&#95;max&#95;pool&#95;size</td>
			<td>15</td>
		</tr>
		<tr>
			<td>ssl&#95;session&#95;cache</td>
			<td>shared:SSL:10m</td>
		</tr>
		<tr>
			<td>ssl&#95;session&#95;timeout</td>
			<td>10m</td>
		</tr>
		<tr>
			<td>underscores&#95;in&#95;headers</td>
			<td>on</td>
		</tr>
		<tr>
			<td>default&#95;type</td>
			<td>application/octet-stream</td>
		</tr>
		<tr>
			<td>client&#95;max&#95;body&#95;size</td>
			<td>50m</td>
		</tr>
		<tr>
			<td>sendfile</td>
			<td>on</td>
		</tr>
		<tr>
			<td>server&#95;tokens</td>
			<td>off</td>
		</tr>
		<tr>
			<td>keepalive&#95;timeout</td>
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
			<td>80 default&#95;server</td>
		</tr>
		<tr>
			<td>server&#95;name</td>
			<td><code>_</code> or <code>SSL server name</code></td>
		</tr>
		<tr>
			<td>rails&#95;env</td>
			<td><code>[stack environment]</code></td>
		</tr>
		<tr>
			<td>client&#95;max&#95;body&#95;size</td>
			<td>50m</td>
		</tr>
		<tr>
			<td>root</td>
			<td><code>/var/deploy/[stack name]/web&#95;head/current/public</code></td>
		</tr>
		<tr>
			<td>passenger&#95;enabled</td>
			<td>on</td>
		</tr>
		<tr>
			<td>ssl&#95;certificate&#95;key</td>
			<td><code>/etc/ssl/localcerts/[ssl cerificate file name].key</code></td>
		</tr>
		<tr>
			<td>ssl&#95;certificate</td>
			<td><code>/etc/ssl/localcerts/[ssl cerificate file name].crt</code></td>
		</tr>
	</tbody>
</table>