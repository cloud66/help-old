---
layout: post
template: two-col
title:  "Configure your DNS"
so_title: "dns"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1967-08-26 15:33:13
categories: how-to
lead: Configure your DNS for maximum availability
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#limit">Limitations</a>
	</li>
	<li>
		<a href="#solution">Solutions</a>
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

Cloud 66 provides [DNS host names](/stack-features/dns-service.html) for each server you deploy with us. This allows us to assign a new IP address to your application on your behalf when problems arise on a server, while still maintaining the same host name.

For maximum scalability and resiliency you should avoid using DNS A-records (which point directly at an IP address). Instead, we recommend you use a DNS provider that supports CNAME functionality at the apex.

<h2 id="limit">Limitations</h2>
CNAME records do not require hard-coded IP addresses, and allow Cloud 66 to manage the IP addresses associated with your application. However, CNAME records are not available to root domains (eg. example.com). In other words, you cannot set a CNAME record pointing example.com to a Cloud 66 host name.

<h2 id="solution">Solutions</h2>

There are three approaches to serve traffic from your root domain while allowing Cloud 66 to manage your applications' IP addresses.

<h4 id="dns">1. Use a modern DNS provider</h4>
Some DNS hosts provide a CNAME-like functionality at the zone apex using a custom record type.

For example:

- [ALIAS at DNSimple](http://support.dnsimple.com/articles/alias-record)
- [ANAME at DNS Made Easy](http://www.dnsmadeeasy.com/technology/aname-records/)
- [ANAME at easyDNS](http://docs.easydns.com/aname-records/)
- [ALIAS at AWS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html)

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the Cloud 66 host name.

<h4 id="arecord">2. Use an A record</h4>
This involves using an A record to point your root domain at your load balancer and then redirecting traffic to www in Nginx.

<ol>
<li>Create a CNAME record for www pointing at the Cloud 66 host name on your load balancer.</li>
<li>Create an A record for your root domain (eg. example.com) pointing at your load balancer IP address.</li>
<li>​Use <a href="/stack-features/custom-config.html">Nginx CustomConfig</a> to <a href="http://stackoverflow.com/questions/7947030/nginx-no-www-to-www-and-www-to-no-www">permanently redirect all traffic</a> from example.com to www.example.com.</li>
</ol>

<h4 id="subdomain">3. Subdomain redirection</h4>
<div class="notice notice-danger">
	<h3>Important</h3>
	<p>This method will not work if you are serving content with SSL.</p>
</div>

This method creates a 301 permanent redirect to a specified subdomain for all root domain traffic.

1. Create a DNS forward of example.com to www.example.com.
2. Create a CNAME record with value www to the Cloud 66 hostname.