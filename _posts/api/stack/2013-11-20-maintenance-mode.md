---
layout: nil
title: 'Maintenance Mode'
categories:
  - api
  - stack
type: 'POST'
path: '/stacks/:uid/maintenance_mode'
scope: 'redeploy'
---

Sets the stack maintenance mode on or off.

### Request

<code>value : should be either 1 (enter maintenance mode) or 0 (leave mainetance mode)</code>

### Response

<code>{ 
	"ok" : true,
	"message" : "Stack maintenance mode is on|off", 
	"maintenance" : true|false 
}
</code>
