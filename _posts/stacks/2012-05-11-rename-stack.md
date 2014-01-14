---
layout: post
template: two-col
title:  "Renaming your stack"
so_title: "Rails"
nav_sticky: true
nav: true
nav_prev: ""
nav_next: ""
date:   2016-10-18 16:27:22
categories: stacks
lead: Read this before renaming your stack
---

You can easily rename your stack on the settings page of your stack, but this has an important implication.

![Rename stack](http://cdn.cloud66.com.s3.amazonaws.com/images/help/stack_rename.png)

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>The internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.</p>
</div>

As such, you will have to update your DNS to point at the new address to keep your application accessible.

Your current server DNS can be found on your server page, which takes the format of <i>server_name</i>.<i>stack_name</i>.c66.me:

![Cloud 66 DNS](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud66_dns.png)

