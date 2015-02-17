---
layout: post
template: one-col
title:  "Deploy hooks"
so_title: "deploy hooks"
nav_sticky: false
date:   2097-03-28 16:27:22
categories: deployment
lead: Take action at various points during your deployment
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What are deploy hooks?</a>
	</li>
	
	<li>
		<a href="#points">Hook points</a>
	</li>
	<li>
		<a href="#fields">Hook fields</a>
	</li>
	<li>
		<a href="#how">How to use deploy hooks</a>
	</li>
	        <li>
                <ul>
                <li><a href="#snippets">Use a snippet deploy hook</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#commands">Use a command deploy hook</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#scripts">Use a script deploy hook</a></li>
                </ul>
            </li>
</ul>

<h1 id="what">What are deploy hooks?</h1>
<p>Deploy hooks are scripts that allow you to take action at various points during the deployment process. This helps you customize the deployment of your application to meet your particular needs.</p>

<div class="notice">
    <h3>Important</h3>
    <p>Deploy hooks currently only apply to Rack-based stacks, not Docker stacks.</p>
</div>

<hr />

<h1 id="points">Hook points</h1>
<p>The deployment process is divided into a number of steps, and hook points allow you to intervene at various points during this process.</p>

<table class="table table-bordered table-striped table-small">
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
	<td>When we create your server, your code is pulled directly from Git to it. Use this hook if you want to make a change to your code after it is pulled (but before anything else). Happens during the code deployment of your application.</td>
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
	<td>This hook will run after bundle but before other rake tasks, such as database migrations. Happens during the code deployment of your application.</td>
</tr>
<tr>
	<td>after&#95;symlink</td>
	<td>Runs after the symbolic link to your current code folder has been created. <br /><br />Happens during the code deployment of your application.</td>
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

<p>Deploy hook scripts that contain <code>$STACK_PATH</code> and occur before the <i>after_symlink</i> hook point will cause permission errors during deployment, because the symbolic link has not yet been created.</p>

<p>However, you’re free to use <code>$STACK_PATH</code> as a source and/or destination for your deploy hook files before the <i>after_symlink</i> hook point.</p>

<hr />

<h1 id="fields">Hook fields</h1>
<p>There are three types of deploy hooks, and the fields available (and required) vary by type:</p>

<ol class="list">
<li><b>Snippets:</b> use pre-existing scripts to install common packages. These snippets are <a href="https://github.com/cloud66/snippets">open source</a>, and are created by Cloud 66 or third parties.</li>
<li><b>Commands:</b> run your own commands.</li>
<li><b>Scripts:</b> use your own scripts for more comprehensive procedures.</li>
</ol>

<table id="fields" class="table table-bordered table-striped table-small fields">
<thead valign="top">
<tr>
	<th>Hook type<br />
	<th>Field
	<th>Description
<tbody>
	<tr class="header"><td width="13%"><b>Snippets</b> <span>-</span><td width="15%"><td width="70%">
	<tr><td><td width="13%">snippet <img src="http://cdn.cloud66.com/images/help/required.gif" /><td width="70%">Snippet to be used - run in <i>/tmp/deploy_hooks</i> by default
	<tr><td><td>target <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Target server(s), with accepted values <i>any</i>, <i>rails</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i>, <i>redis</i>, <i>sinatra</i>, <i>padrino</i>
	<tr><td><td>execute <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Set to true for the snippet to be executable.
	<tr><td><td>apply_during<br /> (all)<td>Specify when you want the deploy hook action to take place. Accepted values are <i>build_only</i>, <i>deploy_only</i> or <i>all</i>. The <i>build</i> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <i>deploy</i> steps.
	<tr><td><td>halt_on_error (true)<td>Specify whether the execution should continue or halt in the event of an error.
	<tr><td><td>run_on<br /> (single server)<td>If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <i>single_server</i> or <i>all_servers</i>. If you've specified <i>target: any</i> above, this will apply to all servers.
	<tr><td><td>run_as<br /> (server user)<td>If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and <i>sudo</i>.
	<tr><td><td>sudo (false)<td>If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <i>run_as</i>.
<tbody>
	<tr class="header"><td width="13%"><b>Commands</b> <span>-</span><td><td>
	<tr><td><td width="13%">command <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Command to be used - run in <i>/tmp/deploy_hooks</i> by default
	<tr><td><td>target <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Target server(s), with accepted values <i>any</i>, <i>rails</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i>, <i>redis</i>, <i>sinatra</i>, <i>padrino</i>
	<tr><td><td>execute <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Set to true for the command to execute.
	<tr><td><td>apply_during<br /> (all)<td>Specify when you want the deploy hook action to take place. Accepted values are <i>build_only</i>, <i>deploy_only</i> or <i>all</i>. The <i>build</i> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <i>deploy</i> steps.
	<tr><td><td>halt_on_error (true)<td>Specify whether the execution should continue or halt in the event of an error.
	<tr><td><td>run_on<br /> (single server)<td>If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <i>single_server</i> or <i>all_servers</i>. If you've specified <i>target: any</i> above, this will apply to all servers.
	<tr><td><td>run_as<br /> (server user)<td>If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and <i>sudo</i>.
	<tr><td><td>sudo (false)<td>If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <i>run_as</i>.
