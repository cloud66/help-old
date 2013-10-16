---
layout: post
title:  "Auto-Generated Environment Variables"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Each stack you deploy has access to a number of automatically populated environment variables</p>

<p>
    This is in addition to any environment variables you add yourself.
</p>

## Environment Variable List (Standard)

- **RAILS&#95;ENV** &mdash; Your stack's environment
- **RACK&#95;ENV** &mdash; Your stack's environment
- **RAILS&#95;STACK&#95;PATH** &mdash; The path to the directory into which your rails code is deployed

## Environment Variable List (Special Cases)

<h3>Stacks with a MySQL database</h3>

- **MYSQL&#95;ADDRESS** &mdash; The physical address of your MySQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:
- **MYSQL&#95;USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **MYSQL&#95;PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

<h3>Stacks with a PostgreSQL database</h3>

- **POSTGRESQL&#95;ADDRESS** &mdash; The physical address of your PostgreSQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:
- **POSTGRESQL&#95;USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **POSTGRESQL&#95;PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

<h3>Stacks with a MongoDB database</h3>

- **MONGODB&#95;ADDRESS** &mdash; The physical address of your MongoDB server (kept up-to-date)

<h3>Stacks with a Redis database</h3>

- **REDIS&#95;ADDRESS** &mdash; The physical address of your Redis server (kept up-to-date)


