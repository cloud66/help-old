---
layout: post
template: two-col
title:  "SSL Certificate"
so_title: "ssl"
nav: true
date:   1650-09-24 10:51:22
categories: how-to
lead: Adding an SSL Certificate to your server
---


## Adding SSL to your stacks
To add SSL to your stack, you need to have a SSL certificate and key. Some certificate authorities also provide you with an intermediate certificate as well.

You must make sure your SSL keys don't have any passphrases.

Once you have your certificate and key, click on the Install SSL certificate on the stack Protips and paste the certificate, key and the intermediate certificate (if you have any) into the appropriate boxes.

You can also add the domain name if you want to limit the SSL to a certain domain.

### Certificate signing request

To generate a .key and .crt file, follow the steps below.

1. [SSH into your server](http://help.cloud66.com/how-to/shell-to-your-servers.html).
2. Generate private key (KEY) on your server, without specifying a passphrase:
<p>
<kbd>
openssl genrsa -des3 -out private&#95;key.key 1024
</kbd>
</p>
3. Create a certificate signing request file and enter your information as requested:
<p>
<kbd>
openssl req -new -key private&#95;key.key -out signing&#95;request.csr
</kbd>
</p>
4. Provide this CSR file to your certificate authority, who will in turn provide you with a certificate (CRT) file.
5. Use the original .key file together with this .crt file on Cloud 66.

### Removing passphrase from SSL keys
If your SSL key is protected with a passphrase, you can remove it using the following command:

{% highlight bash %}
	openssl rsa -in wild_mydomain_com.key -out wild_mydomain_com.nopass.key
{% endhighlight %}
### Adding SSL certificate with Intermediate Certificates
Some SSL certificate providers (Certificate Authorities) like RapidSSL issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these Certificate Authorities fully by allowing you add the intermediate certificate separately into the SSL certificate add-on form.
