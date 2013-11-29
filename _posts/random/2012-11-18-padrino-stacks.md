---
layout: post
template: two-col
title:  "Padrino Stacks"
so_title: "Padrino"
nav_sticky: true
nav: true
nav_prev: "/getting-started/easy-deploy-repos.html"
nav_next: "/getting-started/sinatra-stacks.html"
date:   2012-11-18 16:27:22
categories: yo
lead: Cloud 66 makes it easy to deploy and maintain Padrino apps
---

## Introduction

Cloud 66 supports stacks based on the [Padrino framework](http://www.pardinorb.com/), a light-weight web framework built upon [Sinatra](http://help.cloud66.com/getting-started/sinatra-stacks.html).

## Configuration

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


These commands can be specified in the UI, but also in your [manifest file](http://help.cloud66.com/stack-features/manifest-files.html):

{% highlight yaml %}
development:
    padrino:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
{% endhighlight %}

## Database

If databases are detected, they will automatically be provisioned as required (including the database itself), and [environment variables](http://help.cloud66.com/stack-features/assign-env-vars.html) will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Example of connecting to your database:
#### Active Record

**YML**
{% highlight yaml %}
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
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

#### DataMapper
{% highlight ruby %}
DataMapper::setup(:default, "ENV['POSTGRESQL_URL']")
{% endhighlight %}

#### MongoMapper
{% highlight ruby %}
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
{% endhighlight %}

#### Mongoid
{% highlight yaml %}
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
{% endhighlight %}

## Example app

* <a href="https://www.cloud66.com/stacks/new?eduid=padrino_mysql" target="_blank">Padrino with MySQL</a>