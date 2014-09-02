---
layout: post
template: two-col
title:  "Change the data directory for PostgreSQL"
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

<ol>
<li>Connect to your servers via <a href="/how-to/shell-to-your-servers.html">SSH</a>.</li>

<li>Stop the PostgreSQL service by issuing this command:</li>

{% highlight bash %}
$ (sudo -u postgres pg_ctl stop -D /usr/local/pgsql/data -m i -t 5 || true) && sudo stop postgresql  
{% endhighlight %}

<li>Make sure that PostgreSQL is no longer running:</li>

{% highlight bash %}
$ ps aux | grep pgsql
{% endhighlight %}

This command must not return any running PostgreSQL processes.<br/><br/>

<li>Make a new directory for your data:</li>
{% highlight bash %}
$ mkdir /new/path/folder
{% endhighlight %}

<li>Make sure that your new folder is only accessible by the PostgreSQL user:</li>
{% highlight bash %}
$ chown postgres /new/path/folder
$ chmod 700 /new/path/folder
{% endhighlight %}

<li>Move your data from the old folder to new one:</li>
{% highlight bash %}
$ mv /usr/local/pgsql/data /new/path/folder
{% endhighlight %}

<li>Create a symlink to your new folder from the old one:</li>
{% highlight bash %}
$ ln -s /new/path/folder/data /usr/local/pgsql/data
{% endhighlight %}

<li>Start the PostgreSQL service again:</li>
{% highlight bash %}
$ sudo start postgresql
{% endhighlight %}

Your PostgreSQL service should now be working with new data folder.
</ol>
