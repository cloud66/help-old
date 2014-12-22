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
		<a href="#gen">Generating a management certificate</a>
	</li>
	<li>
		<a href="#add">Using your management certificate</a>
	</li>
</ul>

<h2 id="about">About using Microsoft Azure cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any [Azure region](http://developers.cloud66.com/#introduction-cloud-vendor-instance-regions).

<h2 id="gen">Generating a management certificate</h2>
The Azure management certificate is a certificate used to authenticate an agent, such as Cloud 66, to your Azure account. These certificates are uploaded to Azure and stored at the subscription level.

To generate a management certificate you can use OpenSSL: 

<ol>
<li>Run the following command in your console:</li>

<pre class="prettyprint">
$ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
</pre>

<li>Now use the created <code>azure.pem</code> file and run the following command:</li>

<pre class="prettyprint">
$ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
</pre>

You will need <code>azure.pem</code> and <code>azure.cer</code> to use Cloud 66 with your Azure account.
</ol>

<h2 id="add">Using your management certificate</h2>
Access _Management portal_ of your Azure account and go to the _Settings_ menu. You will need the _Subscription ID_ which is listed in _Subscriptions_ tab. Select the _Management certificate_ tab and click the _Upload_ button to upload <code>azure.cer</code>.

Now visit your Cloud 66 dashboard and [build your first stack](http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66). When adding your Azure credentials, you will be asked to input your _subscription ID_ and upload the <code>azure.pem</code> file you created earlier.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

