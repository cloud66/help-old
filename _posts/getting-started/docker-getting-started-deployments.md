---
layout: post
template: one-col
title:  "Docker Getting Started (Deployment)"
date:   2046-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: Guide to using Cloud 66 to deploy a Docker Stack
search-tags: []
tags: ['']
---


<h2 id="setting-up-a-docker-deployment">
    Setting up a Docker Deployment
</h2>

<p>
    Once all of the services have been successfully built you'll see the option to Setup a new deployment. You can deploy your app to any of your favorite cloud providers or to your own <a href="http://help.cloud66.com/deployment/registered-servers">registered servers</a>.
</p>

<div style="background: #fff9ea; color: #000; padding: 14px; border: 1px solid #E5D6B0; border-radius: 3px; margin: 2em 0;">
    <p style="line-height: 1; font-size:13px; margin: 0;">
        <b>Ready to deploy?</b> <span style="color:#0088cc;text-decoration:underline">Setup a new deployment</span> to a public cloud provider or your own registered server.
    </p>
</div>

<div class="grid">
    <div class="grid__item    one-half">
        <div style="margin-top: 4em;">
            <h3>Deployment Setup</h3>
            <p>The first step in the deployment process is to Choose an <a title="Learn more about environments" href="https://help.cloud66.com/getting-started/stack-environments">environment</a>:</p>
            <ul>
                <li>Development</li>
                <li>QA</li>
                <li>Staging</li>
                <li>Production</li>
            </ul>
        </div>
    </div><!--
 --><div class="grid__item    one-half">
        <img alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_start_deploy_modal.png" width="">
    </div>
</div>

<h2 id="configuring-services">
    Configuring Services
</h2>

<p>In the example below we have a single Rails service. In this case it's been pulled from an image. The previous section of this guide explains how to <a href="docker-getting-started-building-your-images#building-images">build images for your services</a>.</p>

<p>The Rails service is a web application so we need to configure it to handle web traffic.</p>

<div>
    <img alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_services.png" width="">
</div>


<h3 id="container-network-configuration">
    Container Network Configuration
</h3>

<p>The service will run inside a container, we need to configure it to respond to HTTP traffic. A standard web server listens on port 80 for HTTP traffic and 443 for HTTPS traffic.</p>

<p>A Rails app listens to port 3000 so we should map the container port 3000 to the public Internet ports 80 and 443.

<div style="margin: 3em 0">
    <div style="overflow: hidden; border: 1px solid #C9C9C9; border-radius: 3px; width: 558px; height: 380px;">
        <img class="img-animated" style="position:relative; top:-30px" alt="Configuring docker container and public ports" src="/images/guides/docker_onboarding/container_ports_animated.gif" width="">
    </div>
</div>


<p>Containers can also serve non HTTP traffic. TCP and UDP protocols are also supported. <a href="http://help.cloud66.com/building-your-stack/container-port-mapping">Learn more about Container Port Mapping</a></p>

<h3 id="adding-data-sources">
    Adding Data Sources
</h3>

<p>The Rails app also needs a database, lets deploy this to a separate MySQL server. First we add another server to the stack and then we should select MySQL as a Data Source</p>

<div class="grid">
    <div class="grid__item    one-half">
        <img  alt="Add another server" src="/images/guides/docker_onboarding/docker_guide_add_server_animated.gif" width="">
    </div><!--
 --><div class="grid__item    one-half">
        <p class="caption" style="margin-top: 6em">
            In this example we created a separate server for the database. If you have a low traffic site it's fine for your database to share with the Docker server.
        </p>
    </div>
</div>

<p style="margin-bottom: 0">
    Lets add the MySQL Data Source, you can add as many Data Sources as your app requires.
</p>

<img style="border: 1px solid #C9C9C9; border-radius: 3px;" alt="Adding a MySQL datasource to a stck" src="/images/guides/docker_onboarding/docker_guide_add_datasource.png" width="">

<p>Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.</p>


<h2 id="configuring-servers">
    Configuring Servers
</h2>

<p>We need to choose a cloud provider for the deployment. For this example we'll use DigitalOcean and deploy the stack to the London region.</p>

<div class="grid">
    <div class="grid__item    one-half">
        <img style="margin-top: 50px;" src="/images/guides/docker_onboarding/docker_guide_target_cloud.png">
    </div><!--
 --><div class="grid__item    one-half">
        <img  style="border: 1px solid #C9C9C9; border-radius: 3px;" alt="Add another server" src="/images/guides/docker_onboarding/docker_guide_server_modal.png" width="">
    </div>
</div>

<h2 id="configuring-servers">
    Deployment
</h2>

<p>Now everything is ready to go, just hit the deploy button.</p>

<div>
    <img class="img-animated" src="/images/guides/docker_onboarding/docker_guide_deploying.gif" width="">
</div>
