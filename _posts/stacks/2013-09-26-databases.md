---
layout: post
template: two-col
title:  "Database Servers"
date:   2013-09-24 10:51:22
categories: stacks
lead: Information regarding databases supported by Cloud 66
---


We currently support:

* MySQL
* PostgreSQL
* MongoDB

These are supported out of the box with no need for additional configuration. However, one thing to always remember with Cloud 66 is that you will always have root access to your servers so you can install anything else yourself if you desire.

<strong>PostgreSQL</strong> &mdash; is compiled with contribs from source, and can therefore take a little while to deploy.

<strong>Redis</strong> &mdash; is [automatically supported](/stacks/database-redis.html).

During analysis, Cloud 66 automatically detects whether you application relies on a database or not. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After analysis, you are presented with the analysis results.
![Database analysis results](http://cdn.cloud66.com.s3.amazonaws.com/images/help/database_analysis_results.png)

## Database Deployment Types

If you database is not detected, we will assume that your application does not rely on a database.
We will therefore deploy your application without providing you with any database options.

<div class="notice">

	<h3>Important</h3>

	<p>If your application does rely on a database and you do not see it detected please <a href="http://www.hipchat.com/gWHC3d8cu">come chat and let us know!</a></p>

</div>

If your database is detected, then depending on whether you are deploying to your own cloud provider or your own standalone server we will provide you with the following options for deployment.

### Example for deploying to your cloud provider
![Cloud Provicer Database Deployment Options](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_database_deployment_options.png)

### Example for deploying to your standalone server
![Standalone Provicer Database Deployment Options](http://cdn.cloud66.com.s3.amazonaws.com/images/help/standalone_database_deployment_options.png)

### Choosing **"No"** database deployment
This option will allow you to continue the deployment of your application without any database components being deployed. Use this option if you have an database hosted externally somewhere else (with a managed database service example).
If you choose this option, Cloud 66 will deploy the application, ignoring database, but if there is no connectivity to your database, or your database host is not configured correctly, then the deployment will fail.

Choosing this option will allow you to create scheduled database backups on your database (but will require you to input all necessary database details in the appropriate database backup app)

### Choosing **"Local"** database deployment
With this option, Cloud 66 will deploy your chosen database to your target webserver. Your applications database configuration will be amended to retarget your local database server.
If you scale up your webservers, we will automatically amend your applications database configuration appropriately.

Choosing this option will also allow you to [perform single-click scheduled backups](/stack-features/single-click-db-backup.html) on your database.

<div class="notice">
	<h3>Important</h3>

	<p>This option is intended primarily for development environments (it isn't usually a good idea to run your database locally in Production)</p>
</div>

### Choosing **"Dedicated"** database deployment
If deploying to your cloud provider, we will automatically create a new server for your database, and configure your application accordingly.

If deploying to your standalone server, we will connect to the target database server and deploy your database there, can configure your application accordingly.
Note that we will use the same credentials (username and key) you've provided for your standalone webserver to connect to your standalone database server.

Choosing this option will also allow you to [perform single-click scheduled backups](/stack-features/single-click-db-backup.html) on your database.

## Generated Usernames and Passwords
If you are deploying a MySQL or PostgreSQL database and haven't specified your username and password, then Cloud 66 will automatically generate one for you in the form of environment variables, and configure your application appropriately.
![Automatic Username Password Creation](http://cdn.cloud66.com.s3.amazonaws.com/images/help/database_username_or_password_empty.png)

## Changes to Your Database
Once your application has been deployed, you cannot make any infrastructural modifications to your database through Cloud 66.
You can always connect to your server directly and modify your application appropriately, but changes (like changing database type for example) will usually require you to create a new Cloud 66 stack. Once the new stack is created, you can migrate data from your old stack to your new stack, and delete your old stack when you're happy.

## Upgrading Your Database
Cloud 66 will not do in-place database upgrades. This is because the database upgrade may cause your application to stop working, or may not be possible automatically. Therefore, to upgrade your database through Cloud 66, create a new Cloud 66 stack (at this point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack, and delete your old stack when you're happy.


