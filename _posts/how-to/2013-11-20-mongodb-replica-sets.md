---
layout: post
template: two-col
title:  "MongoDB Replica Sets"
date:   2013-11-20 01:01:01
categories: how-to
lead: Cloud 66 Supports MongoDB Replica Sets. Make sure you know how they work and how to use them.
---


## Introduction
You can [scale you database backend](/stack-features/database-replication.html) with Cloud 66 with a single click. All you need is to setup [managed backups](/add-ins/one-click-database-backup.html).

This is the same with MongoDB, however **you really need to know how MongoDB replica sets work and how to use them** before trying to scale up your MongoDB backend. This is to ensure continiuity of service without interruptions.

### MongoDB Replica Sets
There is quite a lot of excellent material about [MongoDB Replica Sets](http://docs.mongodb.org/manual/replication/) out on the internet. So we are not going to copy them here again. For the purpose of this document, we need to focus on how Cloud 66 scales your MongoDB servers out and how you can use them in your code.

### How do we scale your MongoDB
When you select to scale up your MongoDB backend with Cloud 66, we take the following steps:

- Backup your database
- Fire up two more server (MongoDB replica sets require an odd number of servers - 3, 5,...)
- Deploy MongoDB on the new servers
- Restore the backup on the new servers
- Configure all MongoDB instanses in the stack to act as a single Replica Set
- Generate appropriate environment variables with the addresses of the Replica Set servers.

Backups need to keep their referetial integrity. Otherwise different parts of the database might be backed up at differe times. This might affect database performance. Also configuring the servers involved will result in interruption to your service during this step.

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The process of database replication will disrupt your database serving your application for the duration of scaling up and sclaing down.</p>
</div>

This interruption is during the backup and configuration steps of the scaling and not during the long process of firing up and building the servers.

### How to use the Replica Set in your code
All MongoDB drivers support Replica Sets. This means you can pass the list of MongoDBs in your Replica Set to them and they will take care of the rest. However, switching from a single MongoDB to a Replica Set is something you need to test and be sure about. You really shouldn't make such a big change in your stack infrastructure with a click of a button!

That's why once you scale your MongoDB up, we don't touch your configuration files. This is to allow you to configure the client the way you see fit and go live with your replicated database backend when you are ready.

<div class="notice">
	<h3>Note</h3>
	<p>We stop modifying your MongoDB client configuration files (like mongoid.yml in Rails) after replication is enabled (Scale up).</p>
</div>

#### Environment Variables
Withou Replica Sets, you can connect to your MongoDB using environment variables that are available on all of your servers:

* MONGODB\_ADDRESS
* MONGODB\_ADDRESS\_INT
* MONGODB\_ADDRESS\_EXT
* MONGODB\_URL
* MONGODB\_URL\_INT
* MONGODB\_URL\_EXT

`MONGODB_ADDRESS` contains the IP address of your MongoDB. In [Mongoid](http://mongoid.org/en/mongoid/index.html) for example it can be used in your mongoid.yml with `host` (mongoid < 3) or `hosts` (mongoid > 3).

`MONGODB_ADDRESS_INT` and `MONGODB_ADDRESS_EXT` contain the internal and external network addresses for the same server. You usually want to connect to the internal address to avoid paying for traffic between your web servers and database servers. `MONGODB_ADDRESS` is configured with the internal address <code>\{\{MONGODB\_ADDRESS\_INT\}\}</code>, but you can [change that](/stack-features/assign-env-vars.html) if you need.

`MONGODO_URL_INT` contains a MongoDB client friendly URL to the server with its internal address. It usually looks like this:

<pre class="terminal">mongodb://192.168.12.34:27017/my_database</pre>

`MONGODO_URL_EXT` contains a MongoDB client friendly URL to the server with its external address. It usually looks like this:

<pre class="terminal">mongodb://50.45.87.46:27017/my_database</pre>

`MONGODB_URL` is pointing to <code>\{\{MONGODB\_URL\_INT}\}</code> by default.

Once replication is enabled, this environment variable is populated:

* MONGODB\_ADDRESSES

`MONGODB_ADDRESSES` contains a comma separated list of all server names of the Replica Set. This usually looks like something like this:

<pre class="terminal">lion.mystack.c66.me,tiger.mystack.c66.me</pre>

Once you have Replica Set enabled by scaling your MongoDB backend up, you will need to modify your client configuration accordingly. Your deployment might not work and your stack might stop functioning if you don't do that.

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>Deployments might fail after Replica Sets are enabled if you don't change your client configuration to use the Replica Set.</p>
</div>

#### Configuring Mongoid
As the most popular Ruby client for MongoDB, here is an example of how to change your `mongoid.yml` file to use a Replica Set.

Before having a Replica Set, you had the following setup:

<pre class="terminal">
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: &lt;%= ENV['MONGODB_ADDRESS'] %&gt;
			options:
				consistency: :strong
</pre>

After Replica Sets are enabled you can use something like this:

<pre class="terminal">
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: &lt;%= "[#{ENV['MONGODB_ADDRESSES'].split(',').map {|addr| "\"#{addr}:27017\""}.join(',')}]" %&gt;
			options:
				consistency: :strong
</pre>

The reason for the ugly looking line is that `mongoid` requires the list of server addresses in the Replica Set to be in an array with port numbers. Since your Replica Set will be configured to work on the normal MongoDB port of 27017 by default, this line will split the comma separated list into an array in Ruby. The end result will look like something like this:

<pre class="terminal">
	["lion.mystack.c66.me:27017","tiger.mystack.c66.me:27017"]
</pre>

<div class="notice">
	<h3>Note</h3>
	<p>You cannot use complex Ruby code (like <code>if</code>) in your YML files. That's why the new hosts value is generated with string replacements and simple Ruby commands.</p>
</div>
