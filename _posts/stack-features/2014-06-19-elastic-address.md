---
layout: post
template: two-col
title:  "ElasticAddress"
so_title: "elastic address"
nav_sticky: false
date:   2082-12-25 16:27:22
categories: stack-features
lead: Easy and seamless traffic switch between stacks
---

ElasticAddress is a managed quick response DNS address that automatically follows your stack web endpoints. You can connect it to up to 2 stacks at anytime: Primary and Backup Stacks. When you need to switch the traffic to another stack, simply flip the switch between Primary to Backup stack and the traffic will flow to the new stack within 5 minutes.

### Setup
To setup ElasticAddress, head to your [Account](https://app.cloud66.com/me) page and ElasticAddresses page.

To add a new ElasticAddress, click on the big green button or the **+** button. You can now select a Primary and a Back up stack for your ElasticAddress.

![ElasticAddress List](http://cdn.cloud66.com/images/help/elastic_address_list.png)
![ElasticAddress Edit](http://cdn.cloud66.com/images/help/elastic_address_edit.png)

### Seamless traffic routing
ElasticAddress follows the web head of your stack. This means it points to your first web server address when you don't have any load balancers. Once you add a load balancer to the stack, ElasticAddress automatically gets updated to point to the load balancer.
ElasticAddress also automatically gets updated when you rename your stack or web servers.

### Setting up ElasticAddress with your own domain
To get ElasticAddress working with your own domain, add a CNAME record in your DNS provider to point to the ElasticAddress.

### Use Cases

There are two major use cases for ElasticAddress:

- **Application resilience**: By building and nominating a secondary backup on a different cloud provider or data center you can use ElasticAddress to switch your visitors from the Primary stack to the Backup one with ease.
- **Cloning stacks**: If you need to clone or rebuild your stack, you can ElasticAddress to switch the traffic to the new stack without interruptions to your service.

### Notes
- You don't need to select any stacks for your ElasticAddress. This way you can get the ElasticAddress reserved for use in future. This is particularly useful when you want to keep the ElasticAddress the same.
- Having a Backup stack is not mandatory.
- You can only delete an ElasticAddress when it isn't pointing to any stacks.
- Once you delete an ElasticAddress, it is gone and the DNS record for it is removed and you won't be able to get the same ElasticAddress back.
