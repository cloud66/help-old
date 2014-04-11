---
layout: post
template: two-col
title:  "Deploy hooks"
so_title: "deploy hooks"
nav_sticky: false
date:   2097-03-28 16:27:22
categories: stack-features
lead: Take action at various points during build and/or deployment
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#location">File location and format</a>
	</li>
	</li>
	<li>
		<a href="#execute">1. Execute a command</a>
	</li>
	        <li>
                <ul>
                <li><a href="#mandatory1">Mandatory fields</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#optional1">Optional fields</a></li>
                </ul>
            </li>
	<li>
		<a href="#copy">2. Copy a script or file</a>
	</li>
	        <li>
                <ul>
                <li><a href="#mandatory2">Mandatory fields</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#optional2">Optional fields</a></li>
                </ul>
            </li>
	<li>
		<a href="#hooks">Hook points</a>
	</li>
	<li>
		<a href="#definition">Build / deploy definition</a>
	</li>
	<li>
		<a href="#troubleshoot">Troubleshooting</a>
	</li>
</ul>

Deploy hooks are scripts that you write to take action at various points during the deployment process. This allows you to customize the deployment of your application to meet your particular needs.

For example, your deploy hook could copy a file to a target location on your server and execute at some point during your deployment. See our documentation for [examples of deploy hook use-cases](/how-to/deploy-hook-cases.html).

<h2 id="location">File location and format</h2>

To use deploy hooks, a file called **deploy_hooks.yml** should be present within a folder named **.cloud66**, that is in turn located in the root of your source code.
<pre class="terminal">
/.cloud66/deploy&#95;hooks.yml
</pre>

As the extension suggests, the **deploy_hooks.yml** file is **YAML** formatted. This file is split by environment, allowing the definition of deploy hooks for different environments within a single file.

<div class="notice">
    <h3>Note</h3>
	<p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>

This file can take one of two forms depending on your use-case:

<h2 id="execute">1. Execute a command</h2>
{% highlight yaml %}
production: # Environment
    first_thing: # Hook point
        command: apt-get install -y curl # Mandatory fields
        target: any
{% endhighlight %}

<h3 id="mandatory1">Mandatory fields</h5>
<table class='table table-bordered table-striped table-small'>
<tr>
	<td><b>Field</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td><b><i>command</i></b></td>
	<td>The command you would like to run</td>
</tr>
<tr>
	<td><b><i>target</i></b></td>
	<td>Your target - accepted values are <i>any</i>, <i>rails</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i>, <i>redis</i>, <i>sinatra</i>, and <i>padrino</i>.</td>
</tr>
</table>

<h3 id="optional1">Optional fields</h5>

Default values (if the field is not explicitly specified) are shown in brackets.

<table class='table table-bordered table-striped table-small'>
<tr>
	<td><b>Field</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td><b><i>apply&#95;during</i></b> (all)</td>
	<td>Specify when you want the deploy hook action to take place. Accepted values are <i>build_only</i>, <i>deploy_only</i> or <i>all</i> - see below for build/deploy definitions.</td>
</tr>
<tr>
	<td><b><i>halt&#95;on&#95;error</i></b> (true)</td>
	<td>Specify whether the execution should continue or halt in the event of an error.</td>
</tr>
<tr>
	<td><b><i>run_on</i></b></td>
	<td>If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <i>single_server</i> or <i>all_servers</i>. If you've specified <i>target: any</i> above, this will apply to all servers.</td>
</tr>
<tr>
	<td><b><i>run_as</i></b> (server user)</td>
	<td>If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and <i>sudo</i>.</td>
</tr>
<tr>
	<td><b><i>sudo</i></b> (false)</td>
	<td>If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <i>run_as</i>.</td>
</tr>
</table>

<h2 id="copy">2. Copy a script or file</h3>

{% highlight yaml %}
development: # Environment
    first_thing: # Hook point
      - source: /.cloud66/abc.sh # Mandatory fields
        destination: /tmp/abc.sh
        target: rails
{% endhighlight %}

<h3 id="mandatory2">Mandatory fields</h5>
<table class='table table-bordered table-striped table-small'>
<tr>
	<td><b>Field</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td><b><i>source</i></b></td>
	<td>This specifies the source location of your deploy hook file within your repository. Wildcards are not currently supported.</td>
</tr>
<tr>
	<td><b><i>destination</i></b></td>
	<td>The destination path on your target server. You can also specify environment variables in your destination field, <i><%= ENV['STACK_PATH'] %></i> for example.</td>
</tr>
<tr>
	<td><b><i>target</i></b></td>
	<td>This is the target server type against the deploy hook action should be performed. If you have a shared server (eg. Rails and MySQL) then specifying <i>rails</i> or <i>mysql</i> will result in the same physical server target.<br/><br/>Accepted values: <i>rails</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i>, <i>redis</i>, <i>sinatra</i>, and <i>padrino</i>.</td>
