---
layout: post
template: two-col
title:  "Toolbelt tunnel command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Opens an SSH tunnel between local and a remote server on given ports
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#run">Tunnel command</a></li>
    <li>
        <ul>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#params">Parameters</a></li>
            <li><a href="#examples">Examples</a></li>
        </ul>
    </li>
</ul>

<h2 id="run">Tunnel command</h2>

This command opens an SSH tunnel from your local machine to a remote server on the given ports. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it and opens an SSH tunnel.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx tunnel -s &lt;stack&gt; --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; --remote &lt;remote port&gt; --local &lt;local port&gt;
</pre>

<h3 id="params">Parameters</h3>

At least one of the optional server parameters are necessary in order to identify which server to run the command on.

Also, you need to specify at least the `remote` port. If `local` is missing, `remote + 1` will be used as `local`. For example, `--remote 3306` without `local` will use `3307` as `local`.

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
            <td><i>server</i></td>
            <td>&mdash;</td>
            <td>Specify a server</td>
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
            <td><i>remote</i></td>
            <td>&mdash;</td>
            <td>Remote port for the tunnel</td>
        </tr>
        <tr>
            <td><i>local</i> (optional)</td>
            <td>&mdash;</td>
            <td>Local port for the tunnel. If not specified, remote + 1 is used.</td>
        </tr>
    </tbody>
</table>

<h3 id="examples">Examples</h3>

<pre class="prettyprint">
$ cx tunnel -s "My Awesome App" --server mysql --remote 3306 --local 13306
</pre>
