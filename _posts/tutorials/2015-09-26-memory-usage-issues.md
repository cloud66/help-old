---
layout: post
template: two-col
title:  "Memory usage issues"
so_title: "cached copy"
date:   2034-09-26 15:33:13
categories: 
lead: Troubleshooting memory usage issues
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

If you're experiencing memory usage issues, such as high memory usage, use the following steps to troubleshoot.

[SSH into your server](/how-to/shell-to-your-servers.html) and install htop:

<pre class="prettyprint">
$ sudo apt-get install htop
</pre>

Once it's installed, run it with _htop_:
![htop](http://cdn.cloud66.com/images/help/htop.png)

The screen above will show you lots of statistics on memory and CPU usage, but we'll make two changes to make potential issues more visible:

<ol class="article-list">
<li>Hit _F2_ (setup), _Display options_, and enable _Hide userland threads_ by hitting the spacebar once selected. Hit _q_ to exit this screen.</li>
<li>On the home screen, hit _F6_ (sort by), and select _MEM%_, which will sort your processes by memory usage.</li>
</ol>

Once done, this view should give you a good idea of which processes are using the most memory.