</tr>
</table>

<h3 id="optional2">Optional fields</h5>

Default values (if the field is not explicitly specified) are shown in brackets.

<table class='table table-bordered table-striped table-small'>
<tr>
	<td><b>Field</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td><b><i>apply&#95;during</i></b> (all)</td>
	<td>Specify when you want the deploy hook action to take place. Accepted values are <i>build_only</i>, <i>deploy_only</i> or <i>all</i> - see below for build/deploy definitions.</td>
</tr>
<tr>
	<td><b><i>halt&#95;on&#95;error</i></b> (true)</td>
	<td>Specify whether the execution should continue or halt in the event of an error.</td>
</tr>
<tr>
	<td><b><i>owner</i></b> (your server user)</td>
	<td>Specify ownership permissions to be applied to the file (and destination folder) once transferred to the target server. An example could be <i>user:group</i>.</td>
</tr>
<tr>
	<td><b><i>parse</i></b> (true)</td>
	<td>Specifies whether the file being transferred should be parsed for <a href="/stack-features/env-vars.html">environment variables</a>. Using this you can embed <i><%= ENV['ENV_VAR'] %></i> for example in your source file, and have it resolved during the deploy hook action.</td>
</tr>
<tr>
	<td><b><i>run_on</i></b> (single server)</td>
	<td>If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <i>single_server</i> or <i>all_servers</i>.</td>
</tr>
<tr>
	<td><b><i>execute</i></b> (false)</td>
	<td>Do you want to execute the file after it has been copied to its destination on the target server?</td>
</tr>
<tr>
	<td><b><i>run_as</i></b> (server user)</td>
	<td>If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and <i>sudo</i>.</td>
</tr>
<tr>
	<td><b><i>sudo</i></b> (false)</td>
	<td>If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <i>run_as</i>.</td>
</tr>
</table>

<h2 id="hooks">Hook Points</h2>
The following hook points are available:

<table class='table table-bordered table-striped table-small'>
<tr>
	<td><b>Hook point</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td>first&#95;thing</td>
	<td>The first thing (after after_checkout) that will happen on the server. A common use-case for this hook is to install packages to run your application.</td>
</tr>
<tr>
	<td>after&#95;checkout</td>
	<td>When we create your server, your code is pulled directly from Git to it. Use this hook if you want to make a change to your code after it is pulled (but before anything else).<br/><br/>Happens during the code deployment of your application.</td>
</tr>
<tr>
	<td>before&#95;<i>x</i></td>
	<td>This hook will run before a server component is installed on your server. Accepted values for <i>x</i>: <i>redis</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i></td>
</tr>
<tr>
	<td>after&#95;<i>x</i></td>
	<td>This hook will run after a server component is installed on your server. Accepted values for <i>x</i>: <i>redis</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i></td>
</tr>
<tr>
	<td>before&#95;rails</td>
	<td>This hook will run before Rails is installed on your server.</td>
</tr>
<tr>
	<td>after&#95;bundle</td>
	<td>This hook will run after bundle but before other rake tasks, such as database migrations. <br/><br/>Happens during the code deployment of your application.</td>
</tr>
<tr>
	<td>after&#95;symlink</td>
	<td>Runs after the symbolic link to your current code folder has been created. <br/><br/>Happens during the code deployment of your application.</td>
</tr>
<tr>
	<td>after&#95;rails</td>
	<td>This hook will run after Rails (and everything web related) is installed on your server.</td>
</tr>
<tr>
	<td>before&#95;agent</td>
	<td>This hook will run before the Cloud 66 agent is installed on your server.</td>
</tr>
<tr>
	<td>after&#95;agent</td>
	<td>This hook will run after the Cloud 66 agent is installed on your server.</td>
</tr>
<tr>
	<td>last&#95;thing</td>
	<td>This hook will run as the last thing that happens on your server.</td>
</tr>
</table>

Deploy hook scripts that contain `$STACK_PATH` and occur before the <i>after_symlink</i> hook point will cause permission errors during deployment, because the symbolic link has not yet been created.

However, you're free to use `$STACK_PATH` as a source and/or destination for your deploy hook files before the <i>after_symlink</i> hook point.

<h2 id="definition">Build / deploy definition</h2>

A Cloud 66 *build* step occurs the first time a server is deployed. During *build*, the target server is provisioned (from scratch). The *build* step will re-occur until the stack has been successfully deployed at least once.
After a successful initial deployment, subsequent deployments are *deploy* steps.

During a Cloud 66 *deploy* step, code is redeployed, but only minor configuration amendment will occur.

<h2 id="troubleshoot">Troubleshooting</h2>
Automating deploy hooks can sometimes be tricky. To avoid issues, it's always a good idea to run each of your commands manually to see that they complete successfully.

If a specific command doesn't show any output, you can use the <code>echo $?</code> command after issuing your command to see its exit code. If it returns a _zero_, your command was successful, whereas a _one_ means it has failed.