---
layout: post
template: one-col
title:  "Stack network settings"
nav_sticky: false
date:   2084-12-30 16:27:22
categories: building-your-stack
lead: Configure security and network settings
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About Network Settings</a>
	</li>
	<li>
		<a href="#activeprotect">What is ActiveProtect&trade;?</a>
	</li>
	<li>
		<a href="#firewall">Firewall</a>
	</li>
	<li>
        <ul>
        <li><a href="#add-firewall">Add a firewall rule</a></li>
        </ul>
    </li>
	<li>
		<a href="#configure">Configure network traffic</a>
	</li>
	<li>
        <ul>
        <li><a href="#allow">Allowing traffic</a></li>
        <li><a href="#deny">Denying traffic</a></li>
        </ul>
    </li>
	<li>
		<a href="#network">Using network redirects</a>
	</li>
	<li>
        <ul>
        <li><a href="#maintenance">Maintenance mode</a></li>
        <li><a href="#https">Redirect HTTP to HTTPS</a></li>
        <li><a href="#www">WWW or non-WWW in your URL</a></li>
        </ul>
    </li>
</ul>

<h2 id="about">About Network Settings</h2>
The _Network Settings_ page contains all things network-related, in four tabs:

- <b>ActiveProtect&trade;:</b> Protects against denial of service and brute-force attacks
- <b>Firewall:</b> Restricts access to your servers
- <b>Traffic:</b> Allows or denies access from different source IP addresses
- <b>Redirects:</b> Sets server-level redirects for web traffic

<h2 id="activeprotect">What is ActiveProtect&trade;?</h2>
All stacks deployed with Cloud 66 are automatically protected against [denial of service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. The <i>ActiveProtect</i> page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.

<h2 id="firewall">Firewall</h2>
The <i>Firewall</i> tab allows you to configure and apply firewall rules per server for your stack. You can open your firewall temporarily in cases when you need temporary access to your servers by clicking the icon at the top right of the page. This will automatically fill with your current IP address, and allow you to choose the duration of the opening and the server port you wish to access. Doing this avoids the dangers of leaving firewall ports open permanently unnecessarily.

By default, Cloud 66 gateway servers (eg. 54.84.166.97) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](http://community.cloud66.com/articles/faye-on-cloud-66). Editing and removing the default firewall rules is disabled to secure accessibility to the servers at all times.

<h3 id="add-firewall">Add a firewall rule</h3>
To add your own rules, click <i>Add a new firewall rule</i>. You can input single IP addresses or ranges, and the dropdown allows you to choose servers by name (eg. <i>Rails servers</i>).

<div class="notice notice-warning">
    <h3>Microsoft Azure notice</h3>
    <p>If you want to open a custom port to you server in Microsoft Azure, you must add an endpoint for that VM in your Azure management portal after adding the rule in your Cloud 66 dashboard.</p>
</div>

<h2 id="configure">Configure network traffic</h2>
By default, all traffic is allowed to visit your web servers on ports 80, 443, 8080 and 8443. The <i>Traffic</i> tab allows you to control this, and has two sections: <i>allowed</i> traffic sources and <i>denied</i> traffic sources.

For each of these fields, you can enter a single IP address, a comma-separated list, or range. For example:

<pre class="prettyprint">
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
</pre>

<h3 id="allow">Allowing traffic</h3>
Repeated visits within a short time period on the ports mentioned above (more than 1,500 hits per minute from a single IP address) are blocked by ActiveProtect. By allowing traffic for a specific IP address or range, this limit is ignored. You can also choose not to block traffic coming from Cloudflare edge servers.

<h3 id="deny">Denying traffic</h3>
You can block specific IPs and/or ranges from visiting the ports mentioned above.

<h2 id="network">Using network redirects</h2>

The <i>Redirects</i> tab helps you perform simple but frequently used network redirects. These include redirecting traffic from <i>HTTP</i> to <i>HTTPS</i> or adding or removing the <i>www</i> prefix from your domain name.

<h3 id="maintenance">Maintenance mode</h3>
When you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

During such times, you can set your stack into <i>maintenance mode</i>, which puts up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

To supply your own maintenance page, simply place your file in the following path of your repository:

<pre class="terminal">
/.cloud66/maintenance.html
</pre>

<h3 id="https">Redirect HTTP to HTTPS</h3>
You can easily <a href="/stack-add-ins/ssl-certificate">add your SSL certificates</a> to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

<h3 id="www">WWW or non-WWW in your URL</h3>
Some sites serve traffic on <code>www.domain.com</code>, while others use the bare <code>domain.com</code>. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to <code>www.domain.com</code> to <code>domain.com</code>, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.