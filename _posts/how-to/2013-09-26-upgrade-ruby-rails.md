---
layout: post
template: two-col
title:  "Upgrade Ruby/Rails on your stack"
date:   1560-09-26 15:33:13
categories: how-to
lead: How to upgrade Ruby or Rails on your stacks
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#philosophy">Our Philosophy</a>
	</li>
	<li>
		<a href="#updates">Security updates</a>
	        <li>
                <ul>
                <li><a href="#rails">Rails</a></li>
                </ul>
                <ul>
                <li><a href="#ruby">Ruby</a></li>
                </ul>
                <ul>
                <li><a href="#ubuntu">Ubuntu</a></li>
                </ul>
            </li>
	</li>
	<li>
		<a href="#manual">Manual updates</a>
	</li>
</ul>

<h2 id="philosophy">Our philosophy</h2>
Cloud 66 tries to make it easier to build [immutable infrastructure](http://chadfowler.com/blog/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredicatble. That's why we want to make building stacks from scratch as easy as possible and as quick as possible.

So in all cases of upgrade, our first recommendation is to build a new stack and redirect your traffic to a the new stack using our [DNS service](/stack-features/dns-service.html).

We are always working to make it easier to build a new stack, move your data and switch your traffic arround but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions:

<h2 id="updates">Security updates</h2>

In the event of a security vulnerability on any of the components we deploy on the servers, we try to be as quick as possible to roll out the recommended patches:

- Ruby
- Rails
- Ubuntu

<h4 id="rails">Rails</h4>

You can bump up the Rails version in your `Gemfile` and redeploy your stack. This will upgrade your Rails.

<h4 id="ruby">Ruby</h4>

Upgrading Ruby can be tricky. Our deployment process always deploys the latest release of Ruby on new servers, so all new stacks and scaled up servers will have the latest version of Ruby installed.

We roll out automatic upgrades in case of severe security issues, and this will be made clear in your [StackScore](/stack-features/stackscore.html). You will need to redeploy your stack with the `Apply Upgrades` option from Deploy with Options menu item, which will apply the security patches and then redeploy your app as usual.

<div class="notice notice-danger">
    <h3>Note</h3>
    <p>You will need to make sure the upgrades and patches applied work with your code before applying them. Upgrade and patch your development and test environments to ensure there are no issues.</p>
</div>

<h4 id="ubuntu">Ubuntu</h4>
You can also choose to apply upgrades to your stack during deployment:
![auto upgrades](http://cdn.cloud66.com.s3.amazonaws.com/images/help/auto_upgrades.png)

Choosing this option will perform operating system security package upgrades and set up [unattended upgrades](https://help.ubuntu.com/community/AutomaticSecurityUpdates) for your stack. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

<h2 id="manual">Manual updates</h2>

If you need to upgrade any part of your stack the best course of action is always to build a new one. However, if that is not desired or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your stack manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.

In case of Ruby or Rails, make sure that you upgrade your Ruby and Rails applications with [best practices](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html), and don't forget to choose the right Ruby version when creating the new stack.
