---
layout: post
template: one-col
title:  "Backup verification"
so_title: "verifier"
date:   4000-10-03 14:17:13
categories: database-management
lead: Ensure the highest quality of backup assurance
search-tags: ['']
tags: ['Database']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What is a backup verifier?</a>
	</li>
	<li>
		<a href="#usage">Set up a backup verifier</a>
	</li>
    <li>
        <a href="#view">View backup verification status</a>
    </li>    
	<li>
		<a href="#pricing">Pricing</a>
	</li>
</ul>

<h2 id="what">What is a backup verifier?</h2>
A backup verifier is a great way to ensure that your backups actually contain the data you expect. You simply provide a query that you expect to return a specific result, and we verify that your backup actually returns this value. This feature supports both MySQL and PostgreSQL databases, and requires the use of managed backups. Backup verification runs once every 6 hours for each stack, and you will be notified in the case of a failured verification.

<h2 id="usage">Set up a backup verifier</h2>
Create a file in the `.cloud66` folder in the root of your repository. To verify your backups across all environments, name the file `backup_verifier_mysql.sql` for MySQL, and `backup_verifier_pg.sql` for PostgreSQL backups. You can also specify which environment to run backup verifiers for by appending the environment to the filename. For example, `backup_verifier_mysql_production.sql` or `backup_verifier_pg_staging.sql`.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>By including this script in your repository, you are opting in to the use of verified backups and will be charged accordingly. Please see our pricing below for more information.</p>
</div>

To verify your backup, the script must contain a SQL query that returns a data set containing a single column called **result** with a value of true or false. Should you need to change your verification script at some point, simply commit the change to Git and redeploy your code. Please find below an example of such queries and an example of the output for each respective database.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>Your backup will be assumed to be <b>verified</b> if the value returned from the query is <b>true</b>.</p>
</div>

**MySQL**

This query will count the number of records in the *users* table, and returns a 1 if that number is not zero.

<pre class="prettyprint">
select count(*)<>0 as result from users
</pre>

That query may return the following output (non-zero values are interpreted as true in MySQL), indicating that your *users* table holds data.

<pre class="prettyprint">
result
1
</pre>

**PostgreSQL**

Similarly, this query also counts the number of records in the *users* table, and returns a boolean of _true_ if that number is not zero.

<pre class="prettyprint">
select count(*)<>0 as result from users
</pre>

The result of this query may be the following, indicating that your *users* table holds data.

<pre class="prettyprint">
result
--------
t
</pre>

<h2 id="view">View backup verification status</h2>
To see your backup verification status, visit your stack detail page, and click the link to your managed backup page. A successfully verified backup will display a green tick, and a failure during verification will result in a red cross - clicking on the red cross will show the error message.

<h2 id="pricing">Pricing</h2>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center"></th>
            <th align="center">Stack/month</th>
            <th align="center">GB/month</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Verified backup</td>
            <td>$25</td>
            <td>&mdash;</td>
        </tr>
    </tbody>
</table>