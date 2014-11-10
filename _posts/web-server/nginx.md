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

<TABLE id="fields" class='table table-bordered table-striped table-small fields'>
<THEAD valign="top">
<TR>
	<TH>Category<BR>
	<TH>Attribute
	<TH>Default value
<TBODY>
	<TR class="header"><TD width="15%"><b>General</b> <span>-</span><TD width="20%"><TD width="70%">
	<TR><TD><TD width="20%">user<TD width="70%">nginx
	<TR><TD><TD>worker_processes<TD>Dynamically set based on instance size
	<TR><TD><TD>error_log<TD>/var/deploy/[stack_name]/web_head/shared/log/nginx_error.log
<TBODY>
	<TR class="header"><TD width="15%"><b>Events</b> <span>-</span><TD><TD>
	<TR><TD><TD width="20%">worker_connections<TD>1024
<TBODY>
	<TR class="header"><TD width="15%"><b>HTTP</b> <span>-</span><TD><TD>
	<TR><TD><TD width="20%">gzip<TD>on
	<TR><TD><TD width="20%">gzip_min_length<TD>100
	<TR><TD><TD width="20%">gzip_proxied<TD>expired no-cache no-store private auth
	<TR><TD><TD width="20%">gzip_types<TD>text/plain application/xml text/css application/x-javascript text/javascript
	<TR><TD><TD width="20%">gzip_disable<TD>"MSIE [1-6]\."
	<TR><TD><TD width="20%">passenger_root<TD>[passenger location]
	<TR><TD><TD width="20%">passenger_ruby<TD>[stack ruby shell]
	<TR><TD><TD width="20%">passenger_ruby<TD>nginx
	<TR><TD><TD width="20%">passenger_pool_idle_time<TD>0
	<TR><TD><TD width="20%">passenger_max_pool_size<TD>15
	<TR><TD><TD width="20%">ssl_session_cache<TD>shared:SSL:10m
	<TR><TD><TD width="20%">ssl_session_timeout<TD>10m
	<TR><TD><TD width="20%">underscores_in_headers<TD>on
	<TR><TD><TD width="20%">default_type<TD>application/octet-stream
	<TR><TD><TD width="20%">client_max_body_size<TD>50m
	<TR><TD><TD width="20%">sendfile<TD>on
	<TR><TD><TD width="20%">server_tokens<TD>off		
	<TR><TD><TD width="20%">keepalive_timeout<TD>65
<TBODY>
	<TR class="header"><TD width="15%"><b>Server</b> <span>-</span><TD><TD>
	<TR><TD><TD width="20%">listen<TD>80 default_server
	<TR><TD><TD width="20%">server_name<TD>_ or SSL server name
	<TR><TD><TD width="20%">rails_env<TD>[stack environment]
	<TR><TD><TD width="20%">client_max_body_size<TD>50m
	<TR><TD><TD width="20%">root<TD>/var/deploy/[stack name]/web_head/current/public
	<TR><TD><TD width="20%">passenger_enabled<TD>on
	<TR><TD><TD width="20%">ssl_certificate_key<TD>/etc/ssl/localcerts/[ssl cerificate file name].key
	<TR><TD><TD width="20%">ssl_certificate<TD>/etc/ssl/localcerts/[ssl cerificate file name].crt
</TABLE>

<h2 id="workers">Nginx worker configuration</h2>
The following table specifies the number of workers configured for your Nginx based on the server resources (CPU cores) on each cloud.

<TABLE id="fields" class='table table-bordered table-striped table-small fields'>
<THEAD valign="top">
<TR>
	<TH>Cloud provider<BR>
	<TH>Instance type
	<TH>Number of Workers
<TBODY>
	<TR class="header"><TD width="25%"><b>AWS</b> <span>-</span><TD width="40%"><TD width="70%">
	<TR><TD><TD width="40%">t1.micro<TD width="70%">1
	<TR><TD><TD>m1.small<TD>1
	<TR><TD><TD>m1.medium<TD>2
	<TR><TD><TD>m1.large<TD>2
	<TR><TD><TD>m1.xlarge<TD>4
	<TR><TD><TD>m3.medium<TD>1
	<TR><TD><TD>m3.large<TD>2
	<TR><TD><TD>m3.xlarge<TD>4
	<TR><TD><TD>m3.2xlarge<TD>8
	<TR><TD><TD>m2.xlarge<TD>2
	<TR><TD><TD>m2.2xlarge<TD>4
	<TR><TD><TD>m2.4xlarge<TD>8
	<TR><TD><TD>c1.medium<TD>2
	<TR><TD><TD>c1.xlarge<TD>8
	<TR><TD><TD>c3.large<TD>2
	<TR><TD><TD>c3.xlarge<TD>4
	<TR><TD><TD>c3.2xlarge<TD>8
	<TR><TD><TD>c3.4xlarge<TD>16
	<TR><TD><TD>c3.8xlarge<TD>32
	<TR><TD><TD>cc2.8xlarge<TD>88
	<TR><TD><TD>i2.xlarge<TD>4	
	<TR><TD><TD>i2.2xlarge<TD>8
	<TR><TD><TD>i2.4xlarge<TD>16
	<TR><TD><TD>i2.8xlarge<TD>32
	<TR><TD><TD>cr1.8xlarge<TD>88
	<TR><TD><TD>hi1.4xlarge<TD>35
	<TR><TD><TD>hs1.8xlarge<TD>35
	<TR><TD><TD>cg1.4xlarge<TD>33.5
	<TR><TD><TD>g2.2xlarge<TD>8
