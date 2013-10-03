---
layout: post
title:  "Upgrading software on your stack"
date:   2013-10-03 14:40:13
categories: how-to
---

<p class="lead">Cloud 66 makes it really easy deploy a new stack to avoid upgrade errors on existing stacks</p>

## Background

To avoid problems with your stacks, Cloud 66 does not recommend manually upgrading software such as Ruby on your stacks. This is because
old systems inevitably create problems. One-off hacks, cron jobs, patches and upgrades may be quick solutions to a problem,
but at some certain point the system becomes unpredictable.

You are of course free to manually upgrade software on your stacks, but we can't recommend it. If you decide to try it, make sure that you upgrade your Ruby and Rails applications with [best practises](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html).
Also, don't forget to choose the right Ruby version when creating the new stack.

## Upgrading

Creating new stacks through Cloud 66 is super easy, and we're working hard to make it even easier. Part of the rationale behind this
is to mitigate risks of upgrading in place. One benefit afforded by cloud computing is that users only pay for what they use -
so you're not confined to running only on one physical server. In other words, running a server and subsequently terminating it
to upgrade to another does not form a financial burden.

Cloud 66 features such as manifest files and deploy hooks are available not only to automate your initial deployments, but also subsequent deployments
and scaling. This frees you from performing a great deal of manual labour.

With the aforementioned in mind, we suggest that you deploy an additional stack in parallel with your desired upgrades instead of manually upgrading software on the old server.
You can take your time setting up the new environment, and when you're ready, simply migrate your data across and point your DNS to the new stack.

<div class="notice notice-standalone">
	<div class="notice-header">
		<b>Important</b>
	</div>
	<div class="notice-body">
		<p>
			We make Ruby versions available to new stacks as soon as possible after their official release.
		</p>
	</div>
</div>
