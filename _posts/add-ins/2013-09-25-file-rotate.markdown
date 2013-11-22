---
layout: post
title:  "File Rotater"
date:   2013-09-24 10:51:22
categories: add-ins
lead: Automatically archives your files and stores them in a location of your choice.
---


## Requirements
- Cloud 66  Agent
- Linux, Unix, FreeBSD or OS X


## Type
This is a scheduled app that runs on regular intervals as defined by you. Learn more about [setting up schedules](/add-ins/settingup-schedules.html).

## Setup
The following fields can be configured for this app

<table class="table table-bordered table-striped">
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
            <td>A pattern to recognise your source files</td>
            <td><span class='label label-important'>Required</span></td>
            <td>ie. <kbd>/data/backups/*.gz</kbd></td>
        </tr>
        <tr>
            <td>Destination</td>
            <td>The destination directory in which to place your rotated files</td>
            <td><span class='label label-important'>Required</span></td>
            <td>ie. <kbd>/data/backups/archive</kbd></td>
        </tr>
        <tr>
            <td>Post rotate command</td>
            <td>Command to be executed after rotation each time this app runs</td>
            <td><span class='label'>Optional</span></td>
            <td>ie. <kbd>/your&#95;app/do&#95;something.sh</kbd></td>
        </tr>
        <tr>
            <td>Versions to keep</td>
            <td>Maximum number of file versions to keep</td>
            <td><span class='label'>Optional</span></td>
            <td>default: <kbd>0</kbd> (unlimited)</td>
        </tr>
    </tbody>
</table>