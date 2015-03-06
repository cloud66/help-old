---
layout: post
template: two-col
title:  "Toolbelt stack management"
date:   2015-01-27 01:01:01
categories: toolbelt
lead: Deploy your stacks from the command line
search-tags: ['deployment','toolbelt','commandline']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#x">Stack management</a></li>
            <li>
                <ul>
                <li><a href="#build">Create a new docker stack</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#redeploy">Redeploy your existing stack</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list-set">List and set stack settings</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#restart">Restart Nginx</a></li>
                </ul>
            </li> 
            <li>
                <ul>
                <li><a href="#clear">Clear caches</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list">List your stack servers</a></li>
                </ul>
            </li>              
            <li>
                <ul>
                <li><a href="#open">Open your website</a></li>
                </ul>
            </li>                                                                               
</ul>

<h2 id="redeploy">Create a new docker stack</h2>

Build a new docker stack based on your desired service definition.

<h3 id="usage-redeploy">Usage</h3>

<pre class="prettyprint">
$ cx stacks create --name &lt;stack_name&gt; --environment &lt;environment&gt; --service_yaml &lt;service_yaml_path&gt; [--manifest_yaml &lt;manifest_yaml_path&gt;]
</pre>

<h3 id="params-redeploy">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>name</i></td>
            <td>Name of your new stack</td>
        </tr>
        <tr>
            <td><i>environment</i></td>
            <td>Environment of your new stack</td>
        </tr>
        <tr>
            <td><i>service_yaml</i></td>
            <td>Path to your service.yml file</td>
        </tr>
        <tr>
            <td><i>manifest_yaml</i> (optional)</td>
            <td>Path to your manifest.yml file</td>
        </tr>
    </tbody>
</table>

<h3 id="example-redeploy">Examples</h3>

<pre class="prettyprint">
$ cx stacks create --name my_stack --environment production --service_yaml ~/service.yaml --manifest_yaml ~/manifest.yaml
</pre>
<pre class="prettyprint">
$ cx stacks create --name my_stack --environment production --service_yaml ~/service.yaml 
</pre>

<h2 id="redeploy">Redeploy your existing stack</h2>

Trigger the deployment of a stack from the command line, just like clicking on <i>redeploy</i> in the UI.

<h3 id="usage-redeploy">Usage</h3>

<pre class="prettyprint">
$ cx redeploy [-s &lt;stack&gt;] [-y] [--git-ref &lt;git_ref&gt;] [--services &lt;services&gt;]
</pre>

<h3 id="params-redeploy">Parameters</h3>
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
        <tr>
            <td><i>y</i> (optional)</td>
            <td>Automatically answer yes to any prompts</td>
        </tr>
        <tr>
            <td><i>git-ref</i> (optional - non-docker)</td>
            <td>Redeploy the specific git reference (branch, tag or hash). Non-docker stacks only</td>
        </tr>
        <tr>
            <td><i>services</i> (optional - docker)</td>
            <td>Will deploy the specified services from your stack only. This should be a comma separated list of service names. Docker stacks only</td>
        </tr>
    </tbody>
</table>

<h3 id="example-redeploy">Examples</h3>

<pre class="prettyprint">
$ cx redeploy -s "My Awesome App" -e production
</pre>
<pre class="prettyprint">
$ cx redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
</pre>
<pre class="prettyprint">
$ cx redeploy -s "My Awesome Docker App" --services web,api
</pre>

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

<h2 id="list-set">List and set stack settings</h2>

Start off by listing the possible settings for a specific stack.

<pre class="prettyprint">
$ cx settings list [-s &lt;stack&gt;]
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
            <td><i>stack.name</i></td>
            <td>View your stack name</td>
        </tr>
    </tbody>
</table>



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
</pre>

<h2 id="restart">Restart Nginx</h2>
Allows you to restart Nginx on your stack with one simple command.

<h3 id="restart-usage">Usage</h3>

<pre class="prettyprint">
$ cx stacks restart [-s &lt;stack&gt;]
</pre>

<h3 id="restart-params">Parameters</h3>
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

<h3 id="restart-example">Example</h3>

<pre class="prettyprint">
$ cx stacks restart -s "My Awesome App"
</pre>

<h2 id="clear">Clear caches</h2>
For improved performance, volatile code caches exist for your stack. It is possible for a those volatile caches to become invalid if you switch branches, change git repository URL, or rebase or force a commit. Since switching branch or changing git repository URL is done via the Cloud 66 interface, your volatile caches will automatically be purged. However, rebasing or forcing a commit doesn't have any association with Cloud 66, so this command can be used to purge the exising volatile caches.

<h3 id="x-usage">Usage</h3>

<pre class="prettyprint">
$ cx stacks clear-caches [-s &lt;stack&gt;]
</pre>

<h3 id="x-params">Parameters</h3>
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
    </tbody>
</table>

<h3 id="x-example">Example</h3>

<pre class="prettyprint">
$ cx stacks clear-caches -s "My Awesome App"
</pre>

<h2 id="list">List your stack servers</h2>
<h3 id="y-usage">Usage</h3>

<pre class="prettyprint">
$ cx servers list [-s &lt;stack&gt;] [&lt;names&gt;]
</pre>

<h3 id="y-params">Parameters</h3>
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
            <td><i>names</i> (optional)</td>
            <td>A list of server names entered as separate parameters.</td>
        </tr>
    </tbody>
</table>

<h3 id="y-example">Example</h3>

<pre class="prettyprint">
$ cx servers list -s "My Awesome App"
</pre>


<h2 id="open">Open your website</h2>
<h3 id="z-usage">Usage</h3>

<pre class="prettyprint">
$ cx open [-s &lt;stack&gt;] [&lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;]
</pre>

<h3 id="z-params">Parameters</h3>
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
            <td><i>server name</i> (optional)</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>server ip</i> (optional)</td>
            <td>IP of the server to access</td>
        </tr>
        <tr>
            <td><i>server role</i> (optional)</td>
            <td>Role of the server to access (eg. web)</td>
        </tr>
    </tbody>
</table>

<h3 id="z-example">Example</h3>

<pre class="prettyprint">
$ cx open -s "My Awesome App"
</pre>