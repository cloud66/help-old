---
layout: post
template: two-col
title:  "Stack environments"
so_title: "environments"
date:   2085-01-24 10:51:22
categories: stack-features
lead: You can deploy your stack in different environments
search-tags: []
tags: ['Deployment']
---

To reflect the different stages of development, Cloud 66 lets you deploy your stacks in different environments:

* **Development**<br/>
Use this when you're developing your application. It is always <b>free</b> to deploy servers in development on Cloud 66.
* **Production**<br/>
For live applications.
* **QA**<br/>
Used for quality assurance.
* **Staging**<br/>
Mirrors the production environment but is only used for testing.

Depending on your application configuration, it will act differently in each environment. For example, a Ruby on Rails application
has a directory in `config/environments` which contains settings for each environment.