<TBODY>
	<TR class="header"><TD width="25%"><b>DigitalOcean</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">512MB - 1 CPU<TD>1
	<TR><TD><TD>1GB - 1 CPU<TD>1
	<TR><TD><TD>2GB - 2 CPU<TD>2
	<TR><TD><TD>4GB - 2 CPU<TD>2
	<TR><TD><TD>8GB - 4 CPU<TD>4
	<TR><TD><TD>16GB - 8 CPU<TD>8
	<TR><TD><TD>32GB - 12 CPU<TD>12
	<TR><TD><TD>48GB - 16 CPU<TD>16
	<TR><TD><TD>64GB - 20 CPU<TD>20
	<TR><TD><TD>96GB - 24 CPU<TD>24
<TBODY>
	<TR class="header"><TD width="25%"><b>GCE</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">n1-standard-1<TD>1
	<TR><TD><TD>n1-standard-2<TD>2
	<TR><TD><TD>n1-standard-4<TD>4
	<TR><TD><TD>n1-standard-8<TD>8
	<TR><TD><TD>n1-standard-16<TD>16
	<TR><TD><TD>n1-highmem-2<TD>2
	<TR><TD><TD>n1-highmem-4<TD>4
	<TR><TD><TD>n1-highmem-8<TD>8
	<TR><TD><TD>n1-highmem-16<TD>16
	<TR><TD><TD>n1-highcpu-2<TD>2
	<TR><TD><TD>n1-highcpu-4<TD>4		
	<TR><TD><TD>n1-highcpu-8<TD>8
	<TR><TD><TD>n1-highcpu-16<TD>16
	<TR><TD><TD>f1-micro<TD>1
	<TR><TD><TD>g1-small<TD>1
<TBODY>
	<TR class="header"><TD width="25%"><b>Joyent</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">Extra Small 512 MB<TD>1
	<TR><TD><TD>Small 1GB<TD>1
	<TR><TD><TD>Medium 2GB<TD>2
	<TR><TD><TD>Medium 4GB<TD>4
	<TR><TD><TD>Large 8GB<TD>8	
	<TR><TD><TD>Large 16GB<TD>12
	<TR><TD><TD>XL 32GB<TD>16
	<TR><TD><TD>XXL 48GB<TD>16
	<TR><TD><TD>XXXL 64GB<TD>16
<TBODY>
	<TR class="header"><TD width="25%"><b>Linode</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">Linode 1GB<TD>1
	<TR><TD><TD>Linode 2GB<TD>2
	<TR><TD><TD>Linode 4GB<TD>4
	<TR><TD><TD>Linode 8GB<TD>6
	<TR><TD><TD>Linode 16GB<TD>8	
	<TR><TD><TD>Linode 32GB<TD>12
	<TR><TD><TD>Linode 48GB<TD>16
	<TR><TD><TD>Linode 64GB<TD>20
	<TR><TD><TD>Linode 96GB<TD>20
<TBODY>
	<TR class="header"><TD width="25%"><b>Rackspace</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">512MB Standard Instance<TD>1
	<TR><TD><TD>1GB Standard Instance<TD>2
	<TR><TD><TD>2GB Standard Instance<TD>4
	<TR><TD><TD>4GB Standard Instance<TD>4
	<TR><TD><TD>8GB Standard Instance<TD>8	
	<TR><TD><TD>15GB Standard Instance<TD>8
	<TR><TD><TD>30GB Standard Instance<TD>8
