---
layout: post
template: two-col
title:  "Rackspace Backup"
date:   2013-09-24 10:51:22
categories: add-ins
lead: Copies files from local storage to Rackspace Cloud Files storage directly. It can keep multiple versions of the file in Cloud Files
---


## Requirements
- Cloud 66  Agent
- [Americas Rackspace Account](https://manage.rackspacecloud.com) or [European Rackspace Account](https://lon.manage.rackspacecloud.com)
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
			<td>Cloud Files username</td>
			<td>Your Cloud Files username</td>
			<td><span class='label label-important'>Required</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Cloud Files API key</td>
			<td>Your Cloud Files API key</td>
			<td><span class='label label-important'>Required</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Container</td>
			<td>Your Cloud Files container name</td>
			<td><span class='label label-important'>Required</span></td>
			<td>The container must already exist on Cloud Files</td>
		</tr>
		<tr>
			<td>Remote path</td>
			<td>The directory path to use within your Cloud Files container</td>
			<td><span class='label label-important'>Required</span></td>
			<td>Name of the folder in the container to copy to. Example: <kbd>backups/logs</kbd></td>
		</tr>
		<tr>
			<td>Region</td>
			<td>Your Rackspace Region</td>
			<td><span class='label label-important'>Required</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Version History</td>
			<td>Whether you wish to automatically create historic archives each time your job runs</td>
			<td><span class='label label-important'>Required</span></td>
			<td></td>
		</tr>
		<tr>
			<td>Source Pattern</td>
			<td>The path to the files you wish to backup</td>
			<td><span class='label label-important'>Required</span></td>
			<td>Examples: <kbd>/data/files/*.zip</kbd> or <kbd>/data/**</kbd></td>
		</tr>
	</tbody>
</table>

## Remarks
1. Data transfer will happen between the agent running on your server and Rackspace directly.
2. The Cloud Files container should exist beforehand.
3. Remote folder is created if it doesn't exist.
4. Files are copied with the default accessiblity to Rackspace.

## Suggestions
- Use this app to make a secondary copy of your backups and files in the cloud.