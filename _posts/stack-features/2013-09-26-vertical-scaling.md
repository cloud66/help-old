---
layout: post
title:  "Scaling Vertically"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Scaling your servers vertically (depending on your cloud provider)</p>

Some cloud vendors allow you to scale up/down your server via their own control panel.
Using this mechanism, you can increase/decrease memory/CPU for an individual box.

Cloud 66 is compatible with this behaviour as long as the cloud vendor doesn't change the server's unique identifier.

Changing your server size with the following vendors has been verified and **will work** as expected

 - Digital Ocean
 - Linode
 - Rackspace (NOTE: ensure that you *confirm* the resizing on your Rackspace account after resizing. If you attempt to delete the server without confirming then it could become stuck)

<div class="notice">
 		<h3>Note</h3>
 		<p>The reported size of your server via the Cloud 66 UI will not necessarily change if you scale up your server via your vendor's own UI. However you should see the changed server capacity in the server memory/CPU/disk graph report</p>
 </div>

 Unfortunately the following vendors **will not work**

 - AWS - *due to the vendor changing the server identifier as mentioned above*
 - Joyent - *not supported by vendor*
 - Telefonica - *not supported by vendor*

