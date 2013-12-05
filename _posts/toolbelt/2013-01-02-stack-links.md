---
layout: post
template: two-col
title:  "Stack links"
date:   2013-01-29 01:01:01
categories: toolbelt
lead: Link Stacks to folders for easier use of the toolbelt
---

## Linking Stacks to Folders
Stacks are deployed from codebase in a folder. You can run the toolbelt from anywhere on the system regardless of which folder you are in, but to make it easier to use the toolbelt, you can link a folder to a stack. This means all the stack commands of the toolbelt will run on the linked stack when you are in that folder.

You can link the current folder to a stack UID with the `save` command. 

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 save --stack 95b1645ed03e4d14a24c91456566ba63
{% endhighlight %}

Once you've done that, the `~/work/stack_a` is associated with Stack A going forward. Now you can simply change to `~/work/stack_a` folder and just run the deploy command without the `--stack` parameter.

{% highlight bash %}
$ cd ~/work/stack_a
$ c66 deploy
{% endhighlight %}

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

However, it would be much easier if you could link Stack A to `~/work/stack_a` and Stack B to `~/work/stack_b` and deploy each stack from it's own folder. You can link the folder to the stack like this:

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
