---
layout: post
template: one-col
title:  "Environment variables"
so_title: "environment variables"
nav_sticky: false
date:   2095-01-25 16:27:22
categories: deployment
lead: Reference environment variables in your code or scripts
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About environment variables</a>
	</li>
	<li>
		<a href="#auto">Auto-generated environment variables</a>
	</li>
	<li>
		<a href="#deployment">Assign environment variables for deployment</a>
	</li>
	<li>
		<a href="#build">Assign environment variables after stack build</a>
	</li>
	<li>
		<a href="#reference">Reference environment variables</a>
	</li>		
</ul>

<h2 id="about">About environment variables</h2>
Environment variables contain a name and value, and provide a simple way to share configuration settings between multiple applications and processes in Linux. For example, Cloud 66 creates environment variables for your database server address, which can be referenced in your code. This has numerous benefits:

- Makes it easy to handle the fact that your environments use different environment-specific configurations
- These values may change, so setting them as variables makes life easier
- You avoid having to commit sensitive information to your Git repository

<h2 id="auto">Auto-generated environment variables</h2>
As mentioned earlier, Cloud auto-generates a number of environment variables, which can be used in addition to those that you define. Depending on your stack configuration, the environment variables available will differ. Given the variety of environments that we support, it becomes difficult to keep an exhaustive list of auto-generated environment variables. 

The following variables are created for Rack-based stacks (among others):

- **RAILS&#95;ENV** &mdash; Your stacks environment
- **RACK&#95;ENV** &mdash; Your stacks environment
- **STACK&#95;PATH** &mdash; The directory path to which your code is deployed

If you have a MySQL server, the following variables are created and inserted into your _database.yml_ (unless you have specified your own):

- **MYSQL&#95;ADDRESS** &mdash; The physical address of your server
- **MYSQL&#95;USERNAME** &mdash; Randomly generated string
- **MYSQL&#95;PASSWORD** &mdash; Randomly generated string

For a list of environment variables available in your stack, visit the _Environment variables_ link in the right sidebar of your stack detail page. If you don't currently have a stack, the environment variables avaialable to you are shown after your code analysis.

<h2 id="deployment">Assign environment variables for deployment</h2>
When you create a new stack, you are given the option to assign your own environment variables after code analysis. Once your code has been analyzed, click _Add environment variables before deployment_ in the _About your app_ field. This will allow you to view the environment variables that Cloud 66 sets for you, and set your own.

You can set your own by either manually entering them, or uploading a file that contain the variables. This file should use the following format:
<pre class="terminal">
KEY&#95;1=value&#95;1
KEY&#95;2=value&#95;2
</pre>

If your application relies on specific environment variables to complete the deployment process, it is worth adding them before deploying. 

<h2 id="build">Assign environment variables after stack build</h2>
You can also set environment variables on an existing stack by visiting the _Environment variables_ link in the right sidebar of your stack detail page. Once you click _Save_, these variables will be propagated to all your servers automatically, ready for your use.

Be aware of the following while assigning environment variables:

- <b>Environment variables are not escaped</b><br/>
However, they are always wrapped in double quotes (eg. <kbd>"ENV_VAR"</kbd>) so you can use them with multi-line variables like SSH keys.
- <b>Some environment variables cannot be modified</b><br/>
For example, environment variables for your server IP addresses cannot be changed because they are automatically set and updated based on reported IP addresses.
- <b>You can reference other environment variables on the same stack</b><br/>
This can be done using the <kbd>&#123;&#123; ENV&#95;VAR &#125;&#125;</kbd> syntax, and is useful when referencing an environment variable which you don't control such as a server IP address.
- <b>You can reference environment variables available on other stacks</b><br/>
This is done using the <kbd>&#123;&#123; STACK[STACK_UID].ENV&#95;VAR &#125;&#125;</kbd> syntax. Your stack UID is available on the stack setting page. You need administrative privileges on the target stack to reference environment variables on it. You cannot use intra-stack environment variables to gain access to database credentials, only database addresses.

<h2 id="reference">Reference environment variables</h2>
Referencing environment variables is done differently depending on your application settings, but these are some examples.

- <b>Bash scripts</b>
<pre class="terminal">$ENV_VAR</pre>
- <b>.YML files</b><br/>
<pre class="terminal">username: &lt;%= ENV['DB&#95;USER'] %&gt;</pre>
- <b>.RB files</b><br/>
<pre class="terminal">working_directory "#{ENV['STACK_PATH']}"</pre>
