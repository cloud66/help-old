---
layout: post
template: two-col
title:  "Nginx redirects"
so_title: "nginx"
date:   2033-11-24 10:51:22
categories: 
lead: Use Cloud 66 CustomConfig to redirect your visitors
search-tags: ['']
tags: ['Web server']
tutorial: true
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#simple">Redirect from HTTP to HTTPS</a>
	</li>
	<li>
		<a href="#complex">Redirect between domains with HTTP and HTTPS</a>
	</li>
</ul>

<h2 id="simple">Redirect from HTTP to HTTPS</h2>

If you only want to serve HTTPS traffic through your application, you may also want to redirect HTTP users to HTTPS.

<p>
<a target="_blank" rel="nofollow" class="button-home" href="https://app.cloud66.com/users/sign_up/?utm_source=help&utm_medium=web&utm_campaign=help-page">Manage Nginx with ease on Cloud 66 &#10141;</a>
</p>

Simply add this code to the _server_ section of your Nginx configuration using [CustomConfig](/stack-features/custom-config.html), for example on line 81. This will work even if you're not using Cloud 66.

<pre class="terminal">
	return 301 https://$host$request_uri;
</pre>

<h2 id="complex">Redirect between domains with HTTP and HTTPS</h2>

If you have two separate domains (eg. A and B) for your app and need to redirect traffic from domain A to B, follow these instructions.

Create DNS records for domain A, pointing it at domain B. We will then create Nginx rules, so that visitors to domain A will be redirected to domain B. The method differs slightly between HTTP and HTTPS traffic, due to certificate complexities.

#### HTTP
We simply want to add a permanent redirect for visitors to domain A towards domain B (you can add this around line 65):

<pre class="terminal">
server {
    server_name             _;
    listen                  80;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
</pre>

#### HTTPS
The above method will not work for HTTPS traffic, because visitors from domain A will be expecting SSL certificates for that domain, not those of domain B.

As such, users from domain A must first be met with the SSL certificate for that domain, and then be redirected to domain B (and met with those certificates).

<pre class="terminal">
&#123;% if allow_ssl == true %&#125;
server {
    server_name          *.domaina.com;
    listen               443;
    ssl                  on;
    ssl_certificate_key /etc/ssl/localcerts/domaina.key;
    ssl_certificate /etc/ssl/localcerts/domaina.crt;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
</pre>

This will create a permanent redirect from domain A to B over SSL. Just remember to add your key and certificate files to the location specified on your server!