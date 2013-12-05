---
layout: post
template: two-col
title:  "Deployment Hooks"
nav_sticky: false
nav: true
nav_prev: ""
nav_next: ""
date:   2038-03-28 16:27:22
categories: stack-features
lead: Take action at various points during build and/or deployment
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#location">File location and format</a>
	</li>
	<li>
		<a href="#copy">Copy file to destination</a>
	</li>
	<li>
		<a href="#execute">Copy file to destination and execute</a>
	</li>
	<li>
		<a href="#multiple">Multiple deployment hooks</a>
	</li>
	<li>
		<a href="#hooks">Hook points</a>
	</li>
	<li>
		<a href="#available">Available fields</a>
	</li>
	        <li>
                <ul>
                <li><a href="#mandatory">Mandatory</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#optional">Optional</a></li>
                </ul>
            </li>
	<li>
		<a href="#definition">Build/deploy definition</a>
	</li>
</ul>

A simple use-case for a deployment hook would be to copy a file to a target location on your server and executing at some point during your deployment. For example of other use-cases, feel free to have a look at or contribute to our <a href="https://github.com/cloud66/deploy_hooks" target="_blank">deploy hooks repository</a>.

<h2 id="location">File location and format</h2>

To use deployment hooks, a file called **deploy_hooks.yml** should be present within a folder named **.cloud66**, that is in turn located in the root of your source code.
<pre class="terminal">
/.cloud66/deploy&#95;hooks.yml
</pre>

As the extension suggests, the deploy&#95;hooks.yml file is **YAML** formatted. And like other YAML files it is split by environment, allowing the definition of deploy hooks for different environments within a single file.

<h3 id="copy">Copy file to destination</h3>

A sample **deploy&#95;hooks.yml** file could look like the following:
<pre class="terminal">
development:
    first&#95;thing:
      - source: /.cloud66/files/abc.sh
        destination: /tmp/abc.sh
        target: rails
</pre>

As it is scoped **development**, this deployment hook will only apply to stacks in **development** environments. At the **first&#95;thing** [hook point](/stack-features/deploy-hooks.html#hooks), it will transfer the file **/.cloud66/files/abc.sh** to target path **/tmp/abc.sh** on the **rails** server.

<h3 id="execute">Copy file to destination and execute</h3>

We will take a similar approach to execute a script on the target server:
<pre class="terminal">
production:
    last&#95;thing:
      - source: /.cloud66/my&#95;script.sh
        destination: /tmp/my&#95;script.sh
        target: postgresql
        execute: true
        sudo: true
</pre>

The above example will only apply to stacks in **production** environments. At the **last&#95;thing** [hook point](/stack-features/deploy-hooks.html#hooks), it will transfer the file **/.cloud66/my&#95;script.sh** to the target path **/tmp/my&#95;script.sh** on the **postgresql** server, then it will **execute** the script using **sudo**.

<h3 id="multiple">Multiple deploy hooks</h3>
Lastly, multiple deployment hooks can be defined within the same file:
<pre class="terminal">
production:
    first&#95;thing:
      - source: /.cloud66/files/my&#95;config.conf
        destination: /opt/somewhere/my&#95;config.conf
        target: rails
      - source: /.cloud66/files/my&#95;executable&#95;script.sh
        destination: /etc/somewhere/my&#95;script.sh
        target: rails
        execute: true
        sudo: true
    after&#95;rails:
      - source: /.cloud66/files/another&#95;executable&#95;script.sh
        destination: /etc/somewhere/my&#95;script.sh
        target: rails
        owner: ubuntu
        execute: true
        run&#95;as: nginx
        run&#95;on: single&#95;server
        apply&#95;during: build&#95;only
        parse: true
        halt&#95;on&#95;error: false
</pre>

Here, two deploy hook actions will be performed in sequence at the **first&#95;thing** deploy [hook point](/stack-features/deploy-hooks.html#hooks), and a single deploy hook action will be performed at the **after&#95;rails** deploy [hook point](/stack-features/deploy-hooks.html#hooks).
There is no upper limit to the number of actions that can be defined.

