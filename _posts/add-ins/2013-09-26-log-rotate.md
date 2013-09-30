---
layout: post
title:  "Log Rotate"
date:   2013-09-24 10:51:22
categories: add-ins
---

<p class="lead">Automatically archives your log files and stores them in a location of your specification. Optionally only keeps a specified number of your most recent archives, and optionally executes a command of your choice after each log rotate occurs</p>

## Requirements
- Cloud 66  Agent
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
			<td>Source files pattern</td>
			<td>A pattern to recognise your source log files</td>
			<td><span class='label label-important'>Required</span></td>
			<td>ie. <kbd>/logs/apache/*.log</kbd></td>
		</tr>
		<tr>
			<td>Destination</td>
			<td>The destination directory in which to keep your archived log files</td>
			<td><span class='label label-important'>Required</span></td>
			<td>ie. <kbd>/logs/apache/log_archive</kbd></td>
		</tr>
		<tr>
			<td>Post rotate command</td>
			<td>Command to be executed after rotation each time this app runs</td>
			<td><span class='label'>Optional</span></td>
			<td>ie. <kbd>/your_app/do_something.sh</kbd></td>
		</tr>
		<tr>
			<td>Versions to keep</td>
			<td>Maximum number of historic archives to keep</td>
			<td><span class='label'>Optional</span></td>
			<td>default: <kbd>0</kbd> (unlimited)</td>
		</tr>
	</tbody>
</table>

## Remarks
1. Your original log files are removed - so this works best if the log is not concurrently being written to (to avoid data loss).
