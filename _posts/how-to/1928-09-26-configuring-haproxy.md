---
layout: post
template: two-col
title: "Configuring HAProxy"
so_title: "haproxy"
date: 2040-09-26 15:33:13
categories: how-to
lead: Configuring HAProxy to work with your application
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
		<a href="#stats">HAProxy stats</a>
	</li>
	<li>
		<a href="#endpoint">Endpoint</a>
	</li>
	<li>
		<a href="#internal">Using internal IPs</a>
	</li>
	<li>
		<a href="#test">Test interval</a>
	</li>
</ul>

<h2 id="">Introduction</h2>

[HAProxy CustomConfig](http://help.cloud66.com/how-to/haproxy-customconfig.html) allows you to configure your load balancer through the comfort of your browser. In addition to the settings described below, you could also refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/haproxy-en.txt) for more information about configurations.

<h2 id="stats">HAProxy stats</h2>
Click on the load balancer on your stack page login to your HAProxy stats:
![HAProxy stats](http://cdn.cloud66.com/images/help/haproxy_stats.png)

Once logged in, you will see a variety of statistics for your load balancer, and any potential issues:
![HAProxy page](http://cdn.cloud66.com/images/help/haproxy_page.png)

<h2 id="endpoint">Endpoint</h2>

By default, HAProxy will visit the _/_ endpoint on your application every 2 seconds to determine its state. This endpoint may need to change if that endpoint isn't available to the load balancer.

You will want to look at the _httpchk_ option to change the endpoint - the simplest solution is to create a low overhead non-auth HTTP route somewhere in your application.

For example, you could place a file called _check.html_ in your _/public_ folder, which would be served directly by Nginx (not your application). It would be available at _/check.html_.

In this case, you could replace the _httpchk_ section with this:

`httpchk HEAD /check.html HTTP/1.0`.

<h2 id="internal">Using internal IPs</h2>
By default, HAProxy is configured to use the external IP address of your servers, but it can be changed to use the internal addresses if you have private networking enabled.

Simply replace any `server.ext_ipv4` values with `server.int_ipv4` using [HAProxy CustomConfig](http://help.cloud66.com/how-to/haproxy-customconfig.html).

<h2 id="test">Test interval</h2>
You can also specify your own test interval if you like - this is done in the _server_ section of your HAProxy configruation. This section is on line 53 of the default configuration.

To change the test interval to every 30 seconds (instead of the default 2 seconds), the template should look like this:
<pre class="terminal">server          web&#123;&#123; forloop.index &#125;&#125; &#123;&#123; server.ext_ipv4 &#125;&#125;:80 cookie "LSW_WEB&#123;&#123; forloop.index &#125;&#125;" check inter 30000</pre>

Please note the `inter 3000` at the end - this defines the test interval as 3000 milliseconds. Once this template is applied, it looks like this:
<pre class="terminal">server          web1 107.170.99.39:80 cookie "LSW_WEB1" check inter 30000</pre>