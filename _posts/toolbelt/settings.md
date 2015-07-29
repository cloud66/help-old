---
layout: post
template: two-col
title:  "Toolbelt settings command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your settings with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#">Settings command</a></li>
            <li>
                <ul>
                <li><a href="#list">List your stack settings</a></li>
                </ul>
            </li>     
            <li>
                <ul>
                <li><a href="#set">Set your stack settings</a></li>
                </ul>
            </li>                                                                                                       
</ul>

<h2 id="list">List your stack settings</h2>
<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx settings list [-s &lt;stack&gt;] [-e &lt;environment&gt;]
</pre>

<h3 id="parameters">Parameters</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>stack</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx settings list -s "My Awesome App"
</pre>

These are the available settings:

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Setting</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>allowed.web.source</i></td>
            <td>IP addresses that are allowed to access a stacks web servers (with IP addresses in the command or a CSV file with IP addresses as input)</td>
        </tr>
        <tr>
            <td><i>asset.prefix</i></td>
            <td>If you change your default Rails assets folder, you can set it here</td>
        </tr>                
        <tr>
            <td><i>continuous.deploy</i></td>
            <td>Enable or disable <a href="/deployment/redeployment-hooks#github-event">continuous deployment on Github</a>. To enable, you can use the values <i>1</i>, <i>true</i>, <i>on</i> or <i>enable</i>, and to disable you can use the values <i>0</i>, <i>false</i>, <i>off</i> or <i>disable</i></td>
        </tr>
        <tr>
            <td><i>custom.build.command</i></td>
            <td>Set custom build command. <i>Only applies to <a href="/building-your-stack/sinatra-stacks#custom">Sinatra</a> or <a href="/building-your-stack/padrino-stacks#custom">Padrino</a> stacks</i></td>
        </tr>
        <tr>
            <td><i>custom.deploy.command</i></td>
            <td>Set custom deploy command. <i>Only applies to <a href="/building-your-stack/sinatra-stacks#custom">Sinatra</a> or <a href="/building-your-stack/padrino-stacks#custom">Padrino</a> stacks</i></td>
        </tr>
        <tr>
            <td><i>deploy.parallel</i></td>
            <td>Enable or disable <a href="/deployment/parallel-deployments">parallel deployments</a> on the stack. To enable, you can use the values <i>1</i>, <i>true</i>, <i>on</i> or <i>enable</i>, and to disable you can use the values <i>0</i>, <i>false</i>, <i>off</i> or <i>disable</i></td>
        </tr>
        <tr>
            <td><i>git.branch</i></td>
            <td>Change the Git branch of the stack repository</td>
        </tr>
        <tr>
            <td><i>git.repository</i></td>
            <td>Change the Git repository URL</td>
        </tr>
        <tr>
            <td><i>maintenance.mode</i></td>
            <td>Enable or disable maintenance mode on the stack. To enable, you can use the values <i>1</i>, <i>true</i>, <i>on</i> or <i>enable</i>, and to disable you can use the values <i>0</i>, <i>false</i>, <i>off</i> or <i>disable</i></td>
        </tr>        
        <tr>
            <td><i>reconfigure.nginx</i></td>
            <td>If set to true, it will regenerate Nginx configuration and restart it (only on the next deployment)</td>
        </tr>
        <tr>
            <td><i>run.deploy.command</i></td>
            <td>Enable or disable option run <a href="/building-your-stack/building-your-docker-service">deploy command</a> on every deployment (<a href="/database-management/database-management#migrations">database migrations</a> for Rails stacks).  To enable, you can use the values <i>1</i>, <i>true</i>, <i>on</i> or <i>enable</i>, and to disable you can use the values <i>0</i>, <i>false</i>, <i>off</i> or <i>disable</i></td>
        </tr>
        <tr>
            <td><i>stack.name</i></td>
            <td>View your stack name</td>
        </tr>
    </tbody>
</table>

<h2 id="set">Set your stack settings</h2>
<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx settings set [-s &lt;stack&gt;] &lt;setting_name&gt; &lt;value&gt;
</pre>

<h3 id="parameters">Parameters</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>stack</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
            <td><i>setting_name</i></td>
            <td>A valid setting from the list above</td>
        </tr>
        <tr>
            <td><i>value</i></td>
            <td>A valid value for the setting</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx settings set -s "My Awesome App" git.repository git://github.com/cloud66-samples/rails-mysql.git -e production

$ cx settings set -s my_stack deploy.parallel true
</pre>