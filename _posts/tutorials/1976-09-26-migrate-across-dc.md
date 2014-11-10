---
layout: post
template: two-col
title:  "Migrate your stacks across data centers"
so_title: "migrate"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1913-09-26 15:33:13
categories: 
lead: Migrating your stacks is easy with Cloud 66
search-tags: ['']
tags: ['Stack failover']
tutorial: true
difficulty: 0
---

Do you want to move your stack from one cloud vendor or region to another? Follow the steps below for a seamless transition between stacks.
<ol class="article-list">
<li>Reduce the TTL of your DNS to 5 minutes, and leave it for 24 hours so that it has time to propagate the network.</li>
<li><a href="http://help.cloud66.com/building-your-stack/stack-definition#stackscore">Clone your source stack</a> and deploy it to the new datacenter. This will save any environment variables you had configured on the source stack.</li>

<li>Migrate your data across. Depending on your requirements (eg. you have a live app), you could do one of the following:</li>
<ol type="a">
	<li>Use our <a href="http://help.cloud66.com/database-management/database-replication">database replication between stacks</a> feature to setup your target stack as a database slave, which means that any changes to your source stack database will be replicated across to the target stack until you switch it off.</li>
	<li>Use our <a href="http://help.cloud66.com/database-management/database-one-time-import">one-time database import</a> feature to migrate your data across.</li>
</ol>
<li>When you're happy with this new stack, simply switch your DNS over to it. As the TTL is 5 minutes (set earlier), it should take effect quickly.</li>
<li>If you followed step 3a above, switch the target database from being a slave to a master (as outlined in the <a href="/articles/postgresql-failover-procedure">database replication between stacks</a> documentation).</li>
</ol>