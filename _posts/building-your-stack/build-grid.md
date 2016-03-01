---
layout: post
template: one-col
title:  "Cloud 66 BuildGrid"
so_title: "buildgrid"
nav_sticky: false
date:   2091-01-25 16:27:22
categories: building-your-stack
lead: A hosted Docker image building service for your code
search-tags: []
tags: ['Deployment']
---
<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#what-is-buildgrid">What is BuildGrid?</a></li>
    <li><a href="#how-to-use-buildgrid">How to use BuildGrid?</a></li>
    <li><a href="#build-and-publish">Build and Publish</a></li>
</ul>

<h2 id="what-is-buildgrid">What is BuildGrid?</h2>
BuildGrid is a *Cloud 66 for Docker* feature. It is a hosted Docker image building service to build Docker images directly from your git code repository.

<h2 id="how-to-use-buildgrid">How to use BuildGrid?</h2>

To use BuildGrid include the Git repository URL and Git branch of your source code in your `service.yml`:

{% highlight yaml %}
services:
  my_service:
    git_url: git@github.com:pkallberg/node-js-app.git
    git_branch: master
{% endhighlight %}

This is all you need to trigger automatic building of `my_service` Docker image on BuildGrid. With this `service.yml` BuildGrid will clone your code repository before deployment and will look for a `Dockerfile` in your code. It will then run a `docker bulld` command to build the image and then pushes the built image into a private Docker repository that’s available to all Cloud 66 Stacks.

The built image is then pulled from this repository on all the applicable servers and managed.

Find more information on [BuildGrid configuration in service.yml](/building-your-stack/building-your-docker-service).


<h2 id="build-and-publish">Build and Publish</h2>

Cloud 66 for Docker Deployments consist of 2 steps: Build and Publish. Build step involves BuildGrid to build the required Docker images from your code. Publish is a step that rolls out the built images (or the ones pre-built by you) onto your servers.

You can choose to run each of these steps separately through the BuildGrid UI or command line.

Find more information about [Build and Publish configurations](/deployment/deployment-profiles).
