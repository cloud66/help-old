---
layout: post
template: two-col
title:  "Troubleshooting issues connecting to your server"
so_title: "nginx"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2042-02-02-11 14:26:13
categories: 
lead: How to address issues connecting to your server
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

There are a number of steps you can take to troubleshoot connectivity issues with your server.

<ol class="article-list">
<b><li>Is your server responding to HTTP requests?</li></b>

To verify this, please visit the server on its IP address and/or primary DNS name (the c66.me address). These addresses are available on the server details page through your stack. If the request times out, this could mean that your web server is down or unable to respond to requests.<br/><br/>

<b><li>What is the web server returning?</li></b>

If your web server is responding to web requests, we will now want to determine what it is responding with by running <code>curl -I &#60;host_name&#62;</code> in your terminal, for example:

<pre class="prettyprint">
$ curl -I cloud66.com
HTTP/1.1 301 Moved Permanently
Server: nginx
Date: Wed, 04 Mar 2015 20:42:08 GMT
Content-Type: text/html
Content-Length: 178
Connection: close
Location: http://www.cloud66.com/
X-Powered-By: cloud66
Set-Cookie: LSW_WEB="LSW_WEB1"; path=/
</pre>

The main lines to take note of are the <i>HTTP response</i> and the <i>location</i> - the HTTP response tells us what the web server is returning. These are the most typical HTTP codes:

<ul>
<li>200: Successful HTTP request</li>
<li>301: The page you are visiting is <i>permanently</i> redirecting to another address</li>
<li>302: The page you are visiting is <i>temporarily</i> redirecting to another address</li>
<li>400: The server cannot process the given request</li>
<li>404: The requested resource could not be found</li>
<li>500: Internal server error</li>
<li>502: The server is acting as a proxy and received an invalid response from the upstream server</li>
<li>503: The server is currently unavailable, due to overload or being down for maintenance</li>
</ul>

The response in the example above is a 301, which means that the request is being redirected to a different location. In that case, visiting <code>cloud66.com</code> is <i>permanently</i> redirecting to <code>www.cloud66.com</code>. If we then run <code>curl -I www.cloud66.com</code>, we see that it returns a 200 HTTP code, which is our goal.<br/><br/>

By checking the HTTP response of your server, you can determine if there is a broken redirect, or if there is any other issue with the web server itself. If you aren't getting a response from the web server on this command, it may be down. Following the subsequent steps will help determine this.<br/><br/>

<b><li>Is the server running on Cloud 66?</li></b>

If the previous two steps have been unfruitful, there may be a more systemic issue with your server. Cloud 66 proactively monitors the status of your servers, and in the case that Cloud 66 cannot connect to your server for 20 minutes, we will display a red icon on your stack page to indicate this. If we cannot connect to the server, you will not be able to deploy the stack.<br/><br/>

<b><li>Can you SSH to the server yourself?</li></b>

You can try to SSH to the server yourself by using either the <a href="http://help.cloud66.com/managing-your-stack/ssh-to-your-server">Cloud 66 toolbelt or manually</a>. If you are unable to SSH to the server in question, follow the <a href="/managing-your-stack/ssh-to-your-server">troubleshooting steps</a> before moving onto the next step.<br/>

If you can SSH to the server, then the likely issue is with your web server. Run <code>sudo service nginx restart</code> on the server to restart the web server, and see if it returns an error message.<br/><br/>

<b><li>Can you reboot the server through your cloud provider dashboard?</li></b>

If you login to your cloud provider account, you should be able to do a hard-reboot of the server in question. This helps in the case that its memory consumption prevents the server from receiving or responding to any incoming connections.<br/><br/>

<b><li>Is the server running in your cloud provider dashboard?</li></b>

If you login to your cloud provider account, you should be able to verify if the server in question is running or not. For example, AWS will have a green, yellow and red icon for the server to indicate its status. You can either identify the server by its IP address or server name. If your cloud provider is showing an issue with the server, it is likely best to contact them directly to determine the cause.
</ol>