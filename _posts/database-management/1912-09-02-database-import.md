---
layout: post
template: one-col
title:  "Database one-time import"
so_title: "replication"
nav_sticky: false
date:   2099-10-01 16:27:22
categories: database-management
lead: Import data from one stack to another with ease
search-tags: []
tags: ['Database']
---

## About one-time database imports
One-time database imports allow you to easily transfer your database from one stack to another, using **MySQL**, **PostgreSQL** and **Redis** databases.

To use this feature, you will need two stacks with the same database type - one is the _source_ and the other is the _target_ for the data migration. This process will import the latest available <b>managed backup</b> from your <i>source</i> stack, replacing the contents of your <i>target</i> with the backup. We recommend that you backup your <i>target</i> database before running this.

## Using one-time database imports
On your stack detail page, visit your database server group (eg. _MySQL server_) and click the name of your main database server. In the right sidebar, click _Database Import_, which will display a list of available _source_ stacks.

Select the stack you want to use as a <i>source</i> and click _Import_, which will start the data import from your _source_ to the _target_.

<div class="notice">
	<h3>Note</h3>
	<p>You need <i>Control stack</i> access rights to see the <i>One-time data import</i> icon. Additionally, you will only see <i>source</i> stacks that you have <i>Stack administrator</i> rights to.</p>
</div>