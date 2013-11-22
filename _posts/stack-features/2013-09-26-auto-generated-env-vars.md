---
layout: post
template: two-col
title:  "Auto-Generated Environment Variables"
date:   2013-09-24 10:51:22
categories: stack-features
lead: Each stack you deploy has access to a number of automatically populated environment variables
---


These auto-generated environment variables are in addition to any [that you assign yourself](/stack-features/assign-env-vars.html). They comprise of standard variables for all stacks, as well as those specific for different environments.

<div class="notice">
    <h3>Important</h3>
    <p>Given that we frequently add new features and frameworks, this is by no means an exhaustive list of auto-generated environment variables. To see a list of environment variables available to your environment, please see your specific <a href="/stack-features/assign-env-vars.html">environment variable page</a>, either before or after initial deployment.</p>
</div>

## Standard Environment Variables

- **RAILS&#95;ENV** &mdash; Your stacks environment
- **RACK&#95;ENV** &mdash; Your stacks environment
- **STACK&#95;PATH** &mdash; The directory path to which your code is deployed

## Case-specific Environment Variable

#### Stacks with a MySQL database

- **MYSQL&#95;ADDRESS** &mdash; The physical address of your MySQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:

- **MYSQL&#95;USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **MYSQL&#95;PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

#### Stacks with a PostgreSQL database

- **POSTGRESQL&#95;ADDRESS** &mdash; The physical address of your PostgreSQL server (kept up-to-date)

Note: If you have not already specified your own corresponding database username/password then one/both of the following will be created:

- **POSTGRESQL&#95;USERNAME** &mdash; Randomly assigned and inserted into your database.yml file
- **POSTGRESQL&#95;PASSWORD** &mdash; Randomly assigned and inserted into your database.yml file

#### Stacks with a MongoDB database

- **MONGODB&#95;ADDRESS** &mdash; The physical address of your MongoDB server (kept up-to-date)

<h3>Stacks with a Redis database</h3>

- **REDIS&#95;ADDRESS** &mdash; The physical address of your Redis server (kept up-to-date)


