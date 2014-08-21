---
layout: post
template: two-col
title:  "CustomConfig™"
so_title: "custom config"
date:   3999-01-28 10:51:22
categories: stack-definition
lead: Customize deployed configuration files
search-tags: []
tags: ['Customization']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#custom">CustomConfig</a>
	</li>
	<li>
		<a href="#patch">CustomConfig patch</a>
	</li>
</ul>

<h2 id="custom">CustomConfig</h2>

CustomConfig allows you to edit and modify component configuration templates used by Cloud 66 to configure your servers. This is currently available for Nginx, HAProxy and database configurations, and more configuration templates are forthcoming.

To use Nginx as an example, go to your Web Servers group detail page and click on the CustomConfig icon in the top right corner.

![Server Groups](http://cdn.cloud66.com/images/help/server_group.png)

![CustomConfig](http://cdn.cloud66.com/images/help/custom_config.png)

Now you can see the [Liquid](http://www.liquidmarkup.org/) template used to build the Nginx configuration when Nginx is deployed during your stack built or reconfigured.

![CustomConfig Liquid](http://cdn.cloud66.com/images/help/custom_config_liquid.png)

CustomConfig uses the [Liquid templating language](http://www.liquidmarkup.org/) developed by [Shopify](http://www.shopify.com/) and used by many websites. There are many good resources on the web on how to use the Liquid syntax.

Please see our documentation for more details about [Nginx CustomConfig](/how-to/nginx-customconfig.html) , [HAProxy CustomConfig](/how-to/haproxy-customconfig.html) and [database CustomConfig](/how-to/database-customconfig.html).

Once you're done with editing your template, you can preview the results by clicking on the <i>Preview</i> button.

![CustomConfig Preview](http://cdn.cloud66.com/images/help/custom_config_preview.png)

<div class="notice notice-danger">
    <h3>Important</h3>
    <p>Preview is generated with dummy data about your server (like the number of cores or the path for different binaries). <br/><br/>Refer to our documentation to learn about how the size of your instance affects the number of <a href="/web-server/nginx-workers.html">Nginx workers on your server.</a></p>
</div>

When you are happy with the results, enter a commit message and press the <i>Commit to Server</i> button. This will compile the configuration with real data and push it to all applicable servers in your stack. It also performs any post commit steps necessary like reloading Nginx with the new configuration file, putting your changes into effect.

This process takes place in the background and might take some time to complete depending on the number of servers in a stack and the nature of the configuration.

You can subsequently see the history of your configuration changes with simple colored diff views alongside dates and comments.

![CustomConfig Diff History](http://cdn.cloud66.com/images/help/cusom_config_diff.png)

<h2 id="patch">CustomConfig patch</h2>

Every so often, Cloud 66 needs to update the base configuration files used for your application to run. When a patch is released, having customized configurations introduces complexities due to the differences in settings.

Refer to our help page on [CustomConfig patches](/how-to/customconf-patch.html) for more information.