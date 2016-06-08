---
layout: post
template: one-col
title:  "Applying upgrades "
so_title: "upgrade"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1561-01-01 15:33:13
categories: managing-your-stack
lead: Aapplying upgrades and updates to your stack
search-tags: ['upgrade, update']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Cloud66 Update Packages Policy</a></li>
    <li><a href="#types">Upgrade package types</a></li>
        <ul style="margin-bottom:0em">
	        <li><a href="#updates">Security updates</a></li>
	        <li><a href="#ubuntu">Ubuntu</a></li>
	        <li><a href="#ruby">Ruby</a></li>
	        <li><a href="#rails">Rails</a></li>
            <li><a href="#docker">Docker and Weave</a></li>
            <li><a href="#packages">Update Packages</a></li>
        </ul>
    </li>
    <li>
        <a href="#manual">About manual upgrades</a>
    </li>
</ul>

<h2 id="about">Cloud66 Update Packages Policy</h2>

Cloud 66 aims to make it easier to build <a href="http://www.chadfowler.com/2013/06/23/immutable-deployments/">immutable infrastructure</a>. Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredicatble. That's why we want to make building stacks from scratch as easy and as quick as possible. So in all cases of upgrade, our first recommendation is to build a new stack and redirect your traffic to the new stack using our [Elastic Address](/network/failover-groups).

We are always working to make it easier to build a new stack, move your data and switch your traffic arround but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions.

Based on that our workflow is such that when a new server is created we automatically update all the packages to the latest. After the server is created we only auto-install packages that are marked as `security updates`. So Cloud66 doesn't typically update other packages because it doesn't want to risk breaking or damaging your already running app (which doesn't apply when the server is newly created).

In order to deal with the upgrades you have a few options:

<ol class="article-list">

<li>Leave the package updates, safest bet or if you're concerned about your app stability.</li>

<li>Update the packages yourself through sudo apt-get -y upgrade or dist-upgrade package (if there is a new feature you're after or just want to be running the latest)</li>

<li>Update the packages indirectly through scaling up a new server, and then dropping the old one (the new server will always get the latest packages installed on it)</li>
</ol>
<div class="notice">
<h3>Tip:</h3>  
 <p>Some package updates (and security ones) require server-reboot. So again by scaling up we restart your new servers automatically to ensure everything is neat and clean! Alternatively you can reboot your servers manually or via the toolbelt should you wish!</p></div>

<h2 id="types">Upgrade package types</h2>
<h3 id="updates">Security updates</h3>

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches for Ubuntu, Ruby and Rails.

<h3 id="ubuntu">Ubuntu</h3>
From the _Deploy_ menu, choose _Deploy with Options_. By selecting _Apply security upgrades_, Cloud 66 will perform operating system security package upgrades and set up [unattended upgrades](https://help.ubuntu.com/community/AutomaticSecurityUpdates) for your stack. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

Note that some security packages may require a server restart. We don't automatically restart your server, and it is at your discretion to do so. If the file `/var/run/reboot-required` exists, your server does in fact require a restart. To see which packages contributed to the requirement for a restart, please see `/var/run/reboot-required.pkgs`.

<h3 id="ruby">Ruby</h3>
There are generally three ways to upgrade Ruby on your stack, in decreasing magnitude of risk. Please ensure that the upgrades and patches work with your code before applying them. Upgrade and patch your development and test environments to ensure there are no issues. Backup your environment via your cloud provider where possible.

#### Scaling up
Arguably the best option to use when upgrading Ruby is to scale up a new server within the same stack, and simply drop the old one. You can specify your new Ruby version in a [manifest file](/building-your-stack/getting-started-with-manifest-files). Once you've pushed this change and deployed, scale up a new web server, which will use this version of Ruby. The previous server would remain on the old version of Ruby.

<div class="notice notice-danger">
    <p>Make sure you redeploy before you scale up, otherwise the new manifest will not be taken to account.</p>
</div>

There are a couple of small caveats to be aware of though - after you've done this process, you'll have servers in your stack on different Ruby versions. If you were to enforce a Ruby version in your Gemfile, this would mean that your application would stop working on either one of the servers (depending on which version you chose in your Gemfile).

You can scale-down your older web server to ensure all your web servers are the correct version, but your backend servers will still be the older version of Ruby. This may or may-not have any implication, depending on what you're doing with your servers. However, if you were to then run the "Ruby upgrade" job, this would sync all your servers to your new version of Ruby, so your backend servers would be upgraded at that point too.

Also, if you have background jobs running on your old server, ensure that you gracefully shut these down before switching everything to the new server (to avoid lost jobs).

#### In-place upgrades
Performing in-place Ruby upgrades on your stack carries some risk. Our deployment process always deploys the latest release of Ruby on new servers, so all new stacks and scaled up servers will have the latest version of Ruby installed.

We roll out automatic upgrades in case of security issues, and this will be made clear in your [StackScore](/building-your-stack/stack-definition#stackscore). You will need to redeploy your stack with the _Apply Ruby upgrades_ option from _Deploy with Options_ menu which will apply the security patches and then redeploy your application as usual.

If you have updated your base Ruby version in your Gemfile, we will attempt to upgrade your Ruby version to the latest patch version of your specified base version during the _Apply Upgrades_ step - note that there may be some server downtime during the Ruby base version upgrade operation.

When you _Deploy with options_ and select _Apply Ruby upgrades_, in addition to other upgrades, we will upgrade your installed LibYAML version if we detect your version is not current.

<div class="notice notice-danger">
    <h3>Warning!</h3>
    <p>If you are upgrading your Ruby base version then you should put your stack in maintenance mode first as Passenger-based stacks (and possibly others) will have some down-time during the upgrade.</p>
</div>

#### Building a new stack
Although the in-place Ruby base version upgrade path is provided for simplicity and ease, the <i>least risk strategy</i> remains to apply the version changes to a new stack in parallel, and switch over when appropriate (as per the immutable infrastructure guidelines).

<h3 id="rails">Rails</h3>
You can bump up the Rails version in your `Gemfile` and redeploy your stack. This will upgrade your Rails. Ensure that you upgrade your Ruby and Rails applications with [best practices](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html).

<h3 id="docker">Docker and Weave</h3>
<div class="notice">
    <h3>Tip!</h3>
    <p>It is best to keep your Docker and Weave versions up to date as they are released quite frequently with bug/security fixes </p>
</div>
1. Update your manifest file (Configuration Files -> Manifest.yml) and change the Docker and Weave version to the [latest ones](http://help.cloud66.com/introduction-to-cloud-66/technical-specifications#versions).

<p>2. Click on <b>DEPLOY</b> and choose <b>Deploy with options</b></p>
<p>3. Go to the <b>More options</b> tab and tick the <b>Apply Docker upgrades</b> check box.</p>

<div class="notice notice-danger">
    <h3>Warning!</h3>
    <p>Upgrading in-place involves downtime as the docker engine and local files are all upgraded. To have zero down-time you'd have to clone your stack and use Failovers to swithch to the new one.</p>
</div>



<h2 id="manual">About manual upgrades</h2>
If you need to upgrade any part of your stack the best course of action is always to build a new one. However, if that is not desired or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your stack manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.
