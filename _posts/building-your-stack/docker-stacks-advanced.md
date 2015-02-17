---
layout: post
template: one-col
title:  "Advanced Docker deployments"
so_title: "docker"
nav_sticky: false
date:   2090-01-26 16:27:22
categories: building-your-stack
lead: Advanced features around Docker deployments
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
Service configurations allow you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

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
services:                                 # container services
  web:                                    # arbitrary name for your service
    image: quay.io/cloud66/sample-rails  
    command: rackup -p 3000             
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    log_folder: /usr/src/app/log
    ports: ["3000:80:443"]        
databases:                                # system services
  - "mysql"                              
{% endhighlight %}

As you can see above, the _web_ service is based on a Quay image and requires the _rackup -p 3000_ startup command. It has both a build and a deploy command and specifies a logging folder. Finally, the container is set to listen on port 3000, and uses external ports 80 and 443.

<h3 id="ex2">Example 2: Multiple services and databases</h3>
In this example, we'll be running two services - one for _web_ and the other for an _api_, as well as MySQL and Redis databases. You can define as many services as you need. The first time you build your stack, those services will be started on the first server you build but you can use the UI, toolbelt or the API to move them around.

{% highlight yaml %}
services:                                 # container services
  web:                                    # arbitrary name for your service
    git: git@github.com:pkallberg/node-js-app.git
    git_branch: test   
    command: rackup -p 3000               
    build_command: rake db:migrate        
    deploy_command: rake db:migrate       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]     
    health: default                       # use the default health check for this service
  api:                                    # another arbitrary name
    image: quay.io/john/node              
    command: node test.js                 
    ports: ["1337:8080"]                  
    requires: ["web"]                     
databases:                                # system services
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
    <td><a href="#image">image</a></td>
    <td>The image you would typically run <code>docker pull</code> from.</td>
</tr>
<tr>
    <td><a href="#git">git</a></td>
    <td>The Git repository URL your Docker image will be built with.</td>
</tr>
<tr>
    <td><a href="#git-branch">git_branch</a></td>
    <td>The Git repository branch your Docker image will be based on.</td>
</tr>
<tr>
    <td>command</td>
    <td>Specifies the command used to start your container.</td>
</tr>
<tr>
    <td>build_command</td>
    <td>Specifies the command you would like to run during stack build.</td>
</tr>
<tr>
    <td>deploy_command</td>
    <td>Specifies the command you would like to run during stack deploy.</td>
</tr>
<tr>
    <td><a href="#log_folder">log_folder</a></td>
    <td>Folder your services logs to, mounted to <code>/var/log/containers/service</code> on the host filesystem.</td>
</tr>
<tr>
    <td><a href="#volumes">volumes</a></td>
    <td>The volumes that are mounted from your host into your container.</td>
</tr>
<tr>
    <td><a href="#ports">ports</a></td>
    <td>The ports that are running within the container, as well as their corresponding external ports.</td>
</tr>
<tr>
    <td><a href="#traffic_matches">traffic_matches</a></td>
    <td>The automatically configured traffic names in your Nginx config that will route traffic to these containers based on request DNS name. Allows microservices on the same port routes by subdomain for instance.</td>
</tr>
<tr>
    <td><a href="#health">health</a></td>
    <td>One of the values: 'default', 'none' or a hash containing at least one of 'type:', endpoint:', 'protocol:', 'accept:' or 'timeout:'</td>
</tr>
<tr>
    <td><a href="#requires">requires</a></td>
    <td>Array of other defined service names that should be started before this service during build and deployment.</td>
</tr>
<tr>
    <td>restart_on_deploy <i>(default: true)</i></td>
    <td>Boolean value to indicate whether the containers of this service should be restarted during deployment.</td>
</tr>
<tr>
    <td><a href="#pre_start">pre_start_signal</a></td>
    <td>This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment.</td>
</tr>
<tr>
    <td><a href="#pre_stop">pre_stop_sequence</a></td>
    <td>This is a stop sequence that is executed on your running containers before they are shut down.</td>
</tr>
<tr>
    <td>stop_grace</td>
    <td>Duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped.</td>
</tr>
</table>

