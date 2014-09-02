---
layout: post
template: two-col
title:  "SSL certificate"
so_title: "ssl"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1650-09-24 10:51:22
categories: 
lead: Preparing your SSL certificate for your stack
search-tags: ['prepare ssl', 'ssl certificate', 'ssl key', 'intermediate certificate', 'how', 'ssl']
tags: ['Security']
tutorial: true
difficulty: 1
---

## About using SSL in Cloud 66
## Types of certificates (Intermediate, multi-domain)
## Add an SSL certificate
## Generate an SSL key
## Create a certificate signing request
## About using certificates in separate domains

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#sign">Certificate signing request</a>
	</li>
	<li>
		<a href="#intermediate">Intermediate certificates</a>
	</li>
	<li>
		<a href="#multi-domain">Multi-domain certificates</a>
	</li>
	<li>
		<a href="#separate">Separate domains with different certificates</a>
	</li>
</ul>

To add SSL to your stack, you need to have a SSL certificate and key. Some certificate authorities also provide you with an intermediate certificate. Firstly, please make sure that your SSL keys don't have any passphrases.

Once you have your certificate, key and possibly intermediate certificate, paste them into the appropriate boxes of the [SSL certificate add-in](/add-ins/ssl.html). You can also add the domain name if you want to limit the SSL to a certain domain.

<h2 id="sign">Certificate signing request</h2>

To generate a key and certificate signing request, follow the steps below.
<ol>
<li><a href="http://help.cloud66.com/how-to/shell-to-your-servers.html">SSH into your server</a>.</li>
<li>Generate private <i>key</i> on your server, without specifying a passphrase:</li>
<p>
<kbd>
openssl genrsa -des3 -out private&#95;key.key 2048
</kbd>
</p>
<li>Create a certificate signing request and enter your information as requested:</li>
<p>
<kbd>
openssl req -new -key private&#95;key.key -out signing&#95;request.csr
</kbd>
</p>
<li>Provide this CSR file to your certificate authority, who will in turn provide you with a certificate (CRT) file.</li>
<li>Use the original .key file together with this .crt file on Cloud 66.</li>
</ol>
<div class="notice">
    <h3>Important</h3>
    <p>You cannot use passphrase protected certificate keys with Nginx. Learn how to <a href="/troubleshooting/ssl-certificate-issues.html">remove the passphrases from certificate keys</a>.</p>
</div>

<h2 id="intermediate">Intermediate certificates</h2>
Some SSL certificate authorities (CA), like RapidSSL, issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these CAs fully by allowing you to add the intermediate certificate separately into the [SSL certificate add-in](/add-ins/ssl.html) form.

<h2 id="multi-domain">Multi-domain certificates</h2>
When installing multi-domain certificates, certificate authorities such as Comodo typically send you four files:

1. Root CA Certificate - <i>AddTrustExternalCARoot.crt</i>
2. Intermediate CA Certificate - <i>COMODORSAAddTrustCA.crt</i>
3. Intermediate CA Certificate - <i>COMODORSAExtendedValidationSecureServerCA.crt</i>
4. Your COMODO EV Multi-Domain SSL Certificate - <i>14637732.crt</i>

To use these, you have to concatenate all files except for the last one (the certificate):

<pre class="terminal">
cat COMODORSAExtendedValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > bundle_file
</pre>

<h2 id="separate">Separate domains with different certificates</h2>
You may need to serve different parts of your application on separate domains, each with its own SSL certificate. You can use [Nginx CustomConfig](/stack-features/custom-config.html) to set this up - you will basically have two server blocks listening on different domains, and serving different certificates (located on the server):

<pre class="terminal">
&#123;% if allow_ssl == true %&#125;

# main domain
server &#123;
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_1.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_1.crt;
server_name server_name_1.com;
client_max_body_size 50m;
...
&#125;

# secondary domain
server &#123;
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_2.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_2.crt;
server_name server_name_2.com;
client_max_body_size 50m;
...
&#125;
</pre>