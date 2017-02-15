---
layout: post
template: two-col
title:  "Integration with Weave Scope"
so_title: "weavescope"
date:   2000-11-01 15:33:13
categories: partner-integration
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
lead: Use Weave Scope for visualisation of your Docker stack.
search-tags: ['Docker', 'Weavescope', 'Weave', 'Monitoring', 'Debug', 'Debugging']
tags: ['Partners', 'Docker', 'Weavescope', 'Tutorial']
---

[Weave Scope](https://www.weave.works/products/weave-scope/) automatically generates a map of your application, enabling you to intuitively understand, monitor, and control your containerized, microservices based application. Perfect for visualisation of your Docker stack and debug purposes.

Weave Scope is installed using [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) and the weave_scope [snippet](https://github.com/cloud66/snippets/blob/master/cloud66/weave_scope).

<h3>Step 1: Checkout your CustomConfig</h3>
Checkout your [CustomConfig](http://help.cloud66.com/managing-your-stack/customconfig-git) git and add the file *deploy_hooks.yml* 
<h3>Step 2: Add the weavescope snippet</h3>
Add the following deploy hook to your *deploy_hooks.yml* file.

<pre class="prettyprint">
production: # Environment or your choice
  last_thing: # Importent to run the weavescope hook as the last thing during server deployment
    - snippet: cloud66/weave_scope # our weavescope snippet
      target: docker 
      sudo: true 
      execute: true
      run_on: all_servers #make sure weave scope is running on all servers and communicate to each other
</pre>

<h3>Step 3: Commit and redeploy your stack</h3>
Commit the changes to the CustomConfig git reposity and redeploy your stack. 
<strong>NOTE:</strong> If your set WEAVE_SCOPE_TOKEN environment variable, weave scope will connect to Weave Cloud. If not. Read step 4.

<h3>Step 4: Open port 4040 to access Weave Scope</h3>
Weavescope will run on port 4040 which is not exposed to the outside world by default, which is a good thing. Make sure port 4040 is only accesible by your own IP-address. In order to access the UI of Weave Scope you have to enable port 4040 on your [stack firewall](http://help.cloud66.com/managing-your-stack/stac).

**WARNING!** 
Don't expose 4040 to the whole world to see. With weavescope you can control all your running containers and execute commands inside running containers. Take good care of those powers!



