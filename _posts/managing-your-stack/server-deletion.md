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

By default, Cloud66 will not delete servers and other objects created in your cloud after you delete the stack. However, you can change this setting.

If you go to the stack information page and select `Remove physical servers when a Cloud66 server is deleted?`, then when you delete a server, load balancer, or even a whole stack, related objects in the cloud will be deleted as well.

Cloud66 creates different objects depending on which cloud provider your use, most of which will be deleted. For some clouds, Cloud66 creates items at the Cloud66 account level (such as the SSH key for the _Packet_ cloud), which will not be deleted after stack deletion. You should clear them manually if you don't need them for other stacks anymore.

Here is the list of items (Deleted/Not Deleted) depending on the cloud, as well as where to find the non-deleted items:

###AWS
`Deleted:` Instances, Load Balancers, Security Groups, Key Pairs

###Rackspace
`Deleted:`  Servers, Load Balancers, Block storage volumes

###Digitalocean
`Deleted:` Servers, SSH Keys

###GCE
`Deleted:` VM Instances, Disks, Forwarding Rules, Target Pools
`Not Deleted:` Firewall Rules `(Cloud66 Website)`

###Linode
`Deleted:` Servers, NodeBalancers


###Vexxhost
`Deleted:` Servers, Security Groups, Keypaires
`Not Deleted:` Networks, Subnets, Routers `(Cloud66 Website)`


###CloudA
`Deleted:` Servers, Load Balancers, Security Groups, Keypaires, Public IPs
`Not Deleted:` Networks, Subnets, Routers `(Cloud66 Website)`

###Azure
`Deleted:` Virtual Machines, Cloud Services, Storage, Traffic Manager
`Not Deleted:` Networks `(Azure's website)`

###Packet
`Deleted:` Devices, Projects
`Not Deleted:` `SSH Keys`
