---
layout: post
template: two-col
title:  "Database servers"
date:   2013-09-24 10:51:22
categories: stacks
lead: Databases supported by Cloud 66
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#types">Database deployment types</a>
			<ul>
            	<li><a href="#cloud">Deploying to your cloud</a></li>
            	<li><a href="#byos">Deploying to your own server</a></li>
            </ul>
	</li>
	<li>
    	<a href="#no">Choosing "no" database</a>
    </li>
	<li>
		<a href="#local">Choosing "local" database</a>
	</li>
	<li>
		<a href="#ded">Choosing "dedicated" database</a>
	</li>
	<li>
		<a href="#generated">Generated credentials</a>
	</li>
	<li>
		<a href="#upgrade">Upgrading your database</a>
	</li>
</ul>

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL
* PostgreSQL
* MongoDB
* Redis

During analysis, Cloud 66 automatically detects whether your application relies on a database or not. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After analysis, you are presented with the analysis results.
![Database analysis results](http://cdn.cloud66.com.s3.amazonaws.com/images/help/database_analysis_results.png)

<h2 id="types">Database deployment types</h2>

If a <b>database is not detected</b>, it is assumed that your application does not rely on one.
As such, your application will be deployed without a database.

If a <b>database is detected</b>, then depending on whether you are deploying to your own cloud provider or your own standalone server we will provide you with the following options for deployment.

<h4 id="cloud">Deploying to your cloud</h4>
![Cloud Provicer Database Deployment Options](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_database_deployment_options.png)

<h4 id="byos">Deploying to your own server</h4>
![Standalone Provicer Database Deployment Options](http://cdn.cloud66.com.s3.amazonaws.com/images/help/standalone_database_deployment_options.png)

<h3 id="no">Choosing "no" database</h3>
This option allows you to deploy your application without a database, and is ideal if it is hosted externally.
Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

<h3 id="local">Choosing "local" database</h3>
<div class="notice">
	<h3>Important</h3>

	<p>This option is intended primarily for development environments, as it isn't recommended to run your database locally in production</p>
</div>

This option deploys your chosen database to the same server as your web server. In this case, your application database configuration will be amended to target your local database server.
If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

This option will also allow you to run [backups](/stack-features/db-backup.html) on your database.

<h3 id="ded">Choosing "dedicated" database</h3>
If deploying to your cloud provider, we will automatically create a new server for your database and configure your application accordingly.

Similarly, if you are deploying to your own server, we will connect to the target server, deploy your database and configure your application accordingly.
Note that we will use the same credentials (username and key) that you provided for your standalone web server to connect to your database server.

Choosing this option will also allow you to [database backups](/stack-features/db-backup.html) and [database replication](/stack-features/database-replication.html).

<h2 id="generated">Generated credentials</h2>
If you haven't specified your username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.
![Automatic Username Password Creation](http://cdn.cloud66.com.s3.amazonaws.com/images/help/database_username_or_password_empty.png)

<h2 id="upgrade">Upgrading your database</h2>
Cloud 66 will not do in-place database upgrades, because the database upgrade may cause your application to stop working or may not be possible automatically. Therefore, to upgrade
your database through Cloud 66, create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack, and delete your old stack when you're happy.


