---
layout: post
template: two-col
title:  "Toolbelt logging"
date:   2025-01-25 01:01:01
categories: toolbelt
lead: Tail your logs for easy debugging
search-tags: ['']
tags: ['Toolbelt']
---

Use this command to tail your $STACK_PATH logs.

<h3 id="usage">Usage</h3>

{% highlight bash %}
$ cx tail [-s <stack>] <server name>|<server ip>|<server role> <log filename>
{% endhighlight %}

<h3 id="parameters">Parameters</h3>
At least one of the optional parameters are necessary in order to identify which server to run the command on.

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>stack</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>server name</i> (optional)</td>
            <td>&mdash;</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>server ip</i> (optional)</td>
            <td>&mdash;</td>
            <td>IP of the server to access</td>
        </tr>
        <tr>
            <td><i>server role</i> (optional)</td>
            <td>&mdash;</td>
            <td>Role of the server to access (eg. web)</td>
        </tr>
        <tr>
            <td><i>log filename</i></td>
            <td>&mdash;</td>
            <td>The logfile to tail (eg. nginx_error.log)</td>
        </tr>        
    </tbody>
</table>

<h3 id="examples">Example</h3>

{% highlight bash %}
$ cx tail -s My_Awesome_App web nginx_error.log
{% endhighlight %}