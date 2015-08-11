---
layout: post
template: two-col
title:  "Toolbelt container management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your containers from the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#container-list">Listing containers</a></li>
    <li><a href="#container-stop">Stopping container</a></li>
    <li><a href="#container-restart">Restarting container</a></li>
    <li><a href="#container-exec">Executing a command under an existing container</a></li>
    <li><a href="#container-attach">Attaching to a container</a></li>
</ul>

<h2 id="container-list">Listing containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers list [-s &lt;stack&gt;] [--server &lt;slave server name&gt;|&lt;slave server ip&gt;] [--trunc <false|true>]
</pre>

Lists all the containers on the given stack.
Optionally provide the server to list only the containers running on that server.

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
    <tr>
        <td><i>trunc</i> (optional)</td>
        <td>true</td>
        <td>Truncate container Ids</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers list -s My_Awesome_App
$ cx containers list -s My_Awesome_App --server my_selected_server
$ cx containers list -s My_Awesome_App --trunc false
</pre>

<h2 id="container-stop">Stopping containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers stop [-s &lt;stack&gt;] &lt;container&gt;
</pre>

Stops a particular container on the given stack based on container Id or container name.

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
        <td><i>container</i></td>
        <td>&mdash;</td>
        <td>The container Id or container name (short version supported)</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers stop -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers stop -s mystack 2844142cbf
$ cx containers stop -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers stop -s mystack web
</pre>

<h2 id="container-restart">Restarting containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers restart [-s &lt;stack&gt;] &lt;container&gt;
</pre>

Restarts a particular container on the given stack based on container Id or container Name.

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
        <td><i>container</i></td>
        <td>&mdash;</td>
        <td>The container Id or container name (short version supported)</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers restart -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers restart -s mystack 2844142cbf
$ cx containers restart -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers restart -s mystack web
</pre>

<h2 id="container-exec">Executing a command under an existing container</h2>
This command executes your command within the context of a running container. The default docker-flags are for an interactive shell though they can be specified with the command.

<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers exec [-s &lt;stack&gt;] &lt;container&gt; &lt;command&gt;
</pre>

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
        <td><i>container</i></td>
        <td>&mdash;</td>
        <td>The Id or name of the container you wish to exec</td>
    </tr>    
    <tr>
        <td><i>command</i></td>
        <td>&mdash;</td>
        <td>The command you wish to run</td>
    </tr>    
    <tr>
        <td><i>docker-flags</i></td>
        <td>&mdash;</td>
        <td>Any Docker flags you wish to run with, eg. <i>"--interactive=true --tty=true --detach=false"</i></td>
    </tr>
    <tr>
        <td><i>environment</i></td>
        <td>&mdash;</td>
        <td>Full or partial environment name</td>
    </tr>    
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers exec -s mystack 2844142cbf /bin/bash
$ cx containers exec -s mystack web.pro-active-quick-witted-dinosaur /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=true --tty=true --detach=false" 2844142cbf /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=false --tty=false --detach=true" 2844142cbf /tmp/my_background_command
</pre>

<h2 id="container-attach">Attaching to a container</h2>
Attaches to the running container and forwards output from the container to the console. Note: Does not forward signals and does not allow input.

<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers attach [-s &lt;stack&gt;] &lt;container&gt;
</pre>

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
        <td><i>container</i></td>
        <td>&mdash;</td>
        <td>The container Id or container name (short version supported)</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers attach -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
$ cx containers attach -s mystack 2844142cbf
$ cx containers attach -s mystack web.pro-active-quick-witted-dinosaur
$ cx containers attach -s mystack web
</pre>