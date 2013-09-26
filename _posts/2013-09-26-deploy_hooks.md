---
layout: post
title:  "Deployment Hooks (beta)"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Deployment hooks represent a way for you to take an action at various points during a build and/or deployment on Cloud 66. A simple example of this would be copying a file to a target location on your server and executing at some point during your deployment.</p>

<div class="notice">
		<h3>Note</h3>

		<p>This file format is potentially subject to change, though backwards compatibility will always be attempted.</p>
</div>

## File Location/Format

In order for your deployment hooks to be picked up, you need a file called **deploy_hooks.yml** to be present within a folder named **.cloud66** that is in turn located in the root of your source code, and checked into your repository.
<pre class="terminal-commands">
repo::/.cloud66/deploy_hooks.yml
</pre>

As the extension suggests, the deploy_hooks.yml file is **YAML** formatted. And like database.yml or mongoid.yml, the file is split by environment initially. This allows definition of different deploy hooks for different environments (development, staging, production etc) within the single file.

## Get Started with Examples

### **Copy file to destination**

A sample **deploy_hooks.yml** file could look like the following:
<pre class="terminal-commands">
development:
    first_thing:
      - source: /.cloud66/files/abc.def
        destination: ~/abc.def
        target: rails
</pre>

Because of the scoped **development**, the above deployment hook action will only apply to stacks in **development** environments. At the **first_thing** hook point (ie. the beginning of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/files/abc.def** to target path **~/abc.def** on the **rails** server.

### **Copy file to destination and execute**

The above is useful if you want a content file on the target server, or if you want to replace a configuration file for instance. But what if you want to execute a custom script on the server?

For that, see the following **deploy_hooks.yml** file:
<pre class="terminal-commands">
production:
    last_thing:
      - source: /.cloud66/my_executable_script.sh
        destination: /etc/somewhere/my_script.sh
        target: postgresql
        execute: true
        sudo: true
</pre>

The above example will only apply to stacks in **production** environments. At the **last_thing** hook point (ie. the end of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/my_executable_script.sh** to target path **/etc/somewhere/my_script.sh** on the **postgresql** server, then it will **execute** the script using **sudo**.

### **Multiple deployment hooks**
Lastly, multiple deployment hooks can be defined within the same file:
<pre class="terminal-commands">
production:
    first_thing:
      - source: /.cloud66/files/my_config.conf
        destination: /opt/somewhere/my_config.conf
        target: rails
      - source: /.cloud66/files/my_executable_script.sh
        destination: /etc/somewhere/my_script.sh
        target: rails
        execute: true
        sudo: true
    after_rails:
      - source: /.cloud66/files/another_executable_script.sh
        destination: /etc/somewhere/my_script.sh
        target: rails
        owner: ubuntu
        execute: true
        run_as: nginx
        run_on: single_server
        apply_during: build_only
        parse: true
        halt_on_error: false
</pre>

Here, two deploy hook actions will be performed in sequence at the **first_thing** deploy hook point, and a single deploy hook action will be performed at the **after_rails** deploy hook point.
There is no upper limit to the number of actions that can be defined.

As you can see from the **after_rails** deploy hook action above, there are addtional fields/options available that you can specify. See below for details on all the fields.

## Hook Points
<div class="notice">

        <h3>Important</h3>

        <p>Deployment hooks that have your RAILS_STACK_PATH as a destination and that occur before the application has actually created the folder (ie first_thing, before_rails etc) will cause permission errors during your code deployment.</p>
</div>

Currently the following hook points are available:
- **first_thing**
- **before_redis**
- **after_redis**
- **before_mysql**
- **after_mysql**
- **before_postgresql**
- **after_postgresql**
- **before_mongodb**
- **after_mongodb**
- **before_rails**
- **after_rails**
- **before_agent**
- **after_agent**
- **last_thing**

## Available Fields
Available fields are divided into mandatory and optional fields:

### Mandatory Fields
- **source**: This specifies the source location of your deployment hook file within your repository. Wildcards are not currently supported.
- **destination**: This is the destination path on your target server. Note that you can also specify environment variables in your destination field (ie. *<%= ENV\['RAILS_STACK_PATH'\] %>* for example)
- **target**: This is the target server type against the deploy hook action should be performed. If you have a shared server (ie. Rails and MySQL for example) then specifying *rails* or *mysql* will result in the same physical server target.

### Optional Fields

The default values (if the optional field is not explicitly specified) are shown in brackets

- **apply_during** (**all**): When do you want the deploy hook action to take place? Available options are: *build_only*; *deploy_only*; or *all* (see below for build/deploy definitions)
- **execute** (**false**): Do you want to execute the file after it has been copied to its destination on the target server?
- **halt_on_error** (**true**): If there is an error during the deployment hook execution, should the whole deployment continue or halt?
- **owner** (**your_server_user**): Once the file is transmitted to the target server, what ownership permissions should be applied to it (and its destination folder)? An example could be "your_user:your_group".
- **parse** (**true**): Specifies whether the file being transferred should be parsed for ENV vars. Using this you can embed *<%= ENV\['YOUR_ENV_VAR'\] %>* for example in your source file, and have it resolved during the deploy hook action.
- **run_on** (**single_server**): If you have multiple servers in the same group (ie. many scaled-up Rails servers) then you can specify whether you want the deploy hook action to occur just once, or once against each server in that group. Valid values are: *single_server* or *all_servers*.
- **run_as** (**server_user**): If you are executing the file on your target server, allows you to define which user you would like the file to be executed as. Note: you can't specify both this and *sudo*.
- **sudo** (**false**): If you are executing the file on your target server, do you want that execution to be sudo-ed? Note: you can't specify both this and *run_as*.

## Build / Deploy Definition

A Cloud 66 *build* step occurs the first time a server is deployed. During *build*, the target server is provisioned (from scratch). The *build* step will re-occur until the stack has been successfully deployed at least once.
After a successful initial deployment, subsequent deployments are *deploy* steps.

During a Cloud 66 *deploy* step, code is redeployed, but only minor configuration amendment will occur.



















