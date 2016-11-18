---
layout: post
template: one-col
title:  "Docker Image Repository"
date:   2036-12-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: getting-started
lead: How to use your docker image repository
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
  <li><a href="#image">Provide a Docker Image</a></li>
  <li><a href="#add_docker_image_repo">How To Add Docker Image Repository</a></li>      
</ul>

<h3 id="image">Provide a Docker image</h3>
The source of your Docker image, which can come from a private repository that the credentials are provided. For [Docker Hub](https://registry.hub.docker.com/) images, use the following URL format:

<pre class="prettyprint">
&lt;namespace&gt;/&lt;image_name&gt;:/&lt;tag&gt;
</pre>

If you are pulling a public image from Docker Hub, use the following format:

<pre class="prettyprint">
&lt;namespace&gt;/&lt;image_name&gt;:/&lt;tag&gt;
</pre>

If you are using [Quay.io](https://quay.io/) for your image repository, you will use the following URL format:

<pre class="prettyprint">
quay.io/&lt;namespace&gt;/&lt;image_name&gt;:/&lt;tag&gt;
</pre>
If you are using [Google Container Registry](https://cloud.google.com/container-registry/docs/) for your image repository, you will use the following URL format:

<pre class="prettyprint">
gcr.io/&lt;project_id&gt;/&lt;namespace&gt;/&lt;image_name&gt;:/&lt;tag&gt;
</pre>


<h3 id="add_docker_image_repo">How To Add Docker Image Repository</h3>

You need to go to _Account_ --> _Keys & External Services_ --> _Docker Image Repo_  and click on _ADD A PROVIDER_ or click on __+__ if you already have one and want to add a second one.

When you [specify the Google Container Registy as a Docker image repo](https://app.cloud66.com/image_repositories) you need to  choose <code>I'm using a different provider or my own custom repo</code> and use the following settings:
<ul>
<li>Custom Repo provider URL = https://gcr.io</li>
<li>Username for provider = oauth2accesstoken</li>
<li>Password for provider = (output of the commmand <code>$ gcloud auth print-access-token</code>)</li>
<li>Email address for provider = fake@fake.com</li>
</ul>
