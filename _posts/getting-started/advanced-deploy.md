---
layout: post
template: one-col
title:  "Advanced Deploy"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: How to set advanced settings 
search-tags: []
tags: ['']
---

When you want full control how your services are getting deployed, you need to get familiar with our [manifest.yml](../building-your-stack/getting-started-with-manifest-files) and [service.yml](../building-your-stack/docker-service-configuration).

<h2>What is a manifest file?</h2>

A manifest files allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack.

[Read more about manifest file here.](../building-your-stack/getting-started-with-manifest-files)

This is a sample [manifest.yml](../building-your-stack/getting-started-with-manifest-files) to tell Cloud 66 to provision one server for a Docker stack to run your services.

<pre class="prettyprint">
production:
    docker:
        configuration:
          version: 1.12.6
        servers:
            server:
                unique_name: dockernodea                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default
</pre>

<h2>What is service configuration?</h2>

Service configuration allows you to be more explicit about your Docker services and control settings that are not usually available through the user interface or Cloud 66 toolbelt. These settings describe the setup of your services, and these are just some examples of the service configurations you can make:

<ul>
<li>Defining build and deploy commands</li>
<li>Specifying a central logging folder</li>
<li>Setting port definitions for your containers</li>
<li>Mount volumes into your containers</li>
<li>Set dependencies between your containers</li>
</ul>

[Read more about service configuration here.](../building-your-stack/docker-service-configuration)


This is a sample [service.yml](../building-your-stack/docker-service-configuration) to tell Cloud 66 to build a Docker image using [Buildgrid](../building-your-stack/cloud-66-buildgrid) and run the service with the name **web** and also provision a **mysql** database.

<pre class="prettyprint">
---
services:
  web:
    git_url: http://github.com/cloud66-samples/rails-4.1-mysql.git
    git_branch: master
    command: bundle exec rails server -b 0.0.0.0 -e _env:RAILS_ENV
    build_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:schema:load"
    deploy_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:migrate"
    ports:
    - container: 3000
      http: 80
      https: 443
    env_vars:
      RAILS_ENV: production
      RACK_ENV: production  
databases:
- mysql
</pre>