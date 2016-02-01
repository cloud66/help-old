---
layout: post
template: two-col
title:  "Toolbelt server management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your servers with the toolbelt
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
     <li><a href="#reboot">Reboot servers</a></li>
            <li>
                <ul>
                <li><a href="#usage3">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params3">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example3">Example</a></li>
                </ul>
            </li>       
</ul>

<h2 id="about">Server management</h2>
These commands allow you to list and set various settings on your servers.

<h2 id="list">List server settings</h2>
This command lists the possible settings for a specific server.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx servers settings list [-s &lt;stack&gt;] --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;
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
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx servers settings list -s My_Awesome_App --server web
</pre>

<h2 id="set">Set server settings</h2>
Use this command to set server settings from the command line.

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx servers settings set [-s &lt;stack&gt;] --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; &lt;setting&gt;=&lt;value&gt;
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

<pre class="prettyprint">
$ cx servers settings set -s "My Awesome App" --server lion
</pre>
<h2 id="reboot">Reboot servers</h2>
Use this command to reboot a specific server from the command line

<h3 id="usage3">Usage</h3>

<pre class="prettyprint">
$ cx servers reboot [-s &lt;stack&gt;] [-e stack environment] --server &lt;server name&gt; 
</pre>

<h3 id="params3">Parameters</h3>
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
            <td>Name of the server to reboot</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example3">Example</h3>

<pre class="prettyprint">
$ $ cx server reboot -s mystack --server lion -e production
</pre>

