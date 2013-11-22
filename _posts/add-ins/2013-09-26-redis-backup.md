---
layout: post
template: two-col
title:  "Redis Backup"
date:   2013-09-24 10:51:22
categories: add-ins
lead: Backs up Redis databases on the fly and stores the backup files locally
---



## Requirements
- Cloud 66  Agent
- Redis Client
- Linux, Unix, FreeBSD or OS X


## Type
This is a scheduled app that runs on regular intervals defined by you. Learn more about [setting up schedules](/add-ins/settingup-schedules.html).

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
			<td>Redis Client</td>
			<td>Full path to Redis Client (redis-cli)</td>
			<td><span class='label'>Optional</span></td>
			<td>Default: <kbd>/usr/bin/redis-cli</kbd></td>
		</tr>
		<tr>
			<td>DB Name</td>
			<td>Name of the database to backup</td>
			<td><span class='label'>Optional</span></td>
			<td>Default: dump</td>
		</tr>
		<tr>
			<td>Password</td>
			<td>Redis Password</td>
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
			<td>Use this or Socket. Default: localhost</td>
		</tr>
		<tr>
			<td>Port</td>
			<td>Host port to connect to the server</td>
			<td><span class='label'>Optional</span></td>
			<td>Use this or Socket. Default: 6379</td>
		</tr>
		<tr>
			<td>DB Path</td>
			<td>Path to Redis database file</td>
			<td><span class='label label-important'>Required</span></td>
			<td>Usually this is where Redis is installed</td>
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
1. Redis Client (redis-cli) is often installed alongside Redis Server. Using the default value works most of the time.
2. Use either the Socket or the Host / Port combination to connect to the server. NOT BOTH.
3. Backup folder will be created if not present.
5. Backup file will be gzipped. It contains a zipped copy of the Redis database file. It can be used as it is unzipped.

## Suggestions
- Install a [File Rotation](file_rotate) App to take snapshots of your database. You can trigger the File Rotation by a successful Redis Backup.
- Use [S3 Backup App](s3_backup) to store the back up in the cloud as well.