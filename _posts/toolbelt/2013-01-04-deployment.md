---
layout: post
template: two-col
title:  "Deploy your stack"
date:   2013-01-27 01:01:01
categories: toolbelt
lead: Deploy your stacks from the command line
---

Trigger the deployment of a stack from the command line, just like clicking on <i>redeploy</i> in the UI.

## Usage
{% highlight bash %}
$ c66 deploy --stack STACK_UID
{% endhighlight %}

## Parameters
* stack - UID of the stack (alias: <i>s</i>)

## Example
{% highlight bash %}
$ c66 deploy --stack ba89f0edfa254d46ba9e15920e7f69be
{% endhighlight %}

{% highlight bash %}
$ c66 deploy -s ba89f0edfa254d46ba9e15920e7f69be
{% endhighlight %}

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

{% include toolbelt_footer.html %}