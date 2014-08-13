---
layout: post
template: two-col
title:  "Sharing a database between stacks"
so_title: "database"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1689-09-26 15:33:13
categories: database
lead: How to share a single database between stacks
search-tags: ['']
tags: ['Database']
tutorial: true
---

There are a number of reasons why you might want to share a database between your stacks. For example, you can test UI changes with your users while still using production data.

It is _not_ a good idea to share your database between stacks in certain scenarios (eg. for a reporting tool) - instead we recommend that you use [database replication](/stack-features/database-replication.html) to use a master/slave setup.

Your first stack will be deployed as normal, with a database managed by Cloud 66. Your second stack will be deployed with an external database (as it will use the first stack's database):

![External database](http://cdn.cloud66.com/images/help/external_database.png)

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>Ensure that you <b>do not</b> select the option for db:schema:load during the build of your second stack, as this could destroy the data on the first stack.</p>
</div>

Firstly, you need to [open your firewall](/stack-features/stack-security.html) on the first stack to allow your second stack's web-servers to access the database.

You will then reference the database credentials from your first stack in the database.yml of your second stack. You can reference the environment variables for these credentials on your first stack like so (your stack UID is available on the stack setting page):

<kbd>&#123;&#123; STACK[STACK_UID].ENV&#95;VAR &#125;&#125;</kbd>

For example, your environment variables would be set like this:
<pre class="terminal">
MYSQL_ADDRESS=&#123;&#123; STACK[xyz].MYSQL_ADDRESS_INT &#125;&#125;
MYSQL_DATABASE=&#123;&#123; STACK[xyz].MYSQL_DATABASE &#125;&#125;
MYSQL_USERNAME=&#123;&#123; STACK[xyz].MYSQL_USERNAME &#125;&#125;
MYSQL_PASSWORD=&#123;&#123; STACK[xyz].MYSQL_PASSWORD &#125;&#125;
</pre>

And your database.yml would look something like this:
<pre class="terminal">
username: <%= ENV['MYSQL_USERNAME'] %>
password: <%= ENV['MYSQL_PASSWORD'] %>
hostname: <%= ENV['MYSQL_ADDRESS'] %>
database: <%= ENV['MYSQL_DATABASE'] %>
</pre>