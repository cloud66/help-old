---
layout: post
template: one-col
title:  "Docker service configuration"
so_title: "docker"
nav_sticky: false
date:   2090-01-26 16:27:22
categories: building-your-stack
lead: Configuring your Docker service(s)
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#introduction">What is service configuration?</a></li>
    <li><a href="#how">How do I specify service configurations?</a></li>
    <li><a href="#examples">Service configuration examples</a></li>
        <li>
            <ul>
            <li><a href="#ex1">Example 1: Single service with MySQL database</a></li>
            <li><a href="#ex2">Example 2: Multiple services and databases</a></li>
            </ul>
        </li>
    <li><a href="#service-configs">Service configurations</a></li>
    <li><a href="#database-configs">Database configurations</a></li>
    <li><a href="#env_vars">Environment variables</a></li>
</li>
</ul>

<h2 id="introduction">What is service configuration?</h2>
Service configuration allows you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

- Defining build and deploy commands
- Specifying a central logging folder
- Setting port definitions for your containers
- Mount volumes into your containers
- Set dependencies between your containers

<h2 id="how">How do I specify service configurations?</h2>
While you're building your stack, service configurations are available on the _Advanced_ tab. Once your stack has been built, you can find this configuration under _Configure services_ in the right menu of your stack page. This form takes YAML input.

<h2 id="examples">Service configuration examples</h2>
<h3 id="ex1">Example 1: Single service with MySQL database</h3>
In this example, we'll be running a service called _web_, which is pulled from a Quay repository and requires a MySQL database.

{% highlight yaml %}
services:
  web:
    image: quay.io/cloud66/sample-rails  
    command: rackup -p 3000             
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    log_folder: /usr/src/app/log
    ports: ["3000:80:443"]        
databases:
  - "mysql"                              
{% endhighlight %}

As you can see above, the _web_ service is based on a Quay image and requires the _rackup -p 3000_ startup command. It has both a build and a deploy command and specifies a logging folder. Finally, the container is set to listen on port 3000, and uses external ports 80 and 443.

<h3 id="ex2">Example 2: Multiple services and databases</h3>
In this example, we'll be running two services - one for _web_ and the other for an _api_, as well as MySQL and Redis databases. You can define as many services as you need. The first time you build your stack, those services will be started on the first server you build but you can use the UI, toolbelt or the API to move them around.

{% highlight yaml %}
services:
  web:
    git_url: git@github.com:pkallberg/node-js-app.git
    git_branch: test   
    command: rackup -p 3000               
    build_command: rake db:migrate        
    deploy_command: rake db:migrate       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]     
    health: default
  api:
    image: quay.io/john/node              
    command: node test.js                 
    ports: ["1337:8080"]                  
    requires: ["web"]                     
databases:
  - "mysql"                               
  - "redis"                               
{% endhighlight %}

As you can see above, we are running a _web_ and _api_ service with different configurations. They are running on MySQL and Redis databases.

<h2 id="service-configs">Service configurations</h2>
Below is a table of the available configurations for a given service with a brief description. For more detailed information about an option, click the link provided.

<table class='table table-bordered table-striped table-small'>
<tr>
    <td><b>Option</b></td>
    <td><b>Description</b></td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#build_command">build_command</a></td>
    <td>Specifies the command you would like to run during stack build.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#build_root">build_root</a></td>
    <td>Specifies the directory of your repository in which you wish to run your Docker build.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#command">command</a></td>
    <td>Specifies the command used to start your container.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/scaling#services">constraints</a></td>
    <td>Specifies constraints for a service across the cluster.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#deploy_command">deploy_command</a></td>
    <td>Specifies the command you would like to run during stack deploy (runs once per service).</td>
</tr>
<tr>
    <td><a href="/network/service-network-settings#dns_behaviour">dns_behaviour</a></td>
    <td>Specifies the dns behaviour for this service. One of the values: <i>versioned</i>, <i>non-versioned</i>. Default value is <i>versioned</i></td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#dockerfile_path">dockerfile_path</a></td>
    <td>Specifies the location of the Dockerfile to be used for building this service, eg. <i>docker/Dockerfile</i>.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#git_url">git_url</a></td>
    <td>The Git repository URL your Docker image will be built with.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#git-branch">git_branch</a></td>
    <td>The Git repository branch your Docker image will be based on.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#health">health</a></td>
    <td>One of the values: <i>default</i>, <i>none</i> or a hash containing at least one of <i>type</i>, <i>endpoint</i>, <i>protocol</i>, <i>accept</i> or <i>timeout</i>.</td>
