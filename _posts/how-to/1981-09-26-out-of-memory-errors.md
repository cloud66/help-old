---
layout: post
template: two-col
title:  "Out of memory errors during deployment"
so_title: "memory"
date:   1905-09-26 15:33:13
categories: how-to
lead: You may not have enough memory during deployment
---

## The Problem
When you are deploying your stack (particularly in a non-development environment) asset pipeline compilation takes place during the deployment process.

If you server does not have sufficient memory available to perform the asset pipeline compilation you may receive one of the following errors:

- "Cannot allocate memory"
- "Killed"
- "Out of memory"

These are more likely on servers with low memory availability.
It is possible that you initial deployment succeeds, and subsequent deployments fail, and this is due to the fact that after your initial deployment you have additional memory usage of your web server.
You can also use a [manifest file](/stack-features/manifest-files.html) to specify a value in MB for reserved&#95;server&#95;memory - this may help with passenger-based stacks by preventing Cloud 66 from allowing passenger to allocate additional processes.

<div class="notice">
    <h3>Note</h3>
    <p>Irregular vendor issues in memory allocation (like greedy neighbours on the same physical instance) could also cause this issue, though that very vendor/infrastructure specific.</p>
</div>

## Possible Resolutions
1. Compile the assets on your own box and disable asset pipeline compilation on the stack going forward.
2. Configure your code not to use asset pipeline pre-compilation and use live compilation (on-demand). [More information on Asset Pipeline compilation](/how-to/asset-pipeline.html).
3. Resize your box to a bigger box either via a new stack, or [vertical scaling](/stack-features/vertical-scaling.html) if available.
4. [Setup swap files on your server](https://www.digitalocean.com/community/articles/how-to-add-swap-on-ubuntu-12-04). This is automatically done for 512MB and 1GB DigitalOcean servers.
5. Manually reduce memory usage on your server before deployments (ie. manually stop your webserver).
6. Reduce memory usage on your server by limiting Passenger memory usage (using a [manifest file](/stack-features/manifest-files.html) to specify a value for reserved&#95;server&#95;memory).