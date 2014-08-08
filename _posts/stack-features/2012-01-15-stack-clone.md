---
layout: post
template: two-col
title:  "Stack cloning"
so_title: "monitoring"
date:   2085-05-24 10:51:22
categories: stack-features
lead: Create a clone of an existing stack
search-tags: []
tags: ['Deployment']
---

There are many reasons why you would want to create a clone of an existing stack - for example, you might want to deploy a production version of an existing development stack. Or you might want to [migrate from one region or data center to another](/how-to/migrate-across-dc.html).

Cloud 66 makes this process easy:
![Stack clone](http://cdn.cloud66.com/images/help/stack_clone.png)

You can choose a new environment to deploy to, as well as a new stack name:
![Stack clone modal](http://cdn.cloud66.com/images/help/stack_clone_modal.png)

Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.