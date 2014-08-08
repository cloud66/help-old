---
layout: post
template: two-col
title:  "Custom environments"
so_title: "custom environments"
date:   3500-01-27 10:51:22
categories: stack-features
lead: Define and use custom environments for your stacks
search-tags: []
tags: ['Customization']
---

## Default Environments

By default, Cloud 66 supports the following environments:

* Development
* QA
* Staging
* Production

With the exception of _development_, there is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

For example, if you have a Rails application, selecting a stack to be _staging_ will result in `RAILS_ENV` to be set to `staging`.

### Development Environments

Development environments are free of charge on Cloud 66, and are restricted in the following ways:

* You cannot setup database backups for development stacks
* Development stacks don't support [load balancing](/add-ins/load-balancer.html) or [scaling of frontend](/stack-features/horizontal-scaling.html), [background processes](/stack-features/standalone-process-servers.html) or [database replication](/stack-features/database-replication.html).

## Custom Environments

You can define your own environments on Cloud 66. To do so, click on the _Custom Environments_ item under the _Account_ menu.

<img src="http://cdn.cloud66.com/images/help/custom_environment_menu_item.png" width="233" height="228"/>

Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack.

<img src="http://cdn.cloud66.com/images/help/custom_environment_dropdown.png" width="476" height="160">

Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` having the correct values. The usage of those custom values is up to your application.
