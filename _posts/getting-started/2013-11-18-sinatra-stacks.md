---
layout: post
template: two-col
title:  "Sinatra Stacks"
so_title: "Sinatra"
nav_sticky: true
nav: true
nav_prev: "/getting-started/padrino-stacks.html"
date:   2013-11-18 16:27:22
categories: getting-started
lead: Cloud 66 makes it easy to deploy and maintain Sinatra apps
---


## Introduction

Cloud 66 supports stacks based on the [Sinatra framework](http://www.sinatrarb.com/), a light-weight web framework written in Ruby.

## Configuration

Given that Sinatra applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

- **Custom build command:** This command will run every time until the first build is successful. Example: `bundle exec rake db:seed`
- **Custom deploy command:** This command will run on every deployment (including initial build). Example: `bundle exec rake db:migrate`

These commands can be specified in the UI, but also in your [manifest file](http://help.cloud66.com/stack-features/manifest-files.html):
<pre class="terminal">
development:
    sinatra:
        configuration:
            custom&#95;build&#95;command: rake db:seed
            custom&#95;deploy&#95;command: rake db:migrate
</pre>

## Database

If databases are detected, they will automatically be provisioned as required (including the database itself), and [environment variables](http://help.cloud66.com/stack-features/assign-env-vars.html) will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Examples of connecting to your database:
#### Active Record

**YML**
<pre class="terminal">
production:
  adapter: mysql2
  username: <%= ENV['MYSQL&#95;USERNAME'] %>
  password: <%= ENV['MYSQL&#95;PASSWORD'] %>
  host: <%= ENV['MYSQL&#95;ADDRESS'] %>
  database: <%= ENV['MYSQL&#95;DATABASE'] %>
</pre>

**Declarative**
<pre class="terminal">
ActiveRecord::Base.configurations[:development] = {
  :adapter   => 'mysql2',
  :encoding  => 'utf8',
  :reconnect => true,
  :database  => ENV['MYSQL&#95;DATABASE'],
  :pool      => 5,
  :username  => ENV['MYSQL&#95;USERNAME'],
  :password  => ENV['MYSQL&#95;PASSWORD'],
  :host      => ENV['MYSQL&#95;ADDRESS'],
}
</pre>

#### DataMapper
<pre class="terminal">
DataMapper::setup(:default, "ENV['POSTGRESQL&#95;URL']")
</pre>

#### MongoMapper
<pre class="terminal">
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
</pre>

#### Mongoid
<pre class="terminal">
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
</pre>

## Example apps

* <a href="https://www.cloud66.com/stacks/new?eduid=sinatra_mongodb" target="_blank">Sinatra and MongoDB</a>
* <a href="https://www.cloud66.com/stacks/new?eduid=sinatra_mysql_ar" target="_blank">Sinatra and MySQL ActiveRecord</a>
* <a href="https://www.cloud66.com/stacks/new?eduid=sinatra_psql_dm" target="_blank">Sinatra and PSQL DataMapper</a>
* <a href="https://www.cloud66.com/stacks/new?eduid=sinatra_mysql_dm" target="blank">Sinatra and MySQL DataMapper</a>
* <a href="https://www.cloud66.com/stacks/new?eduid=sinatra_redis" target="blank">Sinatra and Redis</a>