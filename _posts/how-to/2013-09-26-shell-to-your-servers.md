---
layout: post
title:  "Terminal Connection to your Servers"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">You can connect to your servers via the embedded terminal screen or from your terminal app.</p>

## Embedded Terminal
The simplest way to terminal (shell) into your servers is via the embedded terminal screen. This is available through the terminal icon on the top right of the each server.

![Embedded Terminal Icon](http://cdn.cloud66.com.s3.amazonaws.com/images/help/embedded_terminal.png)

Once you click on the icon, you should get directly to the terminal screen.

![Embedded Terminal Screen](http://cdn.cloud66.com.s3.amazonaws.com/images/help/embedded_terminal_screen.png)

<div class="notice">
		<h3>Important</h3>
		<p>Remember to exit the session once you are done.</p>
</div>

## Direct Shell Access
You can always have terminal access to your servers from your own server. By default shell access (SSH) on port 22 is blocked to all traffic from outside. In order to access the terminal from your own computer, you'd need to open this port for your own IP address. This is possible using [Stack Security](/stack-features/stack-security.html) page.

Once the port is open, you can use your usual terminal app to connect. You can find the username and SSH key from the server page.

![Direct Shell Access Username](http://cdn.cloud66.com.s3.amazonaws.com/images/help/ssh_download.png)

Remember to change the access rights to the downloaded key to 0600:

<p>
<kbd>
	chmod 0600 /path/to/downloaded/ssh/key/key.pem
</kbd>
</p>

Connecting would be now possible via:

<p>
	<kbd>
		ssh user@server_address -i /path/to/downloaded/ssh/key/key.pem
	</kbd>
</p>