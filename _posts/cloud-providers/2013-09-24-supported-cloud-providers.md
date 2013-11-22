---
layout: post
title:  "Supported Cloud Providers"
date:   2013-09-24 10:51:22
categories: cloud-providers
---

<p class="lead">
    Use Cloud 66 to provision and deploy your own servers or any supported cloud provider
</p>

If you have an account with:

* Amazon Web Services
* Joyent
* Linode
* Rackspace
* Telefonica
* Digital Ocean

You can associate your cloud provider API keys with Cloud 66. This means that Cloud 66 will be able to fire up servers from scratch under your account and provision, deploy and configure them.

Best of all, you still have full root access and control over your own servers at any time! These servers are, and always will be, yours &mdash; so you can do what you want with them!

Don't worry if you don't want to use a cloud provider with Cloud 66 - you can still [deploy directly to your servers](/getting-started/standalone-servers.html) (although some features will not be available).

<div class="notice">
	<h3>Important</h3>

	<p>When you delete your stack on Cloud 66, we won't delete it on your cloud provider (because we can't determine if you're using it for other purposes or not). Please remember to check your cloud provider account to ensure all the servers are terminated properly and to avoid surprise charges from your cloud vendor!</p>
</div>

## Supported Cloud Providers

Currently Cloud 66 supports the following Cloud Providers:

- [Amazon Web Services](/cloud-providers/cloud-aws.html)
- [Digital Ocean](/cloud-providers/cloud-do.html)
- [Joyent](/cloud-providers/cloud-joyent.html)
- [Linode](/cloud-providers/cloud-linode.html)
- [Rackspace Cloud](/cloud-providers/cloud-rackspace.html)
- [Telefonica Cloud](/cloud-providers/cloud-telefonica.html)

<!--Region breakdown to come.-->

## Connecting Your Cloud
You can connect your cloud account to Cloud 66 while setting a new Stack. Once the analysis of the stack is finished, you can find the link to adding a new cloud vendor to your account.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_connect.png)

## Remove Cloud Connections
You can remove a Cloud connection from your Account page under Cloud Keys tab.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_keys.png)



