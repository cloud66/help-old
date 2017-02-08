---
layout: post
template: one-col
title:  "Building your manifest file"
so_title: "manifest"
nav_sticky: false
date:   2092-01-25 16:27:22
categories: building-your-stack
lead: How to configure advanced settings for your stack
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#intro">What is a manifest file?</a></li>
    <li><a href="#environment">Which environment?</a></li>
    <li><a href="#app">Which application?</a></li>
        <li>
        <ul>
            <li><a href="#docker">Docker</a></li>
            <li><a href="#elastic">ElasticSearch</a></li>
            <li><a href="#gateway">Gateway</a></li>
            <li><a href="#gluster">GlusterFS</a></li>
            <li><a href="#load_balancer">Load balancers</a></li>
            <li><a href="#memcached">Memcached</a></li>
            <li><a href="#mongo">MongoDB</a></li>
            <li><a href="#mysql">MySQL</a></li>
            <li><a href="#nginx">Nginx</a></li>
            <li><a href="#postgis">PostGIS</a></li>
            <li><a href="#postgresql">PostgreSQL</a></li>
            <li><a href="#rails">Rails</a></li>
            <li><a href="#redis">Redis</a></li>
            <li><a href="#sinatra">Sinatra</a></li>
        </ul>
        </li>
    <li><a href="#servers">Which server?</a></li>
        <li>
        <ul>
            <li><a href="#shared">Shared servers</a></li>
            <li><a href="#external">External</a></li>
        </ul>
        </li>
    <li><a href="#environment_variables">Specify environment variables</a></li>
    <li><a href="#processes">Process Settings</a></li>
    <li><a href="#live_logs">Specify additional LiveLog files</a></li>
    <li><a href="#experiments">Test experimental features</a></li>
</li>
</ul>

<h2 id="intro">What is a manifest file?</h2>

A manifest file allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack. See [Getting started with manifest files](/building-your-stack/getting-started-with-manifest-files) for an introduction.

The way to use this functionality differs from _Rails/Rack_ to _Docker_ stacks:

- For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
- For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the _Configure manifest_ item in the right menu of your stack page.

Once you're ready, start by going through each section below to build your manifest file.

<h2 id="environment">Which environment?</h2>
The first level of your manifest file is the **environment** - this allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.

<h2 id="app">Which application?</h2>
Next, select which application you would like to specify settings for. You can choose from the following:

<ul>
<li><a href="#docker">Docker</a></li>
<li><a href="#elastic">ElasticSearch</a></li>
<li><a href="#gluster">Gateway</a></li>
<li><a href="#gluster">GlusterFS</a></li>
<li><a href="#load_balancer">Load balancers</a></li>
<li><a href="#memcached">Memcached</a></li>
<li><a href="#mongo">MongoDB</a></li>
<li><a href="#mysql">MySQL</a></li>
<li><a href="#nginx">Nginx</a></li>
<li><a href="#postgis">PostGIS</a></li>
<li><a href="#postgresql">PostgreSQL</a></li>
<li><a href="#rails">Rails</a></li>
<li><a href="#redis">Redis</a></li>
<li><a href="#sinatra">Sinatra</a></li>
</ul>

<h3 id="docker">Docker</h3>

- **version**: Specify the version of Docker you want to install.
- **weave_version** (_Optional_): Specify the version of Weave you want to install.
- **vpc&#95;id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers. <span style="background-color: #FFFF00"> Note that you must provide <a href= "#servers"> <b>subnet_id</b></a> for all servers in your stack.</span>
- **vn&#95;name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.
- **image_keep_count** (_Optional, defaults to 5_): Set the number of old images to save on your servers (besides the running image).

<pre class="prettyprint">
production:
    docker:
        configuration:
            version: 1.7.0
            weave_version: 1.0.3
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
            image_keep_count: 5
</pre>

