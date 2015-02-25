---
layout: post
template: two-col
title:  "Troubleshooting issues connecting to your server"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2042-02-02-11 14:26:13
categories: 
lead: Issue connecting to server
search-tags: ['']
tags: ['Web server']
tutorial: true
difficulty: 0
---

**Few things to check if you are unable to connect to the server.**

There are many reasons that could cause a down time of your server or application.

Check the following things which can help you identify whether the issue is with the server or the application.
<ol>

<li> The initial step would be to see if the web server is responding to the http request :</li>
<p>
You can execute the following command and vertify that. </p>
<pre class="prettyprint"> curl -Ik "IP address" </pre>
<p>If you have an API which does not have http response you can use dig command to know the details about the response.</p>
<pre class="prettyprint"> dig "IP address" </pre>

<p>In some case there the web application has a redirect which return a true but its not the original address to identify the response.</p>

<p>For this you need to execute the curl command on the <u>location address</u> to know the current status of the server.</p>

<li>Check the cloud provider dashboard to verify the cloud instance is running : </li>
<p>You need to verify the stack servers on the cloud dashbord in order to be sure that the instances are running on your cloud provider. For that you can search the instances with the following format c66-stack name on your cloud provider dashboard and check weather they have any issues.</p>

<li>Cloud66 provides notification on the dashboard if the server is not responsive for more than 20 minutes :</li>

<p>We proactively monitor the status of the servers which are created with the help of Cloud66 account.</p>

<p>If any server is not responsive you can see a notification of a red triangle at the right top corner of the stack on your dashboard.</p>

<li>If the previous two option are not the case you can try SSH to the server :</li>
	<p>Using the cx command will simplfy your access to the server created with the help of Cloud66.
<a href="http://help.cloud66.com/managing-your-stack/ssh-to-your-server">Direct shell access</a> allows you to have access to the servers from your own server.
<p/>

<li> Toolbelt is important tool which help users to access the server and manage them : </li>
	<ul><li>You can check the toolbelt version with the following command :</li>
<pre class="prettyprint">
cx -v
</pre>

<li>To update the latest version of toolbelt :</li>
<p>You can update the latest version with the following command. Having the latest version will allow you to manage your servers with the fetures release with the latest toolbelt version.</p>
<pre class="prettyprint">
cx update 
</pre>
<li>Do a user needs sudo command to update the toolbelt :</li>
<p>Basically you don't need to use the sudo commnad to update the Toolbelt. There are many case, where the toolbelt is placed in the shared folder and inorder to gain write access to the folder you will need to use sudo command.</p>
<pre class="prettyprint">
sudo cx update
</pre></ul>

<li>Have you tried rebooting the server that can help releave some hogged tasks :</li>
<p>There may be issues with networks or any other unspecified reasons that a server can stop serving the content. Its better to check by restarting the server
You can execute the following command on you server. </p>
<pre class="prettyprint">
sudo reboot
</pre>
<li>Have you been in touch with your cloud vendor :</li>
<p>If  still there is issue while accessing your servers it might also be related to the cloud vendor. You can raise a support ticket on you cloud vendors that would narrow down the issue.</p>
</ol>
