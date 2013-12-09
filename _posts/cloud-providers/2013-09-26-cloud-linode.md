---
layout: post
template: two-col
title:  "Linode cloud"
date:   2035-09-24 10:51:22
categories: cloud-providers
lead: Use your Linode account with Cloud 66
---

You can use Cloud 66 to provision and deploy your code to servers on Linode. All you need to do is add your Linode API keys to your Cloud 66 account.

Please visit Linode to learn more about their <a href="http://www.linode.com/avail/" target="_blank">regions</a> and <a href="https://manager.linode.com/signup/#plans" target="_blank">Linode pricing</a>

<div class="notice">
    <h3>Note</h3>
    <p>In order to enable Linode internal networking, you need to manually modify your "/etc/network/interfaces" file as described in the <a href="https://library.linode.com/networking/configuring-static-ip-interfaces">Linode documentation</a>.</p>
</div>

Once you have signed up, please add your API keys to your account while [building a new stack](/getting-started/your-first-stack.html):

![cloud connect](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_connect.png)

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>