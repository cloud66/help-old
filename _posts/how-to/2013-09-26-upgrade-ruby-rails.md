---
layout: post
template: two-col
title:  "Upgrade Ruby/Rails on your stack"
date:   2013-09-26 15:33:13
categories: how-to
lead: How to upgrade Ruby or Rails on your Stacks.
---


### Our Philosophy
Cloud 66 tries to make it easier to build [immutable infrastructure](http://chadfowler.com/blog/2013/06/23/immutable-deployments/). Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredicatble. That's why we want to make building stacks from scratch as easy as possible and as quick as possible.

So in all cases of upgrade, our first recommendation is to build a new stack and redirect your traffic to a the new stack using our [DNS service](/stack-features/dns-service.html).

We are always working to make it easier to build a new stack, move your data and switch your traffic arround but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions:

### Security Updates

In the event of a security vulnerability on any of the components we deploy on the servers, we try to be as quick as possible to roll out the recommended patches. These usually are related to one of the following components:


- Ruby
- Rails

Since these are the most publicly available parts of the stack and are mostly to be exploited for their vulnerability.

#### Rails

You can bump up the Rails version in your `Gemfile` and redeploy your stack. This will upgrade your Rails.

#### Ruby

Upgrading Ruby can be tricky. Our deployment process always deploys the latest release of Ruby on new servers. So all the new stacks and scaled up servers will have the latest version of Ruby installed.

In cases of most sever security issues we rollout automatic upgrades. You will see this in your [StackScore](/stack-features/stackscore.html). You will need to redeploy your stack with the `Apply Upgrades` option from Deploy with Options menu item. This will apply the security patches and then redeploy your app as usual.

<div class="notice notice-danger">
    <h3>Note</h3>
    <p>You will need to make sure the upgrades and patches applied work with your code before applying them. Upgrade and patch your development and test environments to ensure there are no issues.</p>
</div>

### Manual Updates

If you need to upgrade any part of your stack the best course of action is always to build a new one (see "Our Philosophy" above). However, if that is not desired or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your stack manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.

In case of Ruby or Rails, make sure that you upgrade your Ruby and Rails applications with [best practises](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html), and don't forget to choose the right Ruby version when creating the new stack.
