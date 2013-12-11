---
layout: nil
title:  'Vital Signs'
categories:
  - api
  - server
type: 'GET'
path: '/stacks/:stack_uid/server_groups/:svg_id/servers/:uid/vital_signs'
scope: 'public'
---

Returns the vital signs history of a server. This is an array of CPU utilization and free disk and memory gathered from the server.

### Request

* Node

### Response

JSON object containing 3 arrays one for each vital sign.

<code class="inline-code">{
	'Disk' : disk,
	'Memory' : memory,
	'CPU' : cpu
}</code>

Each array is as follows:

<code class="inline-code">[{
	"ts" : UTC\_date\_time,
	"p" : data\_point\_value (utilized percentage)
	"m" : data\_point\_text (in English)
}]</code>