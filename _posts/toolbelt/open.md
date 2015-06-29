---
layout: post
template: two-col
title:  "Toolbelt open command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Visit your app servers in the browser with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#open">Open your website</a></li>
    <li>
        <ul>
            <li><a href="#z-usage">Usage</a></li>
            <li><a href="#z-params">Parameters</a></li>            
            <li><a href="#z-example">Example</a></li>
        </ul>
    </li>   
</ul>


<h2 id="open">Open your website</h2>
<h3 id="z-usage">Usage</h3>

<pre class="prettyprint">
$ cx open [-s &lt;stack&gt;] [&lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;]
</pre>

<h3 id="z-params">Parameters</h3>
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
        <tr>
            <td><i>server name</i> (optional)</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>server ip</i> (optional)</td>
            <td>IP of the server to access</td>
        </tr>
        <tr>
            <td><i>server role</i> (optional)</td>
            <td>Role of the server to access (eg. web)</td>
        </tr>
    </tbody>
</table>

<h3 id="z-example">Example</h3>

<pre class="prettyprint">
$ cx open -s "My Awesome App"
</pre>