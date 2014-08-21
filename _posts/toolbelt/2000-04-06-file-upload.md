---
layout: post
template: two-col
title:  "File upload"
date:   2032-01-25 01:01:01
categories: toolbelt
lead: Upload a file to your server in one command
search-tags: ['upload', 'file','toolbelt','commandline']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#parameters">Parameters</a>
	</li>
	<li>
		<a href="#usage">Usage</a>
	</li>
	<li>
		<a href="#examples">Examples</a>
	</li>
</ul>


Use this command to upload a file from your local computer to your remote server.

{% highlight bash %}
$ cx upload [-s <stack>] <server name> [source file]
{% endhighlight %}

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
            <td><i>server name</i></td>
            <td>&mdash;</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>source file</i></td>
            <td>&mdash;</td>
            <td>The path to the file on your local computer</td>
        </tr>
       <tr>
            <td><i>target directory</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your remote server target path</td>
        </tr>
    </tbody>
</table>

<h3 id="usage">Usage</h3>
{% highlight bash %}
$ cx upload [-s <stack>] <server name> [source file] [target directory]
{% endhighlight %}

If you don't specify a target directory, the file will be uploaded to /tmp on your remote server.

<h3 id="examples">Examples</h3>

{% include toolbelt_footer.html %}
{% highlight bash %}
$ cx upload -s My_Awesome_App web /tmp/file.txt /tmp/file.txt
{% endhighlight %}
