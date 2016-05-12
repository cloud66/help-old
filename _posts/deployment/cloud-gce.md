---
layout: post
template: one-col
title:  "Google Compute Engine cloud"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your Google Compute Engine account with Cloud 66
search-tags: ['gce', 'google', 'google cloud', 'compute engine', 'google compute engine']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using Google Compute Engine cloud</a>
	</li>
	<li>
		<a href="#gen">Generate GCE API keys</a>
	</li>
	<li>
		<a href="#add">Add GCE keys to a stack</a>
	</li>
	<li>
		<a href="#external">External links</a>
	</li>
</ul>

<h2 id="about">About using Google Compute Engine cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [Google Compute Engine (GCE) region](http://developers.cloud66.com/#cloud-vendor-instance-regions).

<h2 id="gen">Generate GCE API keys</h2>
You need to provide your GCE API keys in order for Cloud 66 to access your account. To generate these, access the _Developers Console_ of your Google account, and create a project if you don't already have one. Once you have a project, access it and click the _APIs & auth_ -> _APIs_ menu. On this page, make sure that the option for _Google Compute Engine_ is turned _On_. 

Next, in the same menu, click _Credentials_ and then _Create new Client ID_. Select _Service account_ from the options provided, and click _Create Client ID_. This will automatically download a P12 file for you, which contains your credentials. 

We need three credentials to connect with your account:

1. Email address - this is available on the _APIs & auth_ -> _Credentials_ page under Service Accounts. 
2. P12 key - the file that was automatically downloaded for you
3. Project ID - this is available at the top of the _Overview_ page

Please remember to enable Google Compute in the API list under _API & auth_ under APIs for the integration to work.

You may also have to enable billing for your account through the _Billing and settings_ menu.

<h2 id="add">Add GCE keys to a stack</h2>
Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Google Compute Cloud_ and provide your credentials.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider unless <a href="/managing-your-stack/server-deletion">physical server deletion</a> is turned on.</p>
</div>

<h2 id="external">External links</h2>
<ul class="list">
	<li><a href="https://developers.google.com/compute/docs/zones#available" target="_blank">GCE regions</a></li>
	<li><a href="https://cloud.google.com/products/compute-engine/#pricing" target="_blank">GCE pricing</a></li>
</ul>
