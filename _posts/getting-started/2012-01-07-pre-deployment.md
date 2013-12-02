---
layout: post
template: two-col
title:  "Pre-deployment options"
nav_sticky: true
nav: true
nav_prev: "/getting-started/your-first-stack.html"
nav_next: "/getting-started/post-deployment.html"
date:   2037-11-24 10:51:22
categories: getting-started
lead: An overview of your pre-deployment options
---

<div class="notice">
    <h3>Note</h3>
    <p>This is not an exhaustive list of our features.</p>
</div>

## Environment variables
[Environment variables](LINK) are dynamically-named values that are easy for you to reference in your code and/or scripts. For example,
you may wish to use environment variables to store your database username and password instead of hard-coding these values.

For your convenience, Cloud 66 will [automatically generate and update certain environment variables](LINK) such as server IP addresses.

## Deployment hooks
[Deployment hooks](LINK) help you automate your stack build and/or deployment by taking action at various points during the process. A simple example might be to copy a script to a location on your server and executing it after your stack has been successfully built.

## Manifest files
[Manifest files](LINK) allow you to be more explicit about your stack composition by specifying additional packages you wish to install, server sizes/regions and other options.

## Process files
[Process files](LINK) can be used to ensure that your background jobs always run and are monitored. Should you wish, you can also [scale processes](LINK) both on a single server or to a dedicated process server.

## Custom web servers
By default, stacks deployed by Cloud 66 run on Phusion Passenger behind nginx, but you can choose to [run a custom web server](LINK) should you wish.