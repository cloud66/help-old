---
layout: post
template: two-col
title:  "Deploy your stack"
date:   2035-01-27 01:01:01
categories: cloud-66-toolbelt
lead: Deploy your stacks from the command line
---

Trigger the deployment of a stack from the command line, just like clicking on <i>redeploy</i> in the UI.

## Usage
{% highlight bash %}
$ cx redeploy [-s <stack>]
{% endhighlight %}

## Parameters
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>s</i></td>
            <td>Name of your stack</td>
        </tr>
    </tbody>
</table>

## Example
{% highlight bash %}
$ cx redeploy -s "My Awesome App"
{% endhighlight %}

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

{% include toolbelt_footer.html %}