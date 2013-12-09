---
layout: post
template: two-col
title:  "Rails stacks"
so_title: "Rails"
nav_sticky: true
nav: true
nav_prev: ""
nav_next: ""
date:   2016-11-18 16:27:22
categories: stacks
lead: Cloud 66 makes it easy to deploy and maintain Rails apps
---

Cloud 66 supports stacks based on the [Rails framework](http://rubyonrails.org/), a light-weight web framework written in Ruby.

## Database

If [databases are detected](/stacks/databases.html), they will automatically be provisioned as required (including the database itself), and [environment variables](/stack-features/env-vars.html) will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Example of connecting to your database:

**YML**
{% highlight yaml %}
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
{% endhighlight %}

**Mongoid**
{% highlight yaml %}
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
{% endhighlight %}

## Example app

* <a href="https://www.cloud66.com/stacks/new?eduid=padrino_mysql" target="_blank">Padrino with MySQL</a>