<h3 id="image">Image</h3>
The source of your Docker image, which can optionally come from a private repository provided that the credentials are provided. If you are using _Quay.io_ as your repository, you will use `quay.io/namespace/image_name`, and for [Docker Hub](https://registry.hub.docker.com/), use `https://index.docker.io/v1/`.

<h3 id="git">Git</h3>
The Git repository URL your Docker image will be built with. Your image will be built with [Cloud 66 BuildGrid](/beta/introduction-to-cloud-66-docker-support#buildgrid), a cluster of powerful servers that build and version your Docker images. Simply place a Dockerfile in your repository to instruct us how the image should be built.

<h3 id="git-branch">Git branch</h3>
The Git repository branch your Docker image will be based on.

<h3 id="log_folder">Log folder</h3>
The `log_folder` option allows you to persist container logs on your server, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/service`. `service` here will be replaced with your service name. For example: 

{% highlight yaml %}
log_folder: /var/deploy/app/log
{% endhighlight %}

<h3 id="volumes">Volumes</h3>
You can use the `volumes` option to mount custom host folders inside your container. This is useful if you're looking to run a database service for instance, as data written to the local filesystem of your container will not be persisted between container instances. The volumes option is a list of `HOST_FOLDER:CONTAINER_FOLDER`. You can optionally specify `ro` or `rw` on the end to specify that the the container can read/write to the host folder (the default is read/write if not specified)

{% highlight yaml %}
volumes: ["/tmp:/tmp_host", "/readonly/folder:/mnted_readony:ro"]
{% endhighlight %}

<h3 id="ports">Ports</h3>
The `ports` option allows you to specify ports definitions for your service. The format of the ports definition is a list of CONTAINER_PORT:HTTP_PORT:HTTPS_PORT. Note that the HTTP and HTTPS are optional, and you can have HTTPS without HTTP if you wish and vica versa by including the colons, but leaving that corresponding port number blank. You can define multiple port definition triplets for a single service using the above format, for example:

{% highlight yaml %}
ports: ["3000:80:443", "4000::8443", "5000"]
{% endhighlight %}

In this example, the application is listening on port 3000 in the container, and that port is exposed via HTTP on port 80, and HTTPS on port 443. Port 4000 inside the container is also available on port 8443 externally, and port 5000 in the container is available locally on the server. These HTTP/HTTPS ports are available from outside the server, and any traffic to these ports will be redirected to any containers running this service. During scaling, any containers running this service will get traffic distributed to them in a round robin fashion. 

<h3 id="traffic_matches">Traffic matches</h3>
The `traffic_matches` option allows you to specify an array of string server name matches for your service. These are automatically configured in your reverse proxy service (Nginx). In the following example, if traffic comes in on `app.your_domain.com` or `*.anotherdomain.com` on this service port, then traffic will automatically get routed to it. This option also allows you to have multiple services listening on the same port (port 80 for example) as long as they have different rules for matching server names.

{% highlight yaml %}
traffic_matches: ["app.your_domain.com", "*.anotherdomain.com"]
{% endhighlight %}

<h3 id="health">Health</h3>
The health option is useful to provide a mechanism for tested zero down-time deployments. Old containers are not removed until new ones are validated as healthy, and the new containers are automatically "warmed" up.

The `health` option allows you to specify some rules for automatically determining if your newly created containers are healthy or not. When a new container is started during deployment, if the health option is specified on the service we will automatically attempt to get a response from the container on the specified endpoints. If we don't get the specified HTTP response code back within the "timeout" time we will assume the deploy has failed and roll back the container deployments.

For services that don't expose an endpoint (ie. workers), it is possible to notify Cloud 66 that that container is healthy (from within the container). To this end, an ENV var "CONTAINER_NOTIFY_URL" is automatically created and injected into your container. When you app within the container starts you can POST to the url in that ENV var with the json payload <code>{"ready":true}</code>. In the case of your app detecting its own failures, you can instead POST to the url with the json payload <code>{"ready":false, "reason":"error message"}</code>. Notifying of a failure will immediately mark the deployment as failed and roll back the created container. If you specify type: "notify_only" we won't try and check health automatically, but will wait until "timeout" time for user notification to come in.

Note: You don't need to specify all the options for health. Any options you leave out will get their default values.

{% highlight yaml %}
health:
  type: normal                        # normal or notify_only. default: normal 
  endpoint: "/imhealthy"              # endpoint to try and access. default: / 
  protocol: "http"                    # http or https. default: http  
  timeout: "45s"                      # maximum time to wait for container to start. default: 30s        
  accept: ["200", "300-399"]          # HTTP response code to accept. default: 200, 300-399. 
  
OR
health: default                       # use default health check values

OR 
health: none                          # explicit disable health checking (same as leaving 'health' out)
{% endhighlight %}


<h3 id="requires">Requires</h3>

In some cases, you may want to make sure that a service is only started if another service is started. The `requires` option allows you to set such dependencies. For example:

{% highlight yaml %}
services:
  web:
    image: cloud66/sample-rails
    requires:
      - "my_api"    
{% endhighlight %}

<h3 id="pre_start">Pre-start signal</h3>
This is a signal that is sent to the existing containers of the service before the new containers are started during deployment. An example could be <code>USR1</code> - but it depends on what your container is running as to which signals make sense.

<h3 id="pre_stop">Pre-stop sequence</h3>
This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. For example:

{% highlight yaml %}
pre_stop_signal: 1m:USR2:30s:USR1:50s
{% endhighlight %}

These are some examples of duration values that `stop_grace` and `pre_stop_sequence` can use:

{% highlight yaml %}
1m  # 1 minute
30s # 30 seconds
1h  # 1 hour
{% endhighlight %}

Valid time values are `s` for seconds, `m` for minutes and `h` for hours. Valid signal values for a signal are (without the quotes):

{% highlight ruby %}
'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

<h2 id="database-configs">Database configurations</h2>
You can also specify any required databases in the service configuration. As databases are fairly static components that rarely change without a migration, they aren't run in containers. This avoids the complexity and overhead of running databases in a container, and allows Cloud 66 to perform replication and backups as normal. These databases will be deployed and configured automatically, and their addresses and access credentials will be made available to the containers across the stack with environment variables.

The allowed database values are:

- postgresql
- mysql
- redis
- mongodb
- elasticsearch
- rabbitmq

For example:

{% highlight yaml %}
databases:
  - "mysql"
  - "elasticsearch"
{% endhighlight %}

<h2 id="env_vars">Environment variables</h2>
Any environment variable defined in your stack will be made available within your service container. You can reference environment variables in your service configuration using the following syntax:

{% highlight yaml %}
value: _env:MY_ENV_VAR
{% endhighlight %}