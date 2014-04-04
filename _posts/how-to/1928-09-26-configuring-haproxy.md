---
layout: post
template: two-col
title: "Configuring HAProxy"
so_title: "haproxy"
date: 2040-09-26 15:33:13
categories: how-to
lead: Configuring HAProxy to work with your application
---

[HAProxy CustomConfig](http://help.cloud66.com/how-to/haproxy-customconfig.html) allows you to configure your load balancer through the comfort of your browser.

By default, HAProxy will visit the _/_ endpoint on your application every 5 seconds to determine its state. This endpoint may need to change if that endpoint isn't available to the load balancer.

You will want to look at the _httpchk_ option to change the endpoint - the simplest solution is to create a low overhead non-auth HTTP route somewhere in your application.

For example, you could place a file called _check.html_ in your _/public_ folder, which would be served directly by Nginx (not your application). It would be available at _/check.html_.

In this case, you could replace the _httpchk_ section with this:

`httpchk HEAD /check.html HTTP/1.0`.

You could also refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/haproxy-en.txt) for more information about configurations.