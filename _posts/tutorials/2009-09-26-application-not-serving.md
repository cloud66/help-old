---
layout: post
template: two-col
title: "Application not serving content"
date: 2050-09-26 15:33:13
categories: 
lead: Troubleshooting an application that isn't serving content
search-tags: ['site down', 'not working', 'application error', 'nginx error', 'site not working']
tags: ['Troubleshooting']
tutorial: true
difficulty: 1
---

There are a number of factors that can lead your application to stop serving content. Follow this guide to eliminate the most common issues.

Start by checking if you can [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server), remembering to open the firewall beforehand as described.

If you're able to SSH to the server, follow the steps below. If not, we recommend that you use your cloud vendor dashboard to try to connect to the server.

<ol class="article-list">
<li>Is your application redirecting to HTTPS by default, and you don't have an SSL certificate installed?</li> 

<p>You can check by visiting the IP address of your server in your browser, or using the following command to see if there is a redirect in place:</p>

<pre class="prettyprint">
$ curl -I http://www.site.com
</pre>

<p>The output of this command provides you with lots of useful information, for example response codes, redirects and more. Additionally, an <i>immediate bounce</i> of this command indicates that there is no server listening, whereas a more <i>lengthy response</i> could indicate a firewall issue.</p>
<br/><br/>
<li>Try restarting Nginx by issuing <code>sudo service nginx restart</code> on the server.</li> 

<p>This should determine whether or not Nginx is having issues starting or serving content. For more detailed error logs, you can check:</p>

<pre class="prettyprint">
$ $STACK_PATH/log/nginx_error.log
</pre>

<p>It may be worth checking your <a href="http://help.cloud66.com/web-server/nginx">Nginx CustomConfig history</a> to see if any recent configuration changes are causing issues.</p>
<br/><br/>
<li>You may be experiencing an issue with your web server - so first check your <i>Stack information</i> page to see which one you're running.</li>

<h5>Passenger web server</h5>

<pre class="prettyprint">
$ $STACK_PATH/log/&#60;environment&#62;.log
</pre>

<h5>Custom web server (eg. Unicorn)</h5>
SSH to the server and check your logs in

<pre class="prettyprint">
$ $STACK_PATH/log/&#60;environment&#62;.log
$ $STACK_PATH/log/unicorn.stderr.log
$ $STACK_PATH/log/unicorn.stdout.log
</pre>

<li>If everything is working until this point, you may have an application issue. To find out, go to your application path by issuing <code>cd $STACK_PATH</code> and then start the Rails console: <code>rails c</code>. Any error output will help you troubleshoot your issue.</li></ol>