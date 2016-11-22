---
layout: post
template: one-col
title:  "Docker Getting Started"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: How to use Cloud 66 to deploy a Docker stack 
search-tags: []
tags: ['']
---

<ul class="page-toc">
    <li><a href="#welcome">Welcome to cloud 66 Docker deployment</a></li>
    <li><a href="#flow">Cloud 66 flow</a></li>

</ul>


<h2 id="welcome">Welcome to cloud 66 Docker deployment</h2>

After analyzing our customers' Docker stacks we created a new flow, designed to help our users build their Docker stacks in the simplest way we could think of! This is done by pointing you to the right direction at each step! We know that there is more we can do to make this journey easier, so please send us your feedback and enable us to improve this flow.


To start building your doker You only need to click on _BUILD A DOCKER STACK_ if it is your first stack, or you can go to your dashboard and click on _NEW STACK_ --> _Docker_. Or simply click on [this](http://stage.cloud66.com/ob/step_one).


<h2 id="flow">Cloud 66 flow</h2>

Cloud 66 has made this flow in to two separate part:

1. Build: Cloud 66 uses two configuration files - _service.yml_ and _manifest.yml_ - in order to deploy your Docker stack! This step is to generate those files and also if you are using a git repository to build your Docker images they will be built and saved.

2. Deploy:  This step is to deply your stack using images from build step. In this part after choosing your stack's environment you can always use the advanced settings (by cliking on _ edit the configuration files_) to ammend the configuration files or make use of advanced options.