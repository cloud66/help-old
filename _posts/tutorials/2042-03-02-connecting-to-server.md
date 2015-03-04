---
layout: post
template: two-col
title:  "Troubleshooting issues connecting to your server"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2042-02-02-11 14:26:13
categories: 
lead: Issue connecting to server new
search-tags: ['']
tags: ['Web server']
tutorial: true
difficulty: 0
---

**Few things to check if you are unable to connect to the server.**

There are many reasons that could cause a down time of your server or application.

Checking the following things which could help you identify whether the issue is with the server or the application.
<ol>
<li>You can visit the url of your server and check whether the server is serving the content.</li>
<p>You can check the reply of the server on the browser that can be redirecting to https. Inorder to verify that have a look on the nginx configuration on the stack information page.  
</p>

<li> Curl the URL to see if there are any error for responses/redirects which are not shown in browser :</li>
<p>You can execute the following command and verify the response of the server on your http request if you have redirect you can check with the following command. </p>
<pre class="prettyprint"> curl -Ik "IP address" </pre>
<p>If you have an API which does not have http response you can use dig command to know the details about the response.</p>
<pre class="prettyprint"> dig "IP address" </pre>
<p>In some case there the web application has a redirect which return true but its not the original address to identify the response.</p>
<p>For this you need to execute the curl command on the <u>location address</u> to know the current status of the server.</p>
<li>Have you checked the Cloud66 dashboard :</li>

<p>We provides server notificationon the dashboard. If the server is not responsive for more than 20 minutes we inform the user with a notification on the stack, we proactively monitor the status of the servers which are created with the help of Cloud66 account.</p>
<p>If any stack in the Cloud66 dashboard is not responsive user will get a notification of a red triangle at the right top corner of the stack on your stack detail block.</p>

<li>You can also verify with the cloud dashboard : </li>
<p>You also need to look for servers on the cloud dashbord in order to be sure that the instances are running on your cloud provider. Cloud66 always creates your server instances with the following format c66-stack name on your cloud provider dashboard so it can be easy to distinguish with other instances</p>

<p>If the concerned instance is not present in the cloud dashbord that means the server has been deleted/removed from your cloud account so it won't be aaccessible anymore.</p>
<li>Have you tried doing SSH to the server :</li>
<p>Using the cx command will simplfy your access to the server created with the help of Cloud66. You need to have <a href="http://help.cloud66.com/managing-your-stack/ssh-to-your-server">shell to server</a> rights over the stack to use this command. You can follow the below example to gain access to the server.
</p>
<pre class="prettyprint">
$ cx ssh [-s &lt;stack&gt;] &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt;
</pre>

<li>Have you tried accessing your server manually from the cloud dashboard (Linode/Digital Ocean) :</li>
<p>Variety of cloud provider allows user to interact with the server instaces through thier UI. This can help verify if the server instance are alive or not.</p>
<p> * In Digital Ocean you can VNC to the server and check whether all the componets are running not. You can check the graphs of the server for monitoring the activity on the server.
<p> * In Linode dashboard you can select your server instance and go to the remote access tab and click on the cosole access link to access your server with UI.

<li>Have you tried rebooting the server :</li>
<p>There may be issues with networks, application, processes or any other unspecified reasons that a server can stop serving the content. Its better to try restarting the server. which in some case release the hogged process. 
You can execute the following command on you server. </p>
<pre class="prettyprint">
sudo reboot
</pre>
<p>Restarting the server is not a guaranteed solution for this kind of issue. If your application is not serveing content you can check the Nginx configurations to be sure.</p>
<li>Have you been in touch with your cloud vendor :</li>
<p>If  still there is issue while accessing your servers it might also be related to the cloud vendor. You can raise a support ticket on you cloud vendors that would help narrow down the issue.</p>
</ol>

