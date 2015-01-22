---
layout: post
template: one-col
title:  "Cloud 66 beta program"
so_title: "docker"
nav_sticky: false
date:   2090-01-26 16:27:22
categories: beta
lead: Try the latest features available on Cloud 66
search-tags: []
tags: ['Deployment']
---

Welcome to the Cloud 66 beta program - here you will find resources on the latest Cloud 66 features.

## Docker stacks

The first feature available to the Cloud 66 beta program is support for Docker-backed stacks. There are many benefits to Docker stacks:

- **Separation of Dev and Ops**: It has previously been difficult to seperate the responsibility between Dev and Ops. With Docker deployments, Devs simply put their code into a container (which they can verify works as expected), and Ops take responsibility for rolling it out and managing it.

- **Micro-services** (multi-tenancy): Instead of running monolithic applications, we are now seeing an increasing amount of micro-services, whereby complex applications are composed of smaller components which speak with each other. Being able to run multiple micro-services on the same server (multi-tenancy) is easy with Docker.

- **Portability**: Docker containers make it a lot easier to achieve immutable infrastructure, as the main logic of your application isn't tied to a specific server.

- **Static containers**: You can now achieve consistency across environments - that is, you can replicate your production environment locally if needed.

- **Deploy anything!**: As long as you can put it in a container, you can deploy it to any cloud with Cloud 66. You will still benefit from the many features previously only available to Ruby stacks, as well as numerous features built specifically for Docker deployments.

You can find out more about <a href="/beta/introduction-to-cloud-66-docker">Cloud 66 Docker-backed stacks</a> and try deploying stacks that are not limited to Ruby and one stack per application. Roll out all your services from different source repositories on any number of servers on any cloud provider or your own servers.

## Contact us

Please feel free to send us your thoughts and feedback on beta features to <a href="mailto:support@cloud66.com">support@cloud66.com</a>. We really want to hear what you think about Cloud 66 and how we can improve and be more helpful.