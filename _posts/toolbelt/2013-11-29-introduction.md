---
layout: post
template: two-col
title:  "Getting started"
date:   2013-11-29 15:33:13
categories: toolbelt
lead: Toolbelt is a commandline tool to interact with Cloud 66.
---

## Introduction

Us developers love our commandline! Cloud 66 Toolbelt makes it possible to interact with Cloud 66 from the comfort of your commandline.
Cloud 66 Toolbelt is a [Ruby Gem](https://rubygems.org/gems/c66) and follows all the rules of installing and using of Ruby Gems.

## Installing
You can install the Cloud 66 Toolbelt using [RubyGems](http://rubygems.org/):

{% highlight bash %}
$ gem install c66
{% endhighlight %}

## Getting Started
Toolbelt is a command line tool that should be available throughout your system. You should be able to run the `c66` command from anywhere on your developer box.

Before starting to use the Toolbelt, you need to link it to your Cloud 66 account. That is done by the `init` command:

{% highlight bash %}
$ c66 init
{% endhighlight %}

This will return with a URL like that the one below which you can copy and paste into your browser. 

<pre class="terminal">
https://www.cloud66.com/oauth/authorize?response_type=code&amp;client_id=173...664c&amp;redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&amp;scope=public+redeploy+admin</pre>

This will redirect you to your account (you might need to login) and ask for your authorization to allow the Toolbelt to view, edit, redeply and admin your stacks and servers.

Once authorized, you will be presented with a long `code` which you can copy from the web and paste back into the Toolbelt.

![Toolbelt Authorization](http://cdn.cloud66.com/images/help/toolbelt_authorization.png)

<div class="notice notice-warning">
	<h3>Note</h3>
    <p>To deauthorize the toolbelt, login to your Cloud 66 account and click on the Revoke Access button under Account/Apps.</p>
</div>

Your Toolbelt is now authorized to access to your account and is ready to use.

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in <b>~/.cloud66/toolbelt.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>
