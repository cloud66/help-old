---
layout: post
template: two-col
title:  "Toolbelt command"
date:   2038-01-25 01:01:01
categories: toolbelt
lead: Execute a command directly on your server
search-tags: ['']
tags: ['Toolbelt']
---

This command will execute a command directly on the remote server. It does this by first opening the firewall for SSH from your IP address temporaritly (20 minutes), downloads your SSH key if you don't have it, starts a SSH session, executes the command specified and returns its output.

<pre class="prettyprint">
$ cx run -s &lt;stack&gt; --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; --service '&lt;command&gt;'
</pre>

<h3 id="parameters">Parameters</h3>

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

<h3 id="examples">Example</h3>

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

