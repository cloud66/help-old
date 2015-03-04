---
layout: post
template: two-col
title:  "Unable to insert in MySQL database"
so_title: "database"
date:   1900-11-01 15:33:13
categories: 
lead: Troubleshooting insert issues with mysql
search-tags: ['database', 'write']
tags: ['Database']
tutorial: true
difficulty: 0
---


<h3>Error while performing inserts in the DB trough our ruby application.</h3>
<p>This error indicates that you don't seem have enough space to create temp files needed by MySQL. There is as a protection against low disc space, some daemon automatically "shadows" the current "/tmp/" directory with a ram disk if the the root partition runs out of disk space.</p> 
Inorder to solve this issue follow the below steps.
<ol><li> Use the following command on tmp directory :</li> 
<p>This will probably give the information about the size of the directories on your server.</p>
<pre class="prettyprint"> df -h</pre>
<p>Your application will be deployted on the following directory : <code>dev/xvda1 </code></p>
<li> Unmount the tmp directory : </li>
<pre class="prettyprint">
umount -l /tmp
</pre>	
<li> If you want to permanently disable this shadow feature, run below command on your server : </li>
<pre class="prettyprint">
echo 'MINTMPKB=0' > /etc/default/mountoverflowtmp
</pre>

</ol>