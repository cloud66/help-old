---
layout: post
template: two-col
title:  "Speed up your deployments"
so_title: "speed"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
nav: true
date:   1670-09-24 10:51:22
categories: how-to
lead: Different ways of speeding up your deployments
---

While Cloud 66 works hard to improve your deployment speeds on our side, we recommend the following enhancements to [Asset Pipeline Compilation](http://guides.rubyonrails.org/asset_pipeline.html) on your side to speed up your deployments.

If you are running Rails 3.2 or later, you can use [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3), which speeds up deployments by only compiling changed assets. Rails 4 has this enabled by default.

You can also use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync the assets with a CDN like S3. This means that only the first server in your stack will compile the assets and the rest will simply refer to the CDN. This approach can improve your deployment times by around 50%.