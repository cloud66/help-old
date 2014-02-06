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

Cloud 66 supports stacks based on the [Rails framework](http://rubyonrails.org/), a web framework written in Ruby.

## Database

If [databases are detected](/stacks/databases.html), they will automatically be provisioned as required (including the database itself), and [environment variables](/stack-features/env-vars.html) will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Examples of connecting to your database:

The notation in the examples below allow you to seamlessly switch between your local development environment and your Cloud 66 environment without
changing your database settings. The logic will determine if the Cloud 66 environment variable exists, and depending on the result, generate a value
or use your own value. Alternatively, you can simply hard-code values as you wish.

**MySQL YML**
{% highlight yaml %}
development:
    adapter: mysql2
    username: <%= if ENV['MYSQL_USERNAME'].nil? then 'root' else ENV['MYSQL_USERNAME'] end %>
    password: <%= if ENV['MYSQL_PASSWORD'].nil? then '' else ENV['MYSQL_PASSWORD'] end %>
    database: <%= if ENV['MYSQL_DATABASE'].nil? then 'tjenare' else ENV['MYSQL_DATABASE'] end %>
    host: <%= if ENV['MYSQL_ADDRESS'].nil? then 'localhost' else ENV['MYSQL_ADDRESS'] end %>
{% endhighlight %}

**PostgreSQL YML**
{% highlight yaml %}
development:
    adapter: postgresql
    username: <%= if ENV['POSTGRESQL_USERNAME'].nil? then 'root' else ENV['POSTGRESQL_USERNAME'] end %>
    password: <%= if ENV['POSTGRESQL_PASSWORD'].nil? then '' else ENV['POSTGRESQL_PASSWORD'] end %>
    database: <%= if ENV['POSTGRESQL_DATABASE'].nil? then 'tjenare' else ENV['POSTGRESQL_DATABASE'] end %>
    host: <%= if ENV['POSTGRESQL_ADDRESS'].nil? then 'localhost' else ENV['POSTGRESQL_ADDRESS'] end %>
{% endhighlight %}

**Mongoid**
{% highlight yaml %}
development:
  sessions:
    default:
      database: <%= if ENV['MONGODB_DATABASE'].nil? then 'tjenare' else ENV['MONGODB_DATABASE'] end %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
{% endhighlight %}

## Example app

* <a href="https://www.cloud66.com/stacks/new?eduid=rails_mysql" target="_blank">Rails with MySQL</a>