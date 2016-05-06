---
layout: post
template: two-col
title:  "Managing Logs For Containers"
so_title: "Docker"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2016-04-07 10:23:22
categories: 
lead: How to set up your logs for you services
search-tags: ['log, logging']
tags: ['Docker Log']
tutorial: true
difficulty: 1
---

If you are confused why you can see your logs in [livelogs](http://help.cloud66.com/managing-your-stack/live-logs) but not under `/var/log/containers/` even after introducing `log_folder` or if you need to work with your logs this article is for you.

In the livelogs you can see the `stdout` and the content of `/log` folder of your container by default, so if you cannot see anything under `/log` and still there are logs being shown in livelogs it means the logs are coming from the container's stdout.


This sample will run an app in a container and by default the folder `/log` and the `stdout` will be piped to Docker default Json log file.

<pre class="prettyprint">
services:
  SERVICE_NAME:
    image: quay.io/cloud66/sample-rails  
    command: rackup -p 3000             
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    ports: 
    - container: 3000
      http: 80
      https: 443       
databases:
  - "mysql" 
  </pre>

If your app shows its log in the `stdout` and you need to have a more centeralised log file you can do this:

<ol class="article-list">
<li><p>Change the command from: <code>command: rackup -p 3000</code> </p><p>to:  <code>command: rackup -p 3000 > /PATH_TO_LOG_FOLDER/LOG_FILE</code></p><p>which will pipe the stdout to your specified log file.</p></li>

<li><p>Add this to your service:</li></p>
<p><code>log_folder: /PATH_TO_LOG_FOLDER</code></p>
<p>So your service.yml will look like this:</p>

<pre class="prettyprint">
services:
  SERVICE_NAME:
    image: quay.io/cloud66/sample-rails  
    command: "/bin/sh -c 'rackup -p 3000 > /PATH_TO_LOG_FOLDER/LOG_FILE 2>&1'"
    build_command: rake db:migrate
    deploy_command: rake db:migrate
    - container: 3000
      http: 80
      https: 443       
    log_folder: /PATH_TO_LOG_FOLDER
databases:
  - "mysql"
</pre>


<li><p>Now after you start the service you can ssh to the server/host and have a look at</li></p>
<p><code>/var/log/containers/SERVICE_NAME/</code></p>
<p>You should see the <code>LOG_FILE</code> is listed.</p>
</ol>