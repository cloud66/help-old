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
        <a href="#add">Add a database backup</a>
    </li>
	<li>
		<a href="#pricing">Pricing</a>
	</li>
</ul>

<h2 id="intro">What is the database backup add-in?</h2>
Use this add-in to backup your database on a schedule of your choosing. You can specify if you would like managed or unmanaged backups, how often you would like to backup your database, whether or not you would like to Gzip compress your backups, and any tables you want to exclude from your backup.

Compressing your backups will take up less space than not, but will require additional processing during the compression. In order for backups to work, you are required to have twice as much space on your server as your backup consumes. If enabled, the gzip compression level used by default is 6 (this is not currently editable). See more information about this in the excellent <a href='https://github.com/meskyanichi/backup/wiki/Compressors' target='_blank'>backup gem documentation.</a>

The <i>exclude tables</i> option only applies to MySQL and PostgreSQL databases. Also worth noting is that you have the option to move the backup service to your database replica if available, to relieve pressure from your production database.

<h2 id="types">Backup types</h2>
Cloud 66 provides two types of backups: _managed_ and _unmanaged_.

<h3 id="managed">Managed backups</h3>
Having managed backups carries several benefits:

- You can download database backups through the web UI and API
- [Backup verifiers](/database-management/backup-verification) ensure that your backups actually contain what you expect
- Use [database replication](/database-management/database-replication) to scale your databases
- You can easily restore database backups
- Stored in Cloud 66 storage

The 100 most recent managed backups are kept by default.

<h3 id="unmanaged">Unmanaged backups</h3>

Unmanaged backups are stored on your local server and are available under `/var/cloud66/backups`. The 10 most recent unmanaged backups are kept by default.

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
