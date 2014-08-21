---
layout: post
template: two-col
title:  "Speed up your deployments"
so_title: "speed"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1670-09-24 10:51:22
categories: stack-definition
lead: Different ways of speeding up your deployments
search-tags: ['']
tags: ['Deployment']
tutorial: true
---

While Cloud 66 works hard to improve your deployment speeds on our side, we recommend the following enhancements to [Asset Pipeline Compilation](http://guides.rubyonrails.org/asset_pipeline.html) on your side to speed up your deployments.

### Below Rails 3.2
Unfortunately these measures are not available to Rails versions before 3.2.

### Rails 3.2 and above
If you are running Rails 3.2 or later, you can use [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3), which speeds up deployments by only compiling changed assets.

It is also good practice to use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3. This means that only the first server in your stack will compile the assets and the rest will simply refer to the CDN.

### Rails 4 and above
Rails 4 has Turbo Sprockets enabled by default, and again, we suggest that you use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3.