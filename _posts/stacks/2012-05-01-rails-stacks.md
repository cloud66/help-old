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

<div class="notice">
    <h3>Note</h3>
	<p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>

The notation in the examples below allow you to seamlessly switch between your local development environment and your Cloud 66 environment without
changing your database settings. The logic will determine if the Cloud 66 environment variable exists, and depending on the result, generate a value
or use your own value. Alternatively, you can simply hard-code values as you wish.

**MySQL YML**
{% highlight yaml %}
development:
    adapter: mysql2
    username: <%= ENV['MYSQL_USERNAME'] %>
    password: <%= ENV['MYSQL_PASSWORD'] %>
    database: <%= ENV['MYSQL_DATABASE'] %>
    host: <%= ENV['MYSQL_ADDRESS'] %>
{% endhighlight %}

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported MySQL encodings](https://dev.mysql.com/doc/refman/5.5/en/charset-charsets.html):
{% highlight yaml %}
encoding: swe7
{% endhighlight %}

**PostgreSQL YML**
{% highlight yaml %}
development:
    adapter: postgresql
    username: <%= ENV['POSTGRESQL_USERNAME'] %>
    password: <%= ENV['POSTGRESQL_PASSWORD'] %>
    database: <%= ENV['POSTGRESQL_DATABASE'] %>
    host: <%= ENV['POSTGRESQL_ADDRESS'] %>
{% endhighlight %}

The default encoding used is UTF8 - but you can also specify your own, as long as it conforms with the [supported PostgreSQL encodings](http://www.postgresql.org/docs/9.3/static/multibyte.html):
{% highlight yaml %}
encoding: latin1
template: template0
{% endhighlight %}

**Mongoid**
{% highlight yaml %}
development:
  sessions:
    default:
      database: <%= ENV['MONGODB_DATABASE'] %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
{% endhighlight %}

## Example app

* <a href="https://app.cloud66.com/stacks/new?eduid=rails_mysql" target="_blank">Rails with MySQL</a>