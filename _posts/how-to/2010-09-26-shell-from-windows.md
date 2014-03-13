---
layout: post
template: two-col
title:  "Terminal connection to your servers - Windows"
so_title: "terminal"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:  1581-09-26 15:33:13
categories: how-to
lead: You can connect directly to your servers for full control
---

We recommend that you use [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/) to SSH to your servers from Windows - go ahead and [download PuTTY and PuTTYgen](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) and install them.

<ol>
<li>Port 22 (SSH) is closed to outside traffic by default - so you need to allow your own IP address to access it. See the <a href="/stack-features/stack-security.html">stack security</a> page to accomplish this.</li>
<li>Once the port is open, you can find your server IP address, username and SSH key on your server page:</li> <img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/ssh_download.png">
<li>PuTTY doesn't natively support the private key format (.pem) provided by Cloud 66, so we'll use PuTTYgen to convert it into the required format (.ppk).</li>
	<ul>
		<li>Open PuTTYgen, and under <i>Type of key to generate</i>, select <i>SSH-2 RSA</i>:</li>
		<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/puttygen_type.png">
		<li>Click <i>Load</i> - by default, PuTTYgen displays only files with the .ppk extension, so we'll need to display all files:</li>
		<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/puttygen_load.png">
		<li>Once you've selected your .pem file, save it as a .ppk file without a passphrase.</li>
	</ul>
<li>Open PuTTy, and input your hostname:</li>
<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/putty_create_session.png">
<li>Next, open the <i>SSH</i> menu item, and click <i>Auth</i>. Hit <i>Browse</i> and select the SSH key created with PuTTYgen.</li>
<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/putty_auth_config.png">
<li>You can now go back to the <i>Session</i> menu, and save this as a session if you wish to connect again in the future.</li>
<li>Click <i>Open</i> to connect to the server.</li>
</ol>