---
layout: post
template: two-col
title:  "Sharing a database between stacks"
so_title: "database"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1689-09-26 15:33:13
categories: 
lead: How to share a single database between stacks
search-tags: ['']
tags: ['Database']
tutorial: true
difficulty: 0
---

There are a number of reasons why you might want to share a database between your stacks. For example, you can test UI changes with your users while still using production data.

It is _not_ a good idea to share your database between stacks in certain scenarios (eg. for a reporting tool) - instead we recommend that you use [database replication](http://help.cloud66.com/database-management/database-replication.html) to use a master/slave setup.

Your first stack will be deployed as normal, with a database managed by Cloud 66. Your second stack will be deployed with an [external database](http://help.cloud66.com/database-management/database-management.html) (as it will use the first stacks database).

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>Ensure that you <b>do not</b> select the option for db:schema:load during the build of your second stack, as this could destroy the data on the first stack.</p>
</div>

Firstly, you need to [open your firewall](http://help.cloud66.com/stack-definition/network-configuration.html) on the first stack to allow your second stacks web servers to access the database.

You will then reference the database credentials from your first stack in the database.yml of your second stack. You can reference the environment variables for these credentials on your first stack like so (your stack UID is available on your <i>Stack information</i> page):

<pre class="prettyprint">
&#123;&#123; STACK[STACK_UID].ENV&#95;VAR &#125;&#125;
</pre>

For example, your environment variables would be set like this:

<pre class="prettyprint">
MYSQL_ADDRESS=&#123;&#123; STACK[xyz].MYSQL_ADDRESS_INT &#125;&#125;
MYSQL_DATABASE=&#123;&#123; STACK[xyz].MYSQL_DATABASE &#125;&#125;
</pre>

Database credentials such as username and password are not available for cross-stack referencing for security reasons. Instead, copy and paste them across as environment variables. Your database.yml would look something like this:

<pre class="prettyprint">
username: <%= ENV['MYSQL_USERNAME'] %>
password: <%= ENV['MYSQL_PASSWORD'] %>
hostname: <%= ENV['MYSQL_ADDRESS'] %>
database: <%= ENV['MYSQL_DATABASE'] %>
</pre>