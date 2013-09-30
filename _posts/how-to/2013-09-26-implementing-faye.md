---
layout: post
title:  "Faye on Cloud 66"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">Cloud 66 supports Faye, the flexible publish-subscribe messaging system.</p>

## Introduction
Faye is a publish-subscribe messaging system that provides messaging services. Please see the  <a href="http://faye.jcoglan.com/" target="_blank">Faye</a> website for more detailed documentation about it.

At Cloud 66, we recommend running Faye as a [background process](proc_files) on your stack behind a [Thin rack server](thin_rack_server).

## Implementation
We will use four files containing the following commands to accomplish this setup. In addition to these, be sure to open the port on which your Faye server is running to the relevant servers.

#### 1. RAILS_ROOT/.cloud66/deploy_hooks.yml
[Deployment hooks](deploy_hooks) allow you to take action at various points during a build and/or deployment on Cloud 66. This one will run the bash script that we will create in the next step before Rails is installed on your server.

<pre class='terminal'>
production:
    before_rails:
      - source: /.cloud66/files/add_thin_and_faye.sh
        destination: ~/add_thin_and_faye.sh
        target: rails
        execute: true
        sudo: true
        apply_during: build_only
        run_on: all_servers
</pre>

If you are adding Faye to an <b>existing stack</b>, you should temporarily change the deploy hook <code>apply_during: build_only</code> to <code>apply_during: all</code>. Failing to do this would not apply the changes to your existing stack - but once you have got it running for the first time you can change it back as you don't need to run the script on every deploy.

#### 2. RAILS_ROOT/.cloud66/files/add_thin_and_faye.sh
This bash script ensures that Thin and Faye are installed on your server during deployment.

<pre class='terminal'>
#!/bin/bash
sudo gem install thin --no-ri --no-rdoc
sudo gem install faye --no-ri --no-rdoc
</pre>

#### 3. RAILS_ROOT/Procfile
Here we are creating a [background process](proc_files) for Faye so that we can control and monitor it from the Cloud 66 dashboard.

<pre class='terminal'>
faye: thin -R $RAILS_STACK_PATH/faye/config.ru start
</pre>

#### 4. RAILS_ROOT/faye/config.ru
These are settings specific to your Faye setup, which will vary depending on your requirements. You will need to insert the port that your Faye setup is running on in the last line.

<pre class='terminal'>
require 'faye'
faye_server = Faye::RackAdapter.new(:mount =&gt; '/your_faye_mount', :timeout =&gt; 45)
Faye::WebSocket.load_adapter('thin')
faye_server.listen(&lt;&lt;PUT-YOUR-PORT-HERE&gt;&gt;)
</pre>

## Troubleshooting
Should you need to do any troubleshooting, you can find your Faye logs in <code>$RAILS_STACK_PATH/log/user_faye_1.log</code> on your server.