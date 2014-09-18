---
layout: post
template: one-col
title:  "Docker deployments"
so_title: "Docker"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: stack-definition
lead: Deploy docker stacks through Cloud 66
search-tags: ['docker', 'docker_deployment.yml', 'docker deployment', 'deployment']
tags: ['Deployment', 'Docker']
---

<h2>Contents</h2>
<ul class="page-toc">

	<li><a href="#intro">How do I define a Docker stack?</a></li>
    <li><a href="#samples">Sample deployment configuration files</a></li>
    <li><a href="#composition">Composition of the docker_deployment.yml file</a></li>
        <li>
            <ul>
            <li><a href="#environments">Environments</a></li>
		   	<li><a href="#repositories">Repositories</a></li>
		   	<li><a href="#services">Services</a></li>
		   	<li><a href="#databases">Databases</a></li>
            <li><a href="#env_vars">Environment Variables</a></li>
            </ul>
        </li>
    </ul>
</li>
</ul>

<h2 id="intro">How do I define a Docker stack?</h2>

<div class="notice notice-danger">
	<h3>Important</h3>
    <p>Docker stacks are only currently available to users in the private beta (<a href="http://bit.ly/1oVXtQg">join the beta program</a>)</p>
</div>

Cloud 66 uses the presence of a docker_deployment.yml file to determine that your stack will be docker based, and figure out exactly what your docker stack architecture should be.

You can use this file to specify repositories for images, services that you would like to run as containers, and supporting services that you would like to run outside of containers (ie. databases)
In order for this file to be detected, it must be present in the root of your source repository with the name docker_deployment.yml

