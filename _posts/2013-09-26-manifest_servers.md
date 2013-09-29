---
layout: post
title:  "Manifest Servers (beta)"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Defining your servers in the Manifest file gives you fine control over their specifications.</p>

## Server Section

#### Name
server
#### Parent Section
application
#### Parameters
**unique_name**
_Required_

A unique name for this server

**extra_packages**
_Optional_

A list of extra apt packages to be installed on the server, before deploying the application.

**type**
_Optional_

Valid values: BYOS (Bring Your Own Server), BYOC (Bring Your Own Cloud)

**vendor**
_Optional. BYOC Only_

Cloud vendor to fire up the server on. Valid values are:
- aws
- rackspace
- digitalocean
- joyent
- linode
- telefonica

**region**
_Optional. BYOC Only_

Data center region to fire up the server in. Valid values are dependent on the cloud vendor:

[Vendor data center regions](/help/instance_regions)

**size**
_Optional. BYOC Only_

[Size of the server instance](/help/instance_names) created. Valid values depend on the vendor.

**address**
_Optional. BYOS Only_

Address of the server. This is only applicable to Bring Your Own Server setup.

**username**
_Optional. BYOS Only_

Username for the server. This is only applicable to Bring Your Own Server setup and should have be a sudoer root user on the box.

**ssh_key_name**
_Optional. BYOS Only_

Name of the SSH key used to access the server. You can add this SSH key via Cloud 66 web UI.

### Example: Extra Package

This example, installs `chrony` apt package on the server before deploying the application.

<pre class="terminal">
... server:
        unique_name: frontend
        extra_packages:
                - chrony
</pre>

### Example: Bring Your Own Cloud

For BYOC (*Bring-Your-Own-Cloud*) servers, vendor, size and region can be defined:
<pre class="terminal">
... server:
        unique_name: frontend
        type: BYOC
        vendor: aws
        region: us-east-1
        size: t1.micro
</pre>

<div class="notice">
        <h3>Important</h3>

        <p>In order to use your chosen vendor for BYOC mode, your associated vendor's API keys must already be associated with your Cloud 66 account.</p>
        <p>Only a single cloud vendor/region is supported amongst all servers within a single stack</p>
</div>

### Example: Bring Your Own Server

For BYOS (*Bring-Your-Own-Server*) servers, address, username and ssh_key_name can be defined:
<pre class="terminal">
... server:
        unique_name: frontend
        type: BYOS
        address: 123.123.123.123
        username: ubuntu
        ssh_key_name: my_server_key
</pre>

<div class="notice">
        <h3>Important</h3>
        <p>In order to use your chosen ssh_key_name for BYOS mode, your associated SSH key must already be associated with your Cloud 66 account Only a single username/ssh_key is currently supported amongst all servers within a single stack.</p>
    </div>
</div>

### Shared Servers

You can share a server between two applications. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the applications will then share the physical server:

<pre class="terminal">
... shared_server: *another_existing_servers_unique_name*
</pre>

### External Servers

If you would like to use an external server for an application (like using your own MySQL or AWS RDS for example), you can define that server as external.

External server definitions specify that the application is hosted on a server external to Cloud 66. This is not a valid target for your main application (ie. Rails) but may be appropriate for another application type (ie. MongoDB):

<pre class="terminal">
... server: external
</pre>
