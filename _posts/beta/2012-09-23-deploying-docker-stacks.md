---
layout: post
template: one-col
title:  "Step by step guide to your first Docker stack"
so_title: "docker"
nav_sticky: false
date:   2090-01-26 16:27:22
categories: beta
lead: Use Cloud 66 to deploy your apps in Docker containers
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#building-your-first-stack">Building your first Docker backed stack on Cloud 66</a></li>
        <li>
            <ul>
            <li><a href="#lets-look-at-our-sample-configuration">Let’s look at our sample configuration</a></li>
            </ul>
        </li>
    <li><a href="#adding-databases">Adding databases</a></li>
    <li><a href="#logging">Logging</a></li>
    <li><a href="#using-private-repositories">Using Private Repositories</li></a>
    <li><a href="#container-lifecycle-management">Container lifecycle management</a></li>
            <li>
            <ul>
            <li><a href="#http-containers">Containers serving HTTP/HTTPS traffic</a></li>
            <li><a href="#long-running-processes">Long runnning and background process containers</a></li>            
            </ul>
        </li>

    <li><a href="#multiple-services">Multiple services</a></li>
    <li><a href="#service-dependencies">Service dependencies</a></li>
    <li><a href="#service-dependencies">Scaling</a></li>
    <li>
        <ul>
            <li><a href="#scaling-through-the-ui">Scaling through the UI</a></li>
            <li><a href="#scaling-via-the-commandline">Scaling via the commandline</a></li>
        </ul>
    </li>
</li>
</ul>

<div class="notice notice-danger">
    <h3>Important</h3>
    <p>Docker stacks are only currently available to users in the private beta &mdash; <a href="http://go.c66.me/c66beta">join the beta program</a></p>
</div>

<h2 id="introduction">Introduction</h2>
Cloud 66 provides a set of tools and practices to help you run a full end to end production Docker based stack. Cloud 66 Docker support include the following:

- BuildGrid: Automatic hosted Docker image building based on Dockerfile from source code.
- Register: Hosted, high availability Docker image registry and version control with ACL based on Cloud 66 logins.
- Discover: High availability, hosted service registry based on the etcd API.
- Container deployment and lifecycle management: Rollout of containers on servers, including scaling, no-down-time deployments, automatic registry with Discover and deployment rollbacks.

<div class="notice">
    <h3>Note</h3>
    <p>Not all these features are available to all beta program members. We will release them to everyone gradually.</p>
</div>

Docker based stacks enjoy the same benefits as other Cloud 66 stacks, including: 

- Deployed and managed databases (MySQL, PostgreSQL, MongoDB, Redis as well as non DB components like ElasticSearch and RabbitMQ)
- Database managed and verified backups and replication
- Nginx and load balancing
- Firewall management and brute force protection for web and SSH
- Team and organisations (ACL)
- Fast response 100% SLA DNS layer (ElasticAddress) for quick traffic switch overs
- Server vital sign metrics
- Intuitive UI
- API and command line

<h2 id="building-your-first-stack">Building your first Docker backed stack on Cloud 66</h2>
The base of a Docker backed stack is a single file called `docker_deployment.yml`. This file contains the desired setup for your Docker containers on production and how to manage them.

Let’s start with a simple example:

1. In your Cloud 66 account, create a new stack and use `http://github.com/cloud66-samples/docker-sample.git` as the repository. Choose “Production” as the environment and leave the branch as “master”. Give it a name like “My First Docker Stack” 
2. Press Analyze.
3. The analysis results should confirm that your stack is a Docker backed one and is not using any databases. Now choose the cloud provider of your choice (or add them with API keys by clicking on “Add another Cloud Provider”)
4. Press Deploy

At this point Cloud 66 gets to work. Here is what’s happening:

- Cloud 66 fires up a single server on your chosen cloud provider/region/data centre with the chosen size, under your own account.
- It installs and configures the required components on the server, including docker.
- The server gets nginx installed and configured
- Your Docker image is deployed to the server, started and is configured to get traffic from the nginx on that server.

Once the stack is deployed you can visit the app by clicking on “Browse Site” link on the stack card on the dashboard and see a sample Rails app running.

<h3 id="lets-look-at-our-sample-configuration">Let’s look at our sample configuration</h3>
Let’s look at `docker_deployment.yml` we used for this stack:

{% highlight yaml %}
production:
  services:
    web:
      image: khash/simple_web
      command: bundle exec rackup -p 3000
      ports: ["3000:80:443"]
{% endhighlight %}

This is a YAML file. 

**production** 

The top level is the environment for the stack. We are deploying a production stack so our configuration can be found under `production`. This allows us to use different configuration for different environments.

**services**

The main section is `services`. Any item under `services` is a Docker image. You can have as many services are you like coming from the same of different images and give them unique names.

**web**

