---
layout: post
template: two-col
title:  "How to change the data directory for PostgreSQL"
so_title: "PostgreSQL data directory"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1978-09-26 15:33:13
categories: 
lead: How to change your PostgreSQL data directory
search-tags: ['']
tags: ['Database']
tutorial: true
difficulty: 1
---

We use the default data folder when installing PostgreSQL on your server, which is  <code>/usr/local/pgsql/data</code>.
To change this folder, follow the instructions below.

<ol class="article-list">
<li>Connect to your servers via <a href="http://help.cloud66.com/stack-definition/ssh-to-server.html">SSH</a>.</li>

<li>Stop the PostgreSQL service by issuing the following command:</li>

<pre class="prettyprint">
$ (sudo -u postgres pg_ctl stop -D /usr/local/pgsql/data -m i -t 5 || true) && sudo stop postgresql  
</pre>

<li>Make sure that PostgreSQL is no longer running:</li>

<pre class="prettyprint">
$ ps aux | grep pgsql
</pre>

This command must not return any running PostgreSQL processes.<br/><br/>

<li>Make a new directory for your data:</li>

<pre class="prettyprint">
$ mkdir /new/path/folder
</pre>

<li>Make sure that your new folder is only accessible by the PostgreSQL user:</li>

<pre class="prettyprint">
$ chown postgres /new/path/folder
$ chmod 700 /new/path/folder
</pre>

<li>Move your data from the old folder to new one:</li>

<pre class="prettyprint">
$ mv /usr/local/pgsql/data /new/path/folder
</pre>

<li>Create a symlink to your new folder from the old one:</li>

<pre class="prettyprint">
$ ln -s /new/path/folder/data /usr/local/pgsql/data
</pre>

<li>Start the PostgreSQL service again:</li>

<pre class="prettyprint">
$ sudo start postgresql
</pre>

Your PostgreSQL service should now be working with new data folder.
</ol>
