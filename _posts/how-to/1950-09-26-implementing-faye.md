---
layout: post
template: two-col
title:  "Faye on Cloud 66"
so_title: "faye"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1945-09-26 15:33:13
categories: how-to
lead: Use Faye, the flexible publish-subscribe messaging system
search-tags: ['']
tags: ['Customization']
tutorial: true
---


## Introduction

<a href="http://faye.jcoglan.com/">Faye</a> is a publish-subscribe messaging system that provides messaging services. At Cloud 66, we recommend running Faye as a [background process](/stack-features/proc-files.html) on your stack behind a [Thin rack server](/web-server/thin-rack-server.html).

## Implementation

We will use four files containing the following commands to accomplish this setup. In addition to these, be sure to open the port on which your Faye server is running to the relevant servers.

#### 1. RAILS&#95;ROOT/.cloud66/deploy&#95;hooks.yml

[Deploy hooks](/stack-features/redeployment-hook.html) allow you to take action at various points during a build and/or deployment on Cloud 66. This one will run the bash script that we will create in the next step before Rails is installed on your server.

<pre class='terminal'>
production:
    before&#95;rails:
      - source: /.cloud66/files/add&#95;thin&#95;and&#95;faye.sh
        destination: ~/add&#95;thin&#95;and&#95;faye.sh
        target: rails
        execute: true
        sudo: true
        apply&#95;during: build&#95;only
        run&#95;on: all&#95;servers
</pre>

If you are adding Faye to an <b>existing stack</b>, you should temporarily change the deploy hook <code>apply&#95;during: build&#95;only</code> to <code>apply&#95;during: all</code>. Failing to do this would not apply the changes to your existing stack - but once you have got it running for the first time you can change it back as you don't need to run the script on every deploy.

#### 2. RAILS&#95;ROOT/.cloud66/files/add&#95;thin&#95;and&#95;faye.sh
This bash script ensures that Thin and Faye are installed on your server during deployment.

<pre class='terminal'>
#!/bin/bash
sudo gem install thin --no-ri --no-rdoc
sudo gem install faye --no-ri --no-rdoc
</pre>

#### 3. RAILS&#95;ROOT/Procfile
Here we are creating a [background process](/stack-features/proc-files.html) for Faye so that we can control and monitor it from the Cloud 66 dashboard.

<pre class='terminal'>
faye: thin -R $STACK&#95;PATH/faye/config.ru start
</pre>

#### 4. RAILS&#95;ROOT/faye/config.ru
These are settings specific to your Faye setup, which will vary depending on your requirements. You will need to insert the port that your Faye setup is running on in the last line.

<pre class='terminal'>
require 'faye'
faye&#95;server = Faye::RackAdapter.new(:mount =&gt; '/your&#95;faye&#95;mount', :timeout =&gt; 45)
Faye::WebSocket.load&#95;adapter('thin')
faye&#95;server.listen(&lt;&lt;PUT-YOUR-PORT-HERE&gt;&gt;)
</pre>

## Troubleshooting
Should you need to do any troubleshooting, you can find your Faye logs in <code>$STACK&#95;PATH/log/user&#95;faye&#95;1.log</code> on your server.