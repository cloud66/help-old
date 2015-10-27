---
layout: post
template: one-col
title:  "Server deletion"
so_title: "deletion"
date:   2086-09-24 10:51:22
categories: managing-your-stack
lead: We delete physical servers from your cloud
search-tags: []
tags: ['']
---

By default cloud66 will not delete servers and other cloud objects created in your cloud after you delete the stack but you can change this setting in stack information page.
You need to go to stack information page and select `Remove physical servers when a clou66 server is deleted?`.  After that if you delete a server, load balancer ot whole stack, related objects in cloud will be deleted as well.
Cloud66 create different objects base on clouds, so delete process should clean different objects too. On the other hands (for some clouds) cloud66 configure couple of items at account level (as an example cloud66 create a key at account level for _packet_ cloud) these items will not be deleted after stack deletion and you should clear them manually if you don't need them for other stacks anymore.

Here is the list of items(Deleting/Not Deleting) based on clouds :

<h3>AWS</h3>
<h4>Deleting</h4>
* Instances
* Load Balancers
* Security Groups
* Key Pairs

<h3>Rackspace</h3>
<h4>Deleting</h4>
* Servers
* Load Balancers
* Block storage volumes

<h3>Digitalocean</h3>
<h4>Deleting</h4>
* Servers
* SSH Keys

<h3>GCE</h3>
<h4>Deleting</h4>
* VM Instances
* Disks
* Forwarding Rules
* Target Pools

<h4>Not Deleting</h4>
* Firewall Rules

<h3>Linode</h3>
<h4>Deleting</h4>
* Servers
* NodeBalancers


<h3>Vexxhost</h3>
<h4>Deleting</h4>
* Servers
* Security Groups
* Keypaires

<h4>Not Deleting</h4>
* Networks
* Subnets
* Routers


<h3>CloudA</h3>
<h4>Deleting</h4>
* Servers
* Load Balancers
* Security Groups
* Keypaires
* Public IPs

<h4>Not Deleting</h4>
* Networks
* Subnets
* Routers

<h3>Azure</h3>
<h4>Deleting</h4>
* Virtual Machines
* Cloud Services
* Storage
* Traffic Manager

<h4>Not Deleting</h4>
* Networks

<h3>Packet</h3>
<h4>Deleting</h4>
* Devices
* Projects

<h4>Not Deleting</h4>
* SSH Keys
