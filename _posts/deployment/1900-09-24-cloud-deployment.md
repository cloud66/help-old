---
layout: post
template: one-col
title:  "Deploy to your cloud"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1985-09-24 10:51:22
categories: deployment
lead: Heroku-like functionality on any cloud
search-tags: ['']
tags: ['']
---

## About deploying to the cloud
By providing Cloud 66 with your unique cloud provider API keys, Cloud 66 can connect to your cloud and build your full stack. Once your stack is deployed, you still have full root access and control over your servers. The servers are, and will always be yours.

## Cloud providers
Cloud 66 currently supports the following cloud providers:

<ul>
    <li><a href="/deployment/cloud-aws.html" target="_blank">Amazon Web Services</a></li>
    <li><a href="/deployment/cloud-do.html" target="_blank">Digital Ocean</a></li>
    <li><a href="/deployment/cloud-gce.html" target="_blank">Google Compute Engine</a></li>
    <li><a href="/deployment/cloud-joyent.html" target="_blank">Joyent</a></li>
    <li><a href="/deployment/cloud-linode.html" target="_blank">Linode</a></li>
    <li><a href="/deployment/cloud-rackspace.html" target="_blank">Rackspace</a></li>
    <li><a href="/deployment/cloud-telefonica.html" target="_blank">Telefonica</a></li>
    <li><a href="/deployment/cloud-vexxhost.html" target="_blank">Vexxhost</a></li>
</ul>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

As it's hard for us to determine if you're using your servers for other activities, we won't delete them on your cloud provider if you delete your stack.

If you don't want to use a cloud provider with Cloud 66, you can [deploy to your own server](#), although some features will not be available.

## Deploy to your cloud
To deploy to your cloud, visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked for your cloud API keys. Refer to the links above for more information about retrieving the keys from your cloud provider.

## Edit or delete cloud keys
You can edit or delete your cloud keys on your _Account_ page, through the _Settings_ -> _Your Keys_ menu. You can't delete cloud keys for a cloud that is currently used by a stack.