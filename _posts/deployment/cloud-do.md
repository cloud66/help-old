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
		<a href="#gen">Generate DigitalOcean access keys</a>
	</li>
	<li>
		<a href="#add">Add DigitalOcean keys to a stack</a>
	</li>
	<li>
		<a href="#external">External links</a>
	</li>
</ul>

<h2 id="about">About using DigitalOcean cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [DigitalOcean region](http://developers.cloud66.com/#cloud-vendor-instance-regions). Private networking is enabled for all data centers that support it. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

<h2 id="gen">Generate DigitalOcean access keys</h2>
You need to provide your DigitalOcean access keys in order for Cloud 66 to access your account. To generate these, click the _Apps & API_ link in the left menu of your DigitalOcean account. You will want to use **API v1**, so click the link at the top of the page. Next, click _Generate new key_ in the top right corner, and then confirm by clicking _Create_. Take note of your _Client ID_ and _API key_.

<h2 id="add">Add DigitalOcean keys to a stack</h2>
Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _DigitalOcean_ and provide your credentials.
<br/>
<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

<h2 id="external">External Links</h2>
<ul>
	<li><a href="https://digitalocean.com/pricing" target="_blank">DO pricing</a></li>
	<li><a href="https://digitalocean.com/features" target="_blank">DO features</a></li>
</ul>
