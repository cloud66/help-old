---
layout: post
template: one-col
title:  "Getting started with manifest files"
so_title: "manifest"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: building-your-stack
lead: Configure advanced settings of your stack
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#intro">What is a manifest file?</a></li>
    <li><a href="#how">How can I use a manifest file?</a></li>
    <li><a href="#examples">Manifest file examples</a></li>
        <li>
        <ul>
            <li><a href="#example1">Example 1: Specifying a Docker version</a></li>
            <li><a href="#example2">Example 2: Change CORS settings</a></li>
        </ul>
        </li>    
    <li><a href="#structure">Manifest file structure</a></li>
        <li>
        <ul>
            <li><a href="#first">First level: Environment</a></li>
            <li><a href="#second">Second level: Application type</a></li>
            <li><a href="#thirdone">Third Level (1): Configurations</a></li>
            <li><a href="#thirdtwo">Third Level (2): Servers</a></li>
        </ul>
        </li>       
</li>
</ul>

<h2 id="intro">What is a manifest file?</h2>

A manifest files allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack. If you're already familiar with manifest files, refer to [Building a manifest file](/building-your-stack/building-your-manifest-file).

These are just some examples of the settings you can control with a manifest file:

- Defining sizes and data center region for your servers
- Installing extra packages
- Specifying a component version
- Configure your stack components to share a server
- Customize component-specific configurations

<h2 id="how">How can I use a manifest file?</h2>

The way to use this functionality differs from _Rails/Rack_ to _Docker_ stacks:

- For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
- For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the `Configure manifest` item in the right menu of your stack page.

<h2 id="examples">Manifest file examples</h2>

<h3 id="example1">Example 1: Specifying a Docker version</h3>
In this example, we'll set the version of Docker on your stack to 1.4.1. The top level node is the stack environment - the example below will therefore apply to the production environment.

<pre class="prettyprint">
production:
    docker:
        configuration:
            version: 1.4.1
</pre>

This is how it works:

**production** The top node is the stack environment node. 

**docker** The second level is the *application type* to apply the settings to.

**configuration** As part of the application type, set configuration variables.

**version** Lastly, the configuration variable you wish to specify.

<div class="notice notice-warning">
    <h3>Is my yaml valid?</h3>
    <p>The manifest file is YAML formatted. You can check its validity at <a href="http://www.yamllint.com/" target="_blank">YAML Lint</a> or with this command:
    <br/>
    <code>
    $ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"
    </code>
    </p>
</div>

If you'd like to use a _Rails/Rack_ stack, once your `manifest.yml` file is in your `.cloud66` folder and checked in, you can go ahead and build your stack.

If you'd like to use a _Docker_ stack, create it and use the _Advanced_ tab after your code has been analyzed to provide your manifest content.

<div class="notice">
    <h3>Need Help Building your first stack?</h3>
    <p>Read about <a href="http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66">building your first Cloud 66 stack</a>.</p>
</div>

<h3 id="example2">Example 2: Change CORS settings</h3>

In the previous example, we used a manifest file to build a stack with a custom configuration. You can also use this file to make configuration changes to an existing stack. One of these cases is for changing the CORS settings on your web servers.

<div class="notice notice-info">
    <h3>What is CORS?</h3>
    <p>Cross Origin Resource Sharing is a mechanism that allows many resources (e.g. fonts, JavaScript etc.) on a web page to be requested from another domain outside the domain from which the resource originated.
    </p>
</div>

To get started, open up your `manifest.yml` file in a text editor and enter the following lines in there:

<pre class="prettyprint">
production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
</pre>

This is how it works:

**production** The top node is the stack environment node. 

**docker** The second level is the *application type* to apply the settings to.

**configuration** As part of the application type, set configuration variables.

**nginx** This node allows you to set configurations for your Nginx server.

**cors** CORS related settings to follow.

**origin** CORS setting: What are the valid origin domains for a CORS request.

**methods** CORS setting: HTTP methods allowed for CORS requests.

Now that your `manifest.yml` file is in place under your `.cloud66` folder, you can commit this file to your Git and deploy a new stack with it.

Although redeploying your stack will set the configuration settings for the stack, it will not automatically push down all the changes to your Nginx servers. To force Nginx configuration changes to be pushed to your servers, we can use a stack setting in the [Cloud 66 toolbelt] called `reconfigure.nginx`. Simply use the following command to push the change (replacing `my_stack` with your stack name):

<pre class="prettyprint">
$ cx settings set -s my_stack reconfigure.nginx true
</pre>

This will force your Nginx configuration to be rebuilt during the next redeployment. Once you redeploy, the CORS settings will be updated on your web servers.

<h2 id="structure">Manifest file structure</h2>

As evidenced in the examples above, manifest file settings can be applied during the build of a new stack or an existing stack depending on the type of setting. They can also change a wide range of settings and configurations on your stack. Now let's learn about the structure of a manifest file.

The manifest file is called `manifest.yml` and is `YAML` formatted. This file should be placed in the `.cloud66` folder of your Git repository if you're using a _Rails/Rack_ stack.

<h3 id="first">First level: Environment</h3>

The first level of `manifest.yml` is the environment of your stack. This allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.

<h3 id="second">Second level: Application type</h3>

Application type determines which part of the stack is affected by this section. Available options are:

- docker
- elasticsearch
- gateway
- glusterfs
- load_balancer
- memcached
- mongodb
- mysql
- nginx
- postgis
- postgresql
- rails
- redis
- sinatra

The names above suggest which part of the stack the settings apply to. You can find out more about each section below.

<h3 id="thirdone">Third Level (1): Configurations</h3>

The third level of the manifest file determines the specific settings for the application type we want to change. As seen in **example 2**, changing CORS settings goes under the **docker** application type and the **configuration** node. 

For example, this is how to set the version of ElasticSearch to `0.90.7`:

<pre class="prettyprint">
production:
    elasticsearch:
        configuration:
            version: 0.90.7
</pre>

<h3 id="thirdtwo">Third Level (2): Servers</h3>

As well as stack level configurations, manifest files can have settings per server as well. The **servers** section is where those settings are specified. Here is an example to specify the cloud vendor, region, server size and server name for one of your Docker servers. NOTE: `key_name` is optional and is used to select the named vendor cloud key in the case where there are multiple accounts available for the same cloud provider.

<pre class="prettyprint">
production:
    docker:
        servers:
            server:
                unique_name: app                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default
</pre>
