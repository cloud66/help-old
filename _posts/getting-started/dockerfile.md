---
layout: post
template: one-col
title:  "Dockerfile"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: Using Dockerfile with Cloud66
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#dockerfile">What is Dockerfile</a></li>
    <li><a href="#how_to">How cloud 66 uses the Dockerfile</a></li>
</ul>

<h2 id="dockerfile">What is Dockerfile</h2>

Docker can build images automatically by reading the instructions from a file called Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.

<h2 id="how_to">How cloud 66 uses the Dockerfile</h2>

For Cloud 66 to be able to create a docker image from your source code, you need to put a file called __Dockerfile__ (the name has to be exactly the same) in the root of your git repository!

