---
layout: post
template: two-col
title:  "Troubleshooting disk space issues"
so_title: "disk space"
date:   1900-11-01 15:33:13
categories: 
lead: How to identify and address disk space issues
search-tags: ['Space', 'Disk Space']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

Depending on your server and disk size, you may run out of disk space - the following steps will help you troubleshoot such issues.

<ol class="article-list">
<b><li>How much disk space is your server using?</li></b>

Use the following command to check the current disk space used by your server:

<pre class= "prettyprint">
df -h
</pre>

The output of this command may look like the following:

<pre class= "prettyprint">
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       20G  8.3G   11G  45% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
udev            3.7G   12K  3.7G   1% /dev
tmpfs           748M  424K  748M   1% /run
none            5.0M     0  5.0M   0% /run/lock
none            3.7G     0  3.7G   0% /run/shm
none            100M     0  100M   0% /run/user
/dev/xvdb        30G   45M   28G   1% /mnt
</pre>

The first filesystem is the main one - it is mounted at <code>/</code>. As you can see, this filesystem is currently at 45% usage. You may want to address this issue if this percentage is higher.<br/><br/>

<b><li>Which files are taking most disk space?</li></b>

You can use the following command to determine which files and folders are using the most disk space:

<pre class= "prettyprint">
sudo ncdu /
</pre>

This will scan through your disk and return a detailed breakdown of disk usage by folders and files on your server. You can use the arrow keys to move between folders to determine exactly where the most disk space is being used, and if this is actually necessary. This will help guide you as to where to remove unnecessary files.<br/><br/>

<b><li>Are your log files using the most disk space?</li></b>

The result of the previous investigation may indicate that your logs are taking most of the available disk space. If so, you can either change the level of logging that your application outputs or increase the speed of log rotation on the server. Log rotation moves, compresses and deletes old log files according to a schedule you can determine.

The log rotation settings can be customized in <code>/etc/cloud66/logrotate/*.conf</code>. If your logs aren't to blame for your low disk space, move onto the next step.<br/><br/>

<b><li>Do you need more disk space?</li></b>

Depending on the size of the server and disk as well as the requirements of your application, you may need to use a bigger server, or if possible attach a larger disk. Some cloud providers allow you to change the disk size from their cloud dashboard. You can also scale up a new server and specify a <code>root_disk_size</code> value in your <a href="http://help.cloud66.com/building-your-stack/building-your-manifest-file#servers">manifest file</a>. Once the scale up is complete, you can remove the old server.
</ol>