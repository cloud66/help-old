---
layout: post
template: one-col
title:  "Multi Tenancy for Stacks"
so_title: "multi-tenancy"
nav_sticky: false
date:   2091-01-25 16:27:22
categories: building-your-stack
lead: Serving multiple apps from the same stack
search-tags: []
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#overview">Overview</a></li>
		<li><a href="#multi-services">Multiple Services</a></li>
</ul>

<h2 id="overview">Overview</h2>

Sometimes you need to run multiple applications on the same stack. This could be because none of those applications has enough traffic to justify having a dedicated stack for itself or it could be because all the apps on the stack share many resources. What ever the reason, you can achieve multi-tenancy for your stacks with Cloud 66 for Docker.

<h2 id="multi-services">Multiple Services</h2>
To host multiple applications on the same stack, we need to put each one into its own service. This can be done using the `service.yml` file:

{% highlight yaml %}
services:
  first_app:
    git_url: git@github.com:khash/my_first_app.git
    git_branch: master
    ports: ["3000:80:443"]
  second_app:
    git_url: git@github.com:khash/my_second_app.git
    git_branch: master
    ports: ["3000:80:443"]
  third_app:
    git_url: git@github.com:khash/my_second_app.git
    git_branch: master
    ports: ["3000:80:443"]
{% endhighlight %}

This however has a problem: all applications share the same public ports (80 and 443). This means traffic coming to the stack on port 80 (or 443) will be randomly served by any of the applications each time.

To fix this issue we can use the Domain Matching feature. Domain Matching allows us to share ports and split the traffic by the URL domain name that the client has requested:

{% highlight yaml %}
services:
  first_app:
    git_url: git@github.com:khash/my_first_app.git
    git_branch: master
    ports: ["3000:80:443"]
    traffic_matches: ["firstpplication.com"]
  second_app:
    git_url: git@github.com:khash/my_second_app.git
    git_branch: master
    ports: ["3000:80:443"]
    traffic_matches: ["secondapp.com", "www.secondapp.com", "second-app.com", "www.second-app.com"]
  third_app:
    git_url: git@github.com:khash/my_second_app.git
    git_branch: master
    ports: ["3000:80:443"]
    traffic_matches: ["thirdapplication.com", "*.thirdapplication.com"]
{% endhighlight %}

In this example, we split the traffic based on the requested domain. As you can see you can match traffic based on multiple domains as well as wildcard (`*`) subdomains.

See [Docker Service Configuration](/building-your-stack/docker-service-configuration) for more information on `service.yml`
