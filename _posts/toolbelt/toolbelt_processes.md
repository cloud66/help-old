---
layout: post
template: two-col
title:  "Toolbelt Process Management"
date:   2016-02-1 01:01:01
categories: toolbelt
lead: Manage Your Processes With The Toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#process-list">Listing processes</a></li>
    <li><a href="#process-scale">Scaling processes</a></li>
</ul>

<h2 id="process-list">Listing processs</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx processes list [-s &lt;stack&gt;] [--server &lt;server name&gt;]
</pre>

List all the processes running on a stack or a server. Optionally provide the server to list only the processes running on that server.

<h3>Parameters</h3>
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
        <td>Name of the target server</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx processes list -s My_Awesome_Stack
$ cx processes list -s My_Awesome_Stack --server my_selected_server
</pre>

<h2 id="process-scale">Scaling processes</h2>
To scale processes up or down on a stack or on a specific server.
<h3>Usage</h3>
<pre class="prettyprint">
$ cx processes scale [-s &lt;stack&gt;] [--server &lt;server name&gt;] [--name &lt;process name&gt;] &lt;count&gt;
</pre>

Scales up/down &lt;count&gt; processes. If you specify [+X] or [-X] for the count, then that number of processes will be added/removed. Specifying a number without [ ] will act as an absolute value meaning that the resulting number of processes will be that number (it might scale up or down). Optionally provide the server to act only on that server.

<h3>Parameters</h3>
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
        <td><i>process name</i></td>
        <td>&mdash;</td>
        <td>Name of the target process</td>
    </tr>
    <tr>
        <td><i>server name</i> (optional)</td>
        <td>&mdash;</td>
        <td>Name of the target server</td>
    </tr>
    <tr>
        <td><i>count</i></td>
        <td>&mdash;</td>
        <td>Desired relative count or absolute count (i.e. [+2],[-3] or 5)</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx processes scale -s mystack --server backend1 --name worker [+5]
$ cx processes scale -s mystack --server backend2 --name worker [-5]
$ cx processes scale -s mystack --server backend3 --name worker 15
$ cx processes scale -s mystack --name worker 2
</pre>
