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

If you have a docker stack but your services don't follow the dependencies you've defined, this article is probably for you.

Imagine you have two services (I've used two for simplicity) called `web` and `api` that `api` needs `web` to be up before it starts up. Although you've defined all the dependencies (Note the `requires` line under `api` service), you are not getting the result you need (`api` doesn't start after `web`).

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

  What happens here is that all the services are put in a queue based on the logic of the service.yml (`web` first and `api` second in this case). We fire up the first one (`web`) and then move on to the next one (`api`). Now imagine service `web` takes a long time to start but `api`. As we don't know how long to wait to move on to the next service, this may end up having service `api` started while service `web` is still starting i.e. chaos.

  We introduced a mechanism here that you define [health check](http://help.cloud66.com/managing-your-stack/service-life-cycle-management#health) for your container, so Cloud 66 waits for the container to pass the health check and make sure the service is up, and then will moves to the next stage i.e. starting `api`. So your service file would look something like the below (Note the health lines for `web` service):

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
    health:                    
          type: inbound        #defaults to inbound
          endpoint: "/healthy" #defaults to /
          protocol: "http"     #defaults to HTTP
          timeout: "45s"       #defaults to 30s
          accept: ["200"]      #defaults to 200 and 300-399

    #or you can use it like the below line
    #health: default           this is considered as if you've defined all the values to default      


  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                  
    requires: ["web"]                     
databases:
  - "DATABASE_NAME"
   </pre>