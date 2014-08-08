---
layout: post
template: two-col
title:  "Stack information"
nav_sticky: true
nav: true
nav_prev: ""
nav_next: ""
date:   1999-10-18 16:27:22
categories: stacks
lead: Your stack information page
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
    	<a href="#edit">Editing stack information</a>
    </li>
</ul>

<h2 id="intro">Introduction</h2>
You can access your _Stack information_ page by clicking the _Settings_ cog:

![Stack information](http://cdn.cloud66.com/images/help/stack_information.png)

This page shows you general information about your stack and the different servers it consists of, along with application information and versions:

![Stack information page](http://cdn.cloud66.com/images/help/stack_information_page.png)

<h2 id="edit">Editing stack information</h2>

You can edit your stack name, Git repository and branch by clicking the _Edit_ button next to each field. Editing your stack name has an important implication.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>The internal c66 domain names (*.c66.me) are based on your stack name, and will change if you rename the stack.</p>
</div>

As such, you will have to update your DNS to point at the new address to keep your application accessible.

Your current server DNS can be found on your server page, which takes the format of <i>server_name</i>.<i>stack_name</i>.c66.me:

![Cloud 66 DNS](http://cdn.cloud66.com/images/help/cloud66_dns.png)