<pre class="terminal">
[source&#95;repo]/docker_deployment.yml
</pre>

The docker_deployment.yml file is **YAML** formatted and is split by environment just like database.yml or mongoid.yml. This allows for different configurations per environment within one file. YAML files are very particular about formatting, and an extra space or tab somewhere can render the file unreadable. You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.

<h3 id="samples">Sample docker_deployment.yml files</h3>

A simple example of a **docker_deployment.yml** files is as follows:

{% highlight yaml %}
production:                                 # Environment type
  services:                                 # container services
    my_web:                                 # arbitrary name for your service
      image: khash/simple_web               # source of your service's image
      command: bundle exec rackup -p 3000   # command to start your container
      local_ports: [3000]                   # ports for your container service
      public_port: "80:443"                 # exposed HTTP:HTTPS ports
  databases:                                # system services
    - "mysql"                               # install mysql
{% endhighlight %}

The above deployment configuration is only scoped to *production* stacks.
Here we have specified that we want to run a single service (with a mysql database backend)

A more powerful example of **docker_deployment.yml** is:

{% highlight yaml %}
production:                                 # Environment type
  repositories:                             # image repositories (can be private)
    my_repo:                                # arbitrary repo name
      url: quay.io                          # repository url
      username: _env:QUAY_USERNAME          # repository username (from Stack ENV var)
      password: _env:QUAY_PASSWORD          # repository password (from Stack ENV var)
      email: _env:QUAY_EMAIL                # repository email (from Stack ENV var)
  services:                                 # container services
    my_web:                                 # arbitrary name for your service
      image: khash/simple_web               # source of your service's image
      command: bundle exec rackup -p 3000   # command to start your container
      local_ports: [3000]                   # ports for your container service
      public_port: "80:443"                 # exposed ports for this service
    api_svc:                                # another arbitrary name
      image: quay.io/khash/node             # another image source
      command: node test.js                 # command to start your container
      local_ports: [1337]                   # ports for your container service
      public_port: "8080"                   # exposed HTTP:HTTPS ports for this service
      requires: ["web"]                     # requires that the "web" services is present
  databases:                                # system services
    - "mysql"                               # install MySQL
    - "redis"                               # install Redis
{% endhighlight %}

The above deployment configuration is only scoped to *production* stacks.
Here we have specified that we want to run two services (with a mysql database backend) - the services are being pulled from a private repository.

<div class="notice">
  <h3>Service servers</h3>
  <p>Services can be scaled up one or many times on single servers or across multiple servers, as desired.</p>
</div>

<h2 id="composition">Composition of the docker_deployment.yml file</h2>

The manifest file is divided into three broad sections:

<ul>
  <li>Repositories</li>
  <li>Services</li>
  <li>Databases</li>
</ul>

What follows is an in-depth guide into the options can be used.

<hr>

<h3 id="environments">Environments</h3>
You can select from the following environments:

- Production
- Development
- Staging
- QA
- Custom defined stack environment

<h3 id="repositories">Repositories</h3>
You can define your private repositories here. It is recommended to use environment variables to define any username/password/secret information in this file so you can avoid committing those to your source control.

At this point only a single private repository is allowed. An example of the repositories section is:

{% highlight yaml %}
... repositories:
      a_repo:                           # an arbitrary repo name
        url: quay.io                    # repository url
        username: _env:QUAY_USERNAME    # repository username (from Stack ENV var)
        password: _env:QUAY_PASSWORD    # repository password (from Stack ENV var)
        email: _env:QUAY_EMAIL     
{% endhighlight %}

<h3 id="services">Services</h3>
Each service is given an arbitrary name to identify it, then you have the following options to configure:

<table class='table table-bordered table-striped table-small'>
<tr>
    <td><b>Option</b></td>
    <td><b>Description</b></td>
</tr>
<tr>
    <td>image</td>
    <td>The name source of your docker image. This can optionally come from a private repo as long as the private repo credentials are supplied in the repositories section</td>
</tr>
<tr>
    <td>command</td>
    <td>the command to run in order to start the service</td>
</tr>
<tr>
    <td>build_command</td>
    <td>A command to run on the image the first time it is instantiated. An example of this could be a command to prepare the database tables</td>
</tr>
<tr>
    <td>deploy_command</td>
    <td>A command to run on the image every time it is deployed. An example of this could be a command to perform database migrations</td>
</tr>
<tr>
    <td>log_folder</td>
    <td>This is the folder into which the service will log, and will be mounted to /var/log/containers/service in the host filesystem</td>
</tr>
<tr>
    <td>local_ports</td>
    <td>The service ports that are runnin within the container</td>
</tr>
<tr>
    <td>public_port</td>
    <td>The ports that are made externally available. This value is in the format HTTP:HTTPS. An example is "80:443". For HTTP-only traffic it could be "80", and for HTTPS-only traffic could be ":443"</td>
</tr>
<tr>
    <td>requires</td>
    <td>This is an array of other defined service names that should be started before this service during build and deployment</td>
</tr>
<tr>
    <td>pre_start_signal</td>
    <td>This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment. An example could be "USR1" - but it depends on what your container is running as to which signals make sense</td>
</tr>
<tr>
    <td>pre_stop_sequence</td>
    <td>This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. An example is "1m:USR2:30s:USR1:50s".</td>
</tr>
<tr>
    <td>stop_grace</td>
    <td>This is a time between the docker TERM and KILL signals when docker stop is called and a container is stopped</td>
</tr>
<!-- <tr>
    <td>stop_grace</td>
    <td>This is a time between the docker TERM and KILL signals when docker stop is called and a container is stopped</td>
</tr>-->
</table>

Example services section with some of the options defined above:

{% highlight yaml %}
... services:
      my_web:                                 
        image: khash/simple_web               
        command: bundle exec rackup -p 3000   
        local_ports: [3000]                   
        public_port: "80:443"                 
{% endhighlight %}

<h3 id="databases">Databases</h3>
Databases are installed on your specified servers directly. As databases are fairly static components that rarely change without a migration, this avoids the complexity and overhead of running the DB in a container, and allows us to perform replication/backups as normal.

The allowed database values are:

- postgresql
- mysql
- redis
- mongodb
- elasticsearch
- rabbitmq

An example databases section is:

{% highlight yaml %}
... databases:
      - "mysql"
      - "elasticsearch"
{% endhighlight %}

<h3 id="env_vars">Environment Variables</h3>
Any environment variables defined in your stack will be made available within your service container.

You can reference environment variables in your deployment configuration using the following syntax:

{% highlight yaml %}
value: _env:MY_ENV_VAR
{% endhighlight %}

<!--





Cloud 66 currently recognizes the following application types in your manifest file:

<ul class="page-toc">
<li><a href="#elastic">ElasticSearch</a></li>
<li><a href="#haproxy">HAProxy</a></li>
<li><a href="#memcache">Memcached</a></li>
<li><a href="#mongo">MongoDB</a></li>
<li><a href="#postgis">PostGIS</a></li>
<li><a href="#psql">PostgreSQL</a></li>
<li><a href="#rabbit">RabbitMQ</a></li>
<li><a href="#rails">Rails</a></li>
<li><a href="#redis">Redis</a></li>
</ul>

<h3 id="servers">Server type</h3>
Every application defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all servers in an application type, you don't need to specify a server type. Servers can be deployed specifically to host that application, [be shared between multiple applications](/stack-definition/manifest-files.html#shared) (eg. Rails and MySQL on the same server) or be an [external server](/stack-definition/manifest-files.html#external) (eg. using an external database).

Here is an example of a server definition:
{% highlight ruby %}
... server:
        unique_name: frontend
{% endhighlight %}

These are the parameters that the <i>server</i> section can take:

**unique_name**
(_Required_)

<div class="notice">
	<h3>Note</h3>
    <p>This field is only required if you are specifying a server type.</p>
</div>

A unique name for this server.

**extra_packages**
(_Optional_)

A list of extra apt packages to be installed on the server, before deploying the application. This example installs `chrony` apt package on the server before deploying the application.

{% highlight ruby %}
... server:
        unique_name: frontend
        extra_packages:
                - chrony
{% endhighlight %}

**vendor**
(_Optional, BYOC Only_)

Cloud vendor to fire up the server on. Valid values:

- aws
- rackspace
- digitalocean
- joyent
- linode
- telefonica
- vexxhost
- googlecloud

{% highlight yaml %}
... server:
        unique_name: frontend
        vendor: aws
        region: us-east-1
        size: t1.micro
{% endhighlight %}

<div class="notice notice-danger">
	<h3>Important</h3>
    <p>Only a single cloud vendor and region is supported amongst servers within a stack.</p>
</div>


**region**
(_Optional, BYOC Only_)

[Data center region](/api/basics/instance-regions.html) to fire up the server in.

**size**
(_Optional, BYOC Only_)

[Size of the server instance](/api/basics/instance-names.html) created.

**address**
(_Optional, BYOS Only_)

Address of the server. For BYOS servers, <i>address</i>, <i>username</i> and <i>ssh_key_name</i> can be defined:

{% highlight yaml %}
... server:
        unique_name: frontend
        address: 123.123.123.123
        username: ubuntu
        ssh_key_name: my_server_key
{% endhighlight %}

<div class="notice notice-danger">
        <h3>Important</h3>
        <p>In order to use your chosen ssh_key_name for BYOS mode, your SSH key must already be associated with your Cloud 66 account.</p>
        <p>Only one username and ssh key is currently supported amongst servers within a stack.</p>
</div>

**username**
(_Optional, BYOS Only_)

Username for the server. This is only applicable to Bring Your Own Server setups, and you need to be a sudoer root user on the box.

**ssh_key_name**
(_Optional, BYOS Only_)

Name of the SSH key used to access the server. You can add this SSH key via Cloud 66 web UI.

<h4 id="shared">Shared Servers</h4>

You can share a server between two applications. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the applications will then share the physical server:

{% highlight yaml %}
... same_as: *another_existing_servers_unique_name*
{% endhighlight %}

<h4 id="external">External Servers</h4>

If you would like to use an external server for an application (like using your own MySQL or AWS RDS for example), you can define that server as external.

External server definitions specify that the application is hosted on a server external to Cloud 66. This is not a valid target for your main application (ie. Rails) but may be appropriate for another application type (ie. MongoDB):

<pre class="terminal">
... server: external
</pre>

<h3 id="app-specific">Application Type Section</h3>

<div class="notice">
        <h3>Important</h3>
        <p>You are <b>required</b> to specify a <a href="/stack-definition/manifest-files.html#servers">server</a> for application types, whereas configurations are <b>optional</b>.</p>
</div>

<hr>

<h4 id="elastic">ElasticSearch</h4>

- **version**<br/>
Specify the version of ElasticSearch you want to install (does not apply to external servers types)

<pre class="terminal">
... elasticsearch:
		servers:
		    server: ...
        configuration:
            version: 0.90.7
</pre>

<hr>

<h4 id="haproxy">HAProxy</h4>
You can use the manifest file to make small configuration changes to the HAProxy load balancer deployed by Cloud 66 at any point. These changes will be either be applied when you redeploy a stack with more than one server, rebuild HAProxy or edit [HAProxy CustomConfig](/how-to/haproxy-customconfig.html).

Currently they are limited to the following options:

- **httpchk**<br/>
The health-check configuration
- **balance**<br/>
The load balancing strategy
- **errorfile&#95;\*** <br/>
Location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer

Note: To find out about the available options for each one of the values, please refer to [HAProxy manual](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt).

<pre class="terminal">
haproxy:
    configuration:
        httpchk: HEAD / HTTP/1.0 (default value)
        balance: roundrobin (default value)
        errorfile&#95;400: /etc/haproxy/errors/400.http
        errorfile&#95;403: /etc/haproxy/errors/403.http
        errorfile&#95;408: /etc/haproxy/errors/408.http
        errorfile&#95;500: /etc/haproxy/errors/500.http
        errorfile&#95;502: /etc/haproxy/errors/502.http
        errorfile&#95;503: /etc/haproxy/errors/503.http
        errorfile&#95;504: /etc/haproxy/errors/504.http
</pre>

<hr>

<h4 id="memcached">Memcached</h4>

We don't currently support dedicated Memcached servers, although we plan to support this in the near future. We do support standalone (and scaling) Redis, and considering the [performance differences](http://jamieonsoftware.com/post/59738699304/memcached-vs-redis), it may be worth switching.

#### shared&#95;group:

You can use shared&#95;group to configure where your memcached server should be deployed (if it is used in your code).
By default memcached will be deployed on your web servers. However, you can set these values under "shared&#95;group" to change this behavior:

- web
- db
- redis

This will move the memcached deployment to any of these server groups.

#### configuration:
You can use the manifest file to make small configuration changes to the Memcached server deployed by cloud66.

- **memory**<br/>
Specify maximum memory(in MB) that can be used. Default value is 64
- **port**<br/>
Specify connection port. Default value is 11211
- **listen&#95;ip**<br/>
Specify which IP address to listen on. Default value is 0.0.0.0

<pre class="terminal">
... memcached:
        shared&#95;group: db
        configuration:
            memory: 1024
            port: 11215
            listen&#95;ip: 127.0.0.1
</pre>

<hr>

<h4 id="mongo">MongoDB</h4>

- **version**<br/>
Specify the version of MongoDB you want to install (does not apply to external servers types)

<pre class="terminal">
... mongodb:
		servers:
		    server: ...
        configuration:
            version: 2.4.8
</pre>

<hr>

<h4 id="postgresql">PostgreSQL</h4>

- **version**<br/>
Specify the version of PostgreSQL you want to install (does not apply to external servers types)
- **postgis**<br/>
Specify whether to include PostGIS (Note: unlike the PG version, this can be added after initial database creation)

<pre class="terminal">
... postgresql:
		servers:
		    server: ...
        configuration:
           	version: 9.3.4
           	postgis: true
</pre>

<h5 id="postgis">PostGIS version configuration</h5>

- **version**<br/>
Specify the version of PostGIS you want to install

<pre class="terminal">
production:
   postgresql:
	   servers:
	       server: ...
       configuration:
           postgis:
               version: 2.1.1
</pre>

<hr>

<h4 id="rabbit">RabbitMQ</h4>

- **version**<br/>
Specify the version of RabbitMQ you want to install (does not apply to external servers types)

<pre class="terminal">
... rabbitmq:
        servers:
            server: ...
       	configuration:
           	version: 3.2.1
</pre>

<hr>

<h4 id="rails">Rails</h4>
A Rails application type in the manifest file gives you fine control over things like the Ruby version or the server the rails application is deployed on.

- <b>ruby&#95;version</b><br/>
Specify the version of Ruby to use (overridden if present in Gemfile)
- <b>asset&#95;pipeline&#95;precompile</b><br/>
Specify whether to use asset pipeline compilation - this will be taken into account during redeployment
- <b>do&#95;initial&#95;db&#95;schema&#95;load</b><br/>
Specify whether to perform "rake db:schema:load" on new builds
- <b>reserved&#95;server&#95;memory</b><br/>
A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment
- <b>passenger&#95;process&#95;memory</b><br/>
A value in MB that Cloud 66 will use for each passenger process when calculating the passenger&#95;max&#95;pool&#95;size (Passenger-based stacks only) - this will be taken into account during redeployment
- <b>activeprotect</b><br/>
Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration
- <b>nginx</b><br/>
Specify configurations for Nginx, eg. CORS and [Perfect Forward Secrecy](http://en.wikipedia.org/wiki/Perfect_forward_secrecy) - this will be taken into account when your Nginx configuration is reloaded.

<pre class="terminal">
... rails:
		servers:
			server: ...
		configuration:
			ruby&#95;version: 1.9.3
			asset&#95;pipeline&#95;precompile: true
			do&#95;initial&#95;db&#95;schema&#95;load: false
			reserved&#95;server&#95;memory: 0 (default value)
			passenger&#95;process&#95;memory: 200 (default value)
			activeprotect:
                whitelist: 123.123.123.123,234.234.234.234
			nginx:
				cors: true
				perfect&#95;forward&#95;secrecy: true
</pre>

#### CORS configuration

If you want to, you can also specify the origin and methods for CORS.
<pre class="terminal">
... rails:
		servers:
		    server: ...
		configuration:
			nginx:
				cors:
					origin: '*'
					methods: 'GET, OPTION'
</pre>

<hr>

<h4 id="redis">Redis</h4>

- **version**<br/>
Specify the version of Redis you want to install (does not apply to external servers types - see below)

<pre class="terminal">
... redis:
		servers:
		    server: ...
		configuration:
			version: 2.6.10
</pre>

<hr>

<h2 id="environment_variables">Environment variables in the manifest</h3>
You can add your environment variables to your manifest files.

Here is an example:

{% highlight yaml %}
production:
    environment_variables:
        SOME_VARIABLE: value
        ANOTHER_ONE: another_value
        THIRD_ONE: AUTO_GENERATE
        LONG_ONE: AUTO_GENERATE_15
{% endhighlight %}

If you need to auto generate a value, you can use the `AUTO_GENERATE` keyword. It generates a 10 character long random string unless you specify the length after it: `AUTO_GENERATE_15` which generates a 15 character random string.

Environment variables set in your manifest file will only apply during the initial build of your stack. Please refer to our documentation on <a href="/deployment/env-vars.html">environment variables</a> if you'd like to set them beyond this point.

Any environment variable that is generated by the result of the code analysis (like database addresses) will override any value specified in the manifest file. In other words, you cannot specify a value like `MYSQL_ADDRESS` in your manifest file as it will be ignored.
-->