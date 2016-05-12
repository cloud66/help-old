---
layout: post
template: two-col
title:  "Uninstalling MySQL"
so_title: "mysql"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1559-09-26 15:33:13
categories: 
lead: Uninstall MySQL completely from your Ubuntu server
search-tags: ['']
tags: ['Database']
tutorial: true
difficulty: 0
---

When using Cloud 66 to [deploy to your own servers](http://help.cloud66.com/deployment/registered-servers), you might experience trouble with an existing MySQL installation on your server.

Along with our general operating system requirements for the deployment to your server to work, we also recommend that you uninstall all MySQL related files from your server before deploying.

Use apt to uninstall and remove all MySQL packages:

<pre class="prettyprint">
$ sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
$ sudo apt-get autoremove -y
$ sudo apt-get autoclean
</pre>

Remove the MySQL folder:

<pre class="prettyprint">
$ rm -rf /etc/mysql
</pre>

Delete all MySQL files on your server:

<pre class="prettyprint">
$ sudo find / -iname 'mysql*' -exec rm -rf {} \;
</pre>

Your system should no longer contain MySQL related files.
