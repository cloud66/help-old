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
<ul class="page-toc" style="margin-bottom:0em">
	<li><a href="#about">About migrating from Heroku</a></li>	
	<li><a href="#server">What server size do I need?</a></li>
	<li><a href="#migrating">Migrating</a></li>
            <ul style="margin-bottom:0em; margin-top:0em">
                <li><a href="#code">1. Code</a></li>
                <li><a href="#data">2. Data</a></li>
                <li><a href="#traffic">3. Traffic</a></li>
            </ul>
	<li><a href="#pointers">Useful pointers</a></li>
            <ul style="margin-top:0em">
                <li><a href="#webserver">Web server and Procfile</a></li>
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
Once your code is deployed, it's time to migrate your data across. From your Heroku toolbelt, create a database backup URL by running <code>heroku pgbackups:url</code>. Next, visit your stack detail page and click the _Import Heroku data_ link. Paste the URL provided by the toolbelt into the field, and click _Import Heroku data_.

<h3 id="traffic">3. Traffic</h3>
Once you're ready to serve traffic from your Cloud 66 stack, you need to redirect your traffic to it. For more information, see [Configure your DNS](http://help.cloud66.com/dns/configure-dns.html).

<h2 id="pointers">Useful pointers</h2>

<h3 id="webserver">Web server and Procfile</h3>
By default, Cloud 66 will deploy your stack with Phusion Passenger, but you can also choose a [custom web server](http://help.cloud66.com/web-server/custom-webserver.html) like Unicorn. You may have a <code>web</code> entry in your Procfile to do this on Heroku. Cloud 66 ignores this entry to avoid compatability issues.

To run a custom web server, we require a <code>custom_web</code> entry. It is important to set this before analyzing your stack, to avoid building the stack with Passenger.

You can also use the [Procfile](http://help.cloud66.com/deployment/proc-files.html) to define other background jobs.

<h3 id="apc">Asset Pipeline Compilation</h3>

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation. Cloud 66 allows you to [specify whether or not to run this](http://help.cloud66.com/stack-definition/asset-pipeline.html) during deployment.