`web` here is an arbitrary name we have given to our service. This service comes from a Docker image called `khash/simple_web` (this is a [sample Rails app on Docker hub](https://registry.hub.docker.com/u/khash/simple_web/)).

**command**

This is the command that starts the container. In our example we are using `bundle exec rackup -p 3000` to start our Rails app on port 3000.

**ports**

A list of all ports that need to be exposed on the container. The format of the ports definition is a list of `CONTAINER_PORT:HTTP_PORT:HTTPS_PORT`. Note that the HTTP and HTTPS are optional (also, you can have HTTPS without HTTP if you wish and vica versa by including the colons, but leaing that corresponding port number blank). You can define multiple port definition triplets for a single service using the above format, ie. `["3000:80:443", "4000::8443", "5000"]`

In our example the app is listening on port 3000 in the container, and that port is exposed via HTTP on port 80, and HTTPS on port 443. These HTTP/HTTPS port are going to be available from outside the server. Any traffic to these ports will be redirected to any containers running this service. `80:443` means any HTTP traffic on port 80 and any HTTPS traffic on port 443 will be redirected to the `web` container. 

During scaling any containers running this service will get traffic distributed to them in a round robin fashion.

<h2 id="adding-databases">Adding databases</h2>

Let's add a database to the mix. If your app uses databases you can simply add them to the `databases` section of `docker_deployment.yml` file. Here is an example:

{% highlight yaml %}
production:
  services:
    web:
      image: khash/simple_web
      command: bundle exec rackup -p 3000
      ports: ["3000:80:443"]
  # adding databases
  databases:
    - "mysql"
    - "redis"
{% endhighlight %}

Here we just added MySQL and Redis to our stack. Those databases will be deployed and configured automatically and their addresses and access credentials will be made available to the containers across the stack via environment variables.

These are standard Cloud 66 database setups with unmanaged, managed or verified backups and replication. The suported database types are MySQL, PostgreSQL, Redis and MongoDB. You can also use `databases` section to install ElasticSearch and RabbitMQ.

<h2 id="logging">Logging</h2>

Running the containers on your own servers means you can always jump on your servers and look at the logs generated by the containers. The logs are persisted on the host and don't disappear when a container stops. 

You can use `log_folder` option to mount a host disk inside your container so you can log to outside the container. By default any folder specified with `log_folder` will be available on the host under `/var/log/containers/service`. `service` here will be replaced with the service name. So in our example, the service will log to `/var/log/containers/web`.

{% highlight yaml %}
production:
  services:
    web:
      image: khash/simple_web
      command: bundle exec rackup -p 3000
      ports: ["3000:80:443"]
      log_folder: /var/deploy/app/log  # this will be /var/log/containers/web on the host
  databases:
    - "mysql"
    - "redis"
{% endhighlight %}

<h2 id="using-private-repositories">Using Private Repositories</h2>

If you are using a private repository for your Docker images, you can specify the credentials under `repositories`. Here is an example:

{% highlight yaml %}
production:
  repositories:
    awesome_repo:                    # unique name for the repository
      url: awesomerepo.com           # address for the repository
      username: _env:REPO_USERNAME   # username
      password: _env:REPO_PASSWORD   # password
      email: _env:REPO_EMAIL         # registered email with the repository
  services:
    web:
      image: khash/simple_web
      command: bundle exec rackup -p 3000
      ports: ["3000:80:443"]
      log_folder: /var/deploy/app/log 
  databases:
    - "mysql"
    - "redis"
{% endhighlight %}

The `url` is the same as the one you would use when calling `docker pull` directly. For example, if you are using _Quay.io_ as your private repository, you will use `docker pull quay.io/namespace/image_name` to pull the image from that repository. In this case the `url` is `quay.io`.

One convention here is using `_env:` before an environment variable. This can be used anywhere in `docker_deployment.yml` to avoid checking in passwords and other sensitive information. You can use [environment variable management](/deployment/env-vars.html) in the console or toolbelt to add your environment variables.

<h2 id="container-lifecycle-management">Container lifecycle management</h2>

The aim of container lifecycle management is to:

1. Make sure always the latest version of an image is used to run a container
2. Web traffic is not disrupted during deployment
3. Long running and background jobs are not lost during deployment

<h3 id="http-containers">Containers serving HTTP/HTTPS traffic</h3>

In case of a conatiner serving web traffic (one with a port definition that includes `HTTP/HTTPS` ports) starting a deployment with Cloud 66 will pull the latest version of the image from your image repository and start them on the servers. It then stops any of the old containers from getting new web traffic and puts the new ones in flow to get web traffic. Once the old web traffic is all drained, it will take them down. 

<h3 id="long-running-processes">Long runnning and background process containers</h3>

A deployment will trigger this sequence of events with containers:

#### 1. Tell old containers that new ones are going to be started

Sometimes you want to tell the old containers that they new ones are started. You can use `pre_start_signal` for that. This is a single signal that is sent to all containers of this service before new ones are started. Here is an example:

{% highlight yaml %}
  pre_start_signal: USR1
{% endhighlight %}

#### 2. Start new containers

This step starts new containers for this service using `command` and other parameters in the configuration.

#### 3. Prepare old container to stop

Once the process is ready to be shutdown the new containers are started. Now it's time to take the old containers down. But before that happens you can specify a sequence of waiting times and signals to be sent to them to prepare them for shutdown.

{% highlight yaml %}
  pre_stop_sequence: 1m:USR2:30s:USR1:50s
{% endhighlight %}

This waits for 1 minute and sends a `USR2` to the container process, then waits another 30 seconds and sends a `USR1` and waits for another 50 seconds.

The sequence can be made of any number of waits and signals in any order.

#### 4. Take old containers down

Now it's time to take down the old containers. This happens by sending `TERM` and then `KILL` to the container 10 seconds apart. You can configure this time using `stop_grace`. Here is an example:

{% highlight yaml %}
  stop_grace: 30s
{% endhighlight %}

<h2 id="multiple-services">Multiple services</h2>

You can define as many services as you like in `docker_deployment.yml`. The first time you build your stack, all those services will be started on the first server you build but you can use the UI, toolbelt or the API to move them around.

Here is an example of a multi-service configuration:

{% highlight yaml %}
production:
  services:
    my_web:
      image: cloud66/sample-rails
      command: rackup -p 3000
      ports: ["3000:80:443"]
    my_api:
      image: john/node
      command: node test.js
      ports: ["1337:8080"]
{% endhighlight %}

<h2 id="service-dependencies">Service dependencies</h2>

In some cases you want to make sure a service is started only if another one is started. This is like defining a dependency between services. You can achive that by `requires` option. Here is an example:

In our previous example it is very likely that would like to start `my_web` after `my_api` is started (assuming your web uses the api).

Here is an example of defining service dependencies:

{% highlight yaml %}
production:
  services:
    my_web:
      image: cloud66/sample-rails
      command: rackup -p 3000      
      ports: ["3000:80:443"]
      requires:
        - "my_api"
    my_api:
      image: john/node
      command: node test.js
      ports: ["1337:8080"]
{% endhighlight %}

<h2 id="scaling">Scaling</h2>

Once you have a stack with containers running your services you can move them around on different servers or run more containers on the same servers. This is possible through the UI, toolbelt or the API.

<h3 id="scaling-through-the-ui">Scaling through the UI</h3>

In the UI, you can simple click on *+* and *-* buttons next to the service to add or remove more containers running the given service. Once you get to the desired number, click on the "Scale Now" button.

<h3 id="scaling-via-the-commandline">Scaling via the commandline</h3>

This is also possible via the toolbelt. You can get a list of services and containers using `services` and `containers` commands. Here is an example:

```
$ cx services -s 'my stack'
```

This will return something like this

```
Stack: My Stack
SERVICE NAME  SERVER    COUNT
node          Kangaroo  1
web           Kangaroo  1
```

It shows that you have two services, "web" and "node" and both are running in one container each on the same server "Kangaroo". Let's add more "web" containers:

```
$ cx service-scale -s 'my stack' web 2
```

This will make sure you have 2 containers running "web". Alternatively you can add or remove the containers like this:

```
$ cx service-scale -s 'my stack' web +1
```

This will add one more to the containers running "web".

### Scaling on more servers

To run your containers on more than one server, simply use the UI to scale your server (click on Scale Up button on the server group page). Now that you have more than one server you can choose which server to scale a service one:

```
$ cx service-scale -s 'my stack' web --server snake +1
```

This will scale web by adding 1 container running "web" on server "Snake". Please note not providing the `server` parameter will apply the scale command on _every_ server in the Docker Servers group.

<div class="notice">
  <h3>Further reading</h3>
    <p>Find out more about <a href="/beta/docker-config.html">Docker stack definition format and options</a>.</p>
</div>


### Service Discovery

Docker is the perfect solution to build micro services that run different parts of an application. Those services need to communicate with each other. 

By default every container started on a server is registered with a central service discovery service hosted by Cloud 66. This services, called **Discovery**, is available to all Docker backed stacks at `https://discovery.cloud66.com` and is compatible with [etcd](https://github.com/coreos/etcd). You can use available `etcd` client libraries to connect to it. 

Unlike standard etcd, Discovery has only 1 endpoint (`discovery.cloud66.com`) and therefore there is no need for automatic "leader discovery" on the client side. Calls to Discovery are authenticated using "Stack API keys".

#### Using Discovery

To connect to Discovery, using the [etcd ruby gem](https://github.com/ranjib/etcd-ruby), you can follow these steps:

1. Find the Stack API key of your stack. You can find this under the Stack Information page.
2. Configure the etcd ruby client with the following parameters:

{% highlight ruby %}
require 'etcd'
client = Etcd.client(host: 'discovery.cloud66.com', port: 443, user_name: 'x', password: 'STACK_API_KEY', use_ssl: true)
backend_service = client.get('/services/my_api/cd6db91edc2747e0bd603aa8634ac9a2')
{% endhighlight %}

By default all containers are registered under the following path:

```
/services/SERVICE_NAME/CONTAINER_UID
```

Each container key will contain the following JSON serialized object:

{% highlight json %}
{ "public_ip" : SERVER_ADDRESS, "ports" : SERVICE_PORTS } # SERVICE_PORTS is a hash of port information
{% endhighlight %}

For example, you can get the list of the containers running in a stack for a specific service:


{% highlight ruby %}
backend_services = client.get('/services/my_api/')
{% endhighlight %}

