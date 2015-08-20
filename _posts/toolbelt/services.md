---
layout: post
template: two-col
title:  "Toolbelt service management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your services with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#service-list">Listing services</a></li>
    <li><a href="#service-scale">Scaling services</a></li>
    <li><a href="#service-stop">Stopping services</a></li>
    <li><a href="#service-restart">Restarting services</a></li>
    <li><a href="#service-info">Getting service information</a></li>
</ul>

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
$ cx services scale [-s &lt;stack&gt;] &lt;service name&gt; [--group &lt;server group&gt;] [--server &lt;server name&gt;|&lt;server ip&gt;] &lt;count&gt;
</pre>

Scales up/down &lt;count&gt; containers for the given service. If you specify +X or -X for the count, then that number of containers will be added/removed.
Specifying a number without a + or - will act as a absolute value meaning that that the resulting number of containers will be that number (it might scale up or down)
Optionally provide the server to act only on that server, or the group in which case the containers will be distributed amongst the servers in that group.

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
        <td><i>group</i> (optional)</td>
        <td>&mdash;</td>
        <td>Name of the target server group (ie. web/db/docker etc)</td>
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
$ cx services scale -s mystack a_backend_service --group docker 3
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

<h2 id="service-info">Getting service information</h2>
<h3>Usage</h3>
<pre class="prettyprint">
$ cx services info [-s &lt;stack&gt;] &lt;service name&gt; [--server &lt;server name&gt;|&lt;server ip&gt;]
</pre>

Gets information about the given service such as `service name, source type`, `git-ref`, `image info`, `container count`  and `docker commands`.
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
$ cx services info -s mystack my_web_service
$ cx services info -s mystack a_backend_service
$ cx services info -s mystack --server my_server my_web_service
</pre>

<h3>Result</h3>
<pre class="prettyprint">
NAME             VALUE
name             web
source type      git
git-ref          d33e491e5a33
container count  1
image name       web
image uid
image hash
command          bundle exec rails s production
build command    bundle exec rake db:schema:load
deploy command</pre>
