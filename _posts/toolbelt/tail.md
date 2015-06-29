---
layout: post
template: two-col
title:  "Toolbelt tail command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Tail your logs with the toolbelt
---

This will run a Linux tail command on the specified server and given logfile. Logs are read from your stacks log folder `$STACK_PATH/log` and should be the full logfile name including the extension.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx tail [-s &lt;stack&gt;] &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; &lt;log filename&gt;
</pre>

<h3 id="parameters">Parameters</h3>
At least one of the optional parameters are necessary in order to identify which server to run the command on.

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
            <td><i>log filename</i></td>
            <td>&mdash;</td>
            <td>The logfile to tail (eg. nginx_error.log)</td>
        </tr>        
    </tbody>
</table>

<h3 id="examples">Example</h3>

<pre class="prettyprint">
$ cx tail -s "My Awesome App" web nginx_error.log
</pre>