---
layout: post
template: two-col
title:  "Toolbelt database management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your databases from the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Database management</a></li>
    <li><a href="#promote">Slave promotion to standalone master</a></li>
    <li><a href="#resync">Slave re-synchronise with master</a></li>
</ul>

<h2 id="about">Database management</h2>
Use these commands to configure your replication slave database servers.

<h2 id="promote">Slave promotion to standalone master</h2>

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx databases promote-slave [-s &lt;stack&gt;] [--db-type &lt;database type&gt;] &lt;slave server name&gt;
</pre>

The server provided must have already been configured as a replication slave via the Cloud 66 UI.
Providing the database type is optional and is only necessary for shared servers where we can't automatically determine the target database type.

<div class="notice notice-warning">
    <h3>Important!</h3>

    <p>This action could result in application downtime, it is advisable to choose a non-busy time to perform this action, and to place your stack in maintenance mode.</p>

    <p>The existing master and other slaves will need to be removed after this process as after this the new configuration will have only a single database. You will be able to configure replication from this again after that point.</p>

    <p>In the case of any servers not being accessible during this time, those servers will remain unchanged. It is therefore important to stop/shutdown those servers in this case (or to manually stop the DB service on those servers) as having multiple masters in a cluster could cause problems throughout the cluster.</p>
</div>

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
        <td><i>slave server name</i></td>
        <td>&mdash;</td>
        <td>Name of the replication slave server to promote</td>
    </tr>
    <tr>
        <td><i>database type</i> (optional)</td>
        <td>&mdash;</td>
        <td>The database type</td>
    </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx databases promote-slave -s "My Awesome App" my_slave_server_name
$ cx databases promote-slave -s "My Awesome App" --db-type postgresql my_slave_server_name
</pre>

<h2 id="resync">Slave re-synchronise with master</h2>

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx databases resync-slave [-s &lt;stack&gt;] &lt;slave server name&gt;
</pre>

Re-syncs the specified slave database server with its master database server.

From time-to-time your slave database may go out of sync with its master. This action attempts to re-sync your specified slave server. This can happen depending on many factors (such as DB size, frequency of change, networking between servers etc).

The server provided must have already been configured as a replication slave via the Cloud 66 UI.
Providing the database type is optional and is only necessary for shared servers where we can't automatically determine the target database type.


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
        <td><i>slave server name</i></td>
        <td>&mdash;</td>
        <td>Name of the replication slave server to re-synchronise with master</td>
    </tr>
    <tr>
        <td><i>database type</i> (optional)</td>
        <td>&mdash;</td>
        <td>The database type</td>
    </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx databases resync-slave -s My_Awesome_App my_slave_server_name
$ cx databases resync-slave -s My_Awesome_App --db-type postgresql my_slave_server_name
</pre>