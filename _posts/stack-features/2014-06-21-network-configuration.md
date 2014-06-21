---
layout: post
template: two-col
title:  "Stack Network Settings"
so_title: "elastic address"
nav_sticky: false
date:   2082-12-30 16:27:22
categories: stack-features
lead: "Configure network traffic and redirections of your stacks"
---

Using Stack Network settings, you can configure traffic sources to your stack as well as most common traffic redirections.

You can reach the Network settings from your Stack detail menu. Click on the Stack name, and then from the top right menu dropdown, select **Network**.

![Stack Network Menu](http://cdn.cloud66.com/images/help/network_menu.png)

### Traffic
The Traffic tab has two sections: Allowed traffic sources and blocked traffic sources.

Traffic settings are available under the **Traffic** tab.

![Stack Network Traffic](http://cdn.cloud66.com/images/help/network_traffic_menu.png)

You can enter a single IP a list of them or an IP range to allow or block in either section. Some examples are like

```
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
```

#### Allow Traffic
By default all traffic is allowed to hit your web servers on ports 80, 443, 8080 and 8443. However repeated hits within a short space of time (more than 1500 hits per minute from a single IP address) is blocked by [ActiveProtect](http://help.cloud66.com/stack-features/stack-security.html) to

As well as specific IPs or IP ranges you can choose not to throttle the traffic coming from Cloudflare edge servers.

#### Deny Traffic
Same as Allowed traffic sources, you can block specific IPs and IP ranges from hitting your web servers.

You can also automatically block traffic from [TOR network](https://www.torproject.org/) to your servers. The list of TOR IP address is automatically updated by Cloud 66 and is available to your servers.

<div class="notice">
		<h3>Important</h3>
		<p>Traffic features do not work with HTTPS traffic behind an HAProxy load balancer. This is a limitation of HAProxy origin IP address and we are working on a solution.</p>
</div>


### Redirects
Stack Network Redirects takes care of simple but commonly used network redirects that you usually need with your web applications.

These include redirecting traffic from HTTP to HTTPS or adding or removing the _www_ prefix of your domain name.

![Stack Network Redirects](http://cdn.cloud66.com/images/help/network_redirects_menu.png)

#### Maintenance Mode
During the times when you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

As a result of this, Cloud 66 has a site 'maintenance mode' option, which allows you to effectively put up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

##### Using your own Maintenance Page

Cloud 66 will use your own maintenance page if you supply it - the page should exist in the following path to be used while maintenance mode is active.

<pre class="terminal">
[source&#95;repo]/.cloud66/maintenance.html
</pre>

#### Redirect HTTP to HTTPS
You can easily [add your SSL certificates](/add-ins/ssl.html) to your Stacks and start serving your traffic securely with HTTPS. However if you want to make sure all of your visitors go through the HTTPS channel, you need to redirect anyone coming at HTTP to HTTPS. This option simply allows you to do that.

It works by reconfiguring your Nginx configuration so anyone hitting the web server on port 80 and HTTP, will receive a permanent HTTP redirect (301) to the same address but with HTTPS schema.

#### WWW or No-WWW in your URL
Some sites like to serve traffic on `www.domain.com` and some prefer the bare `domain.com` with no `www` at the beginning.

By default your Stacks will serve the traffic for any DNS record pointing to their address. However if you prefer to redirect everyone to `www.your_domain.com` you can choose the 'Add the WWW' option. This works by changing the Nginx configuration to permanently redirect (HTTP 301) all visitors from any URL to a URL with a `www` added to the beginning of the domain name.

Alternatively, if you prefer to only serve your traffic at `your_domain.com`, you can select the 'Remove the WWW' option. This will redirect all visitors (HTTP 301) visiting the site with `www.your_domain.com` to the same URL without the starting `www`.
