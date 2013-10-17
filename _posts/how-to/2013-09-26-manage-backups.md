---
layout: post
title:  "Managing your Cloud 66 backups"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">This guide shows you how to manage your Cloud 66 backups should you wish to do so.</p>

## Introduction
Cloud 66 makes it easy for you to run and restore your [database backups](/add-ins/one-click-database-backup.html), but you can also manage them yourself.
This guide follows a logical scenario of what a user is likely to face in this situation.

## Download your backup
You can retrieve your backup in one of two ways:

### Cloud 66 web UI
Access the backup page of your stack, and click the download button:
![Backup Download](http://cdn.cloud66.com.s3.amazonaws.com/images/help/backup_download.png)


### Command line
Use the `wget` command to download your backup:
`wget <generated_public_link>`

You can find the link to the file by clicking the download button (shown above) and copying the link. Remember to put quotes around it.

## Unzip your backup
Now that you have downloaded your backup, you can go ahead and unzip it with the following command:
`tar -xvf <tar_file>  -C <folder_name>`

The `-C` option allows you to choose which folder to extract the files to.

If your backup is greater than 250 MB, Cloud 66 will divide it into separate files. In this case, you have to
concatenate the parts into a single file before using the command above.

For example, if we had three files called
file.tar-aa, file.tar-ab and file.tar-ac, we would use the following command: `cat file.tar-aa file.tar-ab file.tar-ac > file.tar`

This will result in a file called file.tar, which we can now unzip.

## Move your backup to another server
To do this we will copy the file to a remote server using SCP:

`scp  -i <identity_file> <local_file> <remote_server_user>@<remote_server_address>:<remote_server_folder>`

## Restore your backup on another server

### MySQL database

From the [MySQL command-line](http://dev.mysql.com/doc/refman/5.5/en/mysql.html), use the following command to restore your database from a dumped backup file `(.sql)`:

`mysql -u <db_username> -p <db_password> <db_name> <path_to_your_backup_file(.sql)>`


### PostgreSQL database

From the PostgreSQL command-line prompt, use the following command to restore your database from a dumped backup file `(.sql)`:

`psql -U <db_username> --no-password <db_name> <path_to_your_backup_file(.sql)>`


### MongoDB database

From the MongoShell, use the following command to restore your database from a dumped backup folder:

`mongorestore  --drop --username <db_username> --password <db_password> --db <db_name> <path_to_your_backup_folder(dump)>`

### Redis database

<div class="notice">
    <h3>Important</h3>
		<p>Ensure that Redis is not running before restoring your backups and use the appropriate method to stop it before proceeding.</p>
</div>

Redis data are simply represented by a single `dump.rdb` file. You just have to copy this file into the right folder using your command-line interface:

`sudo rm -rf /data/redis/dump.rdb && sudo cp <path_to_your_backup_file(.rdb)> /data/redis/dump.rdb`