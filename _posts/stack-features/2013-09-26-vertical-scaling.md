---
layout: post
template: two-col
title:  "Scaling vertically"
nav_sticky: false
date:   2038-01-25 16:27:22
categories: stack-features
lead: Scaling the size of an existing server
---

A number of cloud vendors allow you to scale up/down an existing server via their control panel, allowing you to increase or decrease the memory and CPU for existing servers.

Cloud 66 is compatible with this behaviour, and we only require that the cloud vendor doesn't change the server's unique identifier during this process.

<div class="notice">
 		<h3>Note</h3>
 		<p>The reported size of your server in the Cloud 66 UI will not necessarily change if you scale up your server via your vendors own UI. However, you should see the changed server capacity in the server memory/CPU/disk graph report.</p>
 </div>


We have verified that vertical scaling **works** with the following cloud vendors:

- Digital Ocean
- Linode
- Rackspace (ensure that you *confirm* the resizing on your Rackspace account after resizing - if you attempt to delete the server without confirming then it could become stuck)

Unfortunately this functionality **does not work** on the following cloud vendors:

 - Amazon Web Servers (due to the vendor changing the server identifier as mentioned above)
 - Joyent (not supported by vendor)
 - Telefonica (not supported by vendor)
