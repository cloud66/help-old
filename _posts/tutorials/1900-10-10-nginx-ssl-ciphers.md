---
layout: post
template: two-col
title:  "Strong SSL Security on nginx"
so_title: "ssl"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2000-09-26 15:33:13
categories: 
lead: How to set up strong SSL security on the nginx webserver
search-tags: ['nginx cipher' , 'RC4', 'Strong SSL Security']
tags: ['Security']
tutorial: true
difficulty: 2
---

You can strengthen nginx SSL security by adjusting its SSL cipher settings. You can change this using [CustonConfig](http://help.cloud66.com/managing-your-stack/customconfig). Please remember that the most secure settings (below) is not backward compatible with IE6 and Windows XP clients.

Under nginx CustomConfig you can change the default SSL cipher to one of the following:

We recommend this setting (not compatible with IE6/Win XP):

<pre>
ssl_ciphers 'AES256+EECDH:AES256+EDH';
</pre>

We recommend the following setting for backward compatibility (IE6/Win XP):

<pre>
ssl_ciphers "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4"
</pre>

This article is based on the information from [this tutorial](https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html).