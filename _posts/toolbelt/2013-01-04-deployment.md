---
layout: post
template: two-col
title:  "Deployment"
date:   2013-01-27 01:01:01
categories: toolbelt
lead: Deploy your stacks from commandline
---

## Summary
Starts the deployment of a stack. This is the same as clicking on the Redeploy button in the UI.

## Usage
{% highlight bash %}
$ c66 deploy --stack STACK_UID
{% endhighlight %}

## Parameters
* stack - UID of the stack (alias: s)

## Example
{% highlight bash %}
$ c66 deploy --stack ba89f0edfa254d46ba9e15920e7f69be
{% endhighlight %}

{% highlight bash %}
$ c66 deploy -s ba89f0edfa254d46ba9e15920e7f69be
{% endhighlight %}

## Notes
You can find your stack UID under the Stack Information item of the stack menu in the web dashboard. It is a GUID that looks like this: `ba89f0edfa254d46ba9e15920e7f69be`

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

{% include toolbelt_footer.html %}