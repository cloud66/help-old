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

This article is for adding multiple SSL terminations to your HAproxy when you serve multiple websites on the same backend servers.


<h3>1. Concatanate each certification's files to one file</h3>
<p>Run the followings on your local computer</p>
<pre class="prettyprint">
<l>cat CERT1.CRT_PATH [CERT1_MID.crt_path] PRIVATE1.key_PATH > websitename1.pem</l>
<l>cat CERT2.CRT_PATH [CERT2_MID.crt_PATH] PRIVATE2.key_PATH > websitename2.pem</l>
</pre>

<h3>2. Upload them to /tmp of your server</h3>
<pre class="prettyprint">
cx upload -s stack_name --server haproxy_server_name websitename1.pem_PATH websitename1.pem
cx upload -s stack_name --server haproxy_server_name websitename2.pem_PATH websitename2.pem
</pre>

<h3>3. Login to your HAproxy server</h3>

<pre class="prettyprint">
cx ssh -s stack_name haproxy_server_name
</pre>

<h3>4. Copy the files to certification files from /tmp to their directory</h3>
<pre class="prettyprint">
sudo cp /tmp/websitename1.pem /etc/ssl/private/websitename1.pem
sudo cp /tmp/websitename2.pem /etc/ssl/private/websitename2.pem
</pre>

<h3>5. Change the settings in your HAproxy config</h3>

In th UI Find the following line in your HAproxy config page

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and chenge it to:

`bind 0.0.0.0:{{port[0]}} ssl crt websitename1.pem crt websitename2.pem`

<div class="notice">
    <h3>Note</h3>
	<p>Make sure websitename1.pem and websitename2.pem are the same name as the filenames you have under /etc/ssl/private/</p>
</div>

You are all set.
