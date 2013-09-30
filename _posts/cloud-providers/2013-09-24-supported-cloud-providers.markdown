---
layout: post
title:  "Supported Cloud Providers"
date:   2013-09-24 10:51:22
categories: cloud-providers
---

<p class="lead">
    Use Cloud 66 to provision and deploy your code to your own servers running under your own cloud provider account
</p>

If you have an account with <b>Amazon Web Services</b>, <b>Joyent</b>, <b>Linode</b>, <b>Rackspace</b> Cloud or <b>Telefonica</b> Cloud, you can associate your cloud provider API keys with Cloud 66.

This means that Cloud 66 will be able to fire up servers from scratch under your account and provision, deploy and configure them.
Then, when you remove your Cloud 66 stack, the associated servers in your cloud will also be terminated.

Best of all, you still have full root access and control over your own servers at any time! These servers are, and always will be, yours &mdash; so you can do what you want with them!

Don't worry if you don't want to use a cloud provider with Cloud 66 - you can still [deploy directly to your servers](/getting-started/standalone-servers.html) (although some features will not be available)

<div class="notice">
	<h3>Important</h3>

	<p>When you delete your stack, Cloud 66 tries to delete the servers associated with that stack in your cloud account. However, it is possible that we are not able to remove all the servers related to the deleted stack for different reasons (like API credential changes or temporary provider connectivity issues). Please remember to check your cloud provider account to ensure all the servers are terminated properly and to avoid surprise charges from your cloud vendor!</p>
</div>

## Supported Cloud Providers

Currently Cloud 66 supports the following Cloud Providers:

- [Amazon Web Services](/cloud-providers/cloud_aws.html)
- Digital Ocean
- [Joyent](/cloud-providers/cloud_joyent.html)
- [Linode](/cloud-providers/cloud_linode.html)
- [Rackspace Cloud](/cloud-providers/cloud_rackspace.html)
- [Telefonica Cloud](/cloud-providers/cloud_telefonica.html)

<!--Region breakdown to come.-->

## Connecting Your Cloud
You can connect your cloud account to Cloud 66 while setting a new Stack. Once the analysis of the stack is finished, you can find the link to adding a new cloud vendor to your account.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_connect.png)

## Remove Cloud Connections
You can remove a Cloud connection from your Account page under Cloud Keys tab.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_keys.png)



