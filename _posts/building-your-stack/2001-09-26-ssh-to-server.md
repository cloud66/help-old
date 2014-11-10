---
layout: post
template: one-col
title:  "SSH to your server"
nav: true
date:   1700-09-26 15:33:13
categories: building-your-stack
lead: Connect directly to your servers for full control 
search-tags: ['']
tags: ['Deployment']
---

We provide two different ways for you to SSH to your server - an automated way with the Cloud 66 toolbelt, or the manual way.

## Cloud 66 toolbelt
You can use the [Cloud 66 toolbelt](/toolbelt/introduction.html) to easily SSH to your servers. Once initialized, the following command can be used:

### Full

{% highlight bash %}
cx ssh [-s &lt;stack&gt;] &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;
{% endhighlight %}

### Example
{% highlight bash %}
cx ssh -s "My Awesome App" web
{% endhighlight %}

See [toolbelt shortcuts](/toolbelt/introduction.html), for information on how you can make this even easier.

## Direct shell access
You can always have terminal access to your servers from your own server - just follow the steps below if you're on a Linux-based operating system.

<ol>
<li>Port 22 (SSH) is closed to outside traffic by default - so you need to [add a firewall rule to your stack](/stack-definition/network-configuration.html) to access it.
<li>Once the port is open, you can find your username and SSH key by visiting the server page for the specific server you would like to login to. The SSH key download link is located in the right sidebar of your server page.
<li>Change the access rights to the downloaded key to 0600:</li>
<pre class="terminal">
$ chmod 0600 /Users/xxx/Downloads/key.pem
</pre>

<li>You can now connect to your server with the following command:</li>
<pre class="terminal">
$ ssh user&#95;name@ip&#95;address -i /Users/xxx/Downloads/key.pem
</pre>