---
layout: post
template: two-col
title:  "Add a SSL certificate on a load balancer"
so_title: "ssl"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2000-09-26 15:33:13
categories: 
lead: The process differs for different load balancers
search-tags: ['ssl termination', 'ssl load balancer']
tags: ['Scaling']
tutorial: true
difficulty: 2
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#aws">Amazon Elastic Load Balancer</a>
	</li>
	<li>
		<a href="#haproxy">HAProxy</a>
	</li>
	<li>
		<a href="#rackspace">Rackspace</a>
	</li>
</ul>

SSL termination using your load balancer allows the load balancer to handle incoming SSL connections, decrypt them and pass on unencrypted requests to your app servers.

![SSL termination](http://cdn.cloud66.com/images/help/ssl_termination.png)

It's important to note that _you do not need SSL termination to enable SSL on your stack_ - you can simply <a href="/add-ins/ssl.html">add your SSL certificate to your app servers</a> as an add-on.</p>

<h2 id="aws">Amazon Elastic Load Balancer</h2>

To register an SSL certificate with Amazon Elastic Load Balancer, please refer to our [blog post](http://blog.cloud66.com/post/30990317011/registering-ssl-certificate-with-amazon-elastic-load).

Thanks to the AWS dashboard or the command line interface, you can easily upload your SSL certificates to relevant load balancers.

Through the AWS dashboard:

- Sign in to the AWS management console and open the Amazon EC2 console
- Select your load balancer and upload a new SSL Certificate or choose an existing one.
- In case it is a new certificate, enter a name for the certificate and copy paste the contents of the private key file and the public key file into the related fields, then save.

<div class="notice">
    <h3>Important</h3>
    <p>Ensure that the certificate is valid: current date must be between the certificate’s start and end date. Certificate keys also should not be password protected</p>
</div>

Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

- Run the command below to add a new SSL certificate:
{% highlight bash %}
$ iam-servercertupload -b &lt;CA authenticated SSL&gt; -k &lt;private key file(.pem)&gt; -s &lt;certificate name&gt;  -c  &lt;certificate chain file&gt; –v
{% endhighlight %}

- You should retrieve any available SSL certificate using this command:
{% highlight bash %}
$ iam-servercertlistbypathx
{% highlight bash %}


- Run the command below to attach the SSL certificate to the load balancer:
{% highlight bash %}
$ elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&lt;certificate name&gt;"
{% endhighlight %}

-	To delete a certificate, run the following command:
{% highlight bash %}
$ iam-servercertdel -s &lt;certificate name&gt;
{% endhighlight %}


See also: [AWS documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html)


<h2 id="haproxy">HAProxy</h2>
HAProxy 1.4 doesn’t natively support SSL, but it's possible to use an SSL encryption wrapper like Stunnel, Stud, Pound or Nginx to terminate TLS/SSL connections and forward the unencrypted traffic to HAProxy.

- Firstly, install Stunnel on the load balancer:
{% highlight bash %}
$ sudo apt-get install stunnel
{% endhighlight %}

- You can then use the Cloud 66 [CustomConfig](/stack-features/custom-config.html) to configure the HAProxy configuration file as shown below. If you're not using Cloud 66, you have to make these changes manually in your <i>/etc/haproxy/haproxy.cfg</i> file.

<p>
<a target="_blank" rel="nofollow" class="button-home" href="https://app.cloud66.com/users/sign_up/?utm_source=help&utm_medium=web&utm_campaign=help-page">Manage your load balancers with ease on Cloud 66 &#10141;</a>
</p>

For example:

{% highlight bash %}
global
    maxconn     4096
    user        haproxy
    group       haproxy
    daemon

defaults
    log         global
    mode        http
    option      httplog
    option      dontlognull
    retries     3
    option      redispatch
    maxconn     2000
    contimeout  50000
    clitimeout  50000
    srvtimeout  50000

listen webcluster *:80
    mode        http
    stats       enable
    stats       auth &lt;username:passsword&gt;
    balance     roundrobin
    option      httpchk HEAD / HTTP/1.0
    option      forwardfor
    cookie      LSW&#95;WEB insert
    option      httpclose
    server      web1 XX.XX.XX.XX:80 cookie "LSW&#95;WEB1" check
    server      web2 XX.XX.XX.XX:80 cookie "LSW&#95;WEB2" check


listen webcluster&#95;ssl *:8081
    mode        http
    cookie      HTTP insert nocache
    balance     roundrobin
    option      httpclose
    option      forwardfor
    reqadd      X-Forwarded-Proto:\ http
    server      web1 XX.XX.XX.XX:80 cookie "LSW&#95;WEB1" check
    server      web2 XX.XX.XX.XX:80 cookie "LSW&#95;WEB2" check

{% endhighlight %}

Please note that you should replace the <code>XX.XX.XX.XX:80</code> IP above with your own load balanced servers IP.

-	Now,  add your SSL certificate key (.pem file) on the load balancer,  you certificate should look like the following example:
{% highlight bash %}
-----BEGIN RSA PRIVATE KEY-----
&lt;encoded string>
-----END RSA PRIVATE KEY-----
-----BEGIN CERTIFICATE-----
&lt;encoded string>
-----END CERTIFICATE-----
{% endhighlight %}

-	Then, create and configure a <code>stunnel.conf</code> file, find below an example:

{% highlight bash %}
sslVersion = all
options = NO&#95;SSLv2
cert= &lt;path to SSL certificate key file&gt;
setuid = root
setgid = root
pid = /var/run/stunnel.pid
socket = l:TCP&#95;NODELAY=1
socket = r:TCP&#95;NODELAY=1
output = /var/log/stunnel.log

[https]
accept = 443
connect = 8081
TIMEOUTclose = 0
{% endhighlight %}

- After that, you can run stunnel with the <code>stunnel.conf</code> file:

{% highlight bash %}
stunnel4 &lt;path to stunnel.conf file&gt;
{% endhighlight %}

<h2 id="rackspace">Rackspace</h2>
Rackspace make it very easy for you to [add SSL certificates to their cloud load balancer](http://www.rackspace.com/knowledge_center/product-faq/cloud-load-balancers), straight from their control panel:

![Rackspace SSL termination](http://cdn.cloud66.com/images/help/rackspace_ssl_termination.png)