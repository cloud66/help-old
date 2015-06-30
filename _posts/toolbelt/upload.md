---
layout: post
template: two-col
title:  "Toolbelt upload command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Upload files to your servers with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#upload">Upload</a></li>
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
</ul>

<h2 id="upload">Upload</h2>
Use this command to copy a file from your local computer to the remote server.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx upload [-s &lt;stack&gt;] [--server &lt;server name&gt;] [source file] [target directory]
</pre>

If you don't specify a target directory, the file will be uploaded to /tmp on your remote server.

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

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx upload -s "My Awesome App" --server web /tmp/file.txt /tmp/file.txt
</pre>
