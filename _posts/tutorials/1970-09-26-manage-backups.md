---
layout: post
template: two-col
title:  "How to manage your Cloud 66 backups"
so_title: "backup"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1920-09-26 15:33:13
categories: 
lead: Download, move, and restore your Cloud 66 backups
search-tags: ['backup, Postgres, unmanaged']
tags: ['Database']
tutorial: true
difficulty: 0
---

## Managing your Cloud 66 backups
Cloud 66 makes it easy for you to run and restore your [database backups](http://help.cloud66.com/stack-add-ins/database-backups), but you can also manage them yourself. This includes downloading the backup, unzipping it, moving it to another server and restoring it. What follows is a logical scenario of what a user is likely to face in this situation.

## Download your backup
You can retrieve your backup in one of three ways:

### 1. Cloud 66 toolbelt
The best way to retrieve your database backup is by using the [toolbelt backup management](http://help.cloud66.com/toolbelt/toolbelt-backup-management). Your backup may be bigger than 250 MB, in which case it will be divided into several files. By using the toolbelt, the files are downloaded and concatenated automatically for you.

### 2. Cloud 66 web UI
Access your stack detail page, and click the link for your database backup add-in. This page lists your available database backups, and allows you to download and restore each one. Click the download icon to view the available downloads, and either download through your browser or with the command line (option 3 below).

### 3. Command line
Use the `wget` command to download your backup:

<pre class="prettyprint">
$ wget &#60;generated_public_link&#62;
</pre>

See option 2 above to retrieve your download link. <b>Remember to put quotes around it.</b>

## Unzip your backup
Now that you have downloaded your backup, you can go ahead and unzip it with the following command:

<pre class="prettyprint">
$ tar -xvf &#60;tar_file&#62;  -C &#60;folder_name&#62;
</pre>

The `-C` option allows you to choose which folder to extract the files to.

If your backup is greater than 250 MB, Cloud 66 will divide it into separate files. In this case, you have to concatenate the parts into a single file before using the command above (unless you are using the Cloud 66 toolbelt).

For example, if we had three files called
file.tar-aa, file.tar-ab and file.tar-ac, we would use the following command: 

<pre class="prettyprint">
$ cat file.tar-aa file.tar-ab file.tar-ac &#62; file.tar
</pre>

This will result in a file called file.tar, which we can now unzip using the command above.

## Move your backup to another server
To move your backup to a remote server, we will use SCP:

<pre class="prettyprint">
$ scp  -i &#60;identity_file&#62; database_dump.sql &#60;remote_server_user&#62;@&#60;remote_server_address&#62;:/tmp
</pre>

## Restore your backup on another server

### MySQL database

From the [MySQL command-line](http://dev.mysql.com/doc/refman/5.5/en/mysql.html), use the following command to restore your database from a dumped backup file `(.sql)`:

<pre class="prettyprint">
$ mysql -u &#60;db_username&#62; -p&#60;db_password&#62; &#60;db_name&#62; &#60; /tmp/database_dump.sql
</pre>


### PostgreSQL database

From the PostgreSQL command-line prompt, use the following command to restore your database from a dumped backup file `(.sql)`:

<pre class="prettyprint">
$ psql -U &#60;db_username&#62; --no-password &#60;db_name&#62; &#60; &#60;path_to_your_backup_file(.sql)&#62;
</pre>

### MongoDB database

From the MongoShell, use the following command to restore your database from a dumped backup folder:

<pre class="prettyprint">
$ mongorestore  --drop --username &#60;db_username&#62; --password &#60;db_password&#62; --db &#60;db_name&#62; &#60;path_to_your_backup_folder(dump)&#62;
</pre>

### Redis database
Ensure that Redis is not running before restoring your backups and use the appropriate method to stop it before proceeding.

Redis data are simply represented by a single `dump.rdb` file. You just have to copy this file into the right folder using your command-line interface:

<pre class="prettyprint">
$ sudo rm -rf /data/redis/dump.rdb && sudo cp &#60;path_to_your_backup_file(.rdb)&#62; /data/redis/dump.rdb
</pre>