<TBODY>
	<TR class="header"><TD width="25%"><b>Vexxhost</b> <span>-</span><TD><TD>
	<TR><TD><TD width="40%">512 MB<TD>2
	<TR><TD><TD>1 GB<TD>4
	<TR><TD><TD>2 GB<TD>4
	<TR><TD><TD>4 GB<TD>4
	<TR><TD><TD>8 GB<TD>8	
	<TR><TD><TD>16 GB<TD>8
	<TR><TD><TD>24 GB<TD>8		
	<TR><TD><TD>32 GB<TD>16		
	<TR><TD><TD>48 GB<TD>16		
	<TR><TD><TD>64 GB<TD>16			
</TABLE>

<h2 id="error">Custom Nginx error page</h2>
To create a custom Nginx 50X error page, create a file called _50X.html_ in <code>$STACK&#95;PATH/public/</code>.

<h2 id="customize">Customize your Nginx configuration</h2>
Cloud 66 makes it easy for you to customize your Nginx configuration. From your stack detail page, access your web server group page (eg. _Rails server_) and click _Customize Nginx_ in the right sidebar. Follow the [CustomConfig instructions](/stack-definition/custom-config.html) to customize the configuration.

Editing and committing your Nginx CustomConfig will perform the following steps on **every web server in your stack**, one by one, sequentially:

* Check your template for Liquid syntax errors
* Determine the correct Passenger path (Passenger stacks only)
* Check the version of your Passenger, and determine if Nginx needs to use a Ruby shell wrapper
* Count the number of cores on the server
* Compile the Nginx configuration based on the information from the server
* Upload the configuration to the server
* Reload Nginx

Reloading Nginx does not interrupt the serving of traffic. This process will be stopped if an error is encountered. For example, if you have 3 web servers in your stack, if the first server fails to be updated, the process will be halted for the other 2 servers to avoid complete service diruption.

<div class="notice notice-danger">
    <h3>Warning</h3>
    <p>A bad configuration may stop your Nginx from functioning, so take extra care when making changes.</p>
</div>

<h3 id="custom-vars">Nginx CustomConfig variables</h3>

The following variables are available for use in your Nginx CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>passenger</td>
			<td>boolean</td>
      <td>Is nginx running Passenger or a custom web server?</td>
		</tr>

		<tr>
			<td>user_name</td>
			<td>string</td>
      <td>User name running the application process</td>
		</tr>

		<tr>
			<td>environment</td>
			<td>string</td>
      <td>Stack environment name (lowercase)</td>
		</tr>

		<tr>
			<td>server_address</td>
			<td>string</td>
      <td>Server address (IP or fqdn)</td>
		</tr>

		<tr>
			<td>workers</td>
			<td>integer</td>
      <td>Number of CPU cores on the server</td>
		</tr>

		<tr>
			<td>passenger_pool_max</td>
			<td>integer</td>
      <td>Size of the passenger pool (Passenger Only)</td>
		</tr>

		<tr>
			<td>use_ruby_shell</td>
			<td>boolean</td>
      <td>Used internally</td>
		</tr>

		<tr>
			<td>ruby_shell</td>
			<td>string</td>
      <td>/var/deploy/ruby_shell</td>
		</tr>

		<tr>
			<td>app_name</td>
			<td>string</td>
      <td>Stack name (lowercase)</td>
		</tr>

		<tr>
			<td>deploy_to</td>
			<td>string</td>
      <td>Stack path on the server</td>
		</tr>

		<tr>
			<td>envars</td>
			<td>hash</td>
      <td>Hash of all environment variables on the stack</td>
		</tr>

		<tr>
			<td>envars</td>
			<td>hash</td>
      <td>Hash of all environment variables on the stack</td>
		</tr>

		<tr>
			<td>passenger_location</td>
			<td>string</td>
      <td>Passenger location (Passenger only)</td>
		</tr>

		<tr>
			<td>allow_ssl</td>
			<td>boolean</td>
      <td>Is an SSL Certificate configured on the stack?</td>
		</tr>

		<tr>
			<td>perfect_forward_secrecy</td>
			<td>boolean</td>
      <td>Is perfect forward secrecy enabled on the stack?</td>
		</tr>

		<tr>
			<td>cors_enabled</td>
			<td>boolean</td>
      <td>Is CORS enabled on the stack?</td>
		</tr>

		<tr>
			<td>cors_origin</td>
			<td>string</td>
      <td>CORS Origins</td>
		</tr>

		<tr>
			<td>cors_methods</td>
			<td>string</td>
      <td>CORS Methods</td>
		</tr>

  </tbody>
</table>

<h3 id="boolean">Boolean variables</h3>

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false` (even if you are checking for true).

Good syntax:

* if passenger != true
* if passenger != false
* if passenger == true
* if passenger == false

Bad syntax:

* Bad: if passenger
* Bad: if !passenger