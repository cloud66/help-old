---
layout: post
template: one-col
title:  "Nginx"
so_title: "nginx"
date:   2034-09-24 10:51:22
categories: web-server
lead: Nginx is configured automatically for your stack
search-tags: ['']
tags: ['Web server']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About Nginx</a>
    </li>
    <li>
        <a href="#config">Nginx configuration</a>
    </li>
    <li>
        <a href="#workers">Nginx worker configuration</a>
    </li>
    <li>
        <a href="#error">Custom Nginx error page</a>
    </li>       
    <li>
        <a href="#customize">Customize your Nginx configuration</a>
    </li>           
        <ul style="margin-bottom:0em">
            <li><a href="#custom-vars">Nginx CustomConfig variables</a></li>
            <li><a href="#boolean">Boolean variables</a></li>
        </ul>    
</ul>

<h2 id="about">About Nginx</h2>
Stacks deployed with Cloud 66 use [Nginx](http://nginx.com) as their web server, and its configuration is dependant on the resources of your server(s). Nginx is a high performance, open source web server used by some of the biggest web services in the world.

<h2 id="config">Nginx configuration</h2>
The following table outlines the default configuration of Nginx.

<table id="fields" class=
'table table-bordered table-striped table-small fields'>
  <thead valign="top">
    <tr>
      <th>
        Category<br />
      </th>
      <th>
        Attribute
      </th>
      <th>
        Default value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="header">
      <td width="15%">
        <strong>General</strong> <span>-</span>
      </td>
      <td width="20%"></td>
      <td width="70%"></td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        user
      </td>
      <td width="70%">
        nginx
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        worker_processes
      </td>
      <td>
        Dynamically set based on instance size
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        error_log
      </td>
      <td>
        /var/deploy/[stack_name]/web_head/shared/log/nginx_error.log
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="15%">
        <strong>Events</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        worker_connections
      </td>
      <td>
        1024
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="15%">
        <strong>HTTP</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        gzip
      </td>
      <td>
        on
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        gzip_min_length
      </td>
      <td>
        100
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        gzip_proxied
      </td>
      <td>
        expired no-cache no-store private auth
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        gzip_types
      </td>
      <td>
        text/plain application/xml text/css
        application/x-javascript text/javascript
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        gzip_disable
      </td>
      <td>
        "MSIE [1-6]\."
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_root
      </td>
      <td>
        [passenger location]
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_ruby
      </td>
      <td>
        [stack ruby shell]
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_ruby
      </td>
      <td>
        nginx
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_pool_idle_time
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_max_pool_size
      </td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        ssl_session_cache
      </td>
      <td>
        shared:SSL:10m
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        ssl_session_timeout
      </td>
      <td>
        10m
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        underscores_in_headers
      </td>
      <td>
        on
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        default_type
      </td>
      <td>
        application/octet-stream
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        client_max_body_size
      </td>
      <td>
        50m
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        sendfile
      </td>
      <td>
        on
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        server_tokens
      </td>
      <td>
        off
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        keepalive_timeout
      </td>
      <td>
        65
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="15%">
        <strong>Server</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        listen
      </td>
      <td>
        80 default_server
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        server_name
      </td>
      <td>
        _ or SSL server name
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        rails_env
      </td>
      <td>
        [stack environment]
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        client_max_body_size
      </td>
      <td>
        50m
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        root
      </td>
      <td>
        /var/deploy/[stack name]/web_head/current/public
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        passenger_enabled
      </td>
      <td>
        on
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        ssl_certificate_key
      </td>
      <td>
        /etc/ssl/localcerts/[ssl cerificate file name].key
      </td>
    </tr>
    <tr>
      <td></td>
      <td width="20%">
        ssl_certificate
      </td>
      <td>
        /etc/ssl/localcerts/[ssl cerificate file name].crt
      </td>
    </tr>
  </tbody>
</table>

<h2 id="workers">Nginx worker configuration</h2>
The following table specifies the number of workers configured for your Nginx based on the server resources (CPU cores) on each cloud.

<table id="fields" class=
"table table-bordered table-striped table-small fields">
  <thead valign="top">
    <tr>
      <th>
        Cloud provider<br />
      </th>
      <th>
        Instance type
      </th>
      <th>
        Number of Workers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>AWS</strong> <span>-</span>
      </td>
      <td width="40%"></td>
      <td width="70%"></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        t1.micro
      </td>
      <td width="70%">
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m1.small
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m1.medium
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m1.large
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m1.xlarge
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m3.medium
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m3.large
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m3.xlarge
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m3.2xlarge
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m2.xlarge
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m2.2xlarge
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        m2.4xlarge
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c1.medium
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c1.xlarge
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c3.large
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c3.xlarge
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c3.2xlarge
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c3.4xlarge
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        c3.8xlarge
      </td>
      <td>
        32
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        cc2.8xlarge
      </td>
      <td>
        88
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        i2.xlarge
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        i2.2xlarge
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        i2.4xlarge
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        i2.8xlarge
      </td>
      <td>
        32
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        cr1.8xlarge
      </td>
      <td>
        88
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        hi1.4xlarge
      </td>
      <td>
        35
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        hs1.8xlarge
      </td>
      <td>
        35
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        cg1.4xlarge
      </td>
      <td>
        33.5
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        g2.2xlarge
      </td>
      <td>
        8
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>DigitalOcean</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        512MB - 1 CPU
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        1GB - 1 CPU
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        2GB - 2 CPU
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        4GB - 2 CPU
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        8GB - 4 CPU
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        16GB - 8 CPU
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        32GB - 12 CPU
      </td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        48GB - 16 CPU
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        64GB - 20 CPU
      </td>
      <td>
        20
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        96GB - 24 CPU
      </td>
      <td>
        24
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>GCE</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        n1-standard-1
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-standard-2
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-standard-4
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-standard-8
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-standard-16
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highmem-2
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highmem-4
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highmem-8
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highmem-16
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highcpu-2
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highcpu-4
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highcpu-8
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        n1-highcpu-16
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        f1-micro
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        g1-small
      </td>
      <td>
        1
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>Linode</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        Linode 1GB
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 2GB
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 4GB
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 8GB
      </td>
      <td>
        6
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 16GB
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 32GB
      </td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 48GB
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 64GB
      </td>
      <td>
        20
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        Linode 96GB
      </td>
      <td>
        20
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>Rackspace</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        512MB Standard Instance
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        1GB Standard Instance
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        2GB Standard Instance
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        4GB Standard Instance
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        8GB Standard Instance
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        15GB Standard Instance
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        30GB Standard Instance
      </td>
      <td>
        8
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr class="header">
      <td width="25%">
        <strong>Vexxhost</strong> <span>-</span>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td width="40%">
        512 MB
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        1 GB
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        2 GB
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        4 GB
      </td>
      <td>
        4
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        8 GB
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        16 GB
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        24 GB
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        32 GB
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        48 GB
      </td>
      <td>
        16
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        64 GB
      </td>
      <td>
        16
      </td>
    </tr>
  </tbody>
</table>

<h2 id="error">Custom Nginx error page</h2>
To create a custom Nginx 50X error page, create a file called _50X.html_ in <code>$STACK&#95;PATH/public/</code>.

<h2 id="customize">Customize your Nginx configuration</h2>
Cloud 66 makes it easy for you to customize your Nginx configuration. From your stack detail page, access your web server group page (eg. _Rails server_) and click _Customize Nginx_ in the right sidebar. Follow the [CustomConfig instructions](/building-your-stack/customconfig) to customize the configuration.

Editing and committing your Nginx CustomConfig will perform the following steps on **every web server in your stack**, one by one, sequentially:

<ul class="list">
	<li>Check your template for Liquid syntax errors</li>
	<li>Determine the correct Passenger path (Passenger stacks only)</li>
	<li>Check the version of your Passenger, and determine if Nginx needs to use a Ruby shell wrapper</li>
	<li>Count the number of cores on the server</li>
	<li>Compile the Nginx configuration based on the information from the server</li>
	<li>Upload the configuration to the server</li>
	<li>Reload Nginx</li>
</ul>

Reloading Nginx does not interrupt the serving of traffic. This process will be stopped if an error is encountered. For example, if you have 3 web servers in your stack, if the first server fails to be updated, the process will be halted for the other 2 servers to avoid complete service diruption.

<div class="notice notice-danger">
    <h3>Warning</h3>
    <p>A bad configuration may stop your Nginx from functioning, so take extra care when making changes.</p>
</div>

<h3 id="custom-vars">Nginx CustomConfig variables</h3>

The following variables are available for use in your Nginx CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%" />
    <col width="20%" />
    <col width="60%" />
  </colgroup>
  <thead>
    <tr>
      <th>
        Variable Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        passenger
      </td>
      <td>
        boolean
      </td>
      <td>
        Is nginx running Passenger or a custom web server?
      </td>
    </tr>
    <tr>
      <td>
        user_name
      </td>
      <td>
        string
      </td>
      <td>
        User name running the application process
      </td>
    </tr>
    <tr>
      <td>
        environment
      </td>
      <td>
        string
      </td>
      <td>
        Stack environment name (lowercase)
      </td>
    </tr>
    <tr>
      <td>
        server_address
      </td>
      <td>
        string
      </td>
      <td>
        Server address (IP or fqdn)
      </td>
    </tr>
    <tr>
      <td>
        workers
      </td>
      <td>
        integer
      </td>
      <td>
        Number of CPU cores on the server
      </td>
    </tr>
    <tr>
      <td>
        passenger_pool_max
      </td>
      <td>
        integer
      </td>
      <td>
        Size of the passenger pool (Passenger Only)
      </td>
    </tr>
    <tr>
      <td>
        use_ruby_shell
      </td>
      <td>
        boolean
      </td>
      <td>
        Used internally
      </td>
    </tr>
    <tr>
      <td>
        ruby_shell
      </td>
      <td>
        string
      </td>
      <td>
        /var/deploy/ruby_shell
      </td>
    </tr>
    <tr>
      <td>
        app_name
      </td>
      <td>
        string
      </td>
      <td>
        Stack name (lowercase)
      </td>
    </tr>
    <tr>
      <td>
        deploy_to
      </td>
      <td>
        string
      </td>
      <td>
        Stack path on the server
      </td>
    </tr>
    <tr>
      <td>
        envars
      </td>
      <td>
        hash
      </td>
      <td>
        Hash of all environment variables on the stack
      </td>
    </tr>
    <tr>
      <td>
        envars
      </td>
      <td>
        hash
      </td>
      <td>
        Hash of all environment variables on the stack
      </td>
    </tr>
    <tr>
      <td>
        passenger_location
      </td>
      <td>
        string
      </td>
      <td>
        Passenger location (Passenger only)
      </td>
    </tr>
    <tr>
      <td>
        allow_ssl
      </td>
      <td>
        boolean
      </td>
      <td>
        Is an SSL Certificate configured on the stack?
      </td>
    </tr>
    <tr>
      <td>
        perfect_forward_secrecy
      </td>
      <td>
        boolean
      </td>
      <td>
        Is perfect forward secrecy enabled on the stack?
      </td>
    </tr>
    <tr>
      <td>
        cors_enabled
      </td>
      <td>
        boolean
      </td>
      <td>
        Is CORS enabled on the stack?
      </td>
    </tr>
    <tr>
      <td>
        cors_origin
      </td>
      <td>
        string
      </td>
      <td>
        CORS Origins
      </td>
    </tr>
    <tr>
      <td>
        cors_methods
      </td>
      <td>
        string
      </td>
      <td>
        CORS Methods
      </td>
    </tr>
  </tbody>
</table>

<h3 id="boolean">Boolean variables</h3>

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false` (even if you are checking for true).

Good syntax:

<ul class="list">
	<li>if passenger != true</li>
	<li>if passenger != false</li>
	<li>if passenger == true</li>
	<li>if passenger == false</li>
</ul>	

Bad syntax:

<ul class="list">
<li>Bad: if passenger</li>
<li>Bad: if !passenger</li>
</ul>