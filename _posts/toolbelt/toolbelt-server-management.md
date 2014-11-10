---
layout: post
template: two-col
title:  "Toolbelt server management"
date:   2020-01-20 01:01:01
categories: toolbelt
lead: Use the toolbelt to manage your servers
search-tags: ['']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Server management</a></li>
    <li><a href="#list">List server settings</a></li>
            <li>
                <ul>
                <li><a href="#usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example">Example</a></li>
                </ul>
            </li>
    <li><a href="#set">Set server settings</a></li>
            <li>
                <ul>
                <li><a href="#usage2">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params2">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example2">Example</a></li>
                </ul>
            </li>
</ul>

<h2 id="about">Server management</h2>
These commands allow you to list and set various settings on your servers.

<h2 id="list">List server settings</h2>
This command lists the possible settings for a specific server.

<h3 id="usage">Usage</h3>
{% highlight bash %}
$ cx server-settings [-s <stack>] <server name>|<server ip>|<server role>
{% endhighlight %}

<h3 id="params">Parameters</h3>
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
    </tbody>
</table>

<h3 id="example">Example</h3>
{% highlight bash %}
$ cx server-settings -s My_Awesome_App web
{% endhighlight %}

<h2 id="set">Set server settings</h2>
Use this command to set server settings from the command line.

<h3 id="usage2">Usage</h3>
{% highlight bash %}
$ cx server-set [-s <stack>] <server name>|<server ip>|<server role> <setting> <value>
{% endhighlight %}

<h3 id="params2">Parameters</h3>

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
            <td><i>setting</i></td>
            <td>&mdash;</td>
            <td>The setting you would like to change</td>
        </tr>
       <tr>
            <td><i>value</i></td>
            <td>&mdash;</td>
            <td>The value for the setting</td>
        </tr>        
    </tbody>
</table>

<h3 id="example2">Examples</h3>
{% highlight bash %}
$ cx server-set -s My_Awesome_App lion server.name tiger
{% endhighlight %}
