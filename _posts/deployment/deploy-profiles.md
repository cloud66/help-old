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
<div class="notice">
  <p>This only applies to docker stacks</p>
</div>

Deploy profiles enable you to deploy easily without having to set the settings each time you need to deploy. Cloud 66 has devided the deploy process in to two separate operations, Build and Publish. The build operation builds the code into a docker image, publish is when the built image is pushed to servers. With deploy profiles you can save different profiles to have different operations on different services, and the way they need to be deployed.

You can find them in your `stack page` under `Build & Deployment`