---
layout: post
template: two-col
title:  "Getting started"
date:   2025-01-30 01:01:01
nav_sticky: true
categories: cloud-66-toolbelt
lead: Toolbelt is a command line tool to interact with Cloud 66
---

## Introduction

The Cloud 66 toolbelt makes it possible to interact with Cloud 66 from the comfort of your command line, and is available for Linux, Mac and Windows. To get started, simply download the <a href="https://app.cloud66.com/toolbelt" target="_blank">toolbelt executable</a>, unzip and copy it to a directory accessible in your PATH.

## Initialization
Before using the toolbelt, you need to link it to your Cloud 66 account. You can do this by issuing one of the available commands, which will prompt you to authorize it:

{% highlight bash %}
$ cx stacks
{% endhighlight %}

This returns a URL that you need to copy and paste into your browser.

Following this URL will redirect you to your account (you may need to login) and ask for your authorization to allow the toolbelt to view, edit, redeploy and administrate your stacks and servers.

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in the <b>~/.cloud66/cx.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>

Once authorized, you will be presented with a long `code` to paste into your toolbelt.

![Toolbelt Authorization](http://cdn.cloud66.com/images/help/toolbelt_authorization.png)

<div class="notice notice-warning">
	<h3>Note</h3>
    <p>To deauthorize the toolbelt, login to your Cloud 66 account and click on the <i>Revoke access</i> button under your <i>Account</i> page.</p>
</div>

## Quick start
- `cx help` lists available commands
- `cx info` shows information about your toolbelt
- `cx version` outputs your toolbelt version
- `cx stacks` lists available stacks
- `cx servers` lists available servers
- `cx open` opens your web browser to visit the app server in your stack

Refer to the menu on the right for more available commands and how to use them.

## Contributing

1. [Fork it](https://github.com/cloud66/c66toolbelt)
2. Create your feature branch `git checkout -b my-new-feature`
3. Commit your changes `git commit -am 'Add some feature'`
4. Push to the branch `git push origin my-new-feature`
5. Create new Pull Request