---
layout: post
template: two-col
title:  "Seeding your database"
date:   2013-12-08 09:33:13
categories: how-to
lead: During deployment with Cloud 66 you can automatically seed your database with your desired data
---

## Introduction
New databases commonly require seed data in order to be functional for an application.
When you deploy a new stack with Cloud 66 (and choose to have a new DB provisioned) we will provision that database for you. However the database will not have any data in it.
To address this you can make use of a [deploy hook](/stack-features/deploy-hooks.html) to execute your required scripts to seed your newly created DB during deployment.

This guide will show you how to create a [deploy hook](/stack-features/deploy-hooks.html) and custom script to seed your DB.

### Seed script

Simply add a bash script to your stack that contains the script for seeding your DB. This could be a *custom script*, a *custom rake command*, or the default Rails *rake db:seed command* depending on your requirements/implementation. 
(In our example, we will use the default Rails [rake db:seed command](http://edgeguides.rubyonrails.org/migrations.html#migrations-and-seed-data). To accomplish this, create the file */.cloud66/scripts/dbseed.sh* as below:
<pre class="terminal">
&#35;!/bin/bash
&#35; access your Rails stack path
cd $STACK&#95;PATH
&#35; run your seed task
bundle exec rake db:seed
</pre>

### Deploy hook

Add a deploy&#95;hook to execute the above script during the first deploy (on the first server only). Create the file *.cloud66/deploy&#95;hooks.yml* as below:
<pre class="terminal">
production:
  after&#95;symlink:
    - source: /.cloud66/scripts/dbseed.sh
      destination: /tmp/dbseed.sh
      target: rails
      execute: true
      run&#95;on: single&#95;server
      apply&#95;during: build&#95;only      
</pre>