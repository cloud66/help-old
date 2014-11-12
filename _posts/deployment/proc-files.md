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

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About running background processes</a>
	</li>
	<li>
		<a href="#how">How to run background processes</a>
	</li>
	<li>
		<a href="#unique">Running processes with unique identifiers</a>
	</li>	
	<li>
		<a href="#scale">Scaling background processes</a>
	</li>
</ul>

<h2 id="about">About running background processes</h2>
You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called <kbd>Procfile</kbd>.

Should you wish to use different processes in different environments, you can name your Procfile in the following convention:

<pre class="terminal">
Procfile_ENV
</pre>

For example, to limit specific processes to running only in your development environment, call the file <kbd>Procfile_development</kbd>.

<h2 id="how">How to run background processes</h2>
A typical Procfile may look something like this:

<pre class="prettyprint">
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
</pre>

The commands above would run <kbd>rake resque:work QUEUE=*</kbd> and <kbd>rake resque:scheduler</kbd> and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.

You can reference your stack environment variables with a `$` before the name. This will be replaced by the actual value in the command executed. As an example, `$RAILS_ENV` will be evaluated as `production` if you are in the production environment.

<h2 id="unique">Running processes with unique identifiers</h2>
To assign a unique identifier to your process (for example with Sidekiq), use the <kbd>&#123;&#123;UNIQUE_INT&#125;&#125;</kbd> notation. For example, your process could look as follows:

<pre class="terminal">
worker: bundle exec sidekiq -e production -i &#123;&#123;UNIQUE_INT&#125;&#125;
</pre>	

This integer should be unique across processes, so that multiple processes won't clash, but may not be unique across servers.

<h2 id="scale">Scaling background processes</h2>
You can scale your background processes up and down on the process server page. On your stack detail page, click the link to your _Process server_ group on your stack detail page. Use the <i>+</i> and <i>-</i> buttons to scale your processes up and down.

You can also scale up a [standalone process server](/deployment/scaling#process) for more resources.