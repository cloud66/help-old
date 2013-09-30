---
layout: post
title:  "Auto-Generated Environment Variables"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Each stack you deploy has access to a number of automatically populated environment variables (in addition to the environment variables you add yourself)</p>

## Environment Variable List (Standard)

- **RAILS_ENV** &mdash; Your stack's environment
- **RACK_ENV** &mdash; Your stack's environment
- **RAILS_STACK_PATH** &mdash; The path to the directory into which your rails code is deployed

## Environment Variable List (Special Cases)

<h3>Stacks with a MySQL database</h3>

- **MYSQL_ADDRESS** &mdash; The physical address of your MySQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:
- **MYSQL_USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **MYSQL_PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

<h3>Stacks with a PostgreSQL database</h3>

- **POSTGRESQL_ADDRESS** &mdash; The physical address of your PostgreSQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:
- **POSTGRESQL_USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **POSTGRESQL_PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

<h3>Stacks with a MongoDB database</h3>

- **MONGODB_ADDRESS** &mdash; The physical address of your MongoDB server (kept up-to-date)

<h3>Stacks with a Redis database</h3>

- **REDIS_ADDRESS** &mdash; The physical address of your Redis server (kept up-to-date)


