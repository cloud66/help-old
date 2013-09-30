---
layout: post
title:  "MySQL Backup"
date:   2013-09-24 10:51:22
categories: add-ins
---


<p class="lead">Backs up MySQL databases on the fly and stores the backup files locally</p>

## Requirements
- Cloud 66  Agent
- MySQL 5 or later
- Linux, Unix, FreeBSD or OS X


## Type
This is a scheduled app that runs on regular intervals as defined by you. Learn more about [setting up schedules](settingup_schedules).

## Setup
The following fields can be configured for this app

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Field</th>
			<th>Description</th>
			<th>Presence</th>
			<th>Comments</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>MySQL Dump Tool</td>
			<td>Full path to <a href='http://dev.mysql.com/doc/refman/5.5/en/mysqldump.html'>MySQL Dump tool</a></td>
			<td><span class='label'>Optional</span></td>
			<td>Default: <kbd>/usr/bin/mysqldump</kbd></td>
		</tr>
		<tr>
			<td>DB Name</td>
			<td>Name of the database to backup</td>
			<td><span class='label label-important'>Required</span></td>
			<td></td>
		</tr>
		<tr>
			<td>User name</td>
			<td>MySQL User name</td>
			<td><span class='label'>Optional</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Password</td>
			<td>MySQL Password</td>
			<td><span class='label'>Optional</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Socket</td>
			<td>Unix Socket to connect to the server</td>
			<td><span class='label'>Optional</span></td>
			<td>Use this or Host / Port</td>
		</tr>
		<tr>
			<td>Host</td>
			<td>Host name to connect to the server</td>
			<td><span class='label'>Optional</span></td>
			<td>Use this or Socket</td>
		</tr>
		<tr>
			<td>Port</td>
			<td>Host port to connect to the server</td>
			<td><span class='label'>Optional</span></td>
			<td>Use this or Socket</td>
		</tr>
		<tr>
			<td>Skip Tables</td>
			<td>List of tables NOT to backup</td>
			<td><span class='label'>Optional</span></td>
			<td>Comma separated</td>
		</tr>
		<tr>
			<td>Only Tables</td>
			<td>List of the ONLY tables to backup</td>
			<td><span class='label'>Optional</span></td>
			<td>Comma separated</td>
		</tr>
		<tr>
			<td>Backup Folder</td>
			<td>Local backup destination folder</td>
			<td><span class='label label-important'>Required</span></td>
			<td>Use a full path like <kbd>/data/backups</kbd></td>
		</tr>
	</tbody>
</table>

## Remarks
1. MySQL Dump tool is often installed alongside MySQL Server. Using the default value works most of the time.
2. Use either the Socket or the Host / Port combination to connect to the server. NOT BOTH.
3. Use either Skip Tables or Only Tables fields. NOT BOTH. Leaving them both empty will result in a full backup of all tables in the database.
4. Backup folder will be created if not present.
5. Backup file will be gzipped. It contains a SQL script to restore the tables and data.
6. Backup filename is timestamped.

## Suggestions
- Install a [File Rotation](file_rotation) App to take snapshots of your database. You can trigger the File Rotation by a successful MySQL Backup.
- Use [S3 Backup App](s3_backup) to store the back up in the cloud as well.