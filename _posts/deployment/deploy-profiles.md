---
layout: post
template: one-col
title:  "Deployment profiles"
date:   2100-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Managing your deployments
search-tags: ['deploy profile', 'profile', 'deploy']
tags: ['Managing your docker deployments']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About deployment profiles</a>
	</li>
	 <li>
		<a href="#options">Option for deployments</a>
		    <li>
            <ul> 
		        <li><a href="#build">Build / Publish services</a></li>
                <li><a href="#deployment-method">Deployment Method</a></li>
                <li><a href="#upgrades">Upgrades</a></li>
            </ul>
            </li>
	</li>
</ul>

<div class="notice notice-warning">
    <p><b>This only applies to docker stacks</b></p>
</div>

<h2 id="about">What are deployment profiles?</h2>
Deploy profiles enable you to deploy without having to set the settings each time you need to deploy. Cloud 66 has devided the deploy process in to two separate operations, Build and Publish. The build operation builds the code into a docker image, publish is when the built image is pushed to servers. With deploy profiles you can save different profiles to have different operations on different services, including the way they need to be deployed.

<h2 id="options">Option for deployments</h2>


<h3 id="build">Build / Publish Services</h3>

Under this section you can see all your services are listed. You can choose one or both of the following operations for each service.

- **Build**:     Builds the code into a docker image.
- **Publish**:   Push the built image to servers.

<h3 id="deployment-method">Deployment Method</h3>

- **Parallel Deployment**: Deploy all the services together.
- **Serial Deployment**:   Deploy services sequentially.

<h3 id="upgrades">Upgrades</h3>

- **Apply Docker upgrades**: Apply the Docker version and Weave version specified in the manifest file.
- **Apply Security Upgrades**: Install the latest Ubuntu security packages immediately (they are applied once a day by default).