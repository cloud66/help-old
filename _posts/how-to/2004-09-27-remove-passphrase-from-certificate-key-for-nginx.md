---
layout: post
template: two-col
title:  "Remove passphrase from SSL certificate key"
so_title: "ssl"
nav: true
date:   1650-09-24 10:51:22
categories: how-to
lead: You cannot use passphrase protected certificates with nginx. Here is how to remove it.
---

## Nginx and SSL certificates

You cannot use passphrase protected SSL certificate keys with nginx. Using passphrase protected certificate keys will cause nginx to prompt for the manual entry of passphrase at restart which will break the automatic deployment flow (and restart of nginx after a server restart).

The symptoms of this is that your deployment gets stuck in the _Restarting Nginx_ step.

## Remove SSL certificate passphrases

You can simply use a non-passphrase-protected version of your SSL certificate key when [adding an SSL key to your stack](/how-to/ssl-certificate.html). Use the following command to do it (on your development computer):

{% highlight bash %}
$ openssl rsa -in private_key_with_pass_phrase -out private_key_without_pass_phrase
{% endhighlight %}

You will be prompted for your passphrase and the output will be generated after that.