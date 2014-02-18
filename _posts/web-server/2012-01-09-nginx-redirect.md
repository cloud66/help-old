---
layout: post
template: two-col
title:  "Nginx redirect from HTTP to HTTPS"
so_title: "nginx"
date:   2033-11-24 10:51:22
categories: web-server
lead: Use Cloud 66 CustomConfig to redirect HTTP to HTTPS
---

If you only want to serve HTTPS traffic through your application, you may also want to redirect HTTP users to HTTPS.

<p>
<a target="_blank" rel="nofollow" class="button-home" href="http://www.cloud66.com/?utm_source=help&utm_medium=web&utm_campaign=help-page">Manage Nginx with ease on Cloud 66 &#10141;</a>
</p>

Simply add this code to the _server_ section of your Nginx configuration using [CustomConfig](/stack-features/custom-config.html), for example on line 77. This will work even if you're not using Cloud 66.

{% highlight bash %}
if ($http_x_forwarded_proto = http) {
    rewrite ^ https://$http_host$request_uri? permanent;
}
{% endhighlight %}