<pre class="prettyprint">
production:
    docker:
        configuration:
            version: 1.7.0
            weave_version: 1.0.3
            vn_name: your_vn_name
            root_disk_size: 100
            root_disk_type: ssd
            image_keep_count: 15
            extra_packages:
                - chrony
</pre>

<hr>

<h3 id="elastic">ElasticSearch</h3>

- **version**: Specify the version of ElasticSearch you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<pre class="prettyprint">
production:
    elasticsearch:
        configuration:
            version: 0.90.7
            root_disk_size: 100
            root_disk_type: ssd
</pre>
<hr>

<h3 id="gateway">Gateway</h3>

- **name**: Specify the name of gateway you want to use for your stack.
- **username** (_Optional_) Specify the username which should be used to connect to bastion server.

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The gateway should be defined and open before you can use it in manifest.</p>
</div>


<pre class="prettyprint">
production:
	gateway:
	    name: aws_bastion
	    username: ec2-user
</pre>


<hr>

<h3 id="gluster">GlusterFS</h3>

- **version**: Specify the version of GlusterFS you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is `ssd`.
- **replica_count** : Number of nodes in _GlusterFS cluster_ which a data will be replicated on it(i.e replica count 2 means your data exist on two nodes). Default value is 1.
- **mount_targets** : List of _Servers_ and _Server Groups_ you need GlusterFS mounted on them. You can specify the name of the _server_ or _server group_ (i.e rails,docker,mysql,...). You can also use `app` and `db` keywords, `app` is your main app server group (i.e docker, rails, sinatra, ...)  and `db` is your db server groups (i.e mysql,redis,postgresql,... ). Default value is `app`.
- **volumes**: List of volumes you want in your GlusterFS Cluster.  By default we are creating a volume called `cloud66-vol`  and mounted to `/mnt/data-store`.

Available settings for a volume are:

- **name**: Specify the name of volume.
- **mount**: Specify the mount point of the volume on clients.
- **access_control** (_Optional, Docker stacks only_): Specify the list of docker services which should have a _read only_ or _read/write_ attached volume, mounted to this glusterfs volume. Options are `read` and `write` (which includes read as well)

After you change the volume list, you need to redeploy your stack for new configuration be applied to your stack.

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>You can not change replica_count after GlusterFS added to your stack.</p>
</div>

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>You can not use glusterfs group or any of its servers in mount_targets.</p>
</div>


<div class="notice notice-danger">
	<h3>Note</h3>
	<p>Renaming a volume will delete volume and create a new one.</p>
</div>



<pre class="prettyprint">
production:
	glusterfs:
		configuration:
			version: 3.7
			replica_count: 2
			mount_targets: ['app','redis']
			volumes:
		  	- volume:
				name: images-data
				mount: "/mnt/images"
				access_control:
			  		read: ['web', 'api']
			  		write: ['web']
		  	- volume:
				name: videos
				mount: /mnt-data/videos
				access_control:
			  		read: ['web']
			  		write: ['web']
</pre>



<hr>
<h3 id="memcached">Memcached</h3>

- **memory**: Specify maximum memory (in MB) that can be used (default value is 64).
- **port**: Specify connection port (default value is 11211).
- **listen&#95;ip**: Specify which IP address to listen on (default value is 0.0.0.0).

<pre class="prettyprint">
production:
    memcached:
        configuration:
            memory: 1024
            port: 11211
            listen&#95;ip: 127.0.0.1
</pre>

<hr>

<h3 id="mongo">MongoDB</h3>

