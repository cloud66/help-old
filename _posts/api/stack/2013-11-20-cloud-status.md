---
layout: api_post
title: 'Status'
categories:
  - api
  - stack
type: 'GET'
path: '/stacks/:uid/status'
scope: 'public'
---

Gets the cloud status for the requesting and the given stack.

### Request

* None

### Response

One of the following values:

<code class="inline-code">Unknown
Healthy
Partial
Faulty
Maintenance</code>