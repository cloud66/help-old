---
layout: post
template: two-col
title:  "Nginx basic authorization"
so_title: "nginx"
date:   2037-09-24 10:51:22
categories: web-server
lead: Protect your application with HTTP basic authentication
---

You can use Cloud 66 [CustomConfig](/stack-features/custom-config.html) to protect your application or parts of it with a username and password based on HTTP basic authentication.
Follow the instructions below to accomplish this.

1. We'll use [htpasswd](http://httpd.apache.org/docs/2.2/programs/htpasswd.html) to create your password file - it encrypts it the password with MD5 encryption. Install it:
<br>`sudo apt-get install apache2-utils -y`<br>

2. Once that is installed, we're ready to create your password file. We recommend that you create this file within your repository, which will be deployed to your servers. This command will prompt you to input a password.
<br>`sudo htpasswd -c <directory>.htpasswd <user_name>`<br>

3. Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](/how-to/nginx-customconfig.html).

You will want to add the following code within the _server_ section of your configuration, for example on line 88 of the file so that it applies to all environments.

<pre class="terminal">
location /
{
	auth_basic "Restricted";
	auth_basic_user_file &#123;&#123; deploy_to &#125;&#125;/current/.htpasswd;
}
</pre>

This will read your password file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.




