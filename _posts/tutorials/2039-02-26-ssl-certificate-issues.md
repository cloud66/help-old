---
layout: post
template: two-col
title:  "SSL certificate issues"
so_title: "ssl certificate"
date:   1900-11-01 15:33:13
categories: 
lead: Troubleshooting SSL certificate issues
search-tags: ['ssl', 'ssl issue', 'ssl troubleshoot', 'ssl error']
tags: ['Troubleshooting']
tutorial: true
difficulty: 1
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#webserver">Web server issues</a>
	</li>
	<li>
		<a href="#pass">Passphrase protected keys</a>
	</li>
	<li>
		<a href="#encoding">Certificate and key encoding</a>
	</li>
	<li>
		<a href="#match">Matching certificates and keys</a>
	</li>
</ul>

Installing SSL certificates on your Cloud 66 stack is very easy: copy the key and certificate and paste them into the SSL certificate dialog. Cloud 66 then automatically transfers the certificates to all of your frontend servers and configures the web server to use them.

However, you always need to have the right SSL certificates and keys to use. Specifically, your SSL certificates need to:

<ul class="article-list">
<li>Be input correctly for Nginx to start</li>
<li>Have no passphrase</li>
<li>Have the correct encoding</li>
<li>Match each other</li>
</ul>

<h3 id="webserver">Web server issues</h3>
If you've added your SSL certificate through the Cloud 66 UI and your web server has stopped serving content, it's likely that there's some error with your SSL certificate. In this case, it's best to [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and run `sudo service nginx restart`, which should highlight the error.

<h3 id="pass">Passphrase protected keys</h3>
You cannot use passphrase protected SSL certificate keys with Nginx. Using passphrase protected certificate keys will cause Nginx to prompt for the manual entry of passphrase at restart which will break the automatic deployment flow (and restart of Nginx after a server restart).

The symptoms of this is that your deployment gets stuck in the _Restarting Nginx_ step.

You can simply use a non-passphrase-protected version of your SSL certificate key when [adding an SSL key to your stack](/articles/ssl-certificate). Use the following command to do it (on your development computer):

<pre class="prettyprint">
$ openssl rsa -in private_key_with_pass_phrase -out private_key_without_pass_phrase
</pre>

You will be prompted for your passphrase and the output will be generated after that.

<h3 id="encoding">Certificate and key encoding</h3>
Certificates and key files need to have only a _new line_ character at the end (instead of both _new line_ and _carriage return_ characters). To see if that's the case, you can open them in a text editor like TextMate and show the invisible characters.<br/>

![TextMate Show Invisible Characters](http://cdn.cloud66.com/images/help/show_invisible_characters_textmate.png)

This is an example of a wrong line ending:

![Wrong Line Ending for SSL certificate](http://cdn.cloud66.com/images/help/wrong_encoding_of_ssl_certificate.png)

<h3 id="match">Matching certificates and keys</h3>
This problem usually manifests itself as the following error when starting nginx:

<pre class="prettyprint">
nginx: [emerg] SSL_CTX_use_PrivateKey_file("FILE.key") failed (SSL: error:0B080074:x509 certificate routines:X509_check_private_key:key values mismatch
</pre>

To make sure your key and certificate match correctly, use the OpenSSL commandline tool like this:

<pre class="prettyprint">
$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer
</pre>

If everything matches (same modulus), the files are compatible. If not, one of the file is not linked to the others.
