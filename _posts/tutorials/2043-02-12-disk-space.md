---
layout: post
template: two-col
title:  "Disk Space Issues"
so_title: "disk space"
date:   1900-11-01 15:33:13
categories: 
lead: Troubleshooting disk space issues
search-tags: ['Space', 'Disk Space']
tags: ['Web server']
tutorial: true
difficulty: 0
---

**Inorder to be aware and maintain the disk space of your server you can do the following precaution.**
<ol>
<li>Check for current space used by the server :</li>
<p>You can perform the following command on to your server to check the avaiable disk.</p>
<pre class= "prettyprint">
df -h
</pre>
<p>Or you can also try the following command on your server :
<pre class= "prettyprint">
ncdu /
</pre>
<p>This will return the detailed usage of folders on to your server. Being aware of this information can avoid the situation of your server getting out of disk space.</p>
<li>You can change your logging level/log rotation frequency :</li>
 <p>You can configure logrotate to manage log rotation on the servers. You can find the config file under this location and change the frequency of the logs that are generated. By doing this it would reduce the size consumed by the logs.</p>
<pre class= "prettyprint">
/etc/cloud66/logrotate/default.conf
</pre>
<p>Changing the logrotation frequency is not recommended as its default is prefered for the best result.</p>
<p>The best option for this would be to scale the server to a bigger size of disk space. Some cloud proider allows their customer to chages the size of the server from cloud dashboard this can help users to scale to ba bigger disk space. This is currently supported by (Amazon and Google cloud).</p>

<li>Are you running an older server ? Newer servers we create have bigger disks ?</li>
<p>Its better to know whether you are deploying the stack on a larger disk space. As this will reduce the chance of getting out of space in the near future. 
</p>
<p> To verify that size of the disk you can run the following command <code>df -H</code> on your server. This will give the details of your disk resources. If your stack is old the deafult disk size will depend on the cloud provider. But if you are a new user we automatically set the size to 20GB as default for any new stack deployments.</p>
<ol>

