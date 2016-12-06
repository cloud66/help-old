---
layout: post
template: one-col
title:  "Networking Ports"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: How to set your service ports 
search-tags: []
tags: ['']
---


This is used to expose your service to the outside world. Outside world includes any server/computer out of the stack. So if you even have two stacks and one needs a service from the other one you need to expose your service/container. 

Without exposing the service/container will be available to other servers of the same stack without being exposed. This is possible if you use their Weave IP addresses. 


Now if you need to expose your service. This is how it should be set:

<ol>

<li> Under <b>Container Port</b> you need to specify the port that your container is listening on (like 3000 for rails apps)

<p>You can define your exposed service ports on <b>Public Internet Port</b> box like bellow:</p></li>


<li>

<ul>
<li>If your service is a web service (HTTP) and you want it to be available outside of your stack you need to set it like this:

<p>http:80,https:443</p></li>

<li><p>If you don't have HTTPS</p>

<p>http:80</p></li>


<li><p>For non-standard ports:

http:8080,https:8443</p></li>


<li><p>For other protocols (TCP and UDP):</p> 

<p>tcp:5785,udp:478</p> 

<p>This means that this container will be exposed on port 5785 for TCP connections and 478 for UDP connections</p></li>
</ul>
</li>

</ol>