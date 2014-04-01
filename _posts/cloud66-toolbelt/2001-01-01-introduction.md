---
layout: post
template: two-col
title:  "Getting started"
date:   2025-01-30 01:01:01
categories: cloud-66-toolbelt
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

## Initialization
Toolbelt is a command line tool that becomes available throughout your system.

Before using the Toolbelt, you are required to link it to your Cloud 66 account. You can do this by issuing the `init` command:

{% highlight bash %}
$ c66 init
{% endhighlight %}

This returns a URL that you need to copy and paste into your browser.

Following this URL will redirect you to your account (you may need to login) and ask for your authorization to allow the Toolbelt to view, edit, redeploy and administrate your stacks and servers.

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in the <b>~/.cloud66/toolbelt.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>

Once authorized, you will be presented with a long `code` which you are prompted for in the Toolbelt.

![Toolbelt Authorization](http://cdn.cloud66.com/images/help/toolbelt_authorization.png)

<div class="notice notice-warning">
	<h3>Note</h3>
    <p>To deauthorize the toolbelt, login to your Cloud 66 account and click on the <i>Revoke access</i> button under your <i>Account</i> page.</p>
</div>

## Help and information
You can use `c66 help` to list available commands, and `c66 info` to retrieve information about your toolbelt.

## Contributing

1. [Fork it](https://github.com/cloud66/c66toolbelt)
2. Create your feature branch `git checkout -b my-new-feature`
3. Commit your changes `git commit -am 'Add some feature'`
4. Push to the branch `git push origin my-new-feature`
5. Create new Pull Request


##    stacks
list stacks
##    open
opens the web browser to visit the app served by the stack
##    servers
lists all the servers of a stack.
##    version
show cx version
