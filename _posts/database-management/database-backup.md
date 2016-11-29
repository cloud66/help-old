---
layout: post
template: one-col
title:  "Database backup"
date:   4000-10-03 14:17:13
categories: database-management
lead: Managed and unmanaged database backups
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">What is the database backup add-in?</a>
	</li>
	<li>
		<a href="#types">Backup types</a>
	</li>
    <li>
        <ul>
        <li><a href="#managed">Managed</a></li>
        <li><a href="#unmanaged">Unmanaged</a></li>
        </ul>
    </li>    
	<li>
		<a href="#formats">Backup format</a>
	</li>
    <li>
        <ul>
        <li><a href="#logical">Logical Backups</a></li>
        <li><a href="#hotbackups">Hot Backups</a></li>
        </ul>
    </li>    
	<li>
		<a href="#schedule">Backup schedule</a>
	</li>
	<li>
		<a href="#compress">Compression</a>
	</li>
	<li>
		<a href="#exclude">Exclude tables</a>
	</li>
	<li>
		<a href="#replica">Install on replica</a>
	</li>
	<li>
		<a href="#pricing">Pricing</a>
	</li>
</ul>

<h2 id="intro">What is the database backup add-in?</h2>
Use this add-in to backup your database on a schedule of your choosing.  You can choose from different settings to have your expected behavior :

<h3 id="types">Backup types</h3>
Cloud 66 provides two types of backups: _managed_ and _unmanaged_.

<h4 id="managed">Managed backups</h4>
Having managed backups carries several benefits:

- You can download database backups through the web UI and API
- [Backup verifiers](/database-management/backup-verification) ensure that your backups actually contain what you expect
- Use [database replication](/database-management/database-replication) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.

<h4 id="unmanaged">Unmanaged backups</h4>

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.

<h3 id="formats">Backup format</h3>
For Mysql and Postgresql servers you can choose to have a **Logical** or **Hot** backup.

<h4 id="logical">Logical Backups</h4>
In this method we are generating a dump file with SQL commands that, when fed back to the server, will recreate the database in the same state as it was at the time of the dump.
As the output of the backup is a simple sql dump file, you can use it to import your data to other servers or when you want to upgrade your server version. 
These are other benefits of this type of backup : 
- You can restore this backup when server is up and running.
- You can move backup jobs to your slave servers (if available) to reduce your master server load


<h4 id="hotbackups">Hot Backups</h4>
If you do not choose **logical backup** in your backup settings for Mysql or Postgresql servers, we are generating a **Hot backup**.
In this method we are taking a snapshot of the data folder of your database service and applying needed logs to have a consistent data folder. The result is a data folder which can be restored on your server to return it in the same state as it was at the time of backup. 
As this backup contains raw data of your database server(Instead of human readable SQL dump file) you can expect much faster backup/restore process, specially for large databases this method can be faster up to 4 times which can be very helpful in failover scenarios. But there are some limitation :
- You can not restore it on a server with different version 
- You can not use it on slave servers
- You can not use it on servers which their data folder is symlinked to other locations
- We need to shutdown the database service during the restore 


<h3 id="schedule">Backup schedule</h3>
You can specify how often you would like to backup your database. It could be 
- Hourly 
- Daily 
- Weekly 
- Monthly 

<h3 id="compress">Compression</h3>
You can specify whether or not you would like to Gzip compress your backups. Compressing your backups will take up less space, but will require additional processing during the compression.  

<h3 id="exclude">Exclude tables</h3>
This option applies to **logical** MySQL and PostgreSQL databases.  You can provide a comma separated list of tables which you want to exclude from your backup to create a smaller one.   


<h3 id="replica">Install on replica</h3>
This option applies to **logical** MySQL and PostgreSQL and redis databases. With this option you can move the backup service to your database replica if available, to relieve pressure from your production database. 


<div class="notice notice-danger">
	<h3>Note</h3>
	<p>In order for backups to work, you are required to have twice as much space on your server as your backup consumes.</p>
</div>



<h2 id="pricing">Pricing</h2>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center"></th>
            <th align="center">Database/month</th>
            <th align="center">GB/month</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Managed backup</td>
            <td>$12</td>
            <td>$0.12</td>
        </tr>
        <tr>
            <td>Unmanaged backup</td>
            <td>$5</td>
            <td>&mdash;</td>
        </tr>
    </tbody>
</table>
