---
layout: post
template: one-col
title:  "Rackspace cloud"
date:   2034-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your Rackspace account with Cloud 66
search-tags: ['rackspace', 'rackspace cloud']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using Rackspace cloud</a>
	</li>
	<li>
		<a href="#gen">Generate a Rackspace API key</a>
	</li>
	<li>
		<a href="#add">Add Rackspace key to a stack</a>
	</li>
	<li>
		<a href="#external">External links</a>
	</li>
</ul>

<h2 id="about">About using Rackspace cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any Rackspace [region](http://developers.cloud66.com/#cloud-vendor-instance-regions#rackspace). Note that if you hold a Rackspace UK account, you will be limited to creating servers in the London region. The Rackspace US account is able to create servers in the remaining regions.

<h2 id="gen">Generate a Rackspace API key</h2>
You need to provide your Rackspace API key in order for Cloud 66 to access your account. To generate a key, access the _Account_ dropdown in the top right of your Rackspace account, and go to the _User Management_ page. Once there, click _Create a new user_, and fill in the necessary details for this new user. This user must be created with **Full Access** in order for servers to be created in your account.

Once you click _Create user_, you will be able to view the API Key by clicking _Show_.

<h2 id="add">Add Rackspace key to a stack</h2>
Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Rackspace_ and provide your API key.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider unless <a href="/managing-your-stack/server-deletion">physical server deletion</a> is turned on.</p>
</div>

<h2 id="external">External links</h2>
<ul class="list">
	<li><a href="http://www.rackspace.com/knowledge_center/article/about-regions" target="_blank">Rackspace regions</a></li>
	<li><a href="http://www.rackspace.com/cloud/public-pricing/" target="_blank">Rackspace pricing</a></li>
</ul>