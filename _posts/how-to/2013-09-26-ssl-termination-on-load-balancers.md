---
layout: post
title:  "Add a SSL certificate on a load balancer"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">It is really easy to add SSL termination to your load balancers.</p>

## Using AWS


To register an SSL certificate with Amazon Elastic Load Balancer, please refer to our [blog post](http://blog.cloud66.com/post/30990317011/registering-ssl-certificate-with-amazon-elastic-load).

Thanks to the AWS dashboard or the command line interface, you can easily upload your SSL certificates to relevant load balancers.

Through the AWS dashboard:

- Sign in to the AWS management console and open the Amazon EC2 console
- Select your load balancer and upload a new SSL Certificate or choose an existing one.
- In case it is a new certificate, enter a name for the certificate and copy paste the contents of the private key file and the public key file into the related fields, then save.

<div class="notice">
    <h3>Important</h3>
    <p>Ensure that the certificate is valid: current date must be between the certificate’s start and end date.Certificate keys also should not be password protected</p>
</div>

Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

- Run the command below to add a new SSL certificate:
<p>
<kbd>
iam-servercertupload -b &lt;CA authenticated SSL&gt; -k &lt;private key file(.pem)&gt; -s &lt;certificate name&gt;  -c  &lt;certificate chain file&gt; –v
</kbd>
</p>

- You should retrieve any available SSL certificate using this command:
<p>
<kbd>
iam-servercertlistbypathx
</kbd>
</p>

- Run the command below to attach the SSL certificate to the load balancer:
<p>
<kbd>
elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&lt;certificate name&gt;"
</kbd>
</p>

-	To delete a certificate, run the following command:
<p>
<kbd>
  iam-servercertdel -s &lt;certificate name&gt;
</kbd>
</p>


See also: [AWS documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html)


## Using load balancing with HAProxy:  (DigitalOcean, Linode,  Telefonica, Joyent)

HAProxy 1.4 doesn’t natively support SSL. But it possible to use an SSL encryption wrapper like Stunnel, Stud, Pound or Nginx. They can terminate TLS/SSL connections and forward the unencrypted traffic to HAProxy.

####How to use HAProxy with Stunnel to handle HTTPS requests:

-	Firstly, install Stunnel on the load balancer:
<p>
<kbd>
apt-get install stunnel
</kbd>
</p>

-	Then, configure the <code>/etc/haproxy/haproxy.cfg</code>  file, find below an example:

<pre class="terminal">
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
    cookie      LSW_WEB insert
    option      httpclose
    server      web1 XX.XX.XX.XX:80 cookie "LSW_WEB1" check
    server      web2 XX.XX.XX.XX:80 cookie "LSW_WEB2" check


listen webcluster_ssl *:8081
    mode        http
    cookie      HTTP insert nocache
    balance     roundrobin
    option      httpclose
    option      forwardfor
    reqadd      X-Forwarded-Proto:\ http
    server      web1 XX.XX.XX.XX:80 cookie "LSW_WEB1" check
    server      web2 XX.XX.XX.XX:80 cookie "LSW_WEB2" check

</pre>

Make sure that you wrote your own load balanced servers IP instead of <code>XX.XX.XX.XX:80</code>.

-	Now,  add your SSL certificate key (.pem file) on the load balancer,  you certificate should look like the following example:
<pre class="terminal">
-----BEGIN RSA PRIVATE KEY-----
&lt;encoded string>
-----END RSA PRIVATE KEY-----
-----BEGIN CERTIFICATE-----
&lt;encoded string>
-----END CERTIFICATE-----
</pre>

-	Then, create and configure a <code>stunnel.conf</code> file, find below an example:

<pre class="terminal">
sslVersion = all
options = NO_SSLv2
cert= &lt;path to SSL certificate key file&gt;
setuid = root
setgid = root
pid = /var/run/stunnel.pid
socket = l:TCP_NODELAY=1
socket = r:TCP_NODELAY=1
output = /var/log/stunnel.log

[https]
accept = 443
connect = 8081
TIMEOUTclose = 0
</pre>

- After that, you can run stunnel with the <code>stunnel.conf</code> file:

<pre class="terminal">
stunnel4 &lt;path to stunnel.conf file&gt;
</pre>
