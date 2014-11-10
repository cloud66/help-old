---
layout: post
template: one-col
title:  "Docker deployments"
so_title: "Docker"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: beta
lead: Deploy docker stacks through Cloud 66
search-tags: ['docker', 'docker_deployment.yml', 'docker deployment', 'deployment']
tags: ['Deployment', 'Docker']
exclude_from_search: true
exclude_from_index: true
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

<div class="notice">
  <h3>Before your start</h3>
    <p>You might want to also read a <a href="/beta/docker-deployments">step by step guide to building your first Docker backed stack</a>.</p>
</div>

<h2 id="intro">How do I define a Docker stack?</h2>

<div class="notice notice-danger">
	<h3>Important</h3>
    <p>Docker stacks are only currently available to users in the private beta &mdash; <a href="http://go.c66.me/c66beta">join the beta program</a></p>
</div>

Cloud 66 uses the presence of a `docker_deployment.yml` file to determine that your stack will be docker based, and figure out exactly what your docker stack architecture should be.

You can use this file to specify repositories for images, services that you would like to run as containers, and supporting services that you would like to run outside of containers (ie. databases)
In order for this file to be detected, it must be present in the root of your source repository with the name `docker_deployment.yml`

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
      image: quay.io/cloud66/sample-rails   # source of your service's image
      command: rackup -p 3000               # command to start your container
      build_command: rake db:migrate        # migrate db (during build)
      deploy_command: rake db:migrate       # migrate db (during deploy)
      log_folder: /usr/src/app/log          # the container log folder
      ports: ["3000:80:443"]                # ports definitions for your container service            
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
      image: quay.io/cloud66/sample-rails   # source of your service's image
      command: rackup -p 3000               # command to start your container
      build_command: rake db:migrate        # migrate db (during build)
      deploy_command: rake db:migrate       # migrate db (during deploy)
      log_folder: /usr/src/app/log          # the container log folder
      ports: ["3000:80:443", "4000"]        # ports definitions for your container service
      volumes: ["/tmp:/tmp/mnt_folder"]     # mount volumes definitions
    api_svc:                                # another arbitrary name
      image: quay.io/john/node              # another image source
      command: node test.js                 # command to start your container
      ports: ["1337:8080"]                  # ports definitions for your container service
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
    <td>This is the folder into which the service will log, and will be mounted to <code>/var/log/containers/service</code> in the host filesystem</td>
</tr>
<tr>
    <td>volumes</td>
    <td>The volumes that are mounted from your host into your container. This is an array of volume definitions; each volume definition is in the format <i>HOST_FOLDER:CONTAINER_FOLDER:(RW/RO)</i>. The RW/RO on the end is optional to indicate readonly/readwrite access from the container - the default is readwrite. An example is
      <code>["/tmp:/tmp/mount_from_host"]</code> or <code>["/tmp:/tmp/mount_from_host","/my/folder:/somewhere_else:ro"]</code>.</td>
</tr>
<tr>
    <td>ports</td>
    <td>The ports that are running within the container, as well as their corresponding external ports. This is an array of port definitions; each port definition values is in the format <i>CONTAINER_PORT:HTTP_PORT:HTTPS_PORT</i>. An example is
      <code>["3000:80:443"]</code>. For no external ports being exposed, it could be
      <code>["3000"]</code>. For HTTP-only traffic it could be
      <code>["3000:80"]</code>, and for HTTPS-only traffic could be <code>["3000::443"]</code></td>
</tr>
<tr>
    <td>requires</td>
    <td>This is an array of other defined service names that should be started before this service during build and deployment</td>
</tr>
<tr>
    <td>restart_on_deploy</td>
    <td>This is a boolean value to indicate whether the containers of this service should be restarted during deployment or not (default: true)</td>
</tr>
<tr>
    <td>pre_start_signal</td>
    <td>This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment. An example could be <code>USR1</code> - but it depends on what your container is running as to which signals make sense</td>
</tr>
<tr>
    <td>pre_stop_sequence</td>
    <td>This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. An example is <code>1m:USR2:30s:USR1:50s</code>.</td>
</tr>
<tr>
    <td>stop_grace</td>
    <td>This is a duration (see below) between the docker <code>TERM</code> and <code>KILL</code> signals when docker stop is called and a container is stopped</td>
</tr>
</table>

These are some examples of duration value like **stop_grace** or the duration part of **pre_stop_sequence**:

{% highlight yaml %}
  1m  # 1 minutes
  30s # 30 seconds
  1h  # 1 hour
{% endhighlight %}

Valid values are `s` for seconds, `m` for minutes and `h` for hours.

Valid values for a signal are below (without the quotes):

{% highlight ruby %}
  'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

Example services section with some of the options defined above:

{% highlight yaml %}
... services:
      my_web:                                 
        image: quay.io/cloud66/sample-rails
        command: rackup -p 3000
        build_command: rake db:migrate
        deploy_command: rake db:migrate
        log_folder: /usr/src/app/log
        ports: ["3000:80:443"]                   
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