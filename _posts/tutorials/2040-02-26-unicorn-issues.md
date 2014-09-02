---
layout: post
template: two-col
title:  "Unicorn deployment issues"
so_title: "ssl certificate"
date:   1900-11-01 15:33:13
categories: 
lead: Troubleshooting Unicorn deployment issues
search-tags: ['']
tags: ['Troubleshooting', 'Deployment']
tutorial: true
difficulty: 1
---

A not unusual issue with Unicorn is that redeployments don't reflect your code changes. As a background on this, when you redeploy your stack, we send a USR2 signal to Unicorn which tells it to:

<ol class="article-list">
<li>Fire up a new master in parallel</li>
<li>Fire up new worker processes under the new master</li>
<li>Quiet and shut down old worker processes</li>
<li>Shut down the existing master</li>
</ol>

This mechanism allows for the zero-downtime deployments. However, if for some reason the new master or new workers can't start then the old master doesn't kill itself (in an attempt to keep service). You can verify this by issuing the following command:

<code>watch -n 5 'echo UNICORN:; ps aux | grep [u]nicor;'</code>

This will list the processes run by Unicorn, refreshing every 5 seconds to help you see any updates.

You should also look at your logs in <code>$STACK_PATH/log/*.log</code> to see if there are any error messages. Based on those error messages, you'll be able to troubleshoot why new workers aren't being initiated with your updated code.