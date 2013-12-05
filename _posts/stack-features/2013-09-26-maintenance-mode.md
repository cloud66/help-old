---
layout: post
template: two-col
title:  "Maintenance Mode"
date:   2013-09-24 10:51:22
categories: stack-features
lead: Cloud 66 allows you to place your application in 'maintenance mode' whereby a static maintenance page is served for the duration of your maintenance.
---


## What is Site Maintenance?

The are times when you have to make manual changes to your application, or even push out a breaking change. During these times you may not be able to guarantee that your application will still work correctly, or even that it will be able to serve content at all.

To address this, Cloud 66 now has a site 'maintenance mode' option. It allows you to effectively put up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn of maintenance mode on your stack.

## Activating/Deactivating Maintenance Mode

You can turn on/off maintenance mode via the stack settings page. On your stack detail page click on the drop-down cog on the top right of your stack for the settings option.
Note: that this drop-down cog is only available while your stack is not currently building or deploying.

## Using your own Maintenance Page

Cloud 66 will use your own maintenance page if you supply it - the page should exist in the following path to be used while maintenance mode is active.

<pre class="terminal">
[source&#95;repo]/.cloud66/maintenance.html
</pre>