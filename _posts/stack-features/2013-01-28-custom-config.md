---
layout: post
template: two-col
title:  "CustomConfig™"
so_title: "custom config"
date:   2013-01-28 10:51:22
categories: stack-features
lead: Customize Deployed Configuration Files
---

## CustomConfig

CustomConfig allows you to edit and modify component configuration templates used by Cloud 66 to configure your servers. At the moment it is enabled for Nginx and HAProxy. More configuration templates are forthcoming.

To use Nginx as an example, go to your Web Servers group detail page and click on the CustomConfig icon in the top right corner.

![Server Groups](http://cdn.cloud66.com/images/help/server_group.png)

![CustomConfig](http://cdn.cloud66.com/images/help/custom_config.png)

Now you can see the [Liquid](http://liquidmarkup.org/) template used to build the Nginx configuration when Nginx is deployed during your stack built or reconfigured.

![CustomConfig Liquid](http://cdn.cloud66.com/images/help/custom_config_liquid.png)

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/) developed by [Shopify](http://www.shopify.com/) and used by many websites. There are many good resources on the web on how to use the Liquid syntax. 

Read more detail about [Nginx CustomConfig here](/how-to/nginx-customconfig.html) or [HAProxy CustomConfig here](/how-to/haproxy-customconfig.html).

Once you're done with editing your template, you can Preview the results by clicking on the Preview button.

![CustomConfig Preview](http://cdn.cloud66.com/images/help/custom_config_preview.png)

<div class="notice">
    <h3>Important</h3>
    <p>Preview is generated with dummy data about your server (like the number of cores or the path for different binaries).</p>
</div>

When you are happy with the results, enter a Commit Message and Press the Commit to Server button. This will compile the configuration with real data and push it to all applicable servers in your stack. It also performs any post commit steps necessary like reloading nginx with the new configuration file so your changes can take effect.

This process takes place in the background and might take some time to complete depending on the number of servers on a stack and the nature of the configuration.

You can now see the histroy of your configuration changes with simple colored diff views alongside dates and comments.

![CustomConfig Diff History](http://cdn.cloud66.com/images/help/cusom_config_diff.png)