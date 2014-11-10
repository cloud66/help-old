---
layout: post
template: one-col
title:  "Padrino stacks"
so_title: "Padrino"
nav_sticky: true
nav: true
nav_prev: ""
nav_next: ""
date:   2017-11-18 16:27:22
categories: building-your-stack
lead: Cloud 66 makes it easy to deploy and maintain Padrino apps
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
  <li><a href="#custom">Custom commands</a></li>
  <li><a href="#connect">Connect to your database</a></li>
  <li><a href="#example">Example application</a></li>
</li>
</ul>

Cloud 66 supports stacks based on the [Padrino framework](http://www.padrinorb.com/), a light-weight web framework built upon [Sinatra](/stack-definition/sinatra-stacks.html).

<h2 id="custom">Custom commands</h2>
Given that Padrino applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

<ul>
  <li>
    <p>
    <strong>Custom build command</strong> &mdash; This command will run every time until the first build is successful. Example:
    </p>
    <p>
      <kbd>bundle exec rake db:seed</kbd>
    </p>
  </li>
  <li>
    <p>
      <strong>Custom deploy command</strong> &mdash; This command will run on every deployment (including initial build). Example:
    </p>
    <p>
      <kbd>bundle exec rake db:migrate</kbd>
    </p>
  </li>
</ul>

These commands can be specified in the UI, but also in your manifest file:

{% highlight yaml %}
development:
    padrino:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
{% endhighlight %}

<h2 id="connect">Connect to your database</h2>
If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

<h3>Examples of connecting to your database</h3>
<div class="notice">
    <h3>Note</h3>
  <p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>

<h2>Active Record</h2>

<h3>MySQL YML</h3>

{% highlight yaml %}
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
{% endhighlight %}

**PostgreSQL YML**

{% highlight yaml %}
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
{% endhighlight %}

**Declarative**

{% highlight ruby %}
ActiveRecord::Base.configurations[:development] = {
  :adapter   => 'mysql2',
  :encoding  => 'utf8',
  :reconnect => true,
  :database  => ENV['MYSQL_DATABASE'],
  :pool      => 5,
  :username  => ENV['MYSQL_USERNAME'],
  :password  => ENV['MYSQL_PASSWORD'],
  :host      => ENV['MYSQL_ADDRESS'],
}
{% endhighlight %}

<h3>DataMapper</h3>
{% highlight ruby %}
DataMapper::setup(:default, "ENV['POSTGRESQL_URL']")
{% endhighlight %}

<h3>MongoMapper</h3>
{% highlight ruby %}
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
{% endhighlight %}

<h3>Mongoid</h3>
{% highlight yaml %}
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
{% endhighlight %}

<h2 id="example">Example application</h2>
* <a href="https://app.cloud66.com/stacks/new?eduid=padrino_mysql" target="_blank">Padrino with MySQL</a>