<tbody>
	<tr class="header"><td width="13%"><b>Scripts</b> <span>-</span><td><td>
	<tr><td><td width="13%">source <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>This specifies the source location of your deploy hook file within your repository.
	<tr><td><td>destination <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>The destination path on your target server. You can also specify environment variables in your destination field, <i>&lt;%= ENV['STACK_PATH'] %&gt;</i> for example.
	<tr><td><td>target <img src="http://cdn.cloud66.com/images/help/required.gif" /><td>Target server(s), with accepted values <i>any</i>, <i>rails</i>, <i>mysql</i>, <i>postgresql</i>, <i>mongodb</i>, <i>redis</i>, <i>sinatra</i>, <i>padrino</i>
	<tr><td><td>apply_during<br /> (all)<td>Specify when you want the deploy hook action to take place. Accepted values are <i>build_only</i>, <i>deploy_only</i> or <i>all</i>. The <i>build</i> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <i>deploy</i> steps.
	<tr><td><td>halt_on_error (true)<td>Specify whether the execution should continue or halt in the event of an error.
	<tr><td><td>run_on<br /> (single server)<td>If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <i>single_server</i> or <i>all_servers</i>. If you've specified <i>target: any</i> above, this will apply to all servers.
	<tr><td><td>run_as<br /> (server user)<td>If you execute a file on your target server, specify which user you would like the file to be executed as. Note: you can't specify both this and <i>sudo</i>.
	<tr><td><td>sudo (false)<td>If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <i>run_as</i>.
	<tr><td><td>parse (true)<td>Specifies whether the file being transferred should be parsed for <a href="/deployment/environment-variables">environment variables</a>. Using this you can embed <i>&lt;%= ENV['ENV_VAR'] %&gt;</i> for example in your source file, and have it resolved during the deploy hook action.
	<tr><td><td>owner<br /> (your server user)<td>Ownership permissions for the file (and destination folder) on the target server. An example could be <i>user:group</i>.
	<tr><td><td>execute (false)<td>Do you want to execute the file after it has been copied to its destination on the target server?
</td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></tbody></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></tbody></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></td></td></td></tr></tbody></th></th></th></tr></thead></table>

<caption align="bottom"><font size="2.0rem">
Default values (if the field is not explicitly specified) are shown in brackets.
</font></caption>

<h1 id="how">How to use deploy hooks</h1>
To make use of deploy hooks, a file called _deploy_hooks.yml_ should be present within a folder named <i>.cloud66</i>, which is in turn located in the root of your source code. This file should be YAML formatted, and you can use a service like <a href="http://yamllint.com/" target="_blank">YAMLlint</a> to validate it.

<pre class="prettyprint">
/.cloud66/deploy_hooks.yml
</pre>

Creating a deploy hook from scratch consists of a number of steps:<br/>

<ol class="list">
<li>Choose your environment - eg. example <i>production</i>, <i>development</i>, <i>staging</i> and so on.</li>
<li>Choose your hook point - eg. <i>first_thing</i>, <i>after_rails</i> and so on.</li>
<li>Choose your deploy hook type - eg. <i>snippet</i>, <i>command</i> or <i>script</i>.</li>
<li>Select any additional hook fields you require</li>
</ol>

Automating deploy hooks can sometimes be tricky. To avoid issues, it's good practice to run each of your commands manually to see that they complete successfully. If a specific command doesn't show any output, you can use the <code>echo $?</code> command after issuing your command to see its exit code. If it returns a <i>zero</i>, your command was successful, whereas a <i>one</i> means it has failed.

<h2 id="snippets">Use a snippet deploy hook</h2>
Below is a bare-bone example of using a snippet with the required fields - it will execute the <a href="https://raw.githubusercontent.com/cloud66/snippets/master/cloud66/node">Cloud 66 Node snippet</a> as the first thing on all production servers.

<pre class="prettyprint">
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/node # Hook type
        target: any # Hook fields
        execute: true
</pre>

See the available hook points and fields for more ways to customize this.

<h2 id="commands">Use a command deploy hook</h2>
The hook example below can be used to install anything from packages to fonts on your server.

<pre class="prettyprint">
production: # Environment
    first_thing: # Hook point
      - command: apt-get install curl -y # Hook type
        target: any # Hook fields
        execute: true
</pre>

<div class="notice">
    <h3>Important</h3>
    <p>When automating the installation of packages, remember to use the <i>-y</i> flag to answer yes to all prompts.</p>
</div>

The example below can be used to run custom rake tasks during server build. If you need to run it more than once, consider using the <a href="/stack-add-ins/rake-task">rake task add-in</a>.

<pre class="prettyprint">
production: # Environment
    last_thing: # Hook point
      - command: cd $STACK_PATH &amp;&amp; bundle exec rake dev:setup # Hook type
        target: rails # Hook fields ↓
        run_on: single_server
        apply_during: build_only
</pre>

This will run our rake task on one Rails server and only during the initial build. We run this as a last_thing hook because if we ran it earlier the application wouldn't exist on the server and be usable.

<h2 id="scripts">Use a script deploy hook</h2>
The hook below will copy a file from your repository to your <i>tmp</i> folder and execute it during build.

<pre class="prettyprint">
production: # Environment
    after_rails: # Hook point
      - source: /.cloud66/script.sh # Hook type
        destination: /tmp/script.sh
        target: rails # Hook fields ↓
        execute: true
        apply_during: build_only
</pre>