</tr>
<tr>
    <td><a href="/building-your-stack/building-your-docker-service#image">image</a></td>
    <td>The image you would typically run <code>docker pull</code> from.</td>
</tr>
<tr>
    <td><a href="/network/service-network-settings#load_balancing">load_balancing</a></td>
    <td>Specifies the load balancing method for this service. Accepted values are: <i>roundrobin</i>, <i>sticky</i>, <i>closest</i>. Default value is <i>roundrobin</i></td>
</tr>
<tr>
    <td><a href="/managing-your-stack/logging#docker">log_folder</a></td>
    <td>Folder your services logs to, mounted to <code>/var/log/containers/service</code> on the host filesystem.</td>
</tr>
<tr>
    <td><a href="/network/service-network-settings#ports">ports</a></td>
    <td>The ports that are running within the container, as well as their corresponding external ports.</td>
</tr>
<tr>
    <td>privileged <i>(default: false)</i></td>
    <td>Boolean value to indicate whether the container should be <a href="https://docs.docker.com/reference/run/#runtime-privilege-linux-capabilities-and-lxc-configuration">run with extended privileges</a>.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#pre_start">pre_start_signal</a></td>
    <td>This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#pre_stop">pre_stop_sequence</a></td>
    <td>This is a stop sequence that is executed on your running containers before they are shut down.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#requires">requires</a></td>
    <td>Array of other defined service names that should be started before this service during build and deployment.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#restart">restart_on_deploy</a> <i>(default: true)</i></td>
    <td>Boolean value to indicate whether the containers of this service should be restarted during deployment.</td>
</tr>

<tr>
    <td><a href="/managing-your-stack/service-life-cycle-management#stop_grace">stop_grace</a></td>
    <td>Duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped.</td>
</tr>
<tr>
    <td><a href="/network/service-network-settings#traffic_matches">traffic_matches</a></td>
    <td>The automatically configured traffic names in your Nginx config that will route traffic to these containers based on request DNS name. Allows microservices on the same port routes by subdomain for instance.</td>
</tr>
<tr>
    <td><a href="/managing-your-stack/service-storage">volumes</a></td>
    <td>The volumes that are mounted from your host into your container.</td>
</tr>
<tr>
    <td>work_dir</td>
    <td>Specifies the <a href="https://docs.docker.com/reference/builder/#workdir">working directory</a> in your image for any command to be run.</td>
</tr>

</table>

<hr>

<h2 id="database-configs">Database configurations</h2>
You can specify any required databases in the service configuration. As databases are fairly static components that rarely change without a migration, they aren't run in containers. This avoids the complexity and overhead of running databases in a container, and allows Cloud 66 to perform replication and backups as normal. These databases will be deployed and configured automatically, and their addresses and access credentials will be made available to the containers across the stack with environment variables.

The allowed database values are: `postgresql`, `mysql`, `redis`, `mongodb`, `elasticsearch` , `rabbitmq` and `glusterfs`. For example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        databases:
          - "mysql"
          - "elasticsearch"
{% endhighlight %}

<h2 id="env_vars">Environment variables</h2>
Any environment variable defined in your stack will be made available within your service container. You can also define new environment variable for a service or reference an environment variable in other stacks or services using the following syntax:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        env_vars:
            # Setting an environment variable
            ENV_NAME1: VALUE

            # Referencing a stack-wide variable
            ENV_NAME2: _env(STACK_ENV_VAR_NAME)

            # Referencing a stack-wide variable (with default fall-back)
            ENV_NAME3: _env(STACK_ENV_VAR_NAME:Default)

            # Referencing a service's variable
            ENV_NAME4: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME)

            # Referencing a service's variable (with default fall-back)
            ENV_NAME5: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)

            # Referencing another stack's variable
            ENV_NAME6: _env(STACK[STACK_UID].ENV_VAR_NAME)

            # Referencing another stack's variable (with default fall-back)
            ENV_NAME7: _env(STACK[STACK_UID].ENV_VAR_NAME:Default)

            # Referencing another stacks' service variable
            ENV_NAME8: _env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME)

            # Referencing another stacks' service variable (with default fall-back)
            ENV_NAME9: _env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)
{% endhighlight %}

In above example, all defined environment variables except `ENV_NAME1` are referenced to other environment variables. You can specify a default value for referenced environment variables that will be set if there is no suitable link value (such as `ENV_NAME3`).

In addition to this, you can pass environment variables into your Dockerfile during your build process (if using BuildGrid) with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the stack.