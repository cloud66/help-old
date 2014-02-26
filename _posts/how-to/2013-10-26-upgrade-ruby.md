---
layout: post
template: two-col
title:  "Upgrading Ruby on your stack"
so_title: "upgrade"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1561-01-01 15:33:13
categories: how-to
lead: How to upgrade Ruby on your stack
---

Cloud 66 tries to make it easier to build [immutable infrastructure](http://www.chadfowler.com/blog/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

<div class="notice notice-danger">
    <h3>Important!</h3>
    <p>Due to the aforementioned complexities, performing in-place Ruby upgrades on your stack carries some risk.</p>
</div>

Upgrading Ruby can be tricky. Our deployment process always deploys the latest release of Ruby on new servers, so all new stacks and scaled up servers will have the latest version of Ruby installed.

We roll out automatic upgrades in case of security issues, and this will be made clear in your [StackScore](/stack-features/stackscore.html). You will need to redeploy your stack with the `Apply Upgrades` option from Deploy with Options menu item which will apply the security patches and then redeploy your app as usual.

If you've updated your base Ruby version in your Gemfile we will attempt to upgrade your ruby version to the latest patch version of your specified base version during the 'Apply Upgrades' step - please note that there may be some server downtime during the ruby base version upgrade operation.

<div class="notice notice-danger">
    <h3>Warning!</h3>
    <p>If you are upgrading your Ruby base version then you should put your stack in maintenance mode first as Passenger-based stacks (and possibly others) will have some down-time during the upgrade.</p>
</div>
<p>Although the in-place Ruby base version upgrade path is provided for simplicity and ease, the <i>least risk strategy</i> remains to apply the version changes to a new stack in parallel, and switch over when appropriate (as per the immutable infrastructure guidelines).</p>
<div class="notice notice-danger">
    <h3>Important!</h3>
    <p>Please ensure that the upgrades and patches work with your code before applying them. Upgrade and patch your development and test environments to ensure there are no issues. Backup your environment via your Cloud provider where possible.</p>
</div>