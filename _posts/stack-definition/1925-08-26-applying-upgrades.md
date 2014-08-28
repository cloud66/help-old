---
layout: post
template: one-col
title:  "Applying upgrades"
so_title: "upgrade"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1561-01-01 15:33:13
categories: stack-definition
lead: 
search-tags: ['']
tags: ['']
tutorial: true
---

## About applying upgrade packages
Cloud 66 tries to make it easier to build [immutable infrastructure](http://www.chadfowler.com/blog/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredicatble. That's why we want to make building stacks from scratch as easy and as quick as possible.

So in all cases of upgrade, our first recommendation is to build a new stack and redirect your traffic to the new stack using our [Elastic Address](/dns/elastic-address.html).

We are always working to make it easier to build a new stack, move your data and switch your traffic arround but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions.

## Upgrade package types
<h2 id="updates">Security updates</h2>

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches:

- Ubuntu
- Ruby
- Rails

<h4 id="ubuntu">Ubuntu</h4>
You can choose to apply upgrades to your stack during deployment:
![auto upgrades](http://cdn.cloud66.com/images/help/auto_upgrades.png)

Choosing this option will perform operating system security package upgrades and set up [unattended upgrades](https://help.ubuntu.com/community/AutomaticSecurityUpdates) for your stack. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

Note that some security packages may require a server restart. We don't automatically restart your server, and it is at your discretion to do so. If the file `/var/run/reboot-required` exists, your server does in fact require a restart. To see which packages contributed to the requirement for a restart, please see `/var/run/reboot-required.pkgs`.

<h4 id="ruby">Ruby</h4>

Refer to our documentation on [Ruby upgrades](/how-to/upgrade-ruby.html) for more information.

<h4 id="rails">Rails</h4>

You can bump up the Rails version in your `Gemfile` and redeploy your stack. This will upgrade your Rails.

<h2 id="manual">Manual updates</h2>

If you need to upgrade any part of your stack the best course of action is always to build a new one. However, if that is not desired or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your stack manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.

In case of Ruby or Rails, make sure that you upgrade your Ruby and Rails applications with [best practices](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html), and don't forget to choose the right Ruby version when creating the new stack.


## Apply upgrades during deployment
## Apply upgrades manually
## About upgrading Ruby
## Update Ruby on your stack

<h2 id="intro">Introduction</h2>
Cloud 66 tries to make it easier to build [immutable infrastructure](http://www.chadfowler.com/blog/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

<div class="notice notice-danger">
    <h3>Important!</h3>
    <p>Due to the aforementioned complexities, performing in-place Ruby upgrades on your stack carries some risk.</p>
</div>

Upgrading Ruby can be tricky. Our deployment process always deploys the latest release of Ruby on new servers, so all new stacks and scaled up servers will have the latest version of Ruby installed.

<h2 id="upgrade">Upgrade</h2>

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

<h4 id="libyaml">LibYAML</h4>
When you do a deployment with options and select "Upgrade Ruby”, in addition to other upgrades, we will upgrade your installed LibYAML version if we detect your version is not current.