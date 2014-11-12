---
layout: post
template: one-col
title:  "Rails stacks"
so_title: "Rails"
nav: true
nav_prev: ""
nav_next: ""
date:   2016-11-18 16:27:22
categories: building-your-stack
lead: Cloud 66 makes it easy to deploy and maintain Rails apps
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
  <li><a href="#connect">Connect to your database</a></li>
  <li><a href="#example">Example application</a></li>
</li>
</ul>

Cloud 66 supports stacks based on the [Rails framework](http://rubyonrails.org/), a web framework written in Ruby.

<h2 id="connect">Connect to your database</h2>
If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Examples of connecting to your database

The notation in the examples below allow you to seamlessly switch between your local development environment and your Cloud 66 environment without
changing your database settings. The logic will determine if the Cloud 66 environment variable exists, and depending on the result, generate a value
or use your own value. Alternatively, you can simply hard-code values as you wish.

<div class="notice">
    <h3>Note</h3>
    <p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>

**MySQL YML**

<pre class="prettyprint">
development:
    adapter: mysql2
    username: <%= ENV['MYSQL_USERNAME'] %>
    password: <%= ENV['MYSQL_PASSWORD'] %>
    database: <%= ENV['MYSQL_DATABASE'] %>
    host: <%= ENV['MYSQL_ADDRESS'] %>
</pre>

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported MySQL encodings](https://dev.mysql.com/doc/refman/5.5/en/charset-charsets.html):

<pre class="prettyprint">
encoding: swe7
</pre>

**PostgreSQL YML**

<pre class="prettyprint">
development:
    adapter: postgresql
    username: <%= ENV['POSTGRESQL_USERNAME'] %>
    password: <%= ENV['POSTGRESQL_PASSWORD'] %>
    database: <%= ENV['POSTGRESQL_DATABASE'] %>
    host: <%= ENV['POSTGRESQL_ADDRESS'] %>
</pre>

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported PostgreSQL encodings](http://www.postgresql.org/docs/9.3/static/multibyte.html):

<pre class="prettyprint">
encoding: latin1
template: template0
</pre>

**Mongoid**

<pre class="prettyprint">
development:
  sessions:
    default:
      database: <%= ENV['MONGODB_DATABASE'] %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
</pre>

<h2 id="example">Example application</h2>
* <a href="https://app.cloud66.com/stacks/new?eduid=rails_mysql" target="_blank">Rails with MySQL</a>