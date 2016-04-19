---
layout: post
template: one-col
title:  "Cloud 66 reserved tags"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: false
date:   2016-04-15 12:00:00
categories: deployment
lead: Reserved tags for additional functionality
search-tags: ['reserved', 'tags']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">What are reserved tags?</a>
    </li>
    <li>
        <a href="#tags">Reserved tags</a>
    </li>
</ul>

<h2 id="about">What are reserved tags?</h2>
You can tag a variety of your infrastructure components, such as stacks, servers, or firewall rules, in order to differentiate them from one another. Some tag names are reserved by Cloud 66 as they will provide additional functionality to your infrastructure.

<h2 id="tags">Reserved tags</h2>
Cloud 66 currently reserves the following tags:

<table class="table table-bordered table-striped table-small">
<tr>
	<td><b>Tag</b></td>
	<td><b>Target</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td>c66.migrations.run</td>
	<td>server</td>
	<td>Sets the given server as the migrator - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td>
</tr>
</table>
