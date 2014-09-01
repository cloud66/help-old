---
layout: post
template: two-col
title:  "Backup management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: List and download your backups through the command line
search-tags: ['backups','toolbelt','commandline','database']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#list">List your backups</a>
	</li>
	        <li>
                <ul>
                <li><a href="#list_usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list_params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list_example">Example</a></li>
                </ul>
            </li>
	<li>
		<a href="#download">Download your backups</a>
	</li>
	        <li>
                <ul>
                <li><a href="#download_usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#download_params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#download_example">Example</a></li>
                </ul>
            </li>
</ul>


<h2 id="list">List your backups</h2>
This will list all the managed backups of a stack grouped by their database type and/or backup schedule.

<h3 id="list_usage">Usage</h3>
{% highlight bash %}
$ cx backups [-s <stack>] [-l] [<db type>]
{% endhighlight %}

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
            <td><i>s</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
            <td><i>db type</i> (optional)</td>
            <td>The type of DB you'd like to list backups for (eg. mysql)</td>
        </tr>
        <tr>
            <td><i>l</i> (optional)</td>
            <td>Returns the latest successful backup</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="list_example">Example</h3>
{% highlight bash %}
$ cx backups -s "My Awesome App" -e production
{% endhighlight %}

{% include toolbelt_footer.html %}

<h2 id="download">Download your backups</h2>

Allows you to download a database backup through the command line, concatenating separate files into one automatically if it consists of numerous files.

<h3 id="download_usage">Usage</h3>
{% highlight bash %}
$ cx download-backup [-d <download directory>] <backup id>
{% endhighlight %}

<h3 id="download_params">Parameters</h3>
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
            <td><i>d</i> (optional)</td>
            <td>~/cx_backups</td>
            <td>Directory to download backup to</td>
        </tr>
        <tr>
            <td><i>backup id</i></td>
            <td><i>&mdash;</i></td>
            <td>The ID of the backup you'd like to download</td>
        </tr>
    </tbody>
</table>

<h3 id="download_example">Example</h3>
{% highlight bash %}
$ cx download-backup 15
{% endhighlight %}
