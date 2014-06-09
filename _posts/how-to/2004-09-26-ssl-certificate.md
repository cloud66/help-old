---
layout: post
template: two-col
title:  "SSL certificate"
so_title: "ssl"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1650-09-24 10:51:22
categories: how-to
lead: Preparing your SSL certificate for your stack
tags: ['prepare ssl', 'ssl certificate', 'ssl key', 'intermediate certificate', 'how', 'ssl']
---

## Adding SSL to your stacks
To add SSL to your stack, you need to have a SSL certificate and key. Some certificate authorities also provide you with an intermediate certificate as well.

You must make sure your SSL keys don't have any passphrases.

Once you have your certificate and key, click on the Install SSL certificate on the stack Protips and paste the certificate, key and the intermediate certificate (if you have any) into the appropriate boxes.

You can also add the domain name if you want to limit the SSL to a certain domain.

<h3>Certificate signing request</h3>

To generate a .key and .crt file, follow the steps below.
<ol>
<li>[SSH into your server](http://help.cloud66.com/how-to/shell-to-your-servers.html).</li>
<li>Generate private key (KEY) on your server, without specifying a passphrase:</li>
<p>
<kbd>
openssl genrsa -des3 -out private&#95;key.key 2048
</kbd>
</p>
<li>Create a certificate signing request file and enter your information as requested:</li>
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

<h3>Adding SSL certificate with intermediate certificates</h3>
Some SSL certificate providers (Certificate Authorities) like RapidSSL issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these Certificate Authorities fully by allowing you add the intermediate certificate separately into the SSL certificate add-on form.
