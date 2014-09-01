---
layout: post
template: one-col
title:  "Configure your DNS"
so_title: "dns"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1967-08-26 15:33:13
categories: dns
lead: Configure your DNS for maximum availability
search-tags: ['']
tags: ['DNS']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About configuring your DNS</a>
	</li>
	<li>
		<a href="#configure">Configuring your DNS</a>
	</li>
	        <li>
                <ul>
                <li><a href="#dns">1. Use a modern DNS provider</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#arecord">2. Use an A record</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#subdomain">3. Subdomain redirection</a></li>
                </ul>
            </li>           
</ul>

<h2 id="about">About configuring your DNS</h2>

Cloud 66 provides DNS hostnames for each server you deploy with us. This allows us to assign a new IP address to your application on your behalf if need be, while still maintaining the same hostname.

For maximum scalability and resiliency, you should avoid using DNS A-records (which point directly at an IP address). However, this may not be possible with your DNS provider. While CNAME records do not require hard-coded IP addresses, they are not available to root domains (eg. example.com). In other words, you cannot set a CNAME record pointing example.com to a Cloud 66 hostname.

<h2 id="configure">Configuring your DNS</h2>

There are three approaches to configuring your DNS - in the following recommended order:

<h3 id="dns">1. Use a modern DNS provider</h3>
Some DNS hosts provide a CNAME-like functionality at the zone apex (root domain) using a custom record type.

For example:

- [ALIAS at DNSimple](http://support.dnsimple.com/articles/alias-record)
- [ANAME at DNS Made Easy](http://www.dnsmadeeasy.com/technology/aname-records/)
- [ANAME at easyDNS](http://docs.easydns.com/aname-records/)
- [ALIAS at AWS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html)

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the Cloud 66 hostname.

<h3 id="arecord">2. Use an A record</h3>
This involves using an A record to point your root domain at your load balancer and then redirecting traffic to www in Nginx.

<ol>
<li>Create a CNAME record for www pointing at the Cloud 66 hostname on your load balancer.</li>
<li>Create an A record for your root domain (eg. example.com) pointing at your load balancer IP address.</li>
<li>​Use <a href="#">network redirects</a> to permanently redirect all traffic from example.com to www.example.com.</li>
</ol>

<h3 id="subdomain">3. Subdomain redirection</h3>
<div class="notice notice-danger">
	<h3>Important</h3>
	<p>This method will not work if you are serving content with SSL, and only works for HTTP traffic (eg. not TCP/UDP).</p>
</div>

This method creates a 301 permanent redirect to a specified subdomain for all root domain traffic.

1. Create a DNS forward of example.com to www.example.com.
2. Create a CNAME record with value www to the Cloud 66 hostname.