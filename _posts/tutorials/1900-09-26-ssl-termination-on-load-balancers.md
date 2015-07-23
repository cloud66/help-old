---
layout: post
template: two-col
title:  "Manually add an SSL certificate to a load balancer"
so_title: "ssl"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2000-09-26 15:33:13
categories: 
lead: The process differs for different load balancers
search-tags: ['ssl termination', 'ssl load balancer']
tags: ['Scaling']
tutorial: true
difficulty: 2
---
<div class="notice">
    <h3>Cloud 66 now supports automatic SSL termination</h3>
    <p>You can activate SSL termination on _HAProxy_ and _Amazon Elastic Load Balancer_ through SSL certificate add-in</p>[check here for more information](http://help.cloud66.com//stack-add-ins/ssl-certificate)
</div>


<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#aws">Amazon Elastic Load Balancer</a>
	</li>
	<li>
		<a href="#rackspace">Rackspace</a>
	</li>
</ul>

SSL termination using your load balancer allows the load balancer to handle incoming SSL connections, decrypt them and pass on unencrypted requests to your app servers.

![SSL termination](http://cdn.cloud66.com/images/help/ssl_termination.png)

It's important to note that _you do not need SSL termination to enable SSL on your stack_ - you can simply <a href="http://help.cloud66.com/stack-add-ins/ssl-certificate">add your SSL certificate to your app servers</a> as an add-on.

<h2 id="aws">Amazon Elastic Load Balancer</h2>

To register an SSL certificate with Amazon Elastic Load Balancer, please refer to our [blog post](http://blog.cloud66.com/registering-ssl-certificate-with-amazon-elastic-load/).

Thanks to the AWS dashboard or the command line interface, you can easily upload your SSL certificates to relevant load balancers.

Through the AWS dashboard:

<ul class="article-list">
<li>Sign in to the AWS management console and open the Amazon EC2 console.</li>
<li>Select your load balancer and upload a new SSL Certificate or choose an existing one.</li>
<li>In case it is a new certificate, enter a name for the certificate and copy paste the contents of the private key file and the public key file into the related fields, then save.</li>
</ul>

<div class="notice">
    <h3>Important</h3>
    <p>Ensure that the certificate is valid: current date must be between the certificate’s start and end date. Certificate keys also should not be password protected</p>
</div>

Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

<ul class="article-list">
<li>Run the command below to add a new SSL certificate:</li>
</ul>

<pre class="prettyprint">
$ iam-servercertupload -b &lt;CA authenticated SSL&gt; -k &lt;private key file(.pem)&gt; -s &lt;certificate name&gt;  -c  &lt;certificate chain file&gt; –v
</pre>

<ul class="article-list">
<li>
You should retrieve any available SSL certificate using this command:</li>
</ul>

<pre class="prettyprint">
$ iam-servercertlistbypathx
</pre>

<ul class="article-list">
<li>
Run the command below to attach the SSL certificate to the load balancer:</li>
</ul>

<pre class="prettyprint">
$ elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&#60;certificate name&#62;"
</pre>

<ul class="article-list">
<li>
To delete a certificate, run the following command:
</li>
</ul>

<pre class="prettyprint">
$ iam-servercertdel -s &#60;certificate name&#62;
</pre>

Refer to the <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html">AWS documentation for more information</a>.

<h2 id="rackspace">Rackspace</h2>
Rackspace make it very easy for you to <a href="http://www.rackspace.com/knowledge_center/product-faq/cloud-load-balancers">add SSL certificates to their cloud load balancer</a>, straight from their control panel.