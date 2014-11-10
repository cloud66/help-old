---
layout: post
template: two-col
title:  "Using production data on your staging stack"
so_title: "data"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1525-09-24 10:51:22
categories: 
lead: Different ways to use production data on your staging stack
search-tags: ['']
tags: ['Database']
tutorial: true
difficulty: 0
---

You may wish to set up a staging stack that can use data from your production stack, to provide realistic data in your staging environment. There are several ways you can do this:

<ol class="article-list">
<li><a href="http://community.cloud66.com/articles/sharing-a-database-between-stacks">Share your production database with the staging stack</a>, which would allow read/write access to the database from your staging enviroment. In this scenario, we <b>strongly urge</b> you to look closely at how you will avoid writing incorrect data to the production database.</li>
<li><a href="http://help.cloud66.com/database-management/database-replication">Setup a master/slave database on the production stack</a> and connect to the slave from the staging stack. This would only allow read access, so may not be suitable.</li>
<li>Use the <a href="http://help.cloud66.com/database-management/database-import.html">database import feature</a> to copy your production database to the staging database. This is perhaps the best alternative, as you're not working directly with your production database.</li>
</ol>