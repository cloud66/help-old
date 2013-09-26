---
layout: post
title:  "Running Background Processes"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Cloud 66 supports the widely used Procfile format files</p>

## Procfiles

You can use Procfiles to ensure your background jobs always run and are monitored. Doing so is as easy as defining them in the root of your Ruby on Rails app. The file should be called <kbd>Procfile</kbd>.

## Procfile example
A typical Procfile may look something like this:
<pre class="terminal-commands">
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
</pre>

The commands above would tell Cloud 66 to run <kbd>rake resque:work QUEUE=*</kbd> and <kbd>rake resque:scheduler</kbd> and monitor them.

Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted.

An overall view of your processes is available on the dashboard:
![Processes in Dashboard](http://cdn.cloud66.com.s3.amazonaws.com/images/help/processes_dash.png)

## Scaling Processes
By clicking on the process server(s) in your stack you can scale processes up and down as well as restart them. The page looks like this:
![Process Page](http://cdn.cloud66.com.s3.amazonaws.com/images/help/processes_page.png)
Once you have your processes up and running, click on the + icon for each process and your process will be scaled up (or the - button to scale it down) immediately.

As you can see above, the processes are being run on the web server. Should you wish, you can [scale to standalone process servers](/help/standalone_process_servers).

## Environment Variables
You can use any of your stack's environment variables with a `$` before the name. This will be replaced by the actual value in the command executed.

For example, <kbd>worker: bundle exec sidekiq -e $RAILS_ENV</kbd> will be executed as <kbd>worker: bundle exec sidekiq -e production</kbd> if your stack has a production environment.