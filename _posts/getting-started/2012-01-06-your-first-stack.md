---
layout: post
template: two-col
nav_sticky: true
title:  "Building your first stack"
cloud66_text: "Try Cloud 66 for free"
nav: true
nav_prev: "/getting-started/what-is-a-stack.html"
nav_next: "/getting-started/pre-deployment.html"
date:   2037-12-24 10:51:22
categories: getting-started
lead: It's really easy to build your first stack
search-tags: ['how to start', 'first stack', 'first', 'beginner', 'how to', 'build a stack', 'access code']
tags: ['Getting started']
---

<h2>What you’ll need</h2>

<ul>
	<li><a href="https://app.cloud66.com/users/sign_up" target="_blank">Cloud 66 account</a></li>
	<li><a href="http://help.cloud66.com/how-to/access-your-code.html">Git repository with your application code</a></li>
	<li><a href="/getting-started/supported-clouds.html">Deployment credentials</a></li>
</ul>

## 1. Start a stack
Visit the <a href="https://app.cloud66.com/dashboard" target="_blank">Cloud 66 dashboard</a> and click <i>Get started building a stack</i>.

## 2. Accessing your code
If you have a <a href="/how-to/access-your-code.html">private Git repository</a>, please add the unique SSH key provided to your Git account. If you have a <a href="/how-to/access-your-code.html">public repository</a>, feel free to jump to the next step.

## 3. Tell us about your app
Now we need some information about your application:

<ol>
<li>In the <i>About your app</i> dialog box, do the following actions:</li>

<ul style="margin-bottom:0em">
<li>In the <i>Your Git Repo URL</i> box, enter the URL for your Git repository.</li>
<li>In the <i>Git branch</i> box, type the branch name. This field defaults to the "master" branch.</li>
<li>In the <i>Give your stack a name</i> box, type a name for your application stack.</li>
<li>In the <i>Environment</i> list, select the environment to deploy.</li>
</ul>

<li>Click <i>Analyze</i>. Cloud 66 will analyze your application.</li>
</ol>

## 4. Choose your setup
Once the analysis is complete, Cloud 66 will return the configuration details detected. Complete the following procedure to verify that the configuration is correct.

1. In the <i>About your app</i> dialog box, verify the returned information. If it is incorrect, make the necessary changes and click <i>Re-analyze my code</i>.
2. In the <i>App configuration</i> dialog box, verify the version information and select the <i>Framework info</i> option you want to use.

## 5. Define deployment properties
Complete the following steps to define the properties that determine how to deploy your application.

If deploying to a cloud server, you must know the API key for your cloud provider. If deploying to your server, you must have (or generate) a SSH key for the server. For instructions on generating an SSH key, refer to [Setting up SSH keys](/how-to/ssh-keys.html).

<ol>
<li>In the <i>Where are you deploying to</i> dialog box, select the deployment target to use.</li>
<li>Perform one of the following actions, depending on your deployment configuration:</li>
<ul style="margin-bottom:0em">
<li>If deploying to a cloud, select the cloud provider, server region and server size.</li>
<li>If deploying to a server, enter your username and IP address.</li>
</ul>

<li>In the <i>Deployment details</i> dialog box, select the database option to use.</li>
<li>Click <i>Deploy</i>.</li>
</ol>

## 6. Review the deployment logs
Cloud 66 now gets to work and fires up servers in your cloud (or provisions your own servers). We then configure your servers based on our analysis and deploy your application to them.

![Working](http://cdn.cloud66.com/images/help/first_stack_preparing.png)

## What's next?
Your stack is up and running, and you can start customizing it with [backups](/add-ins/backups.html), [scaling](/stack-features/horizontal-scaling.html), [security](/stack-features/stack-security.html) and more!