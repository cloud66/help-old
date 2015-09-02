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

The idea is to add multiple SSL termination to your HAproxy

1. Add the following environment variables to your stack

WEBSITE_1  web_site1_name (full wesite name, like example1.com)
WEBSITE_2  web_site2_name (full wesite name, like example2.com)

2. Concatanate each certification's files to one file

cat CERT1.CRT_PATH [CERT1_MID.crt_path] PRIVATE1.key_PATH > websitename1.pem
cat CERT2.CRT_PATH [CERT2_MID.crt_PATH] PRIVATE2.key_PATH > websitename2.pem

3. Upload them to /tmp of your server

cx upload -s stack_name --server haproxy_server_name websitename1.pem_PATH websitename1.pem
cx upload -s stack_name --server haproxy_server_name websitename2.pem_PATH websitename2.pem


4. Login to your HAproxy server

cx ssh -s stack_name haproxy_server_name

5. Copy the files to certification files from /tmp to their directory

sudo cp /tmp/websitename1.pem /etc/ssl/private/$WEBSITE_1.pem
sudo cp /tmp/websitename2.pem /etc/ssl/private/$WEBSITE_2.pem

6. Change the settings in your HAproxy config

In th UI Find the following line in your HAproxy config page

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and chenge the whole line to:

`bind 0.0.0.0:{{port[0]}} ssl crt ${WEBSITE_1}.pem crt ${WEBSITE_2}.pem`

You are all set.
