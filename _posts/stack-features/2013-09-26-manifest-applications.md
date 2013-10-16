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

Specifies the server that the application runs on. See [Servers Section](/stack-features/manifest-servers.html) for more information.

**configuration**
_Optional._


### Rails
A Rails application type in the manifest file gives you fine control over things like the ruby version or the server the rails application is deployed on.

It can contains the following sub-sections:
- Server
- Configuration

#### Server
[Server section](/stack-features/manifest-servers.html) desribes the specifications of a server running the application.

## Rails configuration

- ruby&#95;version: Specify the version of Ruby to use (overridden if present in Gemfile)
- use&#95;asset&#95;pipeline: Specify whether to use asset pipeline compilation
- do&#95;initial&#95;db&#95;schema&#95;load: Specify whether to perform "rake db:schema:load" on new builds
- reserved&#95;server&#95;memory: a value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values.
- passenger&#95;process&#95;memory: a value in MB that Cloud 66 will use for each passenger process when calculating the passenger&#95;max&#95;pool&#95;size (passenger-based stacks only)
- nginx: Specify configurations for Nginx, currently CORS and [Perfect Forward Secrecy](http://en.wikipedia.org/wiki/Perfect_forward_secrecy).

<pre class="terminal">
----- EXAMPLE BELOW -----
... rails:
        server: ...
        configuration:
            ruby&#95;version: 1.9.3
            use&#95;asset&#95;pipeline: true
            do&#95;initialdb&#95;schema&#95;load: false
            reserved&#95;server&#95;memory: 0 (default value)
            passenger&#95;process&#95;memory: 200 (default value)
            nginx:
            	cors: true
            	perfect&#95;forward&#95;secrecy: true
</pre>

#### CORS configuration

If you want to, you can also specify the origin and methods for CORS.
<pre class="terminal">
----- EXAMPLE BELOW -----
... rails:
        server: ...
        configuration:
            nginx:
            	cors:
            		origin: '*'
                	methods: 'GET, OPTION'
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

#### PostGIS version configuration

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

### shared&#95;group:

You can use shared&#95;group to configure where your memcached server should be deployed (if it is used in your code).
By default memcached will be deployed on your web servers. However, you can set these values under "shared&#95;group" to change this behavior: --
- web
- db
- redis
This will move the memcached deployment to any of these server groups.

### configuration:
You can use the manifest file to make small configuration changes to the Memcached server deployed by cloud66.

- memory: Specify maximum memory(in MB) memchached can use. Default value is 64
- port: Specify connection port. Default value is 11211
- listen&#95;ip: Specify which IP address to listen on. Default value is 0.0.0.0

<pre class="terminal">
----- EXAMPLE BELOW -----
... memcached:
        shared&#95;group: db
        configuration:
            memory: 1024
            port: 11215
            listen&#95;ip: 127.0.0.1
</pre>

## HAProxy configuration
You can use the manifest file to make small configuration changes to the HAProxy load balancer deployed by Cloud 66. Currently they are limited to the following options:

- httpchk: the health-check configuration
- balance: the load balancing strategy
- errorfile&#95;\*: location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer.

Note: To find out about the available options for each one of the values, please refer to [HAProxy manual](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt).

<pre class="terminal">
----- EXAMPLE BELOW -----
haproxy:
    configuration:
        httpchk: HEAD / HTTP/1.0 (default value)
        balance: roundrobin (default value)
        errorfile&#95;400: /etc/haproxy/errors/400.http
        errorfile&#95;403: /etc/haproxy/errors/403.http
        errorfile&#95;408: /etc/haproxy/errors/408.http
        errorfile&#95;500: /etc/haproxy/errors/500.http
        errorfile&#95;502: /etc/haproxy/errors/502.http
        errorfile&#95;503: /etc/haproxy/errors/503.http
        errorfile&#95;504: /etc/haproxy/errors/504.http
</pre>
