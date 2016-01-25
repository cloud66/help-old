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

Imagine you have two services (I've used two for simplicity) called `web` and `api`; `api` needs `web` to be up before it starts up. Although, you've defined all the dependencies (Note the `requires` line under `api` service), you are still not getting the result you need (`api` doesn't start after `web`).

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

  What happens here is that all the services are put in a queue based on the logic of your service.yml (`web` first and `api` second in this case). Cloud 66 fires up the first one/s (`web`) and then moves on to the next one/s (`api`). Now imagine service `web` takes a long time to start but `api` starts quickly. As Cloud 66 doesn't know how long to wait to move on to the next service, this may end up having service `api` started while service `web` is still starting!

  Cloud 66 introduced a mechanism called [health check](http://help.cloud66.com/managing-your-stack/service-life-cycle-management#health) to prevent such matters. This means it waits for the container to pass the health check and make sure the service is up, and then will move to the next stage (starting `api`). So your service file would look something like the below (Note the health lines for `web` service):

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

  api:
    image: API_IMAGE              
    command: STARTUP COMMAND                 
    ports: ["PORTS"]                  
    requires: ["web"]                     
databases:
  - "DATABASE_NAME"
   </pre>