As you can see from the **after&#95;rails** deploy hook action above, there are additional fields/options available that you can specify. See below for details on all the fields.

<h2 id="hooks">Hook Points</h2>
<div class="notice">

        <h3>Important</h3>

        <p>Deployment hooks that have your STACK&#95;PATH as a destination and that occur before the application has actually created the folder (eg. first&#95;thing, before&#95;rails etc) will cause permission errors during your code deployment.</p>
</div>

Currently the following hook points are available:

- **after&#95;checkout**<br/>
Ensure a file gets pushed to the server before anything else happens
- **first&#95;thing**<br/>
The first thing (after after_checkout) that will happen on the server
- **before&#95;redis**
- **after&#95;redis**
- **before&#95;mysql**
- **after&#95;mysql**
- **before&#95;postgresql**
- **after&#95;postgresql**
- **before&#95;mongodb**
- **after&#95;mongodb**
- **before&#95;rails**
- **after&#95;bundle**<br/>
Execute a task before other rake tasks (eg. db tasks) but after bundle
- **after&#95;symlink**<br/>
Execute a rake task after the cap deploy is done
- **after&#95;rails**
- **before&#95;agent**
- **after&#95;agent**
- **last&#95;thing**

<h2 id="available">Available fields</h2>
Available fields are divided into mandatory and optional fields:

<h3 id="mandatory">Mandatory fields</h3>
- **source**<br/>
This specifies the source location of your deployment hook file within your repository. Wildcards are not currently supported.
- **destination**<br/>
This is the destination path on your target server. Note that you can also specify environment variables in your destination field
(`<%= ENV['STACK_PATH'] %>` for example)
- **target**<br/>
This is the target server type against the deploy hook action should be performed. If you have a shared server (eg. Rails and MySQL) then specifying *rails* or *mysql* will result in the same physical server target.

<h3 id="optional">Optional fields</h3>

The default values (if the optional field is not explicitly specified) are shown in brackets.

- **apply&#95;during** (**all**)<br/>
When do you want the deploy hook action to take place? Available options are: *build&#95;only*; *deploy&#95;only*; or *all* (see below for [build/deploy definitions](/stack-features/deploy-hooks.html#definition))
- **execute** (**false**)<br/>
Do you want to execute the file after it has been copied to its destination on the target server?
- **halt&#95;on&#95;error** (**true**)<br/>
If there is an error during the deployment hook execution, should the whole deployment continue or halt?
- **owner** (**your&#95;server&#95;user**)<br/>
Once the file is transmitted to the target server, what ownership permissions should be applied to it (and its destination folder)? An example could be "your&#95;user:your&#95;group".
- **parse** (**true**)<br/>
Specifies whether the file being transferred should be parsed for [environment variables](/stack-features/env-vars.html). Using this you can embed `<%= ENV['ENV_VAR'] %>` for example in your source file, and have it resolved during the deploy hook action.
- **run&#95;on** (**single&#95;server**)<br/>
If you have multiple servers in the same group (eg. scaled-up Rails servers) then you can specify whether you want the deploy hook action to occur just once, or once against each server in that group. Valid values are: *single&#95;server* or *all&#95;servers*.
- **run&#95;as** (**server&#95;user**)<br/>
If you are executing the file on your target server, allows you to define which user you would like the file to be executed as. Note: you can't specify both this and *sudo*.
- **sudo** (**false**)<br/>
If you are executing the file on your target server, do you want that execution to be sudo-ed? Note: you can't specify both this and *run&#95;as*.

<h2 id="definition">Build / deploy definition</h2>

A Cloud 66 *build* step occurs the first time a server is deployed. During *build*, the target server is provisioned (from scratch). The *build* step will re-occur until the stack has been successfully deployed at least once.
After a successful initial deployment, subsequent deployments are *deploy* steps.

During a Cloud 66 *deploy* step, code is redeployed, but only minor configuration amendment will occur.