---
layout: post
template: one-col
title:  "Docker Getting Started (Building Images)"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: Guide to using Cloud 66 to build Docker images
search-tags: []
tags: ['']
---

<ol class="page-toc">
    <li>
        <a href="#overview">
            Overview &amp; Prerequisites
        </a>
    </li>
    <li>
        <a href="#building-your-images">
            Building Images
        </a>
    </li>
    <li>
        <a href="docker-getting-started-deployment">
            Setting up a Docker Deployment
        </a>
    </li>
</ol>

<h2 id="overview">
    Overview &amp; Prerequisites
</h2>

<p>
    The process of building a Docker stack is split into two distinct parts. First you <strong>build images</strong> for your services, then once you're ready you  <strong>setup a deployment</strong>.
</p>

<p>
    Your project can be composed of services that use pre-built images or source code you want to build into images. You can mix and match these as required.
<p>

<ul>
    <li>
        <p>
            <strong>Pre-built Docker Images</strong> &mdash; Can be hosted in an image repo like Dockerhub or in your own private repository.
        </p>
    </li>
    <li>
        <p>
            <strong>Build from Source</strong> &mdash; Your code should be hosted in a git repo and contain a <a target="_blank" href="https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images"><strong>Dockerfile</strong></a> located in the root directory.
        We provide basic Dockerfile templates for building common web frameworks that you can use to get started.
        </p>
    </li>
</ul>

<hr>

<h2 id="building-your-images">Building Images</h2>

<p>Lets create a new Docker project.</p>

<div class="grid">
    <div class="grid__item    one-half">
        <p class="caption">
            If you're new to Cloud 66 from the dashboard click<br> <em>Build a Docker Stack</em>.
        </p>
        <img alt="Build a new docker stack from an empty dashboard" src="/images/guides/docker_onboarding/build_a_docker_stack.png" width="300">
    </div><!--
 --><div class="grid__item    one-half">
         <p class="caption">
            If you have existing stacks from the sidebar<br> <em>New Stack &#9658; Docker (All Frameworks)</em>.
         </p>
        <img alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_new_stack.png" width="285">
    </div>
</div>


<h3>Adding Docker Services</h3>
<p>
    Give the project a name, then you can add services. You can add as many services as required by clicking the green <em>Add Another Service</em> link at the bottom of the page.
</p>


<img class="img-normal_" alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_add_services.png">

<h3>Service provider drop-down</h3>


<img style="margin:0;" alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_service_provider_dropdown.png">


<ul>
    <li>
        <p>
            <strong>I'm using a GitHub Repo</strong> &mdash;
            This is the easiest way to add services from GitHub repos. You will need to link your GitHub account with Cloud 66 before you take advantage of this.
        </p>
    </li>
    <li>
        <p>
            <strong>I'm using a manual Git Repo</strong> &mdash;
            Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can choose this if you don't want to link Cloud 66 to your GitHub account. You will need to <a href="https://help.cloud66.com/getting-started/git-repository">add and approve the Cloud 66 public key</a> if your repo is private. You'll be prompted to do this if required.
        </p>
    </li>
    <li>
        <p>
            <strong>It's a Docker Image</strong> &mdash;
        Use this to add pre-built images to a project. You can use a service like DockerHub or your own private repo. If you're using a private repository you'll be prompted to add the necessary login credentials.
        </p>
    </li>
</ul>


<p>
    Once you've finished adding services click Start Build.
</p>

<h3>Build Process (BuildGrid)</h3>

<p>During the build you can view the status of each individual image build and drill down into the logs if you need to troubleshoot any part of the process.</p>

<img class="img-animated_" src="/images/guides/docker_onboarding/docker_guide_building_images.png" width="">

<h3>Advanced Features</h3>
<p>All of the information that defines how services are built is accessible from the <em>services.yml</em> file.</p>

<p>There is an advanced mode that allows you to edit this configuration directly. This is useful for <a href="http://help.cloud66.com/building-your-stack/docker-service-configuration">accessing advanced features</a>. For example configuring <a href="http://help.cloud66.com/building-your-stack/multi-tenancy-for-stacks">multi-tenancy stacks</a>.</p>

<p class="u-textRight">
    <a href="docker-getting-started-deployment">
        <b>Next: Deploying your Docker Stack →</b>
    </a>
</p>