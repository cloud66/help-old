---
layout: post
template: two-col
title:  "Toolbelt listen command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Follow the deployment logs of your stacks in terminal
search-tags: ['tail','deployment','logs']
tags: ['Toolbelt']
---

If you use the toolbelt for your deployments you probably want to follow the deployment of the stack in the command line as well. 

<h3 id="list_usage">Usage</h3>

Listen uses `nsq` to handle its realtime messaging, so you'll need to install it before using the command. 

- On OS X, use brew to install it with `brew install nsq`. 
- On Ubuntu, you can [download and unzip the tarball](https://s3.amazonaws.com/bitly-downloads/nsq/nsq-0.3.0.linux-amd64.go1.3.3.tar.gz). See their [documentation](http://nsq.io/deployment/installing.html) for more information.

<pre class="prettyprint">
$ cx stacks listen [-s &lt;stack&gt;]
</pre>

<h3 id="list_params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>stack</i></td>
            <td>Name of your stack</td>
        </tr>
    </tbody>
</table>

<h3 id="list_example">Example</h3>

<pre class="prettyprint">
$ cx stacks listen -s "My Awesome App" -e production
</pre>

You can leave the command by pressing `Ctrl-C` at any time.