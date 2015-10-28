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

By default cloud66 will not delete servers and other cloud objects created in your cloud after you delete the stack but you can change this setting in the stack information page.

You need to go to the stack information page and select `Remove physical servers when a cloud66 server is deleted?`.  After that if you delete a server, load balancer, or even a whole stack, related objects in cloud will be deleted as well.

Cloud66 create different objects depending on which cloud provider your use, so the delete process will clean different objects too. On the other hand (for some clouds) cloud66 configures couple of items at account level (as an example cloud66 create a key at account level for _packet_ cloud). These items will not be deleted after stack deletion and you should clear them manually if you don't need them for other stacks anymore.

Here is the list of items(Deleting/Not Deleting) based on clouds :

###AWS
`Deleting :` Instances, Load Balancers, Security Groups, Key Pairs

###Rackspace
`Deleting:`  Servers, Load Balancers, Block storage volumes

###Digitalocean
`Deleting:` Servers, SSH Keys

###GCE
`Deleting:` VM Instances, Disks, Forwarding Rules, Target Pools

`Not Deleting:` Firewall Rules

###Linode
`Deleting:` Servers, NodeBalancers


###Vexxhost
`Deleting:` Servers, Security Groups, Keypaires

`Not Deleting:` Networks, Subnets, Routers


###CloudA
`Deleting:` Servers, Load Balancers, Security Groups, Keypaires, Public IPs

`Not Deleting:` Networks, Subnets, Routers

###Azure
`Deleting:` Virtual Machines, Cloud Services, Storage, Traffic Manager

`Not Deleting:` Networks

###Packet
`Deleting:` Devices, Projects

`Not Deleting:` SSH Keys
