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
You can use the [Cloud 66 toolbelt](/cloud66-toolbelt/introduction.html) to easily [SSH to your servers](/cloud66-toolbelt/ssh.html). Once initialized, the following command can be used:
{% highlight bash %}
# Full
cx ssh [-s <stack>] <server name>|<server ip>|<server role>
# Example
cx ssh -s "My Awesome App" Lion
{% endhighlight %}

See [toolbelt shortcuts](/cloud66-toolbelt/shortcuts.html), for information on how you can make this even easier.

## Direct shell access
You can always have terminal access to your servers from your own server - just follow the steps below if you're on a Linux-based operating system. See our help page on [connecting for Windows-based systems](/how-to/shell-from-windows.html).
<ol>
<li>Port 22 (SSH) is closed to outside traffic by default - so you need to allow your own IP address to access it. See the [stack security](/stack-features/stack-security.html) page to accomplish this.</li>
<li>Once the port is open, you can find your username and SSH key on your server page:</li> ![Direct Shell Access Username](http://cdn.cloud66.com/images/help/ssh_download.png)
<li>Change the access rights to the downloaded key to 0600:</li>
<pre class="terminal">
$ chmod 0600 /Users/xxx/Downloads/key.pem
</pre>

<li>You can now connect to your server with the following command:</li>
<pre class="terminal">
$ ssh user&#95;name@ip&#95;address -i /Users/xxx/Downloads/key.pem
</pre>