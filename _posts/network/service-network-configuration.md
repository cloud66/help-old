---
layout: post
template: one-col
title:  "Service network settings"
nav_sticky: false
date:   2084-12-30 16:27:22
categories: network
lead: Using the internal Docker networking
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#traffic">Traffic distribution</a>
	</li>
	<li>
		<a href="#containernet">ContainerNet</a>
	</li>
	<li>
		<a href="#elasticdns">ElasticDNS</a>
	</li>	
	<li>
		<a href="#configuration">Configuration</a>
	</li>	
        <li>
            <ul>
            <li><a href="#dns_behaviour">dns_behaviour</a></li>
            <li><a href="#load_balancing">load_balancing</a></li>
            <li><a href="#ports">Ports</a></li>
            <li><a href="#traffic_matches">Traffic matches</a></li>
            </ul>
        </li>		
</ul>

<h2 id="traffic">Traffic distribution</h2>
The external traffic to your server(s) is distributed by a Nginx reverse proxy for each upstream on HTTP and HTTPS. You can define which ports each service listens on (if any) using the `ports` directive below. If you have multiple containers running for your service(s), round-robin will be used to distribute traffic between them (providing load balancing). Should you have multiple services listening on the same external port, the `traffic_matches` directive is used to direct traffic to a specific service based on the host name.

<h2 id="containernet">ContainerNet</h2>
ContainerNet is a private and secure network (based on [Weave](http://weave.works/)) between all containers across all the servers and components in your stack, including databases. This network provides an internal IP address to each container, automatically updating with DHCP and DNS and is fully integrated with the [life-cycle management of your services](/managing-your-stack/service-life-cycle-management).

<h2 id="elasticdns">ElasticDNS</h2>

ElasticDNS sits on top of ContainerNet to provide simple DNS-based service discovery without having to change your code. This service consists of two parts: a small client and a central service. The client has a DNS server and local cache, and runs in a container on your server(s). It serves DNS queries ending with `.cloud66.local` by making a query to the central service and caching the results for their [TTL duration](http://en.wikipedia.org/wiki/Time_to_live). This means that you can call `api.cloud66.local` to contact a container running your API service for example.

As ElasticDNS is centrally backed, it also knows about the caller, which is important when you have multiple versions of your application running at any given moment (during deployment for example). Consider the following scenario: you have an app consisting of 2 services: a `web` service (accessible externally) and an `api` (used by the web service internally) service. Every time you deploy your application a new version of both services is rolled out to your servers.

When a deployment happens the load balancer for the externally available services (like `web` in this case) is instructed to switch new traffic to the new containers while still serving the existing traffic with the old containers. So if a visitor to your site is in the middle of a large file upload, it is not going to be interrupted. At this point you have 2 versions of your web and 2 versions of your api service up and running.

ElasticDNS is clever enough to know which version of the app is running in a container. So if an <b>old</b> web container asks for `api.cloud66.local` it will get the address to an <b>old</b> api container, but if a <b>new</b> web container asks for the same thing, it will get the address to a <b>new</b> api container.

<h2 id="configuration">Configuration</h2>

There are a number of directives you can set in your service configuration to customize your service network settings:

- [dns_behaviour](#dns_behaviour)
- [load_balancing](#load_balancing)
- [ports](#ports)
- [traffic_matches](#traffic_matches)

<h3 id="dns_behaviour">DNS Behaviour</h3>
The `dns_behaviour` directive allows you to change the default behaviour of returned DNS addresses of different versions. As outlined above, ElasticDNS always try to return the version of the container that has the same version of the caller. You can change this behaviour by setting `dns_behaviour` value to `non-versioned`, in which case ElasticDNS will return the address of containers with latest version.

<h3 id="load_balancing">Load Balancing</h3>
You can change the load balancing method of ElasticDNS with the `load_balancing` directive. The accepted values are `roundrobin` , `sticky` and `closest`, and the default value is `roundrobin` which return the list of container's IP for the requested service in roundrobin. If you choose the `sticky` option, you will get the last IP you got (if you request after 1 minute you may get a new IP). If you choose the `closest` option, you will get the list of container's IP that exist on caller server (it will return all available IPs if there is no container of the requested service on caller server).

<h3 id="ports">Ports</h3>
The `ports` option allows you to specify ports definitions for your service. The format of the ports definition is a list of `CONTAINER_PORT:HTTP_PORT:HTTPS_PORT`. Note that the `HTTP_PORT` and `HTTPS_PORT` fields are optional, and you can have HTTPS without HTTP if you wish and vica-versa by including the colons, but leaving that corresponding port number blank. You can define multiple port definition triplets for a single service using the above format, for example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        ports: ["3000:80:443", "4000::8443", "5000"]
{% endhighlight %}

In this example, the application is listening on port 3000 in the container, and that port is exposed via HTTP on port 80, and HTTPS on port 443. Port 4000 inside the container is also available on port 8443 externally, and port 5000 in the container is available locally on the server. These HTTP/HTTPS ports are available from outside the server, and any traffic to these ports will be redirected to any containers running this service. During scaling, any containers running this service will get traffic distributed to them in a round robin fashion. 

<h4>Advanced ports</h4>

You can also specify ports declaratively, and assign tcp/udp mappings directly to the host. This will mean that containers are mapped directly to the corresponding tcp/udp port on the host. Please note that if you use tcp/udp port mappings then you can only have a single container of that service running per server (can not map multiple containers to the same host port). Note that each port specification is optional. Http/Https ports will be mapped via Nginx automatically. For example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        ports:
          - container: 3000
            http: 80
            https: 443
            tcp: 25
            udp: 111
{% endhighlight %}

<hr>

<h3 id="traffic_matches">Traffic matches</h3>
The `traffic_matches` option allows you to specify an array of string server name matches for your service. These are automatically configured in your reverse proxy service (Nginx). In the following example, if traffic comes in on `app.your_domain.com` or `*.anotherdomain.com` on this service port, then traffic will automatically get routed to it. This option also allows you to have multiple services listening on the same port (port 80 for example) as long as they have different rules for matching server names.

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        traffic_matches: ["app.your_domain.com", "*.anotherdomain.com"]
{% endhighlight %}