---
layout: post
template: one-col
title:  "Getting started with Node.js based stacks"
so_title: "Node"
nav: true
nav_prev: ""
nav_next: ""
date:   2016-09-30 16:27:22
categories: building-your-node-js-stack
lead: Cloud 66 makes it easy to deploy and maintain Node.js apps
search-tags: ['']
tags: ['']
---

<ul class="page-toc">
  <li>
    <a href="#needed">What you'll need</a>
  </li>
  <li>
    <a href="#1">Step 1: Build your stack</a>
  </li>
  <li>
    <a href="#2">Step 2: Access your Git repository</a>
  </li>
  <li>
    <a href="#3">Step 3: Define your application properties</a>
  </li>
  <li>
    <a href="#4">Step 4: Review your app configuration</a>
  </li>
  <li>
    <a href="#5">Step 5: Define your deployment properties</a>
  </li>
  <li>
    <a href="#6">Step 6: Review the deployment logs</a>
  </li>
  <li>
    <a href="#next">What's next?</a>
  </li>
</ul>

<h2 id="needed">What you’ll need</h2>

<ul class="list">
  <li><a href="https://app.cloud66.com/users/sign_up" target="_blank">Cloud 66 account</a></li>
  <li><a href="http://community.cloud66.com/articles/accessing-your-git-repository">Git repository with your application code</a>
    <ul class="list">
      <li>Public (<a href="http://community.cloud66.com/articles/accessing-your-git-repository#public">access a public repository</a>)</li>
      <li>Private (<a href="http://community.cloud66.com/articles/accessing-your-git-repository#private">access a private repository</a>)</li>
    </ul>
  </li>   
  <li><a href="/deployment/deploy-to-your-cloud">Deployment credentials</a>
    <ul class="list">
      <li>The API key for your cloud provider (<a href="/deployment/deploy-to-your-cloud">add a cloud platform</a>)</li>
      <li>An SSH key and IP address for your server (<a href="/deployment/deploy-to-your-own-server">add a SSH key</a>)</li>
    </ul>
  </li>
   <li><a href="/building-your-node-js-stack/specific-settings-for-your-node-js-application">Application specific settings</a>
  </li>
</ul>

<h2 id="1">Step 1. Build your stack</h2>
Before you can deploy your applications to a server with Cloud 66, you must build a stack of the web applications components your application needs to run. To build your first stack, complete the following steps.

<ol class="list">
<li>Sign in to Cloud 66.</li>
<li>On the Cloud 66 dashboard, click <i>Get started building a <b>Node</b> stack</i>.</li>
</ol>

<h2 id="2">Step 2. Access your Git repository</h2>
If you have a private Git repository, complete the following steps to generate the keys needed to access your repository. If you have a public Git repository, skip to Step 3.

<ol class="list">
<li>In the <i>Accessing Git</i> dialog box, copy the SSH key, select your Git provider from the list, and click the associated <i>Go</i> button.</li>
<li>Add the copied key to your Git provider.</li>
<li>Return to Cloud 66.</li>
</ol>

<h2 id="3">Step 3: Define your application properties</h2>
Complete the following steps to define the properties Cloud 66 uses to identify your application.

<b>Prerequisites</b><br/>
You must know the URL for your Git repository and the associated Git branch. For instructions on retrieving the Git repo URL and how to format it for this procedure, refer to <a href="http://community.cloud66.com/articles/accessing-your-git-repository#public">Access a public Git repository</a> or <a href="http://community.cloud66.com/articles/accessing-your-git-repository#private">Access a private Git repository</a>.

<ol class="list">
  <li>In the <i>About your app</i> dialog box, do the following actions:
    <ul class="list">
      <li>In the <i>Your Git Repo URL</i> box, enter the URL for your Git repository.</li>
      <li>In the <i>Git branch</i> box, type the branch name. This field defaults to the "master" branch.</li>
      <li>In the <i>Give your stack a name</i> box, type a name for your application stack.</li>
      <li>In the <i>Environment</i> list, select the environment to deploy.</li>
    </ul>
  </li>   
  <li>Click <i>Analyze</i>. Cloud 66 will analyze your application.</li>
</ol>

<h2 id="4">Step 4: Review your app configuration</h2>
Cloud 66 analyzes your application and returns the configuration details it detects. Complete the following procedure to verify the application configuration is correct.

<ol class="list">
<li>In the <i>About your app</i> dialog box, verify the returned information. If it is incorrect, make the necessary changes and click <i>Re-analyze my code</i>.</li>
</ol>

<h2 id="5">Step 5: Define deployment properties</h2>
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

<h2 id="6">Step 6: Review the deployment logs</h2>
After your application builds successfully, you can view the log generated by the deployment.

<h2 id="next">What's next?</h2>
Your stack is up and running, and you can start customizing by:

<ul class="list">
<li><a href="/stack-add-ins/database-backups">Define a backup</a></li>
<li><a href="/building-your-node-js-stack/scale-your-node-js-application">Scale your Node.js application</a></li>
<li><a href="/managing-your-stack/stack-network-settings">Configure security</a></li>
<li><a href="/stack-add-ins/add-in-implementation">Configure an add-in</a></li>
</ul>
