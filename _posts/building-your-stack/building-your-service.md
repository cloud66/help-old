---
layout: post
template: one-col
title:  "Building your Docker service"
nav_sticky: false
date:   2084-12-30 16:27:22
categories: building-your-stack
lead: Different ways to build your Docker service
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#git">Pull code from Git</a>
	</li>
	<li>
		<a href="#provide_image">Provide a Docker image</a>
	</li>
	<li>
		<a href="#configuration">Configuration</a>
	</li>
        <li>
            <ul>
            <li><a href="#build_command">Build command</a></li>
            <li><a href="#build_root">Build root</a></li>
            <li><a href="#command">Command</a></li>
            <li><a href="#deploy_command">Deploy command</a></li>
            <li><a href="#dockerfile_path">Dockerfile path</a></li>
            <li><a href="#git_url">Git URL</a></li>
            <li><a href="#git_branch">Git branch</a></li>
            <li><a href="#image">Image</a></li>
						<li><a href="#use-habitus">Using Habitus for builds</a></li>
            </ul>
        </li>		
</ul>

When building your Docker stack, you can either let us create them for you with our powerful cluster of servers called BuildGrid, or provide us with your own image. When using BuildGrid, your image is built based on your source code and a Dockerfile, which specifies how you want it to be created.

Using BuildGrid lets you focus on what you do best and avoids you having to create internal processes to output Docker images. You can even integrate your CI solution, so that new images are built and pushed to your servers once all your tests pass.

<h2 id="git">Pull code from Git</h2>
For BuildGrid to pull code from your Git repository and build your image, you will need to provide a `git_url` and `git_branch`. Simply place a Dockerfile in your repository to determine how the image should be built. These images are built continuously from your source code and are stored in a private Docker image repository, available to be used locally or pushed to production servers.

You can pass environment variables into your Dockerfile during this build process with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the stack.

<h2 id="provide_image">Provide a Docker image</h2>
If you prefer to build your own images, simply provide the location of this image (whether public or private) with the `image` directive in your service configuration.

<h2 id="configuration">Configuration</h2>

There are a number of directives you can set in your service configuration to customize your service network settings:

- [build_command](#build_command)
- [build_root](#build_root)
- [command](#command)
- [deploy_command](#deploy_command)
- [git_url](#git_url)
- [git_branch](#git-branch)
- [image](#image)

<h3 id="build_command">Build command</h3>
Specifies the command you would like to run during stack build (runs on your Docker host).

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        build_command: bundle exec rake db:schema:load
</pre>

<hr>

<h3 id="build_root">Build root</h3>

Specifies the directory of your repository in which you wish to run your Docker build. You can also specify a [Dockerfile path](/building-your-stack/building-your-docker-service#dockerfile_path), which will be the Dockerfile used when building your service which is a relative value to this one.

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        build_root: my_app_subfolder
</pre>

This will default to the <i>root folder</i> of your repository if not specified.

<hr>

<h3 id="command">Command</h3>
Specifies the command used to start your container(s) (runs on your Docker host).

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        command: bundle exec rails s
</pre>

<hr>

<h3 id="deploy_command">Deploy command</h3>
Specifies the command you would like to run during stack deploy (runs once per service, on your Docker host).

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        deploy_command: bundle exec rake db:migrate
</pre>

<hr>

<h3 id="dockerfile_path">Dockerfile path</h3>

Specifies a relative path for your Dockerfile (from your <i>build_root</i>) to be used for building this service. For example, if you have a subfolder in the root of your repository called <i>docker</i> where your Dockerfile lives, you can specify this as follows:

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        dockerfile_path: docker/Dockerfile
</pre>

This will default to the value of <i>build_root</i>/Dockerfile if not specified.

<hr>

<h3 id="git_url">Git URL</h3>
The Git repository URL your Docker image will be built with. The Git URL you use to [allow us access to your repository](http://community.cloud66.com/articles/accessing-your-git-repository) will differ for public and private repositories.

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        git_url: git@github.com:pkallberg/node-js-app.git
</pre>

<hr>

<h3 id="git-branch">Git branch</h3>
The Git repository branch your Docker image will be based on, for example `master`.

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        git_branch: master
</pre>

<hr>

<h3 id="image">Image</h3>
The source of your Docker image, which can come from a private repository that the credentials are provided. For [Docker Hub](https://registry.hub.docker.com/) images, use the following URL format:

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        image: &lt;namespace&gt;/&lt;image_name&gt;
</pre>

If you are pulling a public image from Docker Hub, use the following format:

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        image: &lt;namespace&gt;/&lt;image_name&gt;
</pre>

If you are using [Quay.io](https://quay.io/) for your image repository, you will use the following URL format:

<pre class="prettyprint">
services:
    &#60;service_name&#62;:
        image: quay.io/&lt;namespace&gt;/&lt;image_name&gt;
</pre>

<h3 id="use-habitus">Using Habitus for builds</h3>
<p><a href="http://www.habitus.io">Habitus is a build workflow tool for Docker</a>. It allows you to create a build workflow consisting of multiple steps for your Docker stacks on BuildGrid. Cloud 66 BuildGrid fully supports Habitus. To enable Habitus on BuildGrid builds, you need to do the following:</p>

<ol>
<li>Add a <code>build.yml</code> to your repository</li>
<li>Set <code>use_habitus</code> attribute to <code>true</code> in your <code>service.yml</code></li>
<li>Set the <code>use_habitus_step</code> to the step you would like to use for your servide in your <code>service.yml</code></li>
</ol>

Check out the <a href="http://www.habitus.io">Habitus website</a> for more information about generating a <code>build.yml</code>.

A Habitus build usually has multiple steps and each step can generate a Docker image. Using <code>use_habitus_step</code> attribute you can specify which step's results you would like to use as the image for the container. 
