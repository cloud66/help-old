---
layout: post
template: one-col
title:  "Getting started with Manifest files"
so_title: "manifest"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: building-your-stack
lead: Configure advanced settings of your stack
search-tags: []
tags: ['Deployment']
---

## What is a Manifest file?

Manifest is a file that describes the setup of the components that run your stack. 

With a Manifest file you can configure advanced settings for your stack from the types of servers you want to some less frequently used settings like web server CORS or HAProxy health check URLs.

## What can I do with Manifest files?

Manifest files allow you to control settings that are not usually available in the UI or thorugh [Cloud 66 Toolbelt](http://help.cloud66.com/toolbelt/toolbelt-introduction). 

Some examples of the settings you can control with a Manifest file are:

- Choose the server size and region for each part of your stack.
- Install extra pacakges on servers.
- Explicitly select the version of a component like Ruby or PostgreSQL for your stack.
- Configure the setup of your application components to share servers.
- Overwrite component specific configurations like HAProxy health check page or Nginx CORS settings.

...and much more!

## How can I use the Manifest file?

To use the features of Manifest file you have to create a file called `manifest.yml` under a folder called `.cloud66` in your source control.
Cloud 66 looks for this file everytime you build a new stack or deploy an existing one. If it finds it, it will act on it.

## Let's get started

First lets create an empty Manifest file. (Let's assume your code is in `/my/source/code/`)

<pre class="prettyprint">
$ cd /my/source/code/
$ mkdir .cloud66
$ touch manifest.yml
</pre>

Now open `manifest.yml` with your favourite text editor.


### Example 1: Setting Ruby version

Let's start by setting the version of Ruby to 2.1.1 for our stack.

The top level node in `manifest.yml` is the stack environment. Let's assume our stack is a **production Rails** stack:

<pre class="prettyprint">
production:
    rails:
        configuration:
            ruby_version: 2.1.1    
</pre>

#### What just happened?

**production**
The top node is the stack environment node. 

**rails**
The second level is the *application type*. This tells Cloud 66 the settings below are related to Rails part of the stack (as opposed to database for example).

**configuration**
Under that you can see `configuration` where all component specific configurations are located.

**ruby_version**
The last node is the `ruby_version` leaf which specifies the version of ruby we would like to use on the Rails servers to `2.1.1`.

<div class="notice notice-warning">
    <h3>Is my yaml valid?</h3>
    <p>Manifest should be a valid yaml file. You can always check the validity of your yaml file at <a href="http://www.yamllint.com/">YAML Lint</a> or by running this command in your teminal:
    <br/>
    <code>
    $ ruby -e "require 'yaml'; YAML.load_file('/my/source/code/.cloud66/manifest.yml')"
    </code>
    </p>
</div>


### Pushing it live

Now that you have your `manifest.yml` next to your source code under `.cloud66` folder, you can commit this file into your git repository and deploy a new stack with it.

<div class="notice">
    <h3>Need Help Building your first stack?</h3>
    <p>Read about the <a href="http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66">basics of Cloud 66 stacks</a>.</p>
</div>

Having a `manifest.yml` in the source code disables the UI settings for the parts of the stack that are defined in the Manifest file. In our example, having a specific ruby version in our `manifest.yml` means the Ruby version selector dropdown will be disabled and fixed to `2.1.1` and your Rails servers will be built with Ruby 2.1.1 on them.

### Example 2: Change CORS settings

Previous sample was an example of how to use Manifest files to build a stack with custom configurations. You can also use Manifest files to make some configuration changes to an existing stack. One of those cases is changing CORS settings of your web servers.

<div class="notice notice-info">
    <h3>What is CORS?</h3>
    <p>Cross Origin Resource Sharing is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated.
    </p>
</div>

To get started, open up your `manifest.yml` in a text editor and enter the following lines in there:

<pre class="prettyprint">
production:
    rails:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTION'
</pre>

#### What just happened?

**production**
The top node is the stack environment node. 

**rails**
The second level is the *application type*. This tells Cloud 66 the settings below are related to Rails part of the stack (as opposed to database for example).

**configuration**
Under that you can see `configuration` where all component specific configurations are located.

**nginx**
Here is where we put nginx related configuration settings.

**cors**
CORS related settings to follow

**origin**
CORS setting: What are the valid origin domains for a CORS request.

**methods**
CORS setting: HTTP methods allowed for CORS requests.

### Pushing it live

To push your new Manifest file to an existing stack, commit the `manifest.yml` into your source control under `.cloud66` folder in your source code.

Althohg redeploying the stack will set the configuration settings on the stack but will not push down all the changes to your servers (in this nginx which is where the change needs to happen). To force nginx configuration changes to be pushed to all servers we can use stack settings. There is a setting on the stack, called `reconfigure.nginx`. You can change this setting for your next deployment with the following [Toolbelt](http://help.cloud66.com/toolbelt/toolbelt-introduction) command (replace `my_stack` with your stack name):

<pre class="prettyprint">
$ cx set -s my_stack reconfigure.nginx true
</pre>

This will force nginx configuration to be rebuilt as part of the next redeployment. Now you can redeploy your stack and CORS settings will be changed on your web servers.

## The Manifest structure

As you saw in these examples Manifest settings can be applied during the build or redeployment of a stack depending on each setting. They can also change a wide range of things about your stack. Now let's see how the structure of a Manifest file looks like:

Manifest file is a `yaml` file called `manifest.yml` which lives under `.cloud66` of your stack's source control. 

### First Level: Environment

The first level of `manifest.yml` is the environment of your stack. This allows you to use the same `manifest.yml` for multiple environments of the same stack. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your Manifest files.

### Second Level: Application Type

Application Type determines which part of the stack is affected by this section. Available options are:

- rails
- postgresql
- mongodb
- postgis
- redis
- elasticsearch
- memcached

The names above suggest which part of the stack the settings apply to. You can find out more about each section here.

### Third Level (1): Configurations

The third level of the Manifest file determines the specific settings of the Application Type we want to change. As seen on example 2, changing CORS settings lives under **rails** Application Type and the **configuration** node. 

Under the **configuration** node, lives the specific configuration settings for whatever component you would like to configure. You can find more information about specifics here. Here is an example to set the version of ElasticSearch to `0.90.7`:

<pre class="prettyprint">
production:
    elasticsearch:
        configuration:
            version: 0.90.7
</pre>

### Third Level (2): Servers

As well as stack level configurations, Manifest files can have settings per server as well. This is where those settings are specified. Here is an example to specify the region, availability zone and server size and name for one of your Rails servers:

<pre class="prettyprint">
production:
    rails:
        servers:
            server:
                unique_name: Gryphon
                vendor: aws
                region: us-east-1
                size: t1.micro
</pre>
