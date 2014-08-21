---
layout: post
template: two-col
title:  "ElasticAddress"
so_title: "elastic address"
nav_sticky: false
date:   2096-01-25 16:27:22
categories: dns
lead: Easy and seamless traffic switch between stacks
search-tags: []
tags: ['DNS']
---

ElasticAddress is a managed quick response DNS address that automatically follows your stack web endpoints. You can connect it to up to 2 stacks at any time - a _primary_ and _backup_ stack. Should you need to switch traffic between your stacks, simply flip the switch and your traffic will flow to the _backup_ stack within 5 minutes.

There are two major use cases for this:

- **Application resilience**<br/> By building and nominating a secondary backup on a different cloud provider or data center you can use ElasticAddress to switch your visitors from the _primary_ to the _backup_ stack with ease.
- **Cloning stacks**<br/> If you need to clone or rebuild your stack, you can use ElasticAddress to switch your traffic to the new stack without interruptions to your service.

### Setup
To view your ElasticAddresses, click the _ElasticAddress_ tab on your _Account_ page. To add a new ElasticAddress, click the **+** button:

![ElasticAddress List](http://cdn.cloud66.com/images/help/elastic_address_list.png)

You will then be able to select a _primary_ and a _backup_ stack for your ElasticAddress.
![ElasticAddress Edit](http://cdn.cloud66.com/images/help/elastic_address_edit.png)

Once you have an ElasticAddress, add a CNAME record in your DNS provider dashboard that points at the ElasticAddress.

### Seamless traffic routing
ElasticAddress follows the web head of your stack. In other words, it points to your web server when you don't have a load balancer, and if you have one, at your load balancer. ElasticAddress will also automatically update to point at a newly added load balancer. Similarly, it also gets automatically updated when you rename your stack or web servers.

A great way to test this is to use the `dig` command in your terminal, for example `dig 414-262-781.cloud66.net`, which allows you to see where the DNS is pointing.

### Notes
- You don't need to select any stacks for your ElasticAddress. This allows you to reserve the ElasticAddress for future use. This is particularly useful when you want to keep address the same.
- Having a _backup_ stack is not mandatory.
- You can only delete an ElasticAddress when it isn't pointing at any stacks.
- Once you delete an ElasticAddress, the DNS record for it is permanently deleted and you won't be able to get the same ElasticAddress back.
