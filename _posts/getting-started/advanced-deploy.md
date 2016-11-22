---
layout: post
template: one-col
title:  "Advanced Deployment"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: How to set advanced settings 
search-tags: []
tags: ['']
---

There are two files needed for Cloud 66 to create a Docker stack, **_[manifest.yml](building-your-stack/building-your-manifest-file)_** and **_[service.yml](building-your-stack/docker-service-configuration)_**. In advanced mode you can edit these files to suit your needs the best.

This is a sample _service.yml_ for a standard rails stack.

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