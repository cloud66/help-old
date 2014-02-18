---
layout: post
template: two-col
title:  "Block Tor traffic to your application"
so_title: "tor"
date:   4000-05-03 14:17:13
categories: stack-features
lead: You may wish to block Tor traffic for security reasons
---

You now have the option to automatically block all Tor-based traffic to your application if you wish. This is completely optional, as you may want to allow Tor traffic to your application depending on your requirements.

<div class="notice">
    <h3>Note</h3>
    <p>If you have a customized Nginx configuration file, you may need to apply a <a href="/how-to/customconf-patch.html">CustomConfig patch</a> to use this functionality.</p>
</div>

Once enabled, Cloud 66 will automatically update a list of known Tor exit node IPs on your web servers on a regular basis, and subsequently reload your Nginx configuration (this won't result in downtime).

<div class="notice">
    <h3>Note</h3>
    <p>There may be a delay between a new Tor exit node being created and it being announced and added to your server. However, the majority of cases will be covered.</p>
</div>

To enable this feature, simply click the drop-down cog on the top right of your stack and click the _Settings_ option:

![Block tor](http://cdn.cloud66.com.s3.amazonaws.com/images/help/block_tor.png)

Refer to our [stack security](/stack-features/stack-security.html) page for more information about security.