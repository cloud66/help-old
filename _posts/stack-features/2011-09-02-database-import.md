---
layout: post
template: two-col
title:  "Database one-time import"
so_title: "replication"
nav_sticky: false
date:   2099-10-01 16:27:22
categories: stack-features
lead: Easily import data from one stack to another
---

Cloud 66 allows you to easily import data from one stack to another for **MySQL**, **PostgreSQL** and **Redis** databases.

To do this, you will need two stacks with the same database type - one will be the _source_ and the other will be the _target_ for the data migration.

Go to your database server detail page (on your _target_ stack) and click on the _One-time data import_ icon in the top right corner.

![](http://cdn.cloud66.com/images/help/data_source.png)

This page will display a list of available replication sources for this server.

![](http://cdn.cloud66.com/images/help/data_import.png)

<div class="notice notice-danger">
    <h3>Important</h3>
    <p>This will import the <i>latest available</i> <b>managed backup</b> from your <i>source</i> stack.</p>

    <p>This process replaces the contents of your <i>target</i> with your backup. We recommend that you backup your <i>target</i> database before running this.</p>
</div>

Select the stack you want to use as a <i>source</i> and confirm, which will start the data import from your _source_ to the _target_.

<div class="notice">
	<h3>Note</h3>
	<p>You need <i>Control stack</i> access rights to see the <i>One-time data import</i> icon.</p>
	<p>Additionally, you will only see stacks that have <b>managed backup installed</b> and that you have <i>Stack administrator</i> rights to in the <i>Select stack</i> field.</p>
</div>