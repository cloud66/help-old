---
layout: post
template: two-col
title:  "Custom Environments"
so_title: "custom environments"
date:   2013-01-27 10:51:22
categories: stack-features
lead: Define and Use Custom Environments for Your Stacks
---

## Default Environments

By default, Cloud 66 supports the following environments:

* Development
* QA
* Staging
* Production

Except _development_, there is no difference between these environments when it comes to features and supported tools apart from what you define in your code.

For example, if you have a Rails application then selecting a stack to be _staging_ will result in `RAILS_ENV` to be set to `staging`. 

### Development Environments

Development environments are free of charge on Cloud 66. You can have as many development stacks for free. Development environments are restricted in the following ways:

* You cannot setup database backups for development stacks
* Development stacks don't support load balancing or scaling of frontend, background processes or DB replication.

## Custom Environments

You can define your own environments in Cloud 66. To do that, click on the **Custom Environments** item under the **Account** menu.

<img src="http://cdn.cloud66.com/images/help/custom_environment_menu_item.png" width="233" height="228"/>

Once the new environment is added, you will be able to see it in the list of supported environments when creating a new stack.

<img src="http://cdn.cloud66.com/images/help/custom_environment_dropdown.png" width="476" height="160">

Custom environments don't influence anything on the stack. They will result in the relevant environment variables like `RAILS_ENV` and `RACK_ENV` having the correct values. Using those custom values is up to your app.
