---
layout: post
template: two-col
title:  "How to schedule a Job"
date:   2013-09-24 10:51:22
categories: add-ins
lead: Gives detail on how a recurring job can be created and configured through Cloud 66
---



##Basics

There are three main points about scheduling a job:

- When does the job start
- How often does the job run
- When is the job no longer going to run

This is like having a time window in which the job runs with a defined frequency:

- A job never runs before the defined first start date/time
- A job never runs after the defined last end date/time - or alternatively when it has run for a number of times.

##Start date/time
You can define a job to start running _Now_ or after a given point in the future. Use the _job edit_ page to choose this option.

##End date/time
You can define a job to cease running (and not run again) after a given point in time in future. Use the _job edit_ page to choose this option.

##End run times
You can make a job run only for a given number of times. This means the job will only run x times before it stops running again. Use the _job edit_ page to choose this option.

##Job schedule frequency
A job can run according to a given frequency (ie. how often it runs). It can be configured in the _job edit_ page and can either be a set time during the day or every x minutes. It can also be configured using cron syntax.

Here are some examples:

- At 12:30 AM every day
- At 20 minutes past every hour
- Every 15 minutes

This can all be configured on the _job edit_ page.

##Cron job scheduling

CloudQuartz jobs can be configured using the cron syntax as well. This gives you more flexibility in running jobs. CloudQuartz supports complex cron syntax, so you can schedule jobs to run at 08:00 AM of every last Thursday of each month (should you so desire).

Here are some examples of cron scheduled jobs definitions:

- To run the job on every minute of every hour of every day of every month:
`* * * * *`

- To run the job at 01:00 AM every day:
`* 1 * * *`

- To run the job at 03:20 AM every day:
`20 3 * * *`

- To run the job at 03:18 AM, 03:19AM and 03:20AM every day:
`18,19,20 3 * * *`

- To run the job at 05:00 AM of every 4th of the month:
`* 5 4 * *`

- To run the job at 05:00 AM of every 4th of July:
`* 5 4 7 *`

- To run the job at 12:00 AM of every Sunday:
`* 0 * * 0`

- To run the job at 22:00 of the first and second Sundays of each month:
`0 22 * * sun#1,sun#2`

##Time-zones

CloudQuartz job scheduling is Time-zone aware. This means you can configure a job to run at 15:30 PST every day.

CloudQuartz is also aware of Daylight Saving rules for each timezone. So you can be sure that it always runs at the correct time without worrying about the DTS rules.

##Avoiding Daylight Saving

If you don't want Daylight Saving rules to affect a job schedule, just simply choose the timezone of a job from a list of UTC related timezones:

For example if you want to run your job at 15:30 PST and ignore PST Daylight Saving rules, choose UTC +8 as the timezone.

##Job agent

On the _job edit_ page, you can also choose the agent you would like to run the job (and hence the server that the job should run on). The drop-down list shows all of your registered agents.

