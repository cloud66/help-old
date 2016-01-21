---
layout: post
template: two-col
title:  "Service Dependency"
date:   2016-01-21 01:01:01
categories:
lead: When your service depends on another one
search-tags: ['Dependency','Require']
tags: ['Troubleshooting']
tutorial: true
difficulty: 1
---

Imagine you have two services (I've used two for simplicity) called `web` and `api`.

You might make your service file like below (Note the `requires` line under `api` service)

<pre class="prettyprint">

services:
  web:
    git_url: giturl.git
    git_branch: git branch   
    command: STARTUP COMMAND               
    build_command: BUILD COMMAND        
    deploy_command: DEPLOY COMMAND       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]     
  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                  
    requires: ["web"]                     
databases:
  - "DATABASE_NAME"
  </pre>

  What happens here is that all the services get in the queus based on the logic of the service.yml so in this case it will be `web` first and `api` second. However, service `web` might take a long time to start but `api` and you may end up having service `api` started while service `web` still starting. We introduced a mechanism here that you define [health check](http://help.cloud66.com/managing-your-stack/service-life-cycle-management#health) for your container, so Cloud 66 waits for the container to pass the health check and make sure that the service is up. Then it moves to the next stage -in this case starting `api`. So your service file would look like the below (Note the health line for `web` service):

<pre class="prettyprint">
  services:
  web:
    git_url: giturl.git
    git_branch: git branch   
    command: STARTUP COMMAND               
    build_command: BUILD COMMAND        
    deploy_command: DEPLOY COMMAND       
    log_folder: /usr/src/app/log          
    ports: ["3000:80:443", "4000"]        
    volumes: ["/tmp:/tmp/mnt_folder"]     
    health: default
  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                  
    requires: ["web"]                     
databases:
  - "DATABASE_NAME"
   </pre>