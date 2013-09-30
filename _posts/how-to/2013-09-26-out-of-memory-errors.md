---
layout: post
title:  "Out of memory errors during deployment"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">It is possible for deployment errors to occur during deployment if your server does not have sufficient memory available.</p>

## The Problem
When you are deploying your stack (particulary in a non-development environment) asset pipeline compilation takes place during the deployment process.

If you server does not have sufficient memory available to perform the asset pipeline compilation you may receive one of the following errors:
- "Cannot allocate memory"
- "Killed"
- "Out of memory"

These are more likely on servers with low memory availability.
It is possible that you initial deployment succeeds, and subsequent deployments fail, and this is due to the fact that after your initial deployment you have additional memory usage of your web server.
You can also use a [manifest file](/help/manifest_files) to specify a value in MB for reserved_server_memory - this may help with passenger-based stacks by preventing Cloud 66 from allowing passenger to allocate additional processes.

<div class="notice">
    <h3>Note</h3>
    <p>Irregular vendor issues in memory allocation (like greedy neighbours on the same physical instance) could also cause this issue, though that very vendor/infrastructure specific.</p>
</div>

## Possible Resolutions
1. Compile the assets on your own box and disable asset pipeline compilation on the stack going forward.
2. Configure your code not to use asset pipeline precompilation and use live compilation (on-demand). Refer to this help page [section](/help/asset_pipeline_compilation#enablingdisabling_asset_pipeline_precompilation).
3. Resize your box to a bigger box either via a new stack, or [vertical scaling](/help/vertical_scaling) if available.
4. Manually reduce memory usage on your server before deployments (ie. manually stop your webserver)
5. Reduce memory usage on your server by limiting Passenger memory usage (using a [manifest file](/help/manifest_files) to specify a value for reserved_server_memory)