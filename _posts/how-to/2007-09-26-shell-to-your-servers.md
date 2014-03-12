---
layout: post
template: two-col
title:  "Terminal connection to your servers"
so_title: "terminal"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:  1600-09-26 15:33:13
categories: how-to
lead: You can connect directly to your servers for full control
---

<div class="notice">
    <h3>Note</h3>
	<p>Unfortunately, due to circumstances beyond our control, the third party embedded terminal has been discontinued.</p>
	<p>You need <a href="/your-account/team-accounts.html">administrative privileges for a stack</a> in order to download an SSH key.</p>
</div>

## Cloud 66 toolbelt
You can use the [Cloud 66 toolbelt](/toolbelt/introduction.html) to easily [SSH to your servers](/toolbelt/ssh.html). Once initialized, the following command can be used:
{% highlight bash %}
# Full
c66 ssh --stack STACK_UID --server_name SERVER_NAME
# Alias
c66 ssh -s STACK_UID -n SERVER_NAME
{% endhighlight %}

The stack UID is available from the _Stack information_ page. By [linking a stack to a folder](/toolbelt/stack-links.html), you can also avoid the use of _stack UID_ when you'd like to connect to a server.

## Direct shell access
You can always have terminal access to your servers from your own server - just follow these simple steps:

1. Port 22 (SSH) is closed to outside traffic by default - so you need to allow your own IP address to access it. See the [stack security](/stack-features/stack-security.html) page to accomplish this.
2. Once the port is open, you can find your username and SSH key on your server page: ![Direct Shell Access Username](http://cdn.cloud66.com.s3.amazonaws.com/images/help/ssh_download.png)
3. Change the access rights to the downloaded key to 0600:
<pre class="terminal">
$ chmod 0600 /Users/xxx/Downloads/key.pem
</pre>

4. You can now connect to your server with the following command:
<pre class="terminal">
$ ssh user&#95;name@ip&#95;address -i /Users/xxx/Downloads/key.pem
</pre>