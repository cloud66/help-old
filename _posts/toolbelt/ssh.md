---
layout: post
template: two-col
title:  "Toolbelt SSH to servers"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: SSH to your servers with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#ssh">SSHing to your server</a></li>
    <li>
        <ul>
            <li><a href="#usage1">Usage</a></li>
            <li><a href="#params">Parameters</a></li>            
            <li><a href="#example">Example</a></li>
        </ul>
    </li>   
</ul>

<h2 id="ssh">SSHing to your server</h2>
Allows direct SSH shell into your servers by opening the firewall temporarily for the source IP address, downloading the SSH key and starting a SSH session with one command. 

Your server SSH key is downloaded to `~/.ssh` and re-used in subsequent SSH connections via the toolbelt. You need to have shell to server rights over the stack to use this command.

<h3 id="usage1">Usage</h3>

<pre class="prettyprint">
$ cx ssh [-s &lt;stack&gt;] &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;
</pre>

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
       <tr>
            <td><i>e</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx ssh -s "My Awesome App" Lion -e production
</pre>