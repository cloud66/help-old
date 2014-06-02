---
layout: post
template: two-col
title:  "Server settings"
date:   2015-01-25 01:01:01
categories: cloud-66-toolbelt
lead: Change server settings from the command line
tags: ['configuration','toolbelt','commandline']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#available">Available settings</a>
	</li>
	<li>
		<a href="#parameters">Parameters</a>
	</li>
	<li>
		<a href="#usage">Usage</a>
	</li>
	<li>
		<a href="#examples">Examples</a>
	</li>
	        <li>
                <ul>
                <li><a href="#name">Server name</a></li>
                </ul>
            </li>
</ul>


You can change server settings from the command line - the `server-settings` command will list the possible settings for a specific stack:

{% highlight bash %}
$ cx server-settings [-s <stack>] <server name>|<server ip>|<server role> [settings]
{% endhighlight %}

<h3 id="available">Available settings</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>server.name</i></td>
            <td>The name of your server</td>
        </tr>
    </tbody>
</table>

<h3 id="parameters">Parameters</h3>

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
            <td><i>s</i></td>
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
            <td><i>settings</i></td>
            <td>&mdash;</td>
            <td>List of multiple settings as separate parameters</td>
        </tr>
    </tbody>
</table>

<h3 id="usage">Usage</h3>
{% highlight bash %}
$ cx server-set [-s <stack>] <server name>|<server ip>|<server role> <setting> <value>
{% endhighlight %}

<h3 id="examples">Examples</h3>

{% include toolbelt_footer.html %}

<h4 id="name">Server name</h4>
{% highlight bash %}
$ cx server-set -s My_Awesome_App lion server.name tiger
{% endhighlight %}
