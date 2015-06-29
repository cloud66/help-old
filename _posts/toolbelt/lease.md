---
layout: post
template: two-col
title:  "Toolbelt lease management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Lease access to your servers from the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#temp">Temporary lease</a></li>
    <li>
        <ul>
            <li><a href="#usage2">Usage</a></li>
            <li><a href="#params2">Parameters</a></li>            
            <li><a href="#example2">Example</a></li>
        </ul>
    </li>    
</ul>

<h2 id="temp">Temporary lease</h2>
Opens a port on your server firewall to temporarily allow access from a specified IP address.

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx lease [-s &lt;stack&gt;] [-f &lt;from IP&gt;] [-t &lt;time to open&gt;] [-p &lt;port&gt;]
</pre>

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
            <td><i>f</i> (optional)</td>
            <td>Users IP address</td>
            <td>The source IP to allow connections from</td>
        </tr>
        <tr>
            <td><i>t</i> (optional)</td>
            <td>20 minutes</td>
            <td>Time to open for (max 240 minutes)</td>
        </tr>
        <tr>
            <td><i>p</i> (optional)</td>
            <td>22</td>
            <td>Port to open</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example2">Example</h3>

<pre class="prettyprint">
$ cx lease -s "My Awesome App" -f 123.123.123.123 -t 30 -e production
</pre>

For more fine grained access control, use the [Stack network settings](/managing-your-stack/stack-network-settings) page.
