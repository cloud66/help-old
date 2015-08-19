---
layout: post
template: one-col
title:  "Cloud 66 Starter"
so_title: "Building your stack"
cloud66_sticky: true
date:   2015-08-17 17:14:22
categories: building-your-stack
lead: Generate Dockerfile and service.yml
search-tags: ['dockerfile', 'service.yml', 'starter']
tags: ['Deployment']
---

# Cloud 66 Starter

Cloud 66 starter is an open-source command line tool to generate a <em>Dockerfile</em> and a <em>service.yml</em> file from arbitrary source code. The <em>service.yml</em> file is a Cloud 66 service definition file which is used to define the service configurations on a stack.

Starter works in the same way as BuildPacks do, but only generates the above mentioned files; the image compile step happens on the [BuildGrid](http://help.cloud66.com/building-your-stack/introduction-to-docker-deployments). Starter does not require any additional third party tools or frameworks to work (it's compiled as a Go executable).

## Get Started

To get started [download the executable](http://www.cloud66.com/starter) and run it on your development machine.

<pre class="prettyprint">
$ cd /my/project
$ starter
</pre>

This will analyze the project in the current folder and generate the two files: <i>Dockerfile</i> and <em>service.yml</em> in the same folder, prompting for information when required.

<pre class="prettyprint">
 Cloud 66 Starter ~ (c) 2015 Cloud 66
 Detecting framework for the project at /Users/awesome/work/boom
 Found ruby application
 Enter ruby version: [latest]
 ----> Found config/database.yml
 Found mysql, confirm? [Y/n]
 Found redis, confirm? [Y/n]
 Found elasticsearch, confirm? [Y/n]
 Add any other databases? [y/N]
 ----> Analyzing dependencies
 ----> Parsing Procfile
 ----> Found Procfile item web
 ----> Found Procfile item worker
 ----> Found unicorn
 This command will be run after each build: 
     'RAILS_ENV=_env:RAILS_ENV bundle exec rake db:schema:load', confirm? [Y/n]
 This command will be run after each deployment: 
     'RAILS_ENV=_env:RAILS_ENV bundle exec rake db:migrate', confirm? [Y/n]
 ----> Writing Dockerfile...
 ----> Writing service.yml...
 Done
</pre>

Starter supports Procfiles and generates a service in <em>service.yml</em> for each item in the <em>Procfile</em>. It is strongly advised to use a <em>Procfile</em> to define your own service commands, as starter will only detect the web service otherwise.

To use starter on a different folder, you can use the `p` option:

<pre class="prettyprint">
$ starter -p /my/project
</pre>

For more options, please see:

<pre class="prettyprint">
$ starter --help 
</pre>

### Supported Languages / Frameworks

- Ruby, Rack (Rails, Sinatra, Padrino)

## Contributing & Adding support for new frameworks and languages

We will be adding support for new languages and frameworks over the time. However, if you find yourself interested in adding one, it's fairly easy to do:

- Get the source code and compile it (it's written in Go!)
- Create a new directory under `packs/` for you language or framework, e.g `packs/java/`.
- You then need to implement two interfaces, `packs.Analyzer` and `packs.Detector`.
- The `Detector` tells starter if the project is written in the given language or framework (in this example Java)
- The `Analyzer` analyze the project and write the `Dockerfile` and `service.yml`.
- Create a template with the name of the language under the `templates/dockerfiles` folder, e.g `java.dockerfile.template`
- Use Golang template syntax to build the template for `Dockerfile`
