---
layout: post
template: two-col
title:  "Toolbelt service management"
date:   2038-01-25 01:01:01
categories: toolbelt
lead: Configure your services
search-tags: ['docker', 'container', 'containers', 'service', 'scale']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Services management</a></li>
    <li><a href="#service-list">Service listing</a></li>
    <li><a href="#service-scale">Service scaling</a></li>
    <li><a href="#service-stop">Service stopping</a></li>
    <li><a href="#service-restart">Service restarting</a></li>
    <li><a href="#container-list">Container listing</a></li>
    <li><a href="#container-stop">Container stopping</a></li>
    <li><a href="#container-restart">Container restarting</a></li>
    <li><a href="#container-attach">Container attach</a></li>
</ul>

<h2 id="about">Services management</h2>
Use these commands to manage your docker stack services and containers.

<h2 id="service-list">Listing services</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx services list [-s &lt;stack&gt;] [--server &lt;slave server name&gt;|&lt;slave server ip&gt;]
</pre>

Lists all the services and their numbers of running container on the given stack.
Optionally provide the server to list only the services running on that server.

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
$ cx services list -s My_Awesome_App
$ cx services list -s My_Awesome_App --server my_selected_server
</pre>

<h2 id="service-scale">Scaling services</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx services scale [-s &lt;stack&gt;] &lt;service name&gt; [--server &lt;server name&gt;|&lt;server ip&gt;] &lt;count&gt;
</pre>

Scales up/down &lt;count&gt; containers for the given service. If you specify +X or -X for the count, then that number of containers will be added/removed.
Specifying a number without a + or - will act as a absolute value meaning that that the resulting number of containers will be that number (it might scale up or down)
Optionally provide the server to act only on that server.

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
        <td><i>service name</i></td>
        <td>&mdash;</td>
        <td>Name of the target service</td>
    </tr>
    <tr>
        <td><i>server name</i> (optional)</td>
        <td>&mdash;</td>
        <td>Name of the target server</td>
    </tr>
    <tr>
        <td><i>count</i></td>
        <td>&mdash;</td>
        <td>Desired count (ie. +2, -3 or 5)</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx services scale -s mystack my_web_service 1
$ cx services scale -s mystack a_backend_service --server backend +5
$ cx services scale -s mystack a_backend_service -2
</pre>

<h2 id="service-stop">Stopping services</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx services stop [-s &lt;stack&gt;] &lt;service name&gt; [--server &lt;server name&gt;|&lt;server ip&gt;]
</pre>

Stops all the containers of the given service.
Optionally provide the server to act only on that server.

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
        <td><i>service name</i></td>
        <td>&mdash;</td>
        <td>Name of the target service</td>
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
$ cx services stop -s mystack my_web_service
$ cx services stop -s mystack a_backend_service
$ cx services stop -s mystack --server my_server my_web_service
</pre>

<h2 id="service-restart">Restarting services</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx services restart [-s &lt;stack&gt;] &lt;service name&gt; [--server &lt;server name&gt;|&lt;server ip&gt;]
</pre>

Restarts all the containers of the given service.
Optionally provide the server to act only on that server.

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
        <td><i>service name</i></td>
        <td>&mdash;</td>
        <td>Name of the target service</td>
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
$ cx services restart -s mystack my_web_service
$ cx services restart -s mystack a_backend_service
$ cx services restart -s mystack --server my_server my_web_service
</pre>

<h2 id="container-list">Listing containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers list [-s &lt;stack&gt;] [--server &lt;slave server name&gt;|&lt;slave server ip&gt;]
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
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers list -s My_Awesome_App
$ cx containers list -s My_Awesome_App --server my_selected_server
</pre>

<h2 id="container-stop">Stopping containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers stop [-s &lt;stack&gt;] &lt;container id&gt;
</pre>

Stops a particular container on the given stack based on container Id.

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
        <td><i>container Id</i></td>
        <td>&mdash;</td>
        <td>The container Id</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers stop -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
</pre>

<h2 id="container-restart">Restarting containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers restart [-s &lt;stack&gt;] &lt;container id&gt;
</pre>

Restarts a particular container on the given stack based on container Id.

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
        <td><i>container ID</i></td>
        <td>&mdash;</td>
        <td>The container ID</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers restart -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
</pre>

<h2 id="container-attach">Attaching to containers</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx containers attach [-s &lt;stack&gt;] &lt;container id&gt;
</pre>

Attaches to the running container and forwards output from the container to the console.
Note: Does not forward signals and does not allow input.

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
        <td><i>container ID</i></td>
        <td>&mdash;</td>
        <td>The container ID</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
<pre class="prettyprint">
$ cx containers attach -s mystack 2844142cbfc064123777b6be765b3914e43a9e083afce4e4348b5979127c220c
</pre>

