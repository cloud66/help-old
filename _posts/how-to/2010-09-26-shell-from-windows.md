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

We recommend that you use [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/) to SSH to your servers from Windows - go ahead and [download](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) and install it.

1. Port 22 (SSH) is closed to outside traffic by default - so you need to allow your own IP address to access it. See the [stack security](/stack-features/stack-security.html) page to accomplish this.
2. Once the port is open, you can find your server IP address, username and SSH key on your server page: ![Direct Shell Access Username](http://cdn.cloud66.com.s3.amazonaws.com/images/help/ssh_download.png)
3. Open PuTTy, and input your hostname:
![PuTTy hostname](http://cdn.cloud66.com.s3.amazonaws.com/images/help/putty_create_session.png)
4. Next, open the _SSH_ menu item, and click _Auth_. Hit _Browse_ and select the SSH key downloaded from the Cloud 66 server page.
![PuTTy key](http://cdn.cloud66.com.s3.amazonaws.com/images/help/putty_auth_config.png)
5. You can now go back to the _Session_ menu, and save this as a session if you wish to connect again in the future.
6. Click _Open_ to connect to the server.