---
layout: post
template: two-col
title:  "Add modules to Nginx"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1995-10-03 14:26:13
categories: 
lead: Rebuild Nginx with modules of your choice
search-tags: ['']
tags: ['Web server']
tutorial: true
difficulty: 1
---


<div class="notice notice-standalone">
    <h3>Important</h3>
    <p>This document is merely a guide, and should not be seen as a sanctioned way of adding new modules to Nginx.</p>
</div>

## Introduction
Nginx is compiled with a specific set of modules during the initial deployment of a stack through Cloud 66. Should you wish to install other modules,
Nginx needs to be recompiled because it lacks support for run-time selection of modules. This guide will show you how to do this with Passenger (the default on Cloud 66) or any custom rack server.

We do not need to uninstall the previously installed Nginx because it will be overwritten in these steps. It is however
important to remember to recompile Nginx with the previous configuration parameters to avoid problems.

## Passenger

We will be installing the <a href="http://wiki.nginx.org/HttpEchoModule" target="_blank">HTTP Echo Nginx</a> module during this example. Please be sure to replace this with your own module(s).

<ol class="article-list">
<li>Get the latest version of Nginx source from their <a href="http://nginx.org/en/download.html" target="_blank">website</a>. At the moment of writing this is version 1.5.3: <code>wget http://nginx.org/download/nginx-1.5.3.tar.gz</code></li>
<li>Use tar to extract the files from their archive: <code>tar xvzf nginx-1.5.3.tar.gz</code></li>
<li>Get the latest version of your module(s): <code>wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz</code>. Visit the Nginx website for more information about <a href="http://wiki.nginx.org/Modules" target="_blank">default</a> and <a href="http://wiki.nginx.org/3rdPartyModules" target="_blank">third party modules</a>.</li>
<li>Use tar to extract the files from their archive:<br><code>tar xvzf v0.46.tar.gz</code></li>
<li>Install the Passenger gem:<br><code>gem install passenger</code></li>
<li>Install Passenger with Nginx:<br><code>sudo passenger-install-nginx-module</code></li>
<li>During the install process,
	<ul>
        <li>Select option `2` for <i>advanced users</i></li>
        <li>Specify the directory in which you extracted Nginx</li>
        <li>Specify the installation directory as <code>/opt/nginx</code> so as to overwrite the previous installation</li>
        <li>Specify your module(s), eg. <code>--add-module='/root/echo-nginx-module-0.46'</code></li>
    </ul>
<li>Type <code>nginx -V</code> to confirm whether your module(s) installed.</li>
</ol>


<h2>Custom Rack Servers</h2>

We will be installing the <a href="http://wiki.nginx.org/HttpEchoModule" target="_blank">HTTP Echo Nginx</a> module during this example. Please be sure to replace this with your own module(s).

1. Get the latest version of Nginx source from their <a href="http://nginx.org/en/download.html" target="_blank">website</a>. At the moment of writing this is version 1.5.3:<br><code>wget http://nginx.org/download/nginx-1.5.3.tar.gz</code>

2. Use tar to extract the files from their archive:<br><code>tar xvzf nginx-1.5.3.tar.gz</code>

3. Get the latest version of your module(s):<br><code>wget http://github.com/agentzh/echo-nginx-module/archive/v0.46.tar.gz</code><br><br>Visit the Nginx website for more information about <a href="http://wiki.nginx.org/Modules" target="_blank">default</a> and <a href="http://wiki.nginx.org/3rdPartyModules" target="_blank">third party modules</a>.

4. Use tar to extract the files from their archive:<br><code>tar xvzf v0.46.tar.gz</code>

5. Enter the Nginx folder:<br><code>cd nginx-1.5.3</code>

6. Execute the following command to configure the installation:<br><code>./configure --prefix='/etc/nginx' --add-module='/root/echo-nginx-module-0.46' --error-log-path='$STACK&#95;PATH/log' --user=nginx</code><br><br>Visit the Nginx website for more information about <a href="http://wiki.nginx.org/InstallOptions" target="_blank">installation and compile-time options</a>.

7. Execute `make` followed by `make install`, which will install Nginx with the new configuration.

8. Type <code>nginx -V</code> to confirm whether your module(s) installed.