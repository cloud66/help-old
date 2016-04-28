---
layout: post
template: one-col
title:  "SSL certificate"
so_title: "ssl"
nav_sticky: false
date:   2035-01-29 16:27:22
categories: stack-add-ins
lead: SSL certificate add-in
search-tags: ['ssl', 'ssl certificate', 'certificate', 'ssl termination']
tags: ['Add in', 'Security']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">About SSL certificate</a></li>
    <li><a href="#standard-ssl">Standard SSL Certificate</a></li>
    <li><a href="#letsencrypt-ssl">Let's Encrypt SSL Certificate</a></li>
</ul>


<h2 id="about">About SSL Certificate</h2>

SSL is an acronym for Secure Sockets Layer, an encryption technology that was created by Netscape. SSL creates an encrypted connection between your web server and your visitors' web browser allowing for private information to be transmitted without the problems of eavesdropping, data tampering, or message forgery.

Cloud 66 provides two types of SSL, one is the standard one and the other is the [Let's Encrypt](https://letsencrypt.org) one.

<h2 id="standard-ssl">Standard SSL Certificate</h2>
You can easily add a SSL certificate to your stack from the add-in page. Apart from the certificate key and SSL certificate, you can also provide an intermediate certificate and allowed server names (with wildcards accepted).

Once you've provided your SSL certificate and key, we'll install them on all your web servers.

Cloud 66 supports _SSL Termination_ on _HAProxy (1.5.x or higher)_ and _Amazon Elastic Load Balancer_. Simply check the option on SSL certificate add on page. This will config your existing load balancer or will apply whenever you create new load balancer.   

Refer to our [documentation](http://community.cloud66.com/articles/ssl-certificate) and [troubleshooting](http://community.cloud66.com/articles/ssl-certificate-issues) pages for more information.

<h2 id="letsencrypt-ssl">Let's Encrypt SSL Certificate</h2>

<div class="notice notice-danger">
    <h3>Warning!</h3>
    <p>Let's Encrypt is still in Beta.</p>
</div>

Adding this SSL certificate is even easier, you only need to add the DNS name for this. The DNS name cannot be the `c66.me` ones and it **won't accept wild cards**.

If your infrastructure is behind [Cloudflare](https://www.cloudflare.com) and your are using a global HTTPS redirect you need a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to get things working. Make sure you add a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) because Let's Encrypt need a non-secure HTTP endpoint (/.well-known/acme_challenge/\*) to invoke and reissue certificates. 

If your domain application is running on *www.example.io* for example you need a page rule for the following URL: *www.example.io/.well-known/acme-challenge/\**, browser integrity check off, SSL off, cache expiration: 4 hours.