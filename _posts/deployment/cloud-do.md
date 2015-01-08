---
layout: post
template: one-col
title:  "DigitalOcean cloud"
date:   2037-11-12 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your DigitalOcean account with Cloud 66
search-tags: ['do', 'digitalocean', 'digital ocean', 'droplet']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using DigitalOcean cloud</a>
	</li>
	<li>
		<a href="#add">Authorise Cloud 66 to your DigitalOcean</a>
	</li>
	<li>
		<a href="#external">External links</a>
	</li>
</ul>

<h2 id="about">About using DigitalOcean cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [DigitalOcean region](http://developers.cloud66.com/#cloud-vendor-instance-regions). Private networking is enabled for all data centers that support it. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

<h2 id="add">Authorise Cloud 66 to your DigitalOcean</h2>
Cloud 66 supports DigitalOcean API v2, which uses OAuth to authenticate requests. To authorize Cloud 66 to access your DigitalOcean account, visit the Cloud 66 dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _DigitalOcean_. 

Upon clicking the _Authorize_ button, you will be redirected to DigitalOcean to allow Cloud 66 to use your account. Once confirmed you will be redirected back to Cloud 66, where you can deploy your stack into DigitalOcean.

<div class="notice notice-danger">
    <h3>Notice</h3>
    <p>If you are upgrading your keys from API v1 to v2, visit your <i>Account</i> <a href="https://app.cloud66.com/clouds"><i>Cloud keys</i></a> page and edit your existing cloud key to authorize it with DigitalOcean. You need to be the account owner in order to update these credentials.</p>
</div>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

<h2 id="external">External Links</h2>
<ul class="list">
	<li><a href="https://digitalocean.com/pricing" target="_blank">DO pricing</a></li>
	<li><a href="https://digitalocean.com/features" target="_blank">DO features</a></li>
</ul>
