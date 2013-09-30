---
layout: post
title:  "Manifest Application Types (beta)"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Application Types in your manifest file define different types of applications Cloud 66 supports.</p>

Manifest files give you fine grained control over the way your application is deployed to your infrastructure. Currently Cloud 66 supports the following application types:

- Rails
- MySQL
- PostgreSQL
- MongoDb
- Redis
- HA Proxy
- Memcached

## Application Type Section
#### Name
rails, mysql, postgres, mongodb, redis
#### Parent Section
environment
#### Parameters
**server**
_Required_

Specifies the server that the application runs on. See [Servers Section](/help/manifest_servers) for more information.

**configuration**
_Optional._


### Rails
A Rails application type in the manifest file gives you fine control over things like the ruby version or the server the rails application is deployed on.

It can containt the following sub-sections:
- Server
- Configuration

#### Server
[Server section](/help/manifest_servers) desribes the specifications of a server running the application.

## Rails configuration

- ruby_version: Specify the version of Ruby to use (overridden if present in Gemfile)
- use_asset_pipeline: Specify whether to use asset pipeline compilation
- do_initial_db_schema_load: Specify whether to perform "rake db:schema:load" on new builds
- reserved_server_memory: a value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values.
- passenger_process_memory: a value in MB that Cloud 66 will use for each passenger process when calculating the passenger_max_pool_size (passenger-based stacks only)

<pre class="terminal">
----- EXAMPLE BELOW -----
... rails:
        server: ...
        configuration:
            ruby_version: 1.9.3
            use_asset_pipeline: true
            do_initial_db_schema_load: false
            reserved_server_memory: 0 (default value)
            passenger_process_memory: 200 (default value)
</pre>

## PostgreSQL configuration

- version: Specify the version of PostgreSQL you want to install (does not apply to external servers types - see below)
- postgis: Specify whether to include PostGIS (Note: unlike the PG version, this can be added after initial database creation)

<pre class="terminal">
----- EXAMPLE BELOW -----
... postgresql:
        server: ...
        configuration:
            version: 9.2.3
            postgis: true
</pre>

### PostGIS version configuration

- version: Specify the version of PostGIS and GEOS you want to install

   <pre class="terminal">
   ----- EXAMPLE BELOW -----
   production:
       postgresql:
           configuration:
               postgis:
                   version: 2.0.3
               geos:
                   version: 3.3.8
   </pre>

## Redis configuration

- version: Specify the version of Redis you want to install (does not apply to external servers types - see below)

<pre class="terminal">
----- EXAMPLE BELOW -----
... redis:
        server: ...
        configuration:
            version: 2.6.10
</pre>

## Memcached

### shared_group:

You can use shared_group to configure where your memcached server should be deployed (if it is used in your code).
By default memcached will be deployed on your web servers. However, you can set these values under "shared_group" to change this behavior: --
- web
- db
- redis
This will move the memcached deployment to any of these server groups.

### configuration:
You can use the manifest file to make small configuration changes to the Memcached server deployed by cloud66.

- memory: Specify maximum memory(in MB) memchached can use. Default value is 64
- port: Specify connection port. Default value is 11211
- listen_ip: Specify which IP address to listen on. Default value is 0.0.0.0

<pre class="terminal">
----- EXAMPLE BELOW -----
... memcached:
        shared_group: db
        configuration:
            memory: 1024
            port: 11215
            listen_ip: 127.0.0.1
</pre>

## HAProxy configuration
You can use the manifest file to make small configuration changes to the HAProxy load balancer deployed by Cloud 66. Currently they are limited to the following options:

- httpchk: the health-check configuration
- balance: the load balancing strategy
- errorfile_\*: location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer.

Note: To find out about the available options for each one of the values, please refer to [HAProxy manual](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt).

<pre class="terminal">
----- EXAMPLE BELOW -----
haproxy:
    configuration:
        httpchk: HEAD / HTTP/1.0 (default value)
        balance: roundrobin (default value)
        errorfile_400: /etc/haproxy/errors/400.http
        errorfile_403: /etc/haproxy/errors/403.http
        errorfile_408: /etc/haproxy/errors/408.http
        errorfile_500: /etc/haproxy/errors/500.http
        errorfile_502: /etc/haproxy/errors/502.http
        errorfile_503: /etc/haproxy/errors/503.http
        errorfile_504: /etc/haproxy/errors/504.http
</pre>
