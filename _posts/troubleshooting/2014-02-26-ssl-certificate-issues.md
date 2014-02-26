---
layout: post
template: two-col
title:  "SSL Certificate Issues"
so_title: "ssl certificate"
date:   1900-11-07 15:33:13
categories: Troubleshooting
lead: Diagnose and fix the SSL certificate issues
---


## Problem
Installing SSL certificates on your Cloud 66 stack is very easy: copy the key and certificate and past them into the SSL ceritificate dialog. Cloud 66 then automattically transfers the certificates to all of your front end servers and configures the web servers to use them.

However, you always need to have the right SSL certificates and keys to use. Specifically your SSL certificates need to:

- Have no passphrase
- Have the correct encoding
- Match each other

### Passphrase Protected Keys
You can remove passphrases from your SSL keys easily. [Find out how to remove SSL passphrases](/how-to/remove-passphrase-from-certificate-key-for-nginx.html)

### Certificate and Key Encoding
Certificates and key files need to have only a _new line_ character at the end (instead of both _new line_ and _carriage return_ characters). To see if that's the case, you can open them in a text editor like TextMate and show the invisible characters.
![TextMate Show Invisible Characters](http://cdn.cloud66.com/images/help/show_invisible_characters_textmate.png)

You can see here an example of a wrong line ending:

![Wrong Line Ending for SSL certificate](http://cdn.cloud66.com/images/help/wrong_encoding_of_ssl_certificate.png)

### Matching Certificates and Keys
To make sure your key and certificate match correctly, use the OpenSSL commandline tool like this:

{% highlight bash %}
$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer
{% endhighlight %}

If everything matches (same modulus), the files are compatible. If not, One of the file is not linked to the others.
