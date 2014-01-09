---
layout: post
template: two-col
title:  "CustomConfig™"
so_title: "custom config"
date:   2013-01-28 10:51:22
categories: stack-features
lead: Customize Deployed Configuration Files
---

## Introduction

Cloud 66 is built around the main concept of simplicity. Our missing is to make building servers and running applications simple. The main flow of an application deployment at Cloud 66 is to take the source code and in a short period of time have it running on our own servers. We also make running and managing your applications simple. Once an app is deployed and running, Cloud 66 takes care of backups, scaling, portability and many other aspects of keeping your app up and running as well. 

This is all very simple with Cloud 66. However, we don't want to be simple by being [simplistic](http://en.wiktionary.org/wiki/simplistic). There is a fine line there and we would like to stay on the right side of it by providing enough flexibility so you can benefit from the automation we bring to your infrastructure while having full control on all aspects of it.

This is where CustomConfig is coming in.

CustomConfig allows you to see and modify the configuratino templates used for the deployed components on your servers. Take nginx for example. The default nginx configuration deployed on all Cloud 66 servers is secure and follows the best practices. It is automatically modifed as you add more servers, load balancers, SSL certificates and takes care of different application servers you use: passenger or a custom one like unicorn.

But what if you want to add some custom configuration to your nginx across your stack, like forcing an SSL redirect or banning a specific IP address? 

Until now you had to break the symlink for the nginx configuration and added your custom configuration to the server. This was flexible, but you would lose the future upgrades that are constantly delivered to all Cloud 66 stacks. 

Another option was to have the custom configuration done as a post deploy hook. This was also not an ideal solution as it required shell scripts and relying on the underlying configuration not changing much.

CustomConfig is trying to solve that problem. Here is how:

## CustomConfig

CustomConfig allows you to edit and modify compoent configuration templates used by Cloud 66 to configure your servers. At the moment it is enabled for nginx but more configuration templates will be enabled soon.

To use nginx as an example, go to your Web Servers group detail page and click on the CustomConfig icon on the top right.

![Server Groups](http://cdn.cloud66.com/images/help/server_group.png)

![CustomConfig](http://cdn.cloud66.com/images/help/custom_config.png)

Now you can see the [Liquid](http://liquidmarkup.org/) template used to build the nginx configuration when nginx is deployed during your stack built or reconfigured.

![CustomConfig Liquid](http://cdn.cloud66.com/images/help/custom_config_liquid.png)

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/) developed by [Shopify](http://www.shopify.com/) and used by many websites. There are many good resources on the web on how to use the Liquid syntax. 

You can read more about [Nginx CustomConfig in detail](/how-to/nginx-customconfig.html) if you want.

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