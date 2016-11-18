---
layout: post
template: one-col
title:  "Service Networking"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: Serving traffic from inside the container to the outside world
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#overview">Overview</a></li>
    <li><a href="#ports-inside-and-outside">Ports inside and outside containers</a></li>
    <li><a href="#mapping-ports">Mapping ports from inside to the outside world</a></li>
    <li><a href="#non-http">Non-HTTP ports (TCP and UDP)</a></li>
    <li><a href="#multiple-ports">Multiple ports</a></li>
</ul>

<h2 id="overview">Overview</h2>

Often times the purpose of a service inside your application is to respond to web queries from the internet. Actions like rendering and serving HTML pages or accepting HTTP POST actions are amongst the most common requirements from web services.

In a Cloud 66 for Docker stack, your services run inside containers. For this service to be available to anyone outside the container, we need to bridge it from inside to outside of the container.

This is not limited to HTTP or web traffic. The same concepts apply if your container serves non-HTTP traffic (like web sockets, DB containers or custom TCP / UDP traffic).

<div class="notice">
  <h3>Note</h3>
  <p>In this article, <b>outside world</b> is used for any client of your service that's not inside the container. This includes any other services on your other stacks.</p>
</div>

<h2 id="ports-inside-and-outside">Ports inside and outside containers</h2>

Your code that runs inside of a container listens to a specific port. For example a standard setup for a web server listens to port 80 for HTTP and 443 for HTTPS traffic. A normal Rails application listens to port 3000 or 9292 by default.

Here is an example of default ports used by different programming frameworks or application servers:

<table class='table table-bordered table-striped'>
  <thead>
    <tr>
      <th>Application</th>
      <th>Default Port</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Rack (webrick)</td><td>3000</td></tr>
    <tr><td>Rack (unicorn, thin, puma)</td><td>9292</td></tr>
    <tr><td>Node (Express)</td><td>3000</td></tr>
    <tr><td>Java (Play)</td><td>9000</td></tr>
    <tr><td>RethinkDB</td><td>8080</td></tr>
    <tr><td>InfluxDB</td><td>8083, 8086, 8090, 8099</td></tr>
  </tbody>
</table>

From the outside world (ie Internet) all of these applications (except for the DBs) listen to the normal HTTP (80) and HTTPS (443) ports so the site visitors don't need to enter port number in their browsers.

On a Cloud 66 for Docker stack, you can make the inside and outside ports map using the Container Port Mapping feature. It is a simple to use yet flexible feature that supports common TCP protocols like HTTP and HTTPS as well as custom TCP and UDP traffic.

<h2 id="mapping-ports">Mapping ports from inside to the outside world</h2>

Let's imagine you have a Rails application, serving traffic on port 3000 by default. To make it available to the outside world you simple need to choose the inside port (3000) and the outside HTTP ports (80) for the service. If you would like t the service to be server on HTTPS as well, choose 443 as the port number for HTTPS for the service in the UI.

If you are using the `service.yml` file to configure your services, you can use the following format to specify the ports: `InsidePort:HTTP_Port:HTTPS_Port`. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80:443"]
{% endhighlight %}

This syntax allows you to tell Cloud 66 that you don't want the service to be available on HTTP (HTTPS only). Here is how:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000::443"]
{% endhighlight %}

<div class="notice">
  <h3>Note</h3>
  <p>For HTTPS traffic to be available to the outside world you still need to <a href="/stack-add-ins/ssl-certificate">setup your SSL certificates</a>.</p>
</div>

Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}

<h2 id="non-http">Non-HTTP ports (TCP and UDP)</h2>

If your application does not server HTTP traffic (like a database) you can map the ports by specifying the protocol (TCP or UDP) and the ports it listens to inside the container and the port you would like it to be available publicly.

Let's imagine we have a service that listens on port 5454 on UDP and we would like to make it available to the outside world on port 111. Here is how:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 5454
            udp: 111
{% endhighlight %}

Here is an example for a service that listens to TCP port 8787 and we want to make it available on port 9000 to the outside world:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
{% endhighlight %}

<h2 id="multiple-ports">Multiple ports</h2>

Sometimes a service can listen to multiple ports. An example is InfluxDB where it listens to differnet ports for queries and admin controls. All different options to configure ports of a service can be repeated in a YAML array. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
          - container: 8788
            tcp: 9001
{% endhighlight %}

or for HTTP / HTTPS:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80", "3001:8080"]
{% endhighlight %}

See [Service Network Settings](/network/service-network-settings) for more information on all features around Container Port Mapping.