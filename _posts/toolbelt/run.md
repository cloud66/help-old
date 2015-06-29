---
layout: post
template: two-col
title:  "Toolbelt run command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Run commands with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#run">Run command</a></li>
    <li>
        <ul>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#params">Parameters</a></li>            
            <li><a href="#examples">Examples</a></li>
        </ul>
    </li>   
</ul>

<h2 id="run">Run command</h2>

This command will execute a command directly on the remote server. It does this by first opening the firewall for SSH from your IP address temporaritly (20 minutes), downloads your SSH key if you don't have it, starts a SSH session, executes the command specified and returns its output.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx run -s &lt;stack&gt; --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; --service '&lt;command&gt;'
</pre>

<h3 id="params">Parameters</h3>

At least one of the optional server parameters are necessary in order to identify which server to run the command on.

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
            <td><i>service</i> (optional)</td>
            <td>&mdash;</td>
            <td>The service in which to run the command (Docker stacks only)</td>
        </tr>        
    </tbody>    
</table>

<h3 id="examples">Examples</h3>

<pre class="prettyprint">
$ cx run -s "My Awesome App" --server web1 'pwd'
</pre>

The service parameter applies to Docker stacks and allows you to enter a Docker container with your command (based on the latest image of that service). Some examples are:

<pre class="prettyprint">
$ cx run -s My_Awesome_App --server web1 --service my_api_service '/bin/bash'
</pre>
<pre class="prettyprint">
$ cx run -s My_Awesome_App --server web1 --service my_api_service 'bundle exec rails c'
</pre>