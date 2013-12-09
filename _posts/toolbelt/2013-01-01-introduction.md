---
layout: post
template: two-col
title:  "Getting started"
date:   2013-01-30 01:01:01
categories: toolbelt
lead: Toolbelt is a command line tool to interact with Cloud 66
---

## Introduction

The Cloud 66 Toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line.
Cloud 66 Toolbelt is a [Ruby Gem](https://rubygems.org/gems/c66) and can be installed and used just like any other gem.

## Installing
You can install the Cloud 66 Toolbelt using [RubyGems](http://rubygems.org/):

{% highlight bash %}
$ gem install c66
{% endhighlight %}

## Getting started
Toolbelt is a command line tool that becomes available throughout your system.

Before using the Toolbelt, you are required to link it to your Cloud 66 account. You can do this by issuing the `init` command:

{% highlight bash %}
$ c66 init
{% endhighlight %}

This returns a URL that you need to copy and paste into your browser.

<pre class="terminal">
https://www.cloud66.com/oauth/authorize?response_type=code&amp;client_id=173...664c&amp;redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&amp;scope=public+redeploy+admin</pre>

This will redirect you to your account (you might need to login) and ask for your authorization to allow the Toolbelt to view, edit, redeploy and administrate your stacks and servers.

Once authorized, you will be presented with a long `code` which you are prompted for in the Toolbelt.

![Toolbelt Authorization](http://cdn.cloud66.com/images/help/toolbelt_authorization.png)

<div class="notice notice-warning">
	<h3>Note</h3>
    <p>To deauthorize the toolbelt, login to your Cloud 66 account and click on the <i>Revoke access</i> button under your <i>Account</i> page.</p>
</div>

Your Toolbelt is now authorized to access to your account and is ready for use.

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in the <b>~/.cloud66/toolbelt.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>
