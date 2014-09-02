---
layout: post
template: two-col
title:  "Errors during deployment around database dumping"
so_title: "dump"
date:   2035-09-26 15:33:13
categories: 
lead: Unable to perform database dump - errors can occur during deployment if your database is on a standalone or external server AND your db schema is sql based (structure.sql) due to db dump tools missing on the webserver
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---


## The basics
When *rake db:migrate*, or *rake db:structure:load* is executed as part of your deployment, your structure.sql/migrations are executed against your database.
(note: your structure.sql may contain migrations to execute)

If migrations are executed then rails will try and execute the below in an attempt to ensure that the structure.sql is kept up to date.
{% highlight ruby %}
rake db:structure:dump
{% endhighlight %}

However, as your deployment on Cloud 66 is an endpoint (ie. you are not commiting changes from your Cloud 66 server back to your repository) this is a completely unnecessary step.
The structure.sql file that is generated on your webserver will never be commited back to your repository.

The error can occur when structure dump is executed but your web-server may not have the dump tools locally required to execute the dump task.
This occurs mainly when your database server is located externally (or on another physical server)

## The Resolution

Adding the following line to your application's *Rakefile* will stop the structure dump from occuring when performing the Cloud 66 deployment:
{% highlight ruby %}
Rake::Task["db:structure:dump"].clear if ENV['STACK_PATH']
{% endhighlight %}

<div class="notice">
	<h3>Important</h3>

		<p>By relying on the $STACK&#95;PATH condition means this is safe to apply in your own environments as long as you don't have the same environment variable set. If that isn't the case, you can always use the opposite of the condition to apply the change only if your own environment variable is NOT present.</p>
</div>