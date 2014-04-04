---
layout: post
template: two-col
title:  "Maintenance mode"
so_title: "maintenance"
nav_sticky: false
date:   2093-01-25 16:27:22
categories: stack-features
lead: Serve a static maintenance page during your maintenance
---

During the times when you have to make manual changes to your application or push out a breaking change, you may not be able to guarantee that your application will be able to serve content or act correctly.

As a result of this, Cloud 66 has a site 'maintenance mode' option, which allows you to effectively put up a holding page (either a default Cloud 66 page, or your own) for the duration of your maintenance work.

You can still safely redeploy your stack while maintenance mode is enabled - the maintenance page will be served until you turn off maintenance mode on your stack.

## Activating and deactivating maintenance mode

You can turn on/off maintenance mode via the stack settings page. On your <i>Stack detail</i> page click on the drop-down cog on the top right of your stack and click the <i>Settings</i> option.
<b>Note:</b> this drop-down cog is only available while your stack is not currently building or deploying.

![Maintenance mode](http://cdn.cloud66.com/images/help/maintenance_mode.png)

## Using your own Maintenance Page

Cloud 66 will use your own maintenance page if you supply it - the page should exist in the following path to be used while maintenance mode is active.

<pre class="terminal">
[source&#95;repo]/.cloud66/maintenance.html
</pre>