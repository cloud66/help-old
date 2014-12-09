---
layout: post
template: one-col
title:  "Microsoft Azure cloud"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your Microsoft Azure account with Cloud 66
search-tags: ['azure', 'microsoft', 'microsoft cloud', 'microsoft azure']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using Microsoft Azure cloud</a>
	</li>
	<li>
		<a href="#gen">Generate Management certificate</a>
	</li>
	<li>
		<a href="#add">Add Management certificate</a>
	</li>
</ul>

<h2 id="about">About using Microsoft Azure cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [Azure region](http://developers.cloud66.com/#introduction-cloud-vendor-instance-regions).

<h2 id="gen">Generate Management certificate</h2>
A Azure management certificate is an X.509 v3 certificate used to authenticate an agent, such as Visual Studio Tools for Windows Azure or a client application (ie Cloud66) that uses the Service Management API, acting on behalf of the subscription owner to manage subscription resources. Azure management certificates are uploaded to Azure and stored at the subscription level. These certificates are used to authenticate your Windows Azure deployment and they are independent of any cloud service or deployment.

To generate management certificate you can use OpenSSL: 

1. Run this command on console:
<pre class="prettyprint">
$ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
</pre>



2. Use azure.pem created in previous step and run this command in console:
<pre class="prettyprint">
$ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
</pre>

you will need 'azure.pem' and 'azure.cer' to use cloud66 with your azure account

<h2 id="add">Add Management certificate</h2>
Access _Management portal_ of your Azure account. Go to _Settings_ menu. You will need _Subscription ID_ that is listed in _SUBSCRIPTIONS_ tab. Choose _MANAGEMENT CERTIFICATE_ tab. Use _Upload_ button to upload 'azure.cer' file that created in previous step.

Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Microsoft Azure_ and provide your _Subscription ID_ and upload your 'azure.pem'.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

