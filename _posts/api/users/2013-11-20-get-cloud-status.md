---
layout: nil
title:  'Get Cloud Status'
categories:
  - api
  - users
type: 'GET'
path: '/users/cloud_status'
scope: 'public'
---

Gets the cloud status for the requesting user.

### Request

* Node

### Response

One of the following values:

<code class="inline-code">Unknown
Healthy
Partial
Faulty
Maintenance</code>