---
layout: post
title:  "Customizing Nginx Configurations"
date:   2013-09-26 15:33:13
categories: web-server
---


<p class="lead">Cloud 66 automatically generates and maintains nginx configurations for your stack.</p>

## Locating your Nginx configuration file
If you're using Passenger (the default webserver) then your Nginx configuration file can be found under `/opt/nginx/conf`

If you're using a custom webserver (ie. Unicorn, Puma etc) then your Nginx configuration file can be found under `/etc/nginx`

## Making permanent changes
Cloud 66 automatically generates nginx configurations for your stack and may overwrite any changes you make.
The reason your nginx configuration may be overwritten is to allow for SSL changes, worker enhancement and general configuration upgrades.

For this reason, the configuration file `nginx.conf` file is symlinked during initial stack build to point to the file `cloud66_nginx.conf`

When Cloud 66 updates the nginx configuration, it will only ever push up the file `cloud66_nginx.conf` and never again touch `nginx.conf`

So if you wish to take owner ship of the nginx configuration of your server you can simply break the symlink and create the file `nginx.conf` yourself.

To break the symlink and take ownership, execute the following:

<p>
<kbd>sudo unlink /opt/nginx/conf/nginx.conf</kbd>
</p>
<p>
<kbd>sudo touch /opt/nginx/conf/nginx.conf</kbd>
</p>

Then proceed to enter your own nginx configuration. Cloud 66 will continue to update the file `cloud66_nginx.conf` so you can always copy content from there if you need (or recreate the symlink if you wish to hand control back to Cloud 66).

Finally, ensure that nginx reloads your updated configuration file:

<p>
<kbd>sudo /etc/init.d/nginx reload</kbd>
</p>

<div class="notice">
		<h3>Important</h3>

		<p>
			If you break the symlink and take ownership of the nginx configuration then automatic SSL configuration and worker sizing based on server size will no longer be carried out by Cloud 66 - this must be done by yourself.
		</p>

</div>