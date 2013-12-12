---
layout: api_post
title:  'Current Stats'
categories:
  - api
  - server
type: 'GET'
path: '/stacks/:stack_uid/server_groups/:svg_id/servers/:uid/stats'
scope: 'public'
---

Returns the current vital signs of a server.

### Request

* None

### Response

JSON object containing 3 arrays one for each vital sign.

<code class="inline-code">{
	'Disk' : disk,
	'Memory' : memory,
	'CPU' : cpu
}</code>

Each item is as follows:

<code class="inline-code">{
	"ts" : UTC\_date\_time,
	"p" : data\_point\_value (utilized percentage)
	"m" : data\_point\_text (in English)
}</code>