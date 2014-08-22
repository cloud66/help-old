---
layout: post
template: two-col
title:  "Running background processes"
so_title: "processes"
nav_sticky: false
date:   2089-01-25 16:27:22
categories: deployment
lead: Cloud 66 supports the widely used Procfile format files
search-tags: []
tags: ['Deployment']
---

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called <kbd>Procfile</kbd>.

Should you wish to use different processes in different environments, you can name your Procfile in the following convention: <kbd>Procfile_ENV</kbd>. For example, to run specific processes only in your development environment, call your Procfile <kbd>Procfile_development</kbd>.

## Example
A typical Procfile may look something like this:
<pre class="terminal">
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
</pre>

The commands above would tell Cloud 66 to run <kbd>rake resque:work QUEUE=*</kbd> and <kbd>rake resque:scheduler</kbd> and monitor them.

Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted.

An overall view of your processes is available on the dashboard:
![Processes in Dashboard](http://cdn.cloud66.com/images/help/processes_dash.png)

## Scaling processes
By clicking on the process server(s) in your stack, you can scale processes up and down as well as restart them. The page looks like this:
![Process Page](http://cdn.cloud66.com/images/help/processes_page.png)
Once you have your processes up and running, click on the + icon for each process and your process will be scaled up (or the - button to scale it down) immediately.

As you can see above, the processes are being run on the web server. Should you wish, you can [scale to standalone process servers](/stack-features/standalone-process-servers.html).

## Environment variables
You can use any of your stack's environment variables with a `$` before the name. This will be replaced by the actual value in the command executed.

For example, <kbd>worker: bundle exec sidekiq -e $RAILS&#95;ENV</kbd> will be executed as <kbd>worker: bundle exec sidekiq -e production</kbd> if your stack has a production environment.

## Standalone server
Your [processes](/stack-features/proc-files.html) are run on your web server by default:
![Processes in Dashboard](http://cdn.cloud66.com/images/help/processes_page.png)

Use the <i>Scale up</i> button on the process server page to add a standalone process server: <img src="http://cdn.cloud66.com/images/help/scale_up_button.png" align="middle">

You can now scale up/down processes on both the web server and the process server. For example, you may wish to move all processes to the standalone server by reducing the number of processes on the web server to zero and adding them to the process server.
![Standalone Process Server](http://cdn.cloud66.com/images/help/standalone_process_server.png)

The standalone server is very much like a web server as it needs all the code and dependencies for most workers. By default however, it will not serve web content.

If you would like the process server to serve web content, you can add a load balancer to your stack from either your stack page or by clicking on the process server (as seen below).
![Process Server Page](http://cdn.cloud66.com/images/help/process_server_page.png)

Once you have added a load balancer, you can toggle serving web content from your process server <i>On</i> and <i>Off</i> from the load balancer page:
![Load Balancer Page](http://cdn.cloud66.com/images/help/load_balancer_page.png)

You can at any point switch a server serving web content to being a process server by toggling the above setting to <i>Off</i>.