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

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About deploying to the cloud</a>
    </li>
    <li>
        <a href="#cloud">Cloud providers</a>
    </li>
    <li>
        <a href="#deploy">Deploy to your cloud</a>
    </li>
    <li>
        <a href="#edit">Edit or delete cloud keys</a>
    </li>
</ul>

<h2 id="about">About deploying to the cloud</h2>
By providing Cloud 66 with your unique cloud provider API keys, Cloud 66 can connect to your cloud and build your full stack. Once your stack is deployed, you still have full root access and control over your servers. The servers are, and will always be yours.

<h2 id="cloud">Cloud providers</h2>
Cloud 66 currently supports the following cloud providers:

<ul class="list">
    <li><a href="/deployment/amazon-web-services-cloud">Amazon Web Services</a></li>   
    <li><a href="/deployment/digitalocean-cloud">Digital Ocean</a></li>
    <li><a href="/deployment/google-compute-engine-cloud">Google Compute Engine</a></li>
    <li><a href="/deployment/linode-cloud">Linode</a></li>
    <li><a href="/deployment/microsoft-azure-cloud">Microsoft Azure</a></li>
    <li><a href="/deployment/packet-cloud">Packet</a></li>
    <li><a href="/deployment/rackspace-cloud">Rackspace</a></li>
    <li><a href="/deployment/vexxhost-cloud">Vexxhost</a></li>    
    <li><a href="/deployment/cloud-a-cloud">CloudA</a></li>    
</ul>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider unless <a href="/managing-your-stack/server-deletion">physical server deletion</a> is turned on.</p>
</div>

If you don't want to use a cloud provider with Cloud 66, you can [deploy to your own server](/deployment/registered-servers).

<h2 id="deploy">Deploy to your cloud</h2>
To deploy to your cloud, visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked for your cloud API keys. Refer to the links above for more information about retrieving the keys from your cloud provider.

<h2 id="edit">Edit or delete cloud keys</h2>
You can edit or delete your cloud keys on your _Account_ page, through the _Settings_ -> _Your Keys_ menu. You can't delete cloud keys for a cloud that is currently used by a stack.