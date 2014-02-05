---
layout: post
template: two-col
title:  "Terminal Connection to your Servers"
so_title: "terminal"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:  1600-09-26 15:33:13
categories: how-to
lead: You can connect to your servers from your terminal app or via the embedded terminal screen.
---


## Direct Shell Access
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

## Embedded Terminal
The simplest way to terminal (shell) into your servers is via the embedded terminal screen. This is available through the terminal icon on the top right of the each server.

![Embedded Terminal Icon](http://cdn.cloud66.com.s3.amazonaws.com/images/help/embedded_terminal.png)

Once you click on the icon, you should get directly to the terminal screen.

![Embedded Terminal Screen](http://cdn.cloud66.com.s3.amazonaws.com/images/help/embedded_terminal_screen.png)

<div class="notice">
		<h3>Important</h3>
		<p>Remember to exit the session once you are done.</p>
</div>