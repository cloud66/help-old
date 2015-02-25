---
layout: post
template: two-col
title:  "Disk Space Issues"
so_title: "disk space"
date:   1900-11-01 15:33:13
categories: 
lead: Troubleshooting disk space issues
search-tags: ['Space', 'Disk Space']
tags: ['Web server']
tutorial: true
difficulty: 0
---

**Inorder to be aware and maintain the disk space of your server you can do the following precaution.**
<ol>
<li>Check for current space used by the server :</li>
<p>You can perform the following command on to your server to check the avaiable disk.</p>
<pre class= "prettyprint">
df -h
</pre>
<p>Or you can also try the following command on your server :
<pre class= "prettyprint">
ncdu /
</pre>
<p>This will return the detailed usage of folders on to your server. Being aware of this information can avoid the situation of your server getting out of disk space.</p>
<li>You can change your logging level/log rotation frequency :</li>
 <p>You can configure logrotate to manage log rotation on the servers. You can find the config file under this location and change the frequecy of the logs that are generated. By doing this it would reduce the size consumed by the logs.</p>
<pre class= "prettyprint">
/etc/cloud66/logrotate/default.conf
</pre>
<ol>

