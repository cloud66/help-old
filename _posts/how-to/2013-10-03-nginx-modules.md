---
layout: post
template: two-col
title:  "Add modules to Nginx"
date:   2013-10-03 14:26:13
categories: how-to
lead: Follow this guide to rebuild Nginx with any module of your choice
---


<div class="notice notice-standalone">
	<div class="notice-header">
		<b>Important</b>
	</div>
	<div class="notice-body">
<p>This document is merely a guide, and should not be seen as a sanctioned way of adding new modules to Nginx.</p>
	</div>
</div>

## Introduction
Nginx is compiled with a specific set of modules during the initial deployment of a stack through Cloud 66. Should you wish to install other modules,
Nginx needs to be recompiled because it lacks support for run-time selection of modules. This guide will show you how to do this with Passenger (the default on Cloud 66) or any custom rack server.

We do not need to uninstall the previously installed Nginx because it will be overwritten in these steps. It is however
important to remember to recompile Nginx with the previous configuration parameters to avoid problems.

## Passenger

We will be installing the <a href="http://wiki.nginx.org/HttpEchoModule" target="_blank">HTTP Echo Nginx</a> module during this example. Please be sure to replace this with your own module(s).

1. Get the latest version of Nginx source from their <a href="http://nginx.org/en/download.html" target="_blank">website</a>. At the moment of writing this is version 1.5.3:<br><code>wget http://nginx.org/download/nginx-1.5.3.tar.gz</code>

2. Use tar to extract the files from their archive:<br><code>tar xvzf nginx-1.5.3.tar.gz</code>

3. Get the latest version of your module(s):<br><code>wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz</code><br><br>Visit the Nginx website for more information about <a href="http://wiki.nginx.org/Modules" target="_blank">default</a> and <a href="http://wiki.nginx.org/3rdPartyModules" target="_blank">third party modules</a>.

4. Use tar to extract the files from their archive:<br><code>tar xvzf v0.46.tar.gz</code>

5. Install the Passenger gem:<br><code>gem install passenger</code>

6. Install Passenger with Nginx:<br><code>sudo passenger-install-nginx-module</code><br>

7. During the install process,

    * Select option `2` for <i>advanced users</i>

    * Specify the directory in which you extracted Nginx

    * Specify the installation directory as <code>/opt/nginx</code> so as to overwrite the previous installation

    * Specify your module(s), eg. <code>--add-module='/root/echo-nginx-module-0.46'</code>

8. Type <code>nginx -V</code> to confirm whether your module(s) installed.

## Custom Rack Servers

We will be installing the <a href="http://wiki.nginx.org/HttpEchoModule" target="_blank">HTTP Echo Nginx</a> module during this example. Please be sure to replace this with your own module(s).

1. Get the latest version of Nginx source from their <a href="http://nginx.org/en/download.html" target="_blank">website</a>. At the moment of writing this is version 1.5.3:<br><code>wget http://nginx.org/download/nginx-1.5.3.tar.gz</code>

2. Use tar to extract the files from their archive:<br><code>tar xvzf nginx-1.5.3.tar.gz</code>

3. Get the latest version of your module(s):<br><code>wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz</code><br><br>Visit the Nginx website for more information about <a href="http://wiki.nginx.org/Modules" target="_blank">default</a> and <a href="http://wiki.nginx.org/3rdPartyModules" target="_blank">third party modules</a>.

4. Use tar to extract the files from their archive:<br><code>tar xvzf v0.46.tar.gz</code>

5. Enter the Nginx folder:<br><code>cd nginx-1.5.3</code>

6. Execute the following command to configure the installation:<br><code>./configure --prefix='/etc/nginx' --add-module='/root/echo-nginx-module-0.46' --error-log-path='$RAILS&#95;STACK&#95;PATH/log' --user=nginx</code><br><br>Visit the Nginx website for more information about <a href="http://wiki.nginx.org/InstallOptions" target="_blank">installation and compile-time options</a>.

7. Execute `make` followed by `make install`, which will install Nginx with the new configuration.

8. Type <code>nginx -V</code> to confirm whether your module(s) installed.