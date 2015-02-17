---
layout: post
template: one-col
nav_sticky: true
title:  "Introduction to Cloud 66"
cloud66_text: "Try Cloud 66 for free"
nav: true
nav_prev: "/getting-started/what-is-a-stack.html"
nav_next: "/getting-started/pre-deployment.html"
date:   2137-12-24 10:51:22
categories: introduction-to-cloud-66
lead: Four steps to get started with Cloud 66
search-tags: ['how to start', 'first stack', 'first', 'beginner', 'how to', 'build a stack', 'access code']
tags: ['Getting started']
---

<ul class="page-toc">
	<li>
		<a href="#cloud66">What is Cloud 66?</a>
	</li>
	<li>
		<a href="#needed">What you'll need</a>
	</li>
	<li>
		<a href="#1">Step 1: Build your stack</a>
	</li>
	<li>
		<a href="#2">Step 2: Service configurations</a>
	</li>
	<li>
		<a href="#3">Step 3: Define deployment properties</a>
	</li>
	<li>
		<a href="#4">Step 4: Review the deployment logs</a>
	</li>
	<li>
		<a href="#5">What's next?</a>
	</li>
</ul>

<h2 id="cloud66">What is Cloud 66?</h2>

Cloud 66 builds your full stack on either your own servers or cloud servers, deploys your application to them, and manages it for you.
Whether you are a running a small hobby project or work in a large team of developers, Cloud 66 helps you focus on what you do best.

Because Cloud 66 is provided as a service, you don't need to install anything on your local machine. Some of the features we provide include:

<ul class="list">
<li><b>Deploying</b> your application to your cloud or your own servers</li>
<li><b>Backing up</b> your databases at set intervals</li>
<li><b>Scaling</b> your web, database, and process servers with the click of a button</li>
<li><b>Securing</b> your servers with features such as intruder detection and firewall</li>
<li><b>Monitoring</b> your servers</li>
</ul>

To get started, you just have to provide us with a Git URL to your repository or your own Docker image(s). We'll then build a stack based on it.

Before you get get started, you may want to look at our [Technical specifications](/introduction-to-cloud-66/technical-specifications) to determine if you're ready for Cloud 66.

<h2 id="needed">What you’ll need</h2>

<ul class="list">
  <li><a href="https://app.cloud66.com/users/sign_up" target="_blank">Cloud 66 account</a></li>
  <li>A source for your service(s)
    <ul class="list" style="margin-bottom=0px">
      <li>Pull your code from Git (with a <a href="https://docs.docker.com/reference/builder/">Dockerfile</a>)</li>
      <li>Provide an existing Docker image</li>
    </ul>   
  </li>  
  <li>Deployment credentials
    <ul class="list">
      <li>The API key for your cloud provider (<a href="/deployment/deploy-to-your-cloud">Deploy to your cloud</a>)</li>
      <li>An SSH key and IP address for your server (<a href="/deployment/deploy-to-your-own-server">Deploy to your own server</a>)</li>
    </ul> 
  </li>
</ul>

<h3 id="1">Step 1: Build your stack</h3>
Before you can deploy your applications to a server with Cloud 66, you must build a stack of the components your application needs to run. To build your first stack, complete the following steps.

<ol class="list">
<li>Sign in to Cloud 66.</li>
<li>On the Cloud 66 dashboard, click <i>Build a Docker stack</i>.</li>
</ol>

<h3 id="2">Step 2: Service configuration</h3>
Now provide a stack name, and the environment you would like to deploy in. Next up is configuring your Docker services - for example _web_, _api_, _worker_ and so on. You can add as many services to your stack as you need. These are the available fields:

<ol class="list">
<li>What's the service name?</li>
<li>How shall we build this service?</li>
    <ul class="list">
      <li><b>Pull code from Git:</b> Cloud 66 builds your Docker images for you using BuildGrid, which requires that you place a Dockerfile in your repository.</li>
      <li><b>Build from Docker image:</b> Specify your own Docker image repository for us to pull your image from.</li>
    </ul> 
<li>Is the service accessible from the Internet? If so, specify which port your container runs on.</li>  
<li>Which database(s) do you need?</li>  
</ol>

This page has _basic_ and _advanced_ configurations, designated by the tabs at the top of the form. Switching between the tabs will retain any previous information provided. The advanced tab allows you to input more detailed settings, which you can learn about in [Advanced Docker deployments](/beta/advanced-docker-deployments).

<h3 id="3">Step 3: Define deployment properties</h3>
Complete the following steps to define the properties that determine how to deploy your application.

<b>Prerequisites</b><br/>
If deploying to a cloud server, you must know the API key for your cloud provider. If deploying to your server, you must have (or generate) a SSH key for the server. For instructions on generating an SSH key, refer to [Setting up SSH keys](http://community.cloud66.com/articles/setting-up-ssh-keys).

<ol class="list">
  <li>In the <i>Where are you deploying to</i> dialog box, select the deployment target to use.</li>
  <li>Perform one of the following actions, depending on your deployment configuration:
    <ul class="list">
      <li>If deploying to a cloud, select the cloud provider, server region and server size.</li>
      <li>If deploying to a server, enter your username and IP address.</li>
    </ul>
  </li>   
  <li>In the <i>Deployment details</i> dialog box, select the database option to use.</li>
  <li>Click <i>Deploy</i>.</li>
</ol>

This page has also has _basic_ and _advanced_ configurations, designated by the tabs at the top of the form. Switching between the tabs will retain any previous information provided. The advanced tab allows you to input more detailed settings, which you can learn about in [Getting started with manifest files](/building-your-stack/getting-started-with-manifest-files).

<h3 id="4">Step 4: Review the deployment logs</h3>
After your stack builds successfully, you can view the log generated by the deployment.

<h3 id="5">What's next?</h3>
Your stack is up and running - you now have:

- Docker servers with automated deployment and lifecycle management
- Networking and DNS layer across your stack
- Database layer
- Load balancing layer
- All other Cloud 66 features, such as security, managed Nginx, team management and so on.

You can now start customizing by: 

<ul class="list">
<li><a href="/stack-add-ins/database-backups">Defining a backup</a></li>
<li><a href="/deployment/scaling">Scaling your servers</a></li>
<li><a href="/building-your-stack/stack-network-settings">Configuring security</a></li>
<li><a href="/stack-add-ins/add-in-implementation">Configuring an add-in</a></li>
</ul>