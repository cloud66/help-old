---
layout: post
template: two-col
title:  "Backup verifiers"
so_title: "verifier"
date:   4000-10-03 14:17:13
categories: stack-features
lead: Ensure the highest quality of backup assurance
---


## Setup

To set up backup verifiers, please ensure that you have [managed backups](/stack-features/db-backup.html) and are running either a MySQL or PostgreSQL database.

Firstly, create a file in the **.cloud66** folder in the root of your repository. The file should be called **backup&#95;verifier&#95;mysql.sql** to verify a MySQL database backup, or **backup&#95;verifier&#95;pg.sql** for a PostgreSQL database backup.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>By including this script in your repository, you are opting in to the use of verified backups and will be charged accordingly. Please see our <a href="http://cloud66.com/pricing" target="_blank">pricing page</a> for more information.</p>
</div>

To verify your backup, the script must contain a SQL query that returns a data set containing a single column called **result** with a value of true or false. Please find below an example of such queries and an example of the output for each respective database.

<div class="notice notice-standalone">
		<h3>Important</h3>
		<p>Your backup will be assumed to be <b>verified</b> if the value returned from the query is <b>true</b>.</p>
</div>

**MySQL**

This query will count the number of results in the *users* table equal to zero.
<pre class='terminal-commands'>
select count(*)=0 as result from users
</pre>

That query may return the following output (zero is interpreted as true in MySQL), indicating that your *users* table holds data.
<pre class='terminal-commands'>
result
0
</pre>

**PostgreSQL**

Similarly, this query also counts the number of results in the *users* table equal to zero.
<pre class='terminal-commands'>
select count(*)=0 as result from users
</pre>

The result of this query may be the following, indicating that your *users* table holds data.

<pre class="terminal-commands">
result
--------
t
</pre>

## Usage

Once you have completed the above setup, you can check whether your backups have verified successfully by accessing the backups page
of your stack.
![Backup page](http://cdn.cloud66.com.s3.amazonaws.com/images/help/backup_page.png)

A successfully verified backup will display a green tick.
![Passed verification](http://cdn.cloud66.com.s3.amazonaws.com/images/help/verification_passed.png)

A failure during backup verification will result in a red cross, and clicking on the red cross will show the error message.
![Failed verification](http://cdn.cloud66.com.s3.amazonaws.com/images/help/verification_failed.png)

Should you need to change your verification script at some point, simply commit the change to Git and redeploy your code.
