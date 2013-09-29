---
layout: post
title:  "Whenever Cron Errors"
date:   2013-09-26 15:33:13
categories: Troubleshooting
---

<p class="lead">'Whenever' schedules that define certain path-specific actions may have errors in your cron output similar to: '/bin/bash: bundle: command not found'</p>

## Problem
The whenever schedules cause schedules to execute within a crontab context, however the context doesn't have access to the full PATH.
You may see output from your cron jobs that looks similar to:
<pre class="terminal-commands">
'/bin/bash: bundle: command not found'
</pre>

## Resolution
Simply add the following line to the top of your *config/schedule.rb* file (then commit it, push it and redeploy your stack):
<pre class="terminal-commands">
env :PATH, ENV['PATH']
</pre>