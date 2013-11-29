---
layout: post
template: two-col
title:  "SSL Certificate"
nav_sticky: true
nav: true
nav_prev: "/getting-started/ssh-keys.html"
nav_next: "/getting-started/toolbelt.html"
date:   2013-09-24 10:51:22
categories: yo
lead: Adding an SSL Certificate to your server
---


## Adding SSL to your stacks
To add SSL to your stack, you need to have a SSL certificate and key. Some certficate authorities also provide you with an intermediate certificate as well.

You must make sure your SSL keys don't have any passphrases.

Once you have your certificate and key, click on the Install SSL certificate on the stack Protips and paste the cerficiate, key and the intermediate certificate (if you have any) into the appropriate boxes.

You can also add the domain name if you want to limit the SSL to a certain domain.

### Removing passphrase from SSL keys
If your SSL key is protected with a passphrase, you can remove it using the following command:

{% highlight bash %}
	openssl rsa -in wild_mydomain_com.key -out wild_mydomain_com.nopass.key
{% endhighlight %}
### Adding SSL certificate with Intermediate Certificates
Some SSL certificate providers (Certificate Authorities) like RapidSSL issue certificates that are not fully compatible with all devices (especifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these Certificate Authorities fully by allowing you add the intermedite certificate separately into the SSL certificate add-on form.