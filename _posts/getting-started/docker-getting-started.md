---
layout: post
template: one-col
title:  "Docker Getting Started Guide"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: Guide to using Cloud 66 to deploy a Docker Stack
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
        <a href="#building-images">
            Building your Images
        </a>
    </li>
    <li>
        <a href="#building-infrastructure">
            Deploying your Stack
        </a>
    </li>
</ol>

<h2 id="overfview">
    Overview &amp; Prerequisites
</h2>

<p>
    The process of building a docker stack is split into two distinct parts. First you <strong>build your images</strong> and then once your ready you <strong>setup your deployment</strong> and deploy your stack to your cloud provider of choice or your own registered server.
</p>


<p>
    Your project can be composed of services that use pre-built images or source code you'd like to build into images. You can mix and match these as required.
<p>

<ul>
    <li>
        <p>
            <strong>Pre-built Docker Images</strong> &mdash; These can be hosted on Dockerhub, Queue.io etc or in your own private image repository.
        </p>
    </li>
    <li>
        <p>
            <strong>Build from Source</strong> &mdash; Your code should be hosted in a git repo and contain a <strong>Dockerfile</strong> located in the root directory.
        We provide basic templates for building common web frameworks that you can copy and then commit to your source to help get you started.
        </p>
    </li>
</ul>

<hr>

<h2>Building your Images</h2>

<p>Lets get started with a new project.</p>

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




<h3>Adding your Docker Services</h3>
<p>
    First <strong>give your project a name</strong>, then you can start adding your services. You can add as many services as needed by clicking the green <em>Add Another Service</em> link at the bottom of the page.
</p>


<img class="image-full-width" alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_add_services.png">

<h3>Service provider drop-down</h3>

<img class="image-full-width" alt="Build a new docker stack from the dashboard" src="/images/guides/docker_onboarding/docker_guide_service_provider_dropdown.png">


<ul>
    <li>
        <p>
            <strong>I'm using a GitHub Repo</strong> &mdash;
            This is the easiest way to select services from your GitHub repos. However you'll need to link your GitHub account with Cloud 66 first.
        </p>
    </li>
    <li>
        <p>
            <strong>I'm using a manual Git Repo</strong> &mdash;
            Use this option if you have your own private git repo or you're using another git provider such as BitBucket etc. You can also choose this option if you don't want to link Cloud 66 to your GitHub account.
        </p>
    </li>
    <li>
        <p>
            <strong>It's a Docker Image</strong> &mdash;
        Use this to add pre-built images to your project. You can use DockerHub, Queue.io etc or add your own private image repos if you need them.
        </p>
    </li>
</ul>

<p>
    Once you've added the services you need hit <strong>Start Build</strong> to begin the process of building your images.
</p>