---
layout: post
template: two-col
title:  "Toolbelt file management"
date:   2033-01-25 01:01:01
categories: toolbelt
lead: Upload and download files to and from your servers
search-tags: ['']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">File management</a></li>
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

<h2 id="about">File management</h2>
Use these commands to upload and download files to and from your servers.

<h2 id="upload">Upload</h2>

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx upload [-s &lt;stack&gt;] &lt;server name&gt; [source file] [target directory]
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
$ cx upload -s My_Awesome_App web /tmp/file.txt /tmp/file.txt
</pre>

<h2 id="download">Download</h2>

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx download [-s &lt;stack&gt;] &lt;server name&gt; [source file] [target directory]
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
$ cx download -s My_Awesome_App web /tmp/file.txt /tmp/file.txt
</pre>
