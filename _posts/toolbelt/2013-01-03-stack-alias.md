---
layout: post
template: two-col
title:  "Stack alias"
date:   2013-01-28 01:01:01
categories: toolbelt
lead: Replace Stack UIDs with friendly names
---

## Stack aliases
Toolbelt stack commands require a stack UID, which guarantee a unique name for the stack but aren't very user friendly. You can [link your stacks to folders](/toolbelt/stack-links.html) to make your life easier or you can use stack aliases.

To use stack aliases, use the `save` command with the `--alias` parameter:

{% highlight bash %}
$ c66 save --stack b0dd672e13e14973bd6aa5469912d3d3 --alias stack_b
{% endhighlight %}

Now you can simply use `stack_b` anywhere instead of Stack B's UID (b0dd672e13e14973bd6aa5469912d3d3)

{% highlight bash %}
$ c66 deploy --stack stack_b
{% endhighlight %}

There are two ways to retrieve your stack UID:

1. Use the `c66 list` command
2. Under the <i>Stack Information</i> item of the stack menu in the web dashboard

<div class="notice">
	<h3>Advanced</h3>
	<p>Stack alias information is saved under the <b>~/.cloud66</b> folder in <i>json</i> files named with the alias.</p>
</div>

Please note that you cannot use the following words as an stack alias:

* params
* toolbelt
