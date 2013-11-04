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

In order for your deployment hooks to be picked up, you need a file called **deploy&#95;hooks.yml** to be present within a folder named **.cloud66** that is in turn located in the root of your source code, and checked into your repository.
<pre class="terminal">
repo::/.cloud66/deploy&#95;hooks.yml
</pre>

As the extension suggests, the deploy&#95;hooks.yml file is **YAML** formatted. And like database.yml or mongoid.yml, the file is split by environment initially. This allows definition of different deploy hooks for different environments (development, staging, production etc) within the single file.


### Copy file to destination

A sample **deploy&#95;hooks.yml** file could look like the following:
<pre class="terminal">
development:
    first&#95;thing:
      - source: /.cloud66/files/abc.def
        destination: ~/abc.def
        target: rails
</pre>

Because of the scoped **development**, the above deployment hook action will only apply to stacks in **development** environments. At the **first&#95;thing** hook point (ie. the beginning of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/files/abc.def** to target path **~/abc.def** on the **rails** server.

### **Copy file to destination and execute**

The above is useful if you want a content file on the target server, or if you want to replace a configuration file for instance. But what if you want to execute a custom script on the server?

For that, see the following **deploy&#95;hooks.yml** file:
<pre class="terminal">
production:
    last&#95;thing:
      - source: /.cloud66/my&#95;executable&#95;script.sh
        destination: /etc/somewhere/my&#95;script.sh
        target: postgresql
        execute: true
        sudo: true
</pre>

The above example will only apply to stacks in **production** environments. At the **last&#95;thing** hook point (ie. the end of builds and deployments - see below for *build and deployment definitions*), it will transfer the file **repo::/.cloud66/my&#95;executable&#95;script.sh** to target path **/etc/somewhere/my&#95;script.sh** on the **postgresql** server, then it will **execute** the script using **sudo**.

### **Multiple deployment hooks**
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

Here, two deploy hook actions will be performed in sequence at the **first&#95;thing** deploy hook point, and a single deploy hook action will be performed at the **after&#95;rails** deploy hook point.
There is no upper limit to the number of actions that can be defined.

As you can see from the **after&#95;rails** deploy hook action above, there are additional fields/options available that you can specify. See below for details on all the fields.

## Hook Points
<div class="notice">

        <h3>Important</h3>

        <p>Deployment hooks that have your RAILS&#95;STACK&#95;PATH as a destination and that occur before the application has actually created the folder (ie first&#95;thing, before&#95;rails etc) will cause permission errors during your code deployment.</p>
</div>

Currently the following hook points are available:

- **first&#95;thing**
- **before&#95;redis**
- **after&#95;redis**
- **before&#95;mysql**
- **after&#95;mysql**
- **before&#95;postgresql**
- **after&#95;postgresql**
- **before&#95;mongodb**
- **after&#95;mongodb**
- **before&#95;rails**
- **after&#95;rails**
- **before&#95;agent**
- **after&#95;agent**
- **last&#95;thing**

## Available Fields
Available fields are divided into mandatory and optional fields:

### Mandatory Fields
- **source**: This specifies the source location of your deployment hook file within your repository. Wildcards are not currently supported.
- **destination**: This is the destination path on your target server. Note that you can also specify environment variables in your destination field (ie. *<%= ENV\['RAILS&#95;STACK&#95;PATH'\] %>* for example)
- **target**: This is the target server type against the deploy hook action should be performed. If you have a shared server (ie. Rails and MySQL for example) then specifying *rails* or *mysql* will result in the same physical server target.

### Optional Fields

The default values (if the optional field is not explicitly specified) are shown in brackets

- **apply&#95;during** (**all**): When do you want the deploy hook action to take place? Available options are: *build&#95;only*; *deploy&#95;only*; or *all* (see below for build/deploy definitions)
- **execute** (**false**): Do you want to execute the file after it has been copied to its destination on the target server?
- **halt&#95;on&#95;error** (**true**): If there is an error during the deployment hook execution, should the whole deployment continue or halt?
- **owner** (**your&#95;server&#95;user**): Once the file is transmitted to the target server, what ownership permissions should be applied to it (and its destination folder)? An example could be "your&#95;user:your&#95;group".
- **parse** (**true**): Specifies whether the file being transferred should be parsed for ENV vars. Using this you can embed *<%= ENV\['YOUR&#95;ENV&#95;VAR'\] %>* for example in your source file, and have it resolved during the deploy hook action.
- **run&#95;on** (**single&#95;server**): If you have multiple servers in the same group (ie. many scaled-up Rails servers) then you can specify whether you want the deploy hook action to occur just once, or once against each server in that group. Valid values are: *single&#95;server* or *all&#95;servers*.
- **run&#95;as** (**server&#95;user**): If you are executing the file on your target server, allows you to define which user you would like the file to be executed as. Note: you can't specify both this and *sudo*.
- **sudo** (**false**): If you are executing the file on your target server, do you want that execution to be sudo-ed? Note: you can't specify both this and *run&#95;as*.

## Build / Deploy Definition

A Cloud 66 *build* step occurs the first time a server is deployed. During *build*, the target server is provisioned (from scratch). The *build* step will re-occur until the stack has been successfully deployed at least once.
After a successful initial deployment, subsequent deployments are *deploy* steps.

During a Cloud 66 *deploy* step, code is redeployed, but only minor configuration amendment will occur.



















