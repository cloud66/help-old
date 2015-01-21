---
layout: post
template: one-col
title:  "Introduction to Cloud 66 Docker"
so_title: "Docker"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: beta
lead: Deploy Docker stacks through Cloud 66
search-tags: ['docker', '.cloud66/services.yml', 'docker deployment', 'deployment']
tags: ['Deployment', 'Docker']
---

<h2>Contents</h2>
<ul class="page-toc">
	  <li><a href="#intro">Introduction to Cloud 66 Docker</a></li>
    <li>
      <ul>
        <li><a href="#lifecycle">Container lifecycle management</a></li>
        <li><a href="#network">Networking layer</a></li>
        <li><a href="#discoverability">Discoverability</a></li>
        <li><a href="#buildgrid">BuildGrid</a></li>
        <li><a href="#registry">Registry</a></li>
      </ul>
    </li>    
    <li><a href="#building">Building your first Docker stack</a></li>
    <li>
      <ul>
        <li><a href="#what">What you'll need</a></li>
		   	<li><a href="#1">Step 1. Build your stack</a></li>
		   	<li><a href="#2">Step 2. Services configuration</a></li>
		   	<li><a href="#3">Step 3. Define deployment properties</a></li>
        <li><a href="#4">Step 4. Review the deployment logs</a></li>
        <li><a href="#5">What's next?</a></li>
      </ul>
    </li>
</ul>

<h2 id="intro">Introduction to Cloud 66 Docker</h2>
Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](#buildgrid) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack. Cloud 66 Docker includes the following:

<h3 id="lifecycle">Container lifecycle management</h3>
Rolling out your Docker images to your servers, scaling, load balancing, port forwarding, lifecycle management, graceful draining and shutdown of workers, deployment rollbacks.

<h3 id="network">Networking layer</h3>
An internal [Weave](https://github.com/zettio/weave) network that runs across all of your servers, allowing each server _and_ container to have an internal IP address. For example: 

{% highlight bash %}
Server 1 (25.0.0.1) has Container 1 (25.0.0.2)
Server 2 (25.0.0.3) has Container 1 (25.0.0.4) and Container 2 (25.0.0.5)
Server 3 (25.0.0.6) has Container 1 (25.0.0.7) and Container 2 (25.0.0.8)
{% endhighlight %}

Containers can communicate with each other using the private address (on any port), regardless of the physical server the other container resides on. In other words, containers can communicate as if they were on the same server. The networking layer transparently maps between the two.

<h3 id="discoverability">Discovery</h3>
A cluster of high availability servers for automatic registration and de-registration of containers, accessible to your servers. Docker is the perfect solution to build micro-services that run different parts of an application. Those services need to communicate with each other. 

By default, every container started on a server is registered with a central service discovery service hosted by Cloud 66. This services, called **Discovery**, is available to all Docker stacks at `https://discovery.cloud66.com` and is compatible with [etcd](https://github.com/coreos/etcd). You can use available `etcd` client libraries to connect to it. 

Unlike standard etcd, Discovery has only 1 endpoint (`discovery.cloud66.com`) and therefore there is no need for automatic "leader discovery" on the client side. Calls to Discovery are authenticated using stack API keys.

<h3 id="buildgrid">BuildGrid</h3>
Powerful cluster of high availability servers to continously build Docker images based on your source code and Dockerfile.

<h3 id="registry">Registry</h3>
Any images created with BuildGrid are made available through Registry.

Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 

- Deployed and managed databases (MySQL, PostgreSQL, MongoDB, Redis as well as non-database components like ElasticSearch and RabbitMQ)
- Database managed and verified backups and replication
- Nginx and load balancing
- Firewall management and brute force protection for web and SSH
- Team and organisations (ACL)
- Fast response 100% SLA DNS layer (ElasticAddress) for quick traffic switch overs
- Server vital sign metrics
- Intuitive UI
- API and command line

<h2 id="building">Building your first Docker stack</h2>
<h3 id="what">What you’ll need</h3>

<ul class="list">
  <li><a href="https://app.cloud66.com/users/sign_up" target="_blank">Cloud 66 account</a></li>
  <li>A source for your service(s)
    <ul class="list" style="margin-bottom=0px">
      <li>Pull your code from Git (with a <a href="https://docs.docker.com/reference/builder/">Dockerfile</a>)</li>
      <li>Provide an existing Docker image</li>
    </ul>   
  </li>  
  <li><a href="/deployment/deploy-to-your-cloud">Deployment credentials</a>
    <ul class="list">
      <li>The API key for your cloud provider (<a href="/deployment/deploy-to-your-cloud">add a cloud platform</a>)</li>
      <li>An SSH key and IP address for your server (<a href="/deployment/deploy-to-your-own-server">add a SSH key</a>)</li>
    </ul> 
  </li>
</ul>

<h3 id="1">Step 1: Build your stack</h3>
Before you can deploy your applications to a server with Cloud 66, you must build a stack of the web applications components your application needs to run. To build your first stack, complete the following steps.

<div class="notice notice">
  <h3>Note</h3>
    <p>Docker stacks are currently running in beta.</p>
</div>

<ol class="list">
<li>Sign in to Cloud 66.</li>
<li>On the Cloud 66 dashboard, click <i>Build a Docker stack</i>.</li>
</ol>

<h3 id="2">Step 2: Services configuration</h3>
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

This page has also has _basic_ and _advanced_ configurations, designated by the tabs at the top of the form. Switching between the tabs will retain any previous information provided. The advanced tab allows you to input more detailed settings, which you can learn about in [Advanced Docker deployments](/beta/advanced-docker-deployments).

<h3 id="4">Step 4: Review the deployment logs</h3>
After your stack builds successfully, you can view the log generated by the deployment.

<h3 id="5">What's next?</h3>
Your stack is up and running, and you can start customizing by: 

<ul class="list">
<li><a href="/stack-add-ins/database-backups">Define a backup</a></li>
<li><a href="/deployment/scaling">Scale your servers</a></li>
<li><a href="/building-your-stack/stack-network-settings">Configure security</a></li>
<li><a href="/stack-add-ins/add-in-implementation">Configure an add-in</a></li>
</ul>