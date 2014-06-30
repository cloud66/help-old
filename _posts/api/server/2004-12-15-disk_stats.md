---
layout: api_post
title:  'Disk stats'
categories:
  - api
  - server
type: 'GET'
path: '/stacks/:stack_uid/server_groups/:svg_id/servers/:uid/disk_stats'
scope: 'public'
tags: ['disk stats']
---

Returns the disk stats of a server.

### Request

* start\_datetime (optional: default value current datetime - 7 days)
* end\_datetime (optional: default value current datetime)
* resolution (optional: default value 1680)

### Response

JSON object containing potentially multiple arrays, one for each disk metric. Each array contains:

<code class="inline-code">{
	'key' : {disk key},
	'values' : {values}
}</code>

Each values item is as follows:

<code class="inline-code">{
	"x" : x-plot value
	"y" : y-plot value 
}</code>