---
layout: post
template: two-col
title:  "Configuring Multi Certificate for HAProxy"
so_title: "HAproxy"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2015-09-02 15:33:13
categories: 
lead: Terminate multi SSL certificates on your HAProxy
search-tags: ['Terminate', 'certificate']
tags: ['Customization']
tutorial: true
difficulty: 2
---

This article is for adding multiple SSL terminations to your HAproxy when you serve both websites on the same backend servers.

<h3>1. Add the following environment variables to your stack</h3>

<pre class="prettyprint">
$ cx env-vars set [-s &lt;stack&gt;] WEBSITE1 &lt;value like example1.com&gt;
$ cx env-vars set [-s &lt;stack&gt;] WEBSITE2 &lt;value like example2.com&gt;
</pre>

<h3>2. Concatanate each certification's files to one file</h3>
<li>Run the followings on your local computer</li>
<pre class="prettyprint">
<l>cat CERT1.CRT_PATH [CERT1_MID.crt_path] PRIVATE1.key_PATH > websitename1.pem</l>
<l>cat CERT2.CRT_PATH [CERT2_MID.crt_PATH] PRIVATE2.key_PATH > websitename2.pem</l>
</pre>

<h3>3. Upload them to /tmp of your server</h3>
<pre class="prettyprint">
cx upload -s stack_name --server haproxy_server_name websitename1.pem_PATH websitename1.pem
cx upload -s stack_name --server haproxy_server_name websitename2.pem_PATH websitename2.pem
</pre>

<h3>4. Login to your HAproxy server</h3>

<pre class="prettyprint">
cx ssh -s stack_name haproxy_server_name
</pre>

<h3>5. Copy the files to certification files from /tmp to their directory</h3>
<pre class="prettyprint">
sudo cp /tmp/websitename1.pem /etc/ssl/private/$WEBSITE_1.pem
sudo cp /tmp/websitename2.pem /etc/ssl/private/$WEBSITE_2.pem
</pre>

<h3>6. Change the settings in your HAproxy config</h3>

In th UI Find the following line in your HAproxy config page

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and chenge it to:

`bind 0.0.0.0:{{port[0]}} ssl crt ${WEBSITE_1}.pem crt ${WEBSITE_2}.pem`

You are all set.
