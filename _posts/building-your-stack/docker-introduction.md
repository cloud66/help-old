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

1. **Pulling your code from Git**: This option uses Cloud 66 [BuildGrid](/building-your-stack/building-your-docker-service) to build your Docker image, so that you don't have to. You just need to provide a [Dockerfile](https://docs.docker.com/reference/builder/) that specifies how you'd like us to build the image. Once your image is ready, it is pushed to your servers and managed. We also version the image and allow you to download it if needed.
2. **User-provided image**: You provide a Docker image that you've built, which we push to your servers and manage. 

We provide a set of tools and practices to help you run a full end to end production Docker based stack.

<div class="notice notice-error">
    <h3>Ready?</h3>
    <p>
        Are you ready to <a href="/introduction-to-cloud-66/introduction-to-cloud-66">build your first Docker stack</a>?
    </p>
</div>

Cloud 66 Docker includes the following:

- [Container life-cycle management](/managing-your-stack/service-life-cycle-management)
- [BuildGrid](/building-your-stack/building-your-docker-service)
- [Networking layer and DNS](/network/service-network-settings)
- [Storage layer](/managing-your-stack/service-storage)
- [Docker scaling](/managing-your-stack/scaling)

Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 

- [Deployed and managed databases](/database-management/database-management)
- Database [backups](/database-management/database-backup), [verification](/database-management/backup-verification) and [replication](/database-management/database-replication)
- [Nginx](/web-server/nginx) and [load balancing](/web-server/load-balancing)
- [Firewall management and brute force protection for web and SSH](/managing-your-stack/stack-network-settings)
- [Team and organisations](/account-management/team-accounts)
- Fast response 100% SLA DNS layer ([failover groups](/network/failover-groups)) for quick traffic switch overs
- [Server vital sign metrics](/managing-your-stack/server-monitoring)
- [Intuitive UI](https://app.cloud66.com/dashboard)
- [API](http://developers.cloud66.com) and [command line](/toolbelt/toolbelt-introduction)

<div class="notice notice-error">
    <h3>Ready?</h3>
    <p>
        Are you ready to <a href="/introduction-to-cloud-66/introduction-to-cloud-66">build your first Docker stack</a>?
    </p>
</div>