---
layout: post
template: two-col
title:  "Toolbelt stack management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your stacks with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#">Stack management</a></li>
            <li>
                <ul>
                <li><a href="#list">List your stacks</a></li>
                </ul>
            </li>     
            <li>
                <ul>
                <li><a href="#create">Create a new Docker stack</a></li>
                </ul>
            </li>     
            <li>
                <ul>
                <li><a href="#redeploy">Redeploy your stack</a></li>
                </ul>
            </li>         
            <li>
                <ul>
                <li><a href="#restart">Restart your stack</a></li>
                </ul>
            </li>     
            <li>
                <ul>
                <li><a href="#clear">Clear caches</a></li>
                </ul>
            </li>       
            <li>
                <ul>
                <li><a href="#listen">Listen to your deployment logs</a></li>
                </ul>
            </li>    
            <li>
                <ul>
                <li><a href="#configure">Manage your configuration files</a></li>
                </ul>
            </li>   
            <li>
                <ul>
                <li><a href="#help">Show help pages for a command</a></li>
                </ul>
            </li>                                                                                                      
</ul>

<h2 id="list">List your stacks</h2>

Lists all the stacks available to your account.

<h3 id="usage-build">Usage</h3>

<pre class="prettyprint">
$ cx stacks list [-e &lt;environment&gt;]
</pre>

<h3 id="params-build">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Full or partial environment name</td>
        </tr>
    </tbody>
</table>

<h3 id="example-build">Examples</h3>

<pre class="prettyprint">
$ cx stacks list
</pre>

<pre class="prettyprint">
$ cx stacks list -e staging
</pre>

<hr>

<h2 id="create">Create a new Docker stack</h2>

Build a new Docker stack based on your desired service definition.

<h3 id="usage-build">Usage</h3>

<pre class="prettyprint">
$ cx stacks create --name &lt;stack_name&gt; --environment &lt;environment&gt; --service_yaml &lt;service_yaml_path&gt; [--manifest_yaml &lt;manifest_yaml_path&gt;]
</pre>

<h3 id="params-build">Parameters</h3>
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

<h3 id="example-build">Examples</h3>

<pre class="prettyprint">
$ cx stacks create --name my_stack --environment production --service_yaml ~/service.yaml --manifest_yaml ~/manifest.yaml
</pre>

<pre class="prettyprint">
$ cx stacks create --name my_stack --environment production --service_yaml ~/service.yaml 
</pre>

<hr>

<h2 id="redeploy">Redeploy your stack</h2>

Trigger the deployment of a stack from the command line, just like clicking on <i>redeploy</i> in the UI.

<h3 id="usage-redeploy">Usage</h3>

<pre class="prettyprint">
$ cx stacks redeploy [-s &lt;stack&gt;] [-y] [--git-ref &lt;git_ref&gt;] [--service &lt;service&gt;] [--service &lt;service&gt;] [--service &lt;service&gt;]
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
            <td><i>git-ref</i> (optional, non-Docker)</td>
            <td>Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only.</td>
        </tr>
        <tr>
            <td><i>service</i> (optional, repeatable - docker)</td>
            <td>Will deploy the specified services from your stack only. Each service can have an optional colon-separated reference. For image based services the reference is taken as an image tag, for git based services the reference is taken as a git reference. Docker stacks only</td>
        </tr>
        <tr>
            <td><i>listen</i> (optional)</td>
            <td>Will follow the deployment and log progress output</td>
        </tr>
    </tbody>
</table>

<h3 id="example-redeploy">Examples</h3>

<pre class="prettyprint">
$ cx stacks redeploy -s "My Awesome App" -e production
</pre>
<pre class="prettyprint">
$ cx stacks redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
</pre>
<pre class="prettyprint">
$ cx stacks redeploy -s "My Awesome Docker App" --service web --service api:latest
</pre>

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

<hr>

<h2 id="restart">Restart your stack</h2>
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

<hr>

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

<hr>

<h2 id="listen">Listen to your deployment logs</h2>
<h3 id="list_usage">Usage</h3>

<pre class="prettyprint">
$ cx stacks listen [-s &lt;stack&gt;]
</pre>

<h3 id="list_params">Parameters</h3>
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

<h3 id="list_example">Example</h3>

<pre class="prettyprint">
$ cx stacks listen -s "My Awesome App" -e production
</pre>

You can leave the command by pressing `Ctrl-C` at any time.

<hr>

<h2 id="configure">Manage your configuration files</h2>
List, download and upload of configuration files such as a <i>service.yml</i> or <i>manifest.yml</i>.

<h3 id="configure_usage">Usage</h3>

<pre class="prettyprint">
$ cx stacks configure list [-s &lt;stack&gt;]
</pre>

<h3 id="configure_params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>list</i></td>
            <td>List of all versions of a configuration file</td>
        </tr>    
        <tr>
            <td><i>download</i></td>
            <td>Download a configuration file</td>
        </tr>               
        <tr>
            <td><i>upload</i></td>
            <td>Upload a new version of configuration file</td>
        </tr>                       
        <tr>
            <td><i>stack</i> (optional)</td>
            <td>Name of your stack, this can be omitted if the current directory is a stack directory</td>
        </tr>        
        <tr>
            <td><i>f (file)</i> (optional)</td>
            <td>File name, accepted values are <i>service.yml</i> and <i>manifest.yml</i></td>
        </tr>           
        <tr>
            <td><i>e (environment)</i> (optional)</td>
            <td>Full or partial environment name</td>
        </tr>                             
    </tbody>
</table>

<hr>

<h2 id="help">Show help pages for a command</h2>
Shows a list of commands or help for one command.

<h3 id="configure_usage">Usage</h3>

<pre class="prettyprint">
$ cx stacks help [&lt;command&gt;]
</pre>

<h3 id="configure_params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>command</i></td>
            <td>The command you wish to see help pages for</td>
        </tr>                          
    </tbody>
</table>