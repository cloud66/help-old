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

<h2 id="list">Tail deployment logs of your stack from your terminal</h2>
If you use the Toolbelt for your deployments you probably want to follow the deployment of the stack in the commandline as well. 

<h3 id="list_usage">Usage</h3>

<pre class="prettyprint">
$ cx listen [-s &lt;stack&gt;]
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
$ cx listen -s "My Awesome App" -e production
</pre>

You can leave the command by pressing `Ctrl-C` at any time.