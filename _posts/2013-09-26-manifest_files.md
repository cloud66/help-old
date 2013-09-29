---
layout: post
title:  "Manifest Files (beta)"
date:   2013-09-24 10:51:22
categories: stack-features
---

<h1 class="doc-title">Manifest Files (beta)</h1>
<p class="lead">A Cloud 66 manifest file represent a way for you to be more explicit about your stacks composition. It allow you to specify server sizes, additionaly packages to install etc. Note: this file format is draft and potentially subject to change (though backwards compatibility will always be attempted).</p>

## File Location/Format

In order for your manifest file to be picked up, you need a file called **manifest.yml** to be present within a folder named **.cloud66** that is in turn located in the root of your source code, and checked into your repository.
<pre class="terminal">
[source_repo]/.cloud66/manifest.yml
</pre>

## Getting Started

As the extension suggests, the manifest.yml file is **YAML** formatted. And like database.yml or mongoid.yml, the file is split by environment initially. This allows definition of different deploy hooks for different environments (development, staging, production etc) within the single file.

You can always check the validity of your YAML file with a command line this:
<p>
<kbd>
  ruby -e 'require "yaml"; YAML.load_file("/path_to/manifest.yml")'
</kbd>
</p>


<div class="notice">
        <h3>Important</h3>
        <p>Although the file format is generic enough to specify any number of infrastructure combinations, your basic stack infrastructure (ie. your main server type, databases etc) is still primarily defined by the Cloud 66 stack analysis results. What this means is that although you can specify in your manifest file that you want a node.js server running, that will be ignored unless Cloud 66 supports that type explicitly.</p>
        <p>The primary idea is that this file sits on top of the infrastructure determined during the stack analysis phase, allowing you to tweak the specifications of your resulting infrastructure.</p>
        <p>So if you specify a size of 'X' in your manifest file, but choose a size of 'Y' from the analysis results during deployment, then size 'Y' will be used going forward.</p>
</div>

Sample **manifest.yml** contents could look like the following:
<pre class="terminal">
development:
    rails:
        server:
            unique_name: frontend
            type: BYOC
            vendor: aws
            region: us-east-1
            size: t1.micro
    mysql:
        shared_server: frontend
</pre>

Because of the scoped **development**, the above example will apply to **development** environment stacks only.
The sample above specifies that a single server called **frontend** will be created with the above specified vendor/region/size.
That single server will also host your database locally.

Using the manifest file also allows some features to be defined which are not currently available through the Cloud 66 UI. Some examples would be:
<pre class="terminal">
production:
    rails:
        server:
            unique_name: frontend
            extra_packages:
                - atop
                - chrony
    postgresql:
        server:
            unique_name: backend
            extra_packages:
                - chrony
        configuration:
            version: 9.2.3
</pre>

Again, the above manifest is scoped to **production** stacks only. Here we have specified a size for the separate database server hosting our PostgreSQL database.
We've also specified that we want extra apt-get packages to be installed on each of the servers (this occurs during the initial server preparation step), and that we want the version of PostgreSQL installed to be 9.2.3 (*see specific application configurations currently available below*)

<div class="notice">
        <h3>Important</h3>

        <p>If we were to choose to deploy the database locally during the analysis results deployment step, then this manifest file in the example above would be overridded with our choice.</p>
        <p>Also, the size of the database server is specific to the AWS vendor, should a different vendor be selected then this would result in an error. Mixed vendors and regions are not currently supported within a single stack</p>
</div>

## Application Types
Cloud 66 will currently recognize the following application types in your manifest file (more will be added soon):
- Rails
- MySql
- PostgreSQL
- MongoDB
- Redis
- Memcached
- HAProxy
- PostGIS

Some application types can defined additional configurations - see below for more information regarding configurations in specific application types.

### Example: Rails configuration

A Rails application type in the manifest file gives you fine control over things like the ruby version or the server the rails application is deployed on.

A Rails application type can containt the following sub-sections:

#### Server
[Server section](/help/manifest_servers) desribes the specifications of a server running the application.

#### Configuration
Configuration section contains an application type's specific configuration items.

[Manifest application type information](/help/manifest_applications) contains more detailed application specific configuration information.

## Servers

Every application defined in the manifest file must be bound to a server. Servers can be deployed specifically to host that application, be shared between multiple applications (like running Rails and MySQL on the same server) or be an external server (like when you want to use an external PostgreSQL database)

Here is an example of a server definition:
<pre class="terminal">
... server:
        unique_name: frontend
</pre>

Find out more detailed information about [Manifest Server Definition](/help/manifest_servers)