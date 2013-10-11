---
layout: post
title:  "Deployment Hooks (beta)"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Deployment hooks represent a way for you to take an action at various points during a build and/or deployment on Cloud 66.</p>

<p>
    A simple example of this would be copying a file to a target location on your server and executing at some point during your deployment. Feel free to check out our <a href="https://github.com/cloud66/deploy_hooks" target="_blank">deploy hooks repository</a>, which contains examples for different use-cases.
</p>


## File Location/Format

In order for your deployment hooks to be picked up, you need a file called **deploy\_hooks.yml** to be present within a folder named **.cloud66** that is in turn located in the root of your source code, and checked into your repository.
<pre class="terminal">
repo::/.cloud66/deploy\_hooks.yml
</pre>

As the extension suggests, the deploy\_hooks.yml file is **YAML** formatted. And like database.yml or mongoid.yml, the file is split by environment initially. This allows definition of different deploy hooks for different environments (development, staging, production etc) within the single file.


### Copy file to destination

A sample **deploy\_hooks.yml** file could look like the following:
<pre class="terminal">
development:
    first\_thing:
      - source: /.cloud66/files/abc.def
        destination: ~/abc.def
        target: rails
</pre>

Because of the scoped **development**, the above deployment hook action will only apply to stacks in **development** environments. At the **first\_thing** hook point (ie. the beginning of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/files/abc.def** to target path **~/abc.def** on the **rails** server.

### **Copy file to destination and execute**

The above is useful if you want a content file on the target server, or if you want to replace a configuration file for instance. But what if you want to execute a custom script on the server?

For that, see the following **deploy\_hooks.yml** file:
<pre class="terminal">
production:
    last\_thing:
      - source: /.cloud66/my\_executable\_script.sh
        destination: /etc/somewhere/my\_script.sh
        target: postgresql
        execute: true
        sudo: true
</pre>

The above example will only apply to stacks in **production** environments. At the **last\_thing** hook point (ie. the end of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/my\_executable\_script.sh** to target path **/etc/somewhere/my\_script.sh** on the **postgresql** server, then it will **execute** the script using **sudo**.

### **Multiple deployment hooks**
Lastly, multiple deployment hooks can be defined within the same file:
<pre class="terminal">
production:
    first\_thing:
      - source: /.cloud66/files/my\_config.conf
        destination: /opt/somewhere/my\_config.conf
        target: rails
      - source: /.cloud66/files/my\_executable\_script.sh
        destination: /etc/somewhere/my\_script.sh
        target: rails
        execute: true
        sudo: true
    after\_rails:
      - source: /.cloud66/files/another\_executable\_script.sh
        destination: /etc/somewhere/my\_script.sh
        target: rails
        owner: ubuntu
        execute: true
        run\_as: nginx
        run\_on: single\_server
        apply\_during: build\_only
        parse: true
        halt\_on\_error: false
</pre>

Here, two deploy hook actions will be performed in sequence at the **first\_thing** deploy hook point, and a single deploy hook action will be performed at the **after\_rails** deploy hook point.
There is no upper limit to the number of actions that can be defined.

As you can see from the **after\_rails** deploy hook action above, there are addtional fields/options available that you can specify. See below for details on all the fields.

## Hook Points
<div class="notice">

        <h3>Important</h3>

        <p>Deployment hooks that have your RAILS\_STACK\_PATH as a destination and that occur before the application has actually created the folder (ie first\_thing, before\_rails etc) will cause permission errors during your code deployment.</p>
</div>

Currently the following hook points are available:

- **first\_thing**
- **before\_redis**
- **after\_redis**
- **before\_mysql**
- **after\_mysql**
- **before\_postgresql**
- **after\_postgresql**
- **before\_mongodb**
- **after\_mongodb**
- **before\_rails**
- **after\_rails**
- **before\_agent**
- **after\_agent**
- **last\_thing**

## Available Fields
Available fields are divided into mandatory and optional fields:

### Mandatory Fields
- **source**: This specifies the source location of your deployment hook file within your repository. Wildcards are not currently supported.
- **destination**: This is the destination path on your target server. Note that you can also specify environment variables in your destination field (ie. *<%= ENV\['RAILS\_STACK\_PATH'\] %>* for example)
- **target**: This is the target server type against the deploy hook action should be performed. If you have a shared server (ie. Rails and MySQL for example) then specifying *rails* or *mysql* will result in the same physical server target.

### Optional Fields

The default values (if the optional field is not explicitly specified) are shown in brackets

- **apply\_during** (**all**): When do you want the deploy hook action to take place? Available options are: *build\_only*; *deploy\_only*; or *all* (see below for build/deploy definitions)
- **execute** (**false**): Do you want to execute the file after it has been copied to its destination on the target server?
- **halt\_on\_error** (**true**): If there is an error during the deployment hook execution, should the whole deployment continue or halt?
- **owner** (**your\_server\_user**): Once the file is transmitted to the target server, what ownership permissions should be applied to it (and its destination folder)? An example could be "your\_user:your\_group".
- **parse** (**true**): Specifies whether the file being transferred should be parsed for ENV vars. Using this you can embed *<%= ENV\['YOUR\_ENV\_VAR'\] %>* for example in your source file, and have it resolved during the deploy hook action.
- **run\_on** (**single\_server**): If you have multiple servers in the same group (ie. many scaled-up Rails servers) then you can specify whether you want the deploy hook action to occur just once, or once against each server in that group. Valid values are: *single\_server* or *all\_servers*.
- **run_as** (**server_user**): If you are executing the file on your target server, allows you to define which user you would like the file to be executed as. Note: you can't specify both this and *sudo*.
- **sudo** (**false**): If you are executing the file on your target server, do you want that execution to be sudo-ed? Note: you can't specify both this and *run_as*.

## Build / Deploy Definition

A Cloud 66 *build* step occurs the first time a server is deployed. During *build*, the target server is provisioned (from scratch). The *build* step will re-occur until the stack has been successfully deployed at least once.
After a successful initial deployment, subsequent deployments are *deploy* steps.

During a Cloud 66 *deploy* step, code is redeployed, but only minor configuration amendment will occur.



















