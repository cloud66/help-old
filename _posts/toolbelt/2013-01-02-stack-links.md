---
layout: post
template: two-col
title:  "Stack links"
date:   2013-01-29 01:01:01
categories: toolbelt
lead: Link stacks to folders for easier use of the toolbelt
---

## Linking stacks to folders
A stack is deployed based on your codebase, which resides in a folder in your development environment. You can run the Toolbelt from anywhere on the system, regardless of which folder you are in, but it's easier if you link a folder to a stack to make it easier to use. This means that all commands you run with the Toolbelt will run on a specific stack when you are in that folder.

Link your current folder to a stack UID with the `save` command.

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 save --stack 95b1645ed03e4d14a24c91456566ba63
{% endhighlight %}

Doing so will associate `~/work/stack_a` with Stack A, meaning that you can run commands in `~/work/stack_a` without the `--stack` parameter.

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 deploy
{% endhighlight %}

There are two ways to retrieve your stack UID:

1. Use the `c66 list` command
2. Under the <i>Stack Information</i> item of the stack menu in the web dashboard

### Example
Let's imagine the following:

* Stack A
	* UID: **95b1645ed03e4d14a24c91456566ba63**
	* Path: `~/work/stack_a`

* Stack B
	* UID: **b0dd672e13e14973bd6aa5469912d3d3**
	* Path: `~/work/stack_b`
	

You can deploy Stack A and Stack B from the same folder like this:

{% highlight bash %}
$ cd /somewhere/not/related/to/any/of/the/stacks
$ c66 deploy --stack 95b1645ed03e4d14a24c91456566ba63
$ c66 deploy --stack b0dd672e13e14973bd6aa5469912d3d3
{% endhighlight %}

However, it would be much easier if you could link Stack A to `~/work/stack_a` and Stack B to `~/work/stack_b` and deploy each stack from its own folder. You can link the folder to the stack:

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 save --stack 95b1645ed03e4d14a24c91456566ba63
$ cd ~/work/stack_b
$ c66 save --stack b0dd672e13e14973bd6aa5469912d3d3
{% endhighlight %}

Now you can simply do this going forward:

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 deploy # deploys Stack A
$ cd ~/work/stack_b
$ c66 deploy # deploys Stack B
{% endhighlight %}
