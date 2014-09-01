---
layout: post
template: one-col
title:  "Database management"
so_title: "database"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1959-09-26 15:33:13
categories: database-management
lead: Deploying and managing your database with Cloud 66
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About deploying databases</a>
    </li>
    <li>
        <a href="#types">Database deployment types</a>
    </li>
        <ul style="margin-bottom:0em">
            <li><a href="#no">No database (external)</a></li>
            <li><a href="#local">Local database</a></li>
            <li><a href="#ded">Dedicated database</a></li>
        </ul>       
    <li>
        <a href="#upgrade">Upgrading your database</a>
    </li>
    <li>
        <a href="#migrations">Control your database migrations</a>
    </li>               
</ul>

<h2 id="about">About deploying databases</h2>

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL
* PostgreSQL
* MongoDB
* Redis
* SQLite (only in development environments)

During analysis, Cloud 66 automatically detects whether your application relies on a database or not. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. If you haven't specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.

<h2 id="types">Database deployment types</h2>

<h3 id="no">No database (external)</h3>
This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally.
Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

<h3 id="local">Local database</h3>
This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

<h3 id="ded">Dedicated database</h3>
This option will automatically create a new server for your database and configure your application accordingly.

<h2 id="upgrade">Upgrading your database</h2>
Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack.

<h2 id="migrations">Control your database migrations</h2>
You can control your database migrations by accessing your stack detail page, then clicking _Stack settings_ in the right sidebar. This page gives you the option of running migrations or not. When you have disabled database migrations in _Stack settings_ page, you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.