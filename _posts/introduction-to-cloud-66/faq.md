---
layout: post
# template: one-col
template: two-col
nav: true
nav_prev: "/getting-started/cloud66-status.html"
nav_next: ""
cloud66_text: "Try Cloud 66 for free"
nav_sticky: true
title:  "FAQ"
date:   2033-09-24 10:51:22
categories: introduction-to-cloud-66
lead: "Frequently Asked Questions"
search-tags: ['faq', 'frequently asked questions', 'what is cloud 66']
tags: ['Getting started']
---

<h2>Contents</h2>

<ul class="page-toc">
    <li>
        <a href="#f1">What is Cloud 66?</a>
    </li>
    <li>
        <a href="#f2">Where is it hosted?</a>
    </li>
    <li>
        <a href="#f3">How can I use Cloud 66?</a>
    </li>
    <li>
        <a href="#f4">What is a stack?</a>
    </li>
    <li>
        <a href="#f5">Can I use Cloud 66 with my own servers?</a>
    </li>
    <li>
        <a href="#f6">Why do you need my server SSH key?</a>
    </li>
    <li>
        <a href="#f7">Are their any requirements for the user on my servers?</a>
    </li>
    <li>
        <a href="#f8">Can I use Cloud 66 to provision and deploy multiple apps on a single server?</a>
    </li>
    <li>
        <a href="#f9">How can I change my Git repository ?</a>
    </li>
    <li>
        <a href="#f10">Which Clouds are supported?</a>
    </li>
    <li>
        <a href="#f11">Which distros/versions of Linux are supported?</a>
    </li>
    <li>
        <a href="#f12">How much does it cost?</a>
    </li>
    <li>
        <a href="#f14">Who pays for the physical servers?</a>
    </li>
</ul>



<h2 id="f1">What is Cloud 66?</h2>
Cloud 66 provides container management as a service - it builds the servers needed to run your full stack, deploys your application to your servers and manages them for you. You can use it to deploy your app in your cloud or your own servers.

<hr>

<h2 id="f2">Where is it hosted?</h2>
Cloud 66 is hosted in the cloud and is available as a service. You don't need to install, deploy or configure anything on your servers to use it.

<hr>

<h2 id="f3">How can I use Cloud 66?</h2>

[Sign up](http://app.cloud66.com/users/sign_up) for an account and start by building your first stack. Specify a Git repository that contains a Dockerfile, or provide your own Docker image(s) to base your stack on. A few seconds later you can configure your app deployment and point your stack to the servers you would like to run your app on.

<hr>

<h2 id="f4">What is a stack?</h2>
A Cloud 66 stack is an application environment. Your stack could consist of one or many individual servers, all working together to serve a particular environment, for example production. Cloud 66 supports end-to-end Docker deployments with various database backends.

<hr>

<h2 id="f5">Can I use Cloud 66 with my own servers?</h2>
Yes! Cloud 66 configures and deploys your code to your servers in the cloud or your own dedicated server.

<hr>

<h2 id="f6">Why do you need my server SSH key?</h2>
Cloud 66 uses remote SSH keys to set up an SSH tunnel to your server and execute remote bash scripts. For additional security we only use remote SSH keys to connect to your server, never username and password access.

<hr>

<h2 id="f7">Are their any requirements for the user on my servers?</h2>
Yes. As Cloud 66 will be provisioning services on your servers from scratch, the server must meet a number of requirements outlined in the [Registered servers](/deployment/registered-servers) documentation.

<hr>

<h2 id="f8">Can I deploy multiple apps on a single server?</h2>
Yes - you can have any number of Docker services running on a single server at any point in time.

<hr>

<h2 id="f9">How can I change my Git repository?</h2>
You can change your Git repository through the user interface or by using the Cloud 66 Toolbelt, <strong>Stack settings</strong> section.

<hr>

<h2 id="f10">Which Clouds are supported?</h2>
Currently we support Amazon Web Services, Digital Ocean, Google Compute Engine, Linode, Microsoft Azure, Rackspace, and CloudA clouds.

<hr>

<h2 id="f11">Which distributions of Linux are supported?</h2>
We currently only support Ubuntu - the officially supported version is 16.04.

<hr>

<h2 id="f12">How much does it cost?</h2>
Please see our [pricing page](http://www.cloud66.com/pricing) for more information.

<hr>

<h2 id="f14">Who pays for the physical servers?</h2>
You do. Cloud 66 helps you with configuring and deploying your app to the servers. It can take care of your load balancing, monitoring, backups and so on.
