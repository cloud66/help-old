---
layout: post
template: one-col
title:  "Linode cloud"
date:   2035-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your Linode account with Cloud 66
search-tags: ['linode', 'linode cloud']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using Linode cloud</a>
	</li>
	<li>
		<a href="#gen">Generate a Linode API key</a>
	</li>
	<li>
		<a href="#add">Add Linode key to a stack</a>
	</li>
	<li>
		<a href="#external">External links</a>
	</li>
</ul>

<h2 id="about">About using Linode cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [Linode region](http://developers.cloud66.com/#cloud-vendor-instance-regions#linode). Private networking is automatically enabled for all servers deployed by Cloud 66. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

<h2 id="gen">Generate a Linode API key</h2>
You need to provide your Linode API keys in order for Cloud 66 to access your account. To generate one, access the _my profile_ page of your Linode account, and go to the _API Keys_ menu (you may be asked to provide your password again for security reasons). Once there, create a label for your new key, as well as an expiry date, and then hit _Create API Key_. Take note of the key provided.

<h2 id="add">Add Linode key to a stack</h2>
Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Linode_ and provide your API key.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider unless <a href="/managing-your-stack/server-deletion">physical server deletion</a> is turned on.</p>
</div>

<h2 id="external">External links</h2>
<ul class="list">
	<li><a href="https://www.linode.com/speedtest" target="_blank">Linode regions</a></li>
	<li><a href="https://www.linode.com/pricing" target="_blank">Linode pricing</a></li>
</ul>