- **version**: Specify the version of MongoDB you want to install (can only be set during stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<pre class="prettyprint">
production:
    mongodb:
        configuration:
            version: 2.4.8
            root_disk_size: 100
            root_disk_type: ssd
</pre>

<hr>

<h3 id="mysql">MySQL</h3>

- **version**: Specify the version of MySQL you want to install. Valid values are 5.5 and 5.6 (can only be set during stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.
- **engine**: Specify the MySQL engine you want to install. Valid values are 'mysql' and 'percona' (can only be set during stack build).

<pre class="prettyprint">
production:
    mysql:
        configuration:
            version: 5.5
            root_disk_size: 100
            root_disk_type: ssd
            engine: percona
</pre>

<hr>

<h3 id="nginx">Nginx</h3>

- **cors**: Enable [Cross Origin Resource Sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) - this will be taken into account when your Nginx configuration is reloaded.
- **perfect_forward_secrecy** (_deprecated_): Enable [Perfect Forward Secrecy](http://en.wikipedia.org/wiki/Perfect_forward_secrecy) - this will be taken into account when your Nginx configuration is reloaded.

<pre class="prettyprint">
production:
    rails:
        configuration:
            nginx:
                cors: true
                perfect&#95;forward&#95;secrecy: true # deprecated
</pre>

#### CORS configuration

If required, you can also specify the allowed origin (as '\*' or a single origin) and methods. For stacks created since 21st September 2016, you can also specify a comma-seperated list of origins, headers, and whether to allow credentials for CORS.

<pre class="prettyprint">
production:
    rails:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
                    headers: 'Custom-Header, Another-Header'
                    credentials: true
</pre>

<hr>

<h3 id="postgresql">PostgreSQL</h3>

- **version**: Specify the version of PostgreSQL you want to install (can only be set during stack build).
- **postgis**: Specify whether to include PostGIS (can be added after initial stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<pre class="prettyprint">
production:
    postgresql:
        configuration:
            version: 9.3.4
            postgis: true
            root_disk_size: 100
            root_disk_type: ssd
</pre>
<hr>
<h3 id="postgis">PostGIS</h3>

- **version**: Specify the version of PostGIS you want to install.

<pre class="prettyprint">
production:
   postgresql:
       configuration:
            postgis:
                version: 2.1.1
</pre>

<hr>

<h3 id="rails">Rails</h3>
A Rails application type in the manifest file gives you fine control over things like the Ruby version or the server the rails application is deployed on.

- **ruby&#95;version**: Specify the version of Ruby to use (overridden if present in Gemfile).
- **asset&#95;pipeline&#95;precompile**: Specify whether to use asset pipeline compilation - this will be taken into account during redeployment.
- **do&#95;initial&#95;db&#95;schema&#95;load**: Specify whether to perform "rake db:schema:load" on a new stack build.
- **reserved&#95;server&#95;memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger&#95;process&#95;memory**: A value in MB that Cloud 66 will use for each Passenger process when calculating the passenger&#95;max&#95;pool&#95;size (Passenger-based stacks only) - this will be taken into account during redeployment.
- **locked&#95;passenger&#95;version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on passenger enterprise stacks.
- **activeprotect**: Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration.
- **vpc&#95;id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers. <span style="background-color: #FFFF00"> Note that you must provide <a href= "#servers"> <b>subnet_id</b></a> for all servers in your stack.</span>
- **vn&#95;name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<div class="notice notice-danger">
        <h3>Important</h3>
        <p>In order to use vpc_id, you must provide subnet_id for all servers in your stack.</p>
</div>

<pre class="prettyprint">
production:
    rails:
        configuration:
            ruby&#95;version: 2.2.0
            asset&#95;pipeline&#95;precompile: true
            do&#95;initial&#95;db&#95;schema&#95;load: false
            reserved&#95;server&#95;memory: 0 #default value
            passenger&#95;process&#95;memory: 200 #default value
            locked&#95;passenger&#95;version: 4.0.59
            activeprotect:
                whitelist: 123.123.123.123,234.234.234.234
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
</pre>

<hr>

<h3 id="redis">Redis</h3>

- **version**: Specify the version of Redis you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<pre class="prettyprint">
production:
    redis:
        configuration:
            version: 2.6.10
            root_disk_size: 100
            root_disk_type: ssd
</pre>

<hr>

<h3 id="sinatra">Sinatra</h3>
A Sinatra application type in the manifest file gives you fine control over things like the Ruby version or which server the application is deployed on.

- **ruby&#95;version**: Specify the version of Ruby to use (overridden if present in Gemfile).
- **do&#95;initial&#95;db&#95;schema&#95;load**: Specify whether to perform "rake db:schema:load" on new stack build.
- **reserved&#95;server&#95;memory**: A value in MB that Cloud 66 will assume should be left available. This will affect any automatically calculated values, and will be taken into account during redeployment.
- **passenger&#95;process&#95;memory**: A value in MB that Cloud 66 will use for each Passenger process when calculating the passenger&#95;max&#95;pool&#95;size (Passenger-based stacks only) - this will be taken into account during redeployment.
- **locked&#95;passenger&#95;version**: Force the version of passenger to use. Note: this only applies during server build and is not supported on passenger enterprise stacks.
- **activeprotect**: Specify a whitelist of IPs that should be ignored by your ActiveProtect configuration.
- **vpc&#95;id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.
- **vn&#95;name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.

<div class="notice notice-danger">
        <h3>Important</h3>
        <p>In order to use a vpc_id, you must provide subnet_id for all servers in your stack.</p>
</div>

<pre class="prettyprint">
production:
    sinatra:
        configuration:
            ruby&#95;version: 1.9.3
            do&#95;initial&#95;db&#95;schema&#95;load: false
            reserved&#95;server&#95;memory: 0 #default value
            passenger&#95;process&#95;memory: 200 #default value
            locked&#95;passenger&#95;version: 4.0.59
            activeprotect:
                whitelist: 123.123.123.123,234.234.234.234
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
</pre>

<hr>

<h3 id="load_balancer">Load balancers</h3>

<h4 id="aws_elb">AWS load balancer</h4>
Use a manifest file to customize the AWS load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings:

- **httpchk**: The URL visited to check your server health.

<pre class="prettyprint">
production:
    load_balancer:
        configuration:
            httpchk: /
</pre>

<hr>

<h4 id="gce_lb">GCE load balancer</h4>
Use a manifest file to customize the GCE load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [GCE documentation](https://cloud.google.com/compute/docs/load-balancing/network/target-pools) for more information):

- **httpchk**: The URL visited to check your server health.

- **balance**: The load balancing strategy. You can use these values: NONE, CLIENT_IP or CLIENT_IP_PROTO.

<pre class="prettyprint">
production:
    load_balancer:
        configuration:
            httpchk: /
            balance: CLIENT_IP_PROTO
</pre>

<hr>

<h4 id="haproxy">HAProxy</h4>
Use a manifest file to configure and define your HAProxy load balancer deployed by Cloud 66. These changes will be either be applied when you redeploy a stack with more than one server, rebuild HAProxy or edit [HAProxy CustomConfig](/web-server/haproxy).

Available settings (refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/configuration.txt) for more information):
Server definitions
unique_name: Name of the instance
size: The size of the instance (Mandatory)
region: Digital Ocean's region (Mandatory)
vendor: digitalocean (Mandatory)
key_name: Default (Mandatory)
Configuration:
- **httpchk**: The health-check configuration.
- **balance**: The load balancing strategy.
- **errorfile&#95;\***: Location of your own custom error page content to serve in the case of receiving a HTTP error code on the load balancer.

<pre class="prettyprint">
production:
    load_balancer:
        servers:
         - server:
           unique_name: bananana
           size: 1gb
           region: ams2
           vendor: digitalocean
           key_name: Default
        configuration:
            httpchk: HEAD / HTTP/1.1\r\nHost:haproxy  #default value
            balance: roundrobin #default value
            errorfile&#95;400: /etc/haproxy/errors/400.http
            errorfile&#95;403: /etc/haproxy/errors/403.http
            errorfile&#95;408: /etc/haproxy/errors/408.http
            errorfile&#95;500: /etc/haproxy/errors/500.http
            errorfile&#95;502: /etc/haproxy/errors/502.http
            errorfile&#95;503: /etc/haproxy/errors/503.http
            errorfile&#95;504: /etc/haproxy/errors/504.https
</pre>

<hr>

<h4 id="nodebalancer">Linode Nodebalancer</h4>
Use a manifest file to the Linode Nodebalancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Linode documentation](https://www.linode.com/docs/platform/nodebalancer/nodebalancer-reference-guide) for more information):

- **httpchk**: The health-check configuration
- **balance**: The load balancing strategy. You can use these values : roundrobin, leastconn or source.

<pre class="prettyprint">
production:
    load_balancer:
        configuration:
            httpchk: /
            balance: leastconn
</pre>

<hr>

<h4 id="rs_loadbalancer">Rackspace load balancer</h4>
Use a manifest file to customize the Rackspace load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

Available settings (refer to the [Rackspace documentation](http://docs.rackspace.com/loadbalancers/api/v1.0/clb-devguide/content/Algorithms-d1e4367.html) for more information):

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, RANDOM or LEAST_CONNECTIONS.

<pre class="prettyprint">
production:
    load_balancer:
        configuration:
            balance: LEAST_CONNECTIONS
</pre>

<hr>

<h4 id="rs_loadbalancer">CloudA load balancer</h4>
Use a manifest file to customize the CloudA load balancer deployed by Cloud 66. These changes will only apply when you create a new load balancer.

- **balance**: The load balancing strategy. You can use these values : ROUND_ROBIN, SOURCE_IP or LEAST_CONNECTIONS.

<pre class="prettyprint">
production:
    load_balancer:
        configuration:
            balance: ROUND_ROBIN
</pre>

<hr>

<h3 id="servers">Which server?</h3>
Every application defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all servers in an application type, you don't need to specify a server type. Servers can be deployed specifically to host that application, be shared between multiple applications (eg. Rails and MySQL on the same server) or be an external server (eg. using an external database).

Here is an example of a server definition:

<pre class="prettyprint">
production:
    rails:
        servers:
          - server:
            unique_name: app
</pre>

These are the parameters that the <i>server</i> section can take:

- **unique_name** (_Required if you are specifying a server type_): A unique name for this server.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being <i>ssd</i> and <i>magnetic</i>. Default value is <i>ssd</i>.
- **subnet_id** (_Optional, AWS EC2 only_): ID of the AWS subnet in which you would like to create your servers.
- **vendor** (_Optional, BYOC only_): Cloud vendor to fire the server up on. Valid values: aws, azure, digitalocean, googlecloud, linode, rackspace, vexxhost and clouda
- **key_name** (_Optional, BYOC only_): Key name of the cloud vendor to fire the server up on. This is used when the account has multiple keys for a given cloud vendor. The default value is `Default` when omitted.
- **region** (_Optional, BYOC only_): [Data center region](http://developers.cloud66.com/#cloud-vendor-instance-regions) to create the server in.
- **size** (_Optional, BYOC only_): [Size of the server instance](http://developers.cloud66.com/#cloud-vendor-instance-names) created.
- **availability_zone** (_Optional, AWS EC2 only_): Availability zone of the server instance in AWS EC2 region.

<div class="notice notice-danger">
    <h3>Important</h3>
    <p>Only a single cloud vendor and region is supported for servers in a stack.</p>
</div>

<pre class="prettyprint">
production:
    rails:
        server:
            unique_name: app
            vendor: aws
            key_name: Default
            region: us-east-1
            size: m3.medium
            root_disk_size: 100
            root_disk_type: ssd
            subnet_id: subnet-40000000
            availability_zone: us-east-1c
</pre>


<h4>Deploy to your own server</h4>

- **address** (_Optional, Registered Server only_): Address of the server, only applicable to Registered Servers. For Registered Servers, <i>unique_name</i> and <i>address</i> should be defined.

<pre class="prettyprint">
production:
    rails:
        server:
            unique_name: frontend
            address: 123.123.123.123
</pre>

<h4 id="shared">Shared Servers</h4>

You can share a server between two applications. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the applications will then share the physical server:

{% highlight yaml %}
production:
    rails:
        server:
            same_as: *another_existing_servers_unique_name*
{% endhighlight %}

<h4 id="external">External Servers</h4>

If you would like to use an external server for an application (like using your own MySQL or AWS RDS for example), you can define that server as external.

External server definitions specify that the application is hosted on a server external to Cloud 66. This is not a valid target for your main application (ie. Rails) but may be appropriate for another application type (ie. MongoDB):

<pre class="prettyprint">
production:
    mysql:
        server: external
</pre>

<div class="notice">
        <h3>Important</h3>
        <p>You are <b>required</b> to specify a <a href="/building-your-stack/building-your-manifest-file#servers">server</a> for application types, whereas configurations are <b>optional</b>.</p>
</div>

<h2 id="environment_variables">Specify environment variables</h2>
You can add your environment variables to your manifest files.

Here is an example:

<pre class="prettyprint">
production:
    environment_variables:
        SOME_VARIABLE: value
        ANOTHER_ONE: another_value
        THIRD_ONE: AUTO_GENERATE
        LONG_ONE: AUTO_GENERATE_15
</pre>

If you need to auto generate a value, you can use the `AUTO_GENERATE` keyword. It generates a 10 character long random string unless you specify the length after it: `AUTO_GENERATE_15` which generates a 15 character random string.

Environment variables set in your manifest file will only apply during the initial build of your stack. Please refer to our documentation on <a href="/deployment/environment-variables">environment variables</a> if you'd like to set them beyond this point.

Any environment variable that is generated by the result of the code analysis (like database addresses) will override any value specified in the manifest file. In other words, you cannot specify a value like `MYSQL_ADDRESS` in your manifest file as it will be ignored.

<h2 id="processes">Processes</h2>
[Background processes](/deployment/running-background-processes) can be deployed and managed by Cloud 66. Any process in a `Procfile` will be picked up, deployed and monitored by the system.

If you would like more flexibility over the signals used to control the processes, you can use the `procfile_metadata` section. Here is an example:

<pre class="prettyprint yaml">
production:
  procfile_metadata:
    worker:
      stop_sequence: ttin, 120, term, 5, kill
    web:
      restart_signal: usr1
      web_server_stop_signals: usr1, 30, kill
    nsq:
      restart_on_deploy: false
</pre>

In this example, a process called `worker` is stopped using a `TTIN` signal first. After waiting for 120 seconds, if the process is still running, a `TERM` signal will be sent. If it is still running after 5 seconds, it will be killed.

As for `web` or `custom_web` processes, you can specify a `restart_signal` which will be sent to the process serving web. This is useful for web servers that can do "phased" or zero-downtime restarts.

All processes restart during each redeployment of the stack. If you want to avoid this, you can set `restart_on_deploy` to `false`.

Default values for each process type are:

- Web/Custom Web Processes:
  - Stop Signal `web_server_stop_signals`: `QUIT`
  - Restart Signal `restart_signal`: `USR2`
- Non-Web Processes:
  - Stop Signal `stop_sequence`: `QUIT,30,TERM,11,KILL`
  - Restart `restart_on_deploy`: `true`

<h2 id="live_logs">Specify additional LiveLog files</h2>
Each application type supports the additional partial configuration to add custom live log files for that application type:

<pre class="prettyprint">
production:
    docker:
        configuration:
            custom_log_files: ["/tmp/mylog/*/*.log"]
</pre>

For more information about <b>LiveLogs</b> and additional examples, please see the <a href="http://help.cloud66.com/managing-your-stack/live-logs">LiveLogs help page</a>.

<h2 id="experiments">Test experimental features</h2>
You can use some features that are still in beta by adding them to <i>experiments</i> section of your manifest file, for example:

<pre class="prettyprint">
production:
    experiments:
        docker_storage: overlay
</pre>

These are the parameters that the <i>experiments</i> section currently accepts:

- **docker_storage** (_Optional_): If set to _overlay_, we will configure Docker on new servers to use OverlayFS backend storage.
