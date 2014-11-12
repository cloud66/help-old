---
layout: post
template: two-col
title:  "Nginx basic authorization"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2037-09-24 10:51:22
categories: 
lead: Protect your application with HTTP basic authentication
search-tags: ['']
tags: ['Web server']
tutorial: true
difficulty: 1
---

You can use Cloud 66 [CustomConfig](/building-your-stack/customconfig) to protect your application or parts of it with a username and password based on HTTP basic authentication.
Follow the instructions below to accomplish this.

<ol class="article-list">
<li>We'll use <a href="http://httpd.apache.org/docs/2.2/programs/htpasswd.html">htpasswd</a> to create your password file - it encrypts it the password with MD5 encryption. Install it:</li>
<code>sudo apt-get install apache2-utils -y</code><br>

<li>Once that is installed, we're ready to create your password file. We recommend that you create this file within your repository, which will be deployed to your servers. This command will prompt you to input a password.</li>
<code>sudo htpasswd -c &#60;directory&#62;.htpasswd &#60;user_name&#62;</code><br>

<li>Now we can go ahead and customize the Nginx configuration, which you can see more about in our <a href="http://help.cloud66.com/web-server/nginx">Nginx CustomConfig documentation</a>.</li><br/>

You will want to add the following code within the <i>server</i> section of your configuration. Where you put it will depend on which Rack server you are running, and whether or not you are using HTTPS traffic.

<pre class="prettyprint">
	auth_basic "Restricted";
	auth_basic_user_file &#123;&#123; deploy_to &#125;&#125;/current/.htpasswd;
</pre>

<h4>Passenger</h4>

<ul class="article-list">
<li>HTTP: Line <i>116</i></li>
<li>HTTPS: Line <i>190</i></li>
</ul>

<h4>Unicorn and others</h4>

<ul class="article-list">
<li>HTTP: Line <i>122</i></li>
<li>HTTPS: Line <i>197</i></li>
</ul>

This will read your password file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.
</ol>