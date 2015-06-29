---
layout: post
template: one-col
title:  "Migrate from Heroku to Cloud 66"
so_title: "heroku"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1915-09-26 15:33:13
categories: 
lead: Some pointers to move from Heroku to Cloud 66
search-tags: ['']
tags: ['Getting started']
tutorial: true
difficulty: 0
---

<h2>Contents</h2>
<ul class="page-toc">
	<li><a href="#about">About migrating from Heroku</a></li>	
	<li><a href="#server">What server size do I need?</a></li>
	<li><a href="#migrating">Migrating</a>
            <ul>
                <li><a href="#code">1. Code</a></li>
                <li><a href="#data">2. Data</a></li>
                <li><a href="#traffic">3. Traffic</a></li>
            </ul>
    </li>
	<li><a href="#pointers">Useful pointers</a></li>
            <ul style="margin-top:0em">
                <li><a href="#webserver">Web server and Procfile</a></li>
                <li><a href="#cycle">Dyno recycling</a></li>
                <li><a href="#apc">Asset pipeline compilation</a></li>
            </ul>        
</ul>

<h2 id="about">About migrating from Heroku</h2>
Migrating your application from Heroku to Cloud 66 involves deploying your code, importing your data and redirecting your traffic to the new endpoint. 

<h2 id="server">What server size do I need?</h2>
Using Heroku, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your stack with Cloud 66. We also recommend that you have a seperate server for your database in production environments.

<h2 id="migrating">Migrating</h2>

<h3 id="code">1. Code</h3>
Simply provide Cloud 66 the URL to your Git repository so that it can be analyzed. For more information, see [Accessing your Git repository](http://community.cloud66.com/articles/accessing-your-git-repository).

<h3 id="data">2. Data</h3>
Once your code is deployed, it's time to migrate your data across. The process differs for PostgreSQL and MySQL databases:

<b>PostgreSQL</b><br/>
From your Heroku toolbelt, create a database backup URL by running <code>heroku pgbackups:url</code>. Next, visit your stack detail page and click the _Import Heroku data_ link. Paste the URL provided by the toolbelt into the field, and click _Import Heroku data_.

<b>MySQL</b><br/>
Start by dumping your existing database. Refer to the [ClearDB documentation for common problems](http://www.cleardb.com/blog/entry?id=common-problems-2).

{% highlight bash %}
$ mysqldump -u [username] -p[password] [dbname] > backup.sql 
{% endhighlight %}

Once you have a MySQL dump file, use the [Cloud 66 toolbelt](http://help.cloud66.com/toolbelt/toolbelt-upload-command) to upload the file to your stack database server. Remember to replace the fields below with your values.

{% highlight bash %}
$ cx upload -s "[stack_name]" --server [database_server_name] backup.sql /tmp/backup.sql
{% endhighlight %}

Next, use the toolbelt to SSH to your server.

{% highlight bash %}
$ cx ssh -s "[stack_name]" [server_first_name]
{% endhighlight %}

Finally, use the command below to import your backup into the database. You can find the generated username, password and database name by visting your stack detail page and clicking into your database server (eg. _MySQL server_).

{% highlight bash %}
$ mysql -u [generated_user_name] -p [generated_password] "[database_name]" < /tmp/backupfile.sql 
{% endhighlight %}

<h3 id="traffic">3. Traffic</h3>
Once you're ready to serve traffic from your Cloud 66 stack, you need to redirect your traffic to it. For more information, see [Configure your DNS](http://help.cloud66.com/network/configure-your-dns).

<h2 id="pointers">Useful pointers</h2>

<h3 id="webserver">Web server and Procfile</h3>
By default, Cloud 66 will deploy your stack with Phusion Passenger, but you can also choose a [custom web server](http://help.cloud66.com/web-server/custom-web-servers) like Unicorn. You may have a <code>web</code> entry in your Procfile to do this on Heroku. Cloud 66 ignores this entry to avoid compatability issues.

To run a custom web server, we require a <code>custom_web</code> entry. It is important to set this before analyzing your stack, to avoid building the stack with Passenger.

You can also use the [Procfile](http://help.cloud66.com/deployment/running-background-processes) to define other background jobs.

<h3 id="cycle">Dyno recyling</h3>
Heroku restarts all dynos at 24 hours of uptime, which may conceal possible memory leaks in your application. When you migrate to Cloud 66, these will become noticeable because we don't restart your workers (other than during a deployment), so the leak can grow to be bigger. A temporary solution is to re-create the Heroku restart behavior, for example with this script:

{% highlight bash %}
for OUTPUT in $(pgrep -f sidekiq); do kill -TERM $OUTPUT; done
{% endhighlight %}

This will send a TERM signal to any Sidekiq workers, giving them 10 seconds (by default) to finish gracefully. Any workers that don't finish within this time period are forcefully terminated and their messages are sent back to Redis for future processing. You can customize this script to fit your needs, and add it to your stack as a [shell add-in](http://help.cloud66.com/stack-add-ins/shell).

Note that this is a temporary solution, and we recommend that you use a server monitoring solution to identify the source of your leak.

<h3 id="apc">Asset Pipeline Compilation</h3>

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation. Cloud 66 allows you to [specify whether or not to run this](http://help.cloud66.com/building-your-stack/asset-pipeline-compilation) during deployment.