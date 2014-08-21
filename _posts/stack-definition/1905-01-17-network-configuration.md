---
layout: post
template: two-col
title:  "Stack network settings"
so_title: "network"
nav_sticky: false
date:   2084-12-30 16:27:22
categories: stack-definition
lead: "Configure network traffic and redirections for your stacks"
search-tags: []
tags: ['Security']
---

## About configuring network settings
## What is activeprotect?
## Open your firewall
## Add a firewall rule
## Configure network traffic
## Enable maintenance mode

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#active-protect">ActiveProtect</a>
	</li>
	<li>
		<a href="#firewall">Firewall</a>
	</li>
	<li>
		<a href="#traffic">Traffic</a>
	</li>
	<li>
        <ul>
        <li><a href="#allowing">Allowing traffic</a></li>
        <li><a href="#denying">Denying traffic</a></li>
        </ul>
    </li>
	<li>
		<a href="#redirects">Redirects</a>
	</li>
	<li>
        <ul>
        <li><a href="#maintenance">Maintenance mode</a></li>
        <li><a href="#https">Redirect HTTP to HTTPS</a></li>
        <li><a href="#www">WWW or non-WWW in your URL</a></li>
        </ul>
    </li>
</ul>

The <i>stack network</i> page gives you an overview of your security standing and allows you to configure several network-related settings.

![Cloud 66 network](http://cdn.cloud66.com/images/help/networkmenus.png)

<h2 id="active-protect">ActiveProtect</h2>

All stacks deployed with Cloud 66 are automatically protected against [Denial of Service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. The <i>ActiveProtect</i> page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

![Cloud 66 Firewall](http://cdn.cloud66.com/images/help/network_activeprotect.png)

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.

<h2 id="firewall">Firewall</h2>

The <i>Firewall</i> tab allows you to configure and apply firewall rules per server for your stack.

You can open your firewall temporarily in cases when you need temporary access to your servers (see top right of the image below). This avoids the dangers of leaving firewall ports open permanently unnecessarily.

![Cloud 66 Firewall](http://cdn.cloud66.com/images/help/networkfirewalls.png)

By default, Cloud 66 gateway servers (eg. 54.84.166.97) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](/how-to/implementing-faye.html). Editing and removing the default firewall rules is disabled to ensure secure accessibility to the servers at all times.

To add your own rules, click <i>Add a new firewall rule</i>. You can input single IP addresses or ranges, and the dropdown allows you to choose servers by name (eg. <i>Rails servers</i>).

<h2 id="traffic">Traffic</h2>
By default, all traffic is allowed to visit your web servers on ports 80, 443, 8080 and 8443. The <i>Traffic</i> tab allows you to control this, and has two sections: <i>allowed</i> traffic sources and <i>denied</i> traffic sources.

![Cloud 66 Firewall](http://cdn.cloud66.com/images/help/networktraffic.png)

For each of the fields above, you can enter a single IP address, a comma-separated list, or range. For example:

```
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
```

<h3 id="allowing">Allowing traffic</h3>
Repeated visits within a short time period on the ports mentioned above (more than 1,500 hits per minute from a single IP address) are blocked by ActiveProtect. By allowing traffic for a specific IP address or range, this limit is ignored.

You can also choose not to block traffic coming from Cloudflare edge servers.

<h3 id="denying">Denying traffic</h3>
You can block specific IPs and/or ranges from visiting the ports mentioned above.

You can also automatically block traffic from the [TOR network](https://www.torproject.org/) to your servers. The list of TOR IP addresses is automatically updated by Cloud 66 and is available to your servers.

<div class="notice">
		<h3>Important</h3>
		<p>Traffic features do not work with HTTPS traffic behind an HAProxy load balancer. This is a limitation of HAProxy 1.4, and will be updated in version 1.5.</p>
</div>

<h2 id="redirects">Redirects</h2>

The <i>Redirects</i> tab helps you perform simple but frequently used network redirects. These include redirecting traffic from _HTTP_ to _HTTPS_ or adding or removing the _www_ prefix from your domain name.

![Cloud 66 Firewall](http://cdn.cloud66.com/images/help/networkredirects.png)

<h3 id="maintenance">Maintenance mode</h3>
When you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

During such times, you can set your stack into <i>maintenance mode</i>, which puts up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

To supply your own maintenance page, simply place your file in the following path of your repository:

<pre class="terminal">
/.cloud66/maintenance.html
</pre>

<h3 id="https">Redirect HTTP to HTTPS</h3>
You can easily [add your SSL certificates](/add-ins/ssl.html) to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

<h3 id="www">WWW or non-WWW in your URL</h3>
Some sites serve traffic on `www.domain.com`, while others use the bare `domain.com`. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to `www.domain.com` to `domain.com`, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.