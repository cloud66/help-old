---
layout: post
template: two-col
title:  "Backup your data in the Cloud"
date:   2013-09-24 10:51:22
categories: add-ins
lead: Scheduled copy of local file(s) to your cloud storage provider
---


## Copying backups to Amazon S3

You can copy your backup files to Amazon S3 for more safety. This is possible by installing [S3 Backup](/add-ins/s3-backup.html) on your server. To do this:

## 1. Install S3 Backup App
Click on the Install button of the S3 Backup app,  enter your Amazon S3 API key and also the names of the files you would like to copy to S3.

## 2. (Optional) Link your backup app
If you would like the files to be copied to S3 after any other backup (like MySQL or Redis backup), select your S3 Backup app as the next step of the backup app.

### Like this:

![linking apps](/images/linking_apps.png)