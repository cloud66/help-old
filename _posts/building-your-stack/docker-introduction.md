---
layout: post
template: one-col
title:  "Introduction to Docker deployments"
so_title: "Docker"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: building-your-stack
lead: Deploy Docker stacks through Cloud 66
search-tags: ['docker', '.cloud66/services.yml', 'docker deployment', 'deployment']
tags: ['Deployment', 'Docker']
---

<h2>Contents</h2>
<ul class="page-toc">
	  <li><a href="#docker">Introduction to Docker</a></li>
    <li><a href="#intro">Cloud 66 Docker support</a></li>
    <li>
      <ul>
        <li><a href="#lifecycle">Container lifecycle management</a></li>
        <li><a href="#network">Networking layer</a></li>
        <li><a href="#dns">DNS</a></li>
        <li><a href="#buildgrid">BuildGrid</a></li>
        <li><a href="#registry">Registry</a></li>
      </ul>
    </li>
</ul>

<h2 id="docker">Introduction to Docker</h2>
[Docker](https://www.docker.com/) is an open-source project that helps developers publish applications inside containers. There are many benefits to using Docker: 

- **Separation of Dev and Ops**: It has previously been difficult to seperate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services** (multi-tenancy): Instead of running monolithic applications, we are now seeing an increasing amount of micro-services, whereby complex applications are composed of smaller components which speak with each other. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66. You will still benefit from the many features previously only available to Ruby stacks, as well as numerous features built specifically for Docker deployments.

<h2 id="intro">Cloud 66 Docker support</h2>
Cloud 66 builds Docker stacks in two ways:

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](#buildgrid) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack. Cloud 66 Docker includes the following:

<h3 id="lifecycle">Container lifecycle management</h3>
Rolling out your Docker images to your servers, scaling, load balancing, port forwarding, lifecycle management, graceful draining and shutdown of workers, deployment rollbacks.

<h3 id="network">Networking layer</h3>
An internal [Weave](https://github.com/zettio/weave) network that runs across all of your servers, allowing each server _and_ container to have an internal IP address (on the 25.0.0.0 subnet). For example: 

{% highlight bash %}
Server 1 (25.0.0.1) has Container 1 (25.0.0.2)
Server 2 (25.0.0.3) has Container 1 (25.0.0.4) and Container 2 (25.0.0.5)
Server 3 (25.0.0.6) has Container 1 (25.0.0.7) and Container 2 (25.0.0.8)
{% endhighlight %}

Containers can communicate with each other using the private address (on any port), regardless of the physical server the other container resides on. In other words, containers can communicate as if they were on the same server. The networking layer transparently maps between the two.

<h3 id="dns">DNS</h3>
An internal DNS service which assigns a DNS record to each of your Docker services and servers. For example, you can connect to your MySQL instance on `mysql.cloud66.local`, and this record will update automatically in case you switch your server. Services can be found at `service_name.cloud66.local`, and will use round-robin if you have more than one container for a service.

<h3 id="buildgrid">BuildGrid</h3>
When building your Docker stack, you can either provide us with your own image, or let us create them for you with our powerful cluster of servers called BuildGrid. Your image is created based on your source code and a Dockerfile, which specifies how you want it to be created. 

Using BuildGrid lets you focus on what you do best and avoids you having to create internal processes to output Docker images. You can even integrate your CI solution, so that new images are built and pushed to your servers once all your tests pass. 

<h3 id="registry">Registry</h3>
Any images created with BuildGrid are made available through Registry.

Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 

- Deployed and managed databases (MySQL, PostgreSQL, MongoDB, Redis as well as non-database components like ElasticSearch and RabbitMQ)
- Database managed and verified backups and replication
- Nginx and load balancing
- Firewall management and brute force protection for web and SSH
- Team and organisations (ACL)
- Fast response 100% SLA DNS layer (Failover groups) for quick traffic switch overs
- Server vital sign metrics
- Intuitive UI
- API and command line