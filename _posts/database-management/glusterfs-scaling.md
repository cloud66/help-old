---
layout: post
template: one-col
title:  "GlusterFS scaling"
so_title: "glusterfs"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1910-11-20 01:01:01
categories: database-management
lead: Cloud 66 Supports GlusterFS replica count
search-tags: ['']
tags: ['GlusterFS scaling']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
    	<a href="#about">About scaling your GlusterFS cluster</a>
    </li>
	<li>
		<a href="#configure">Configure a GlusterFS replica_count</a>
	</li>
</ul>

<h2 id="about">About scaling your GlusterFS cluster</h2>
You can scale up/down your GlusterFS cluster through cloud66 dashboard.
When you are scaling up, cloud66 will add servers to your cluster based on replica_count(i.e if your replica_count is 2, the number of servers could be 2,4,6,....). After Server deployment finished, cloud66 will create new bricks for current volumes and add them to _GlusterFS cluster_.
When you are scaling down, cloud66 will remove the server (and all related servers which scaled up with this server) and remove their bricks for current volumes from _GlusterFS Cluster_

<h2 id="configure">Configure a GlusterFS replica_count</h2>
You can specify replica_count when you are adding GlusterFS by addins. If you are using manifest to add GlusterFS, you can add replica_count in configuration.



<div class="notice notice-danger">
	<h3>Note</h3>
	<p>You can not change replica_count after GlusterFS added to your stack.</p>
</div>


