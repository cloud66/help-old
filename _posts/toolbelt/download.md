---
layout: post
template: two-col
title:  "Toolbelt download command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Download files from your servers with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#download">Download</a></li>
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

<h2 id="download">Download</h2>
Use this command to download a file from the remote server to your local computer.

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx download [-s &lt;stack&gt;] [--server &lt;server name&gt;] [source file] [target directory]
</pre>

If you don't specify a target directory, the file will be downloaded to your current local directory.

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
            <td><i>server name</i></td>
            <td>&mdash;</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>source file</i></td>
            <td>&mdash;</td>
            <td>The path to the file on your server</td>
        </tr>
       <tr>
            <td><i>target directory</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your local target path</td>
        </tr>
    </tbody>
</table>

<h3 id="example2">Example</h3>

<pre class="prettyprint">
$ cx download -s "My Awesome App" --server web /tmp/file.txt /tmp/file.txt
</pre>