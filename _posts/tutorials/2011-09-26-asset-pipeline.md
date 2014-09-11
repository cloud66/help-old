---
layout: post
template: two-col
title: "Asset Pipeline errors"
so_title: "asset pipeline"
date: 2040-09-26 15:33:13
categories: 
lead: How you can troubleshoot asset pipeline issues
search-tags: ['']
tags: ['Troubleshooting', 'Deployment']
tutorial: true
difficulty: 0
---

If you're experiencing deployment failures to do with your asset pipeline manifest configurations, this could be due to issues with old assets.

You can clear up old assets on the server manually by [starting a terminal connection to your server](http://help.cloud66.com/stack-definition/ssh-to-server.html) and following these steps:

<ol class="article-list">
<li>Remove all the contents from your <code>$STACK_BASE/shared/assets</code> folder</li>
<li>Create a new, empty manifest.yml file by issuing <code>touch $STACK_BASE/shared/assets/manifest.yml</code></li>
</ol>
