---
layout: post
template: two-col
title:  "Nginx allow and deny by IP"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2034-05-24 10:51:22
categories: 
lead: Allow and deny connections through Nginx
search-tags: ['']
tags: ['Web server']
tutorial: true
difficulty: 1
---

In addition to protecting your application (or parts of it) using [HTTP basic authentication](/web-server/nginx-auth.html), you can use Cloud 66 [CustomConfig](/stack-features/custom-config.html) to block (or allow) access to your application based on IP addresses.
Follow the instructions below to accomplish this.

1. Create a file in the root of your repository called _blockips.conf_. This file will contain the IPs you wish to allow/deny.

2. To deny a single IP address, you can use the following syntax:
<br>`deny 1.2.3.4;`<br><br>
You can also deny an entire subnet as follows:
<br>`deny 91.212.45.0/24;`<br><br>
Should you wish to only allow access to your IP address, do this:
<br><br><code>
allow 1.2.3.4/24;<br>
deny all;</code>
<br><br>There are [lots](http://www.cyberciti.biz/faq/linux-unix-nginx-access-control-howto/) of [resources](http://wiki.nginx.org/HttpAccessModule) about this syntax on the Internet in case you need more guidance.
3. Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](/how-to/nginx-customconfig.html).

You will want to add the following code within the _http_ section of your configuration, for example on line 22.

<pre class="terminal">
	include &#123;&#123; deploy_to &#125;&#125;/current/blockips.conf;
</pre>

This will read the file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.





