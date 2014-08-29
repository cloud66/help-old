---
layout: post
template: one-col
title:  "Running background processes"
so_title: "processes"
nav_sticky: false
date:   2089-01-25 16:27:22
categories: deployment
lead: Cloud 66 supports the widely used Procfile format files
search-tags: []
tags: ['Deployment']
---

## About running background processes
You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called <kbd>Procfile</kbd>.

Should you wish to use different processes in different environments, you can name your Procfile in the following convention:

<pre class="terminal">
Procfile_ENV
</pre>

For example, to limit specific processes to running only in your development environment, call the file <kbd>Procfile_development</kbd>.

## How to run background processes
A typical Procfile may look something like this:
<pre class="terminal">
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
</pre>

The commands above would run <kbd>rake resque:work QUEUE=*</kbd> and <kbd>rake resque:scheduler</kbd> and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.

You can reference your stack environment variables with a `$` before the name. This will be replaced by the actual value in the command executed. As an example, `$RAILS_ENV` will be evaluated as `production` if you are in the production environment.

## Scaling background processes
You can scale your background processes up and down on the process server page. On your stack detail page, click the link to your _Process server_ group on your stack detail page. Use the <i>+</i> and <i>-</i> buttons to scale your processes up and down.

You can also scale up a [standalone process server](#) for more resources.