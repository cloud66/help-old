---
layout: post
template: one-col
title:  "Server restart notifications"
so_title: "logs"
nav_sticky: false
date:   2093-02-25 16:27:22
categories: managing-your-stack
lead: Cloud 66 server restart notifications
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">What is the server restart notification?</a>
    </li>    
    <li>
        <a href="#importance">Is this important? Do I need immediate action?</a>
    </li>
    <li>
        <a href="#how-to">How do I actually restart my servers?</a>
    </li>
    <li>
        <a href="#how-does-it-work">How does Cloud 66 determine my server needs a restart?</a>
    </li>
    <li>
        <a href="#notification-delay">I've restarted, but I still see the notification</a>
    </li>
    <li>
        <a href="#additional-information">Additional information</a>
    </li>   
</ul>

<h2 id="about">What is the server restart notification?</h2>
When Cloud 66 provisions your server we will automatically install and configure the unattended-upgrades package. This package is responsible for automatically applying security patches that are released by the Ubuntu package maintainers. Sometimes a package will be updated that impacts an already running process on your box, and the only way to update the already running process is to restart it. 

However, there is no generic way that the package manager can restart all affected processes, so it instead marks your system with a “restart required” flag, requesting user action to reboot the server (such that all affected processes are restarted). Unattended-upgrades could be configured to perform the restart automatically, but in any normal environment this is obviously not desirable! 

For affected servers, when you connect to your server you will see a notification in your console provided by your operating system of the form: *** System restart required ***. Cloud 66 brings the server notifications forward in your dashboard so that you can see via the UI when a package upgrade has resulted in a server restart request.

<h2 id="importance">Is this important? Do I need immediate action?</h2>
Unfortunately there is no generic way to answer that question. The answer is that it very much depends on what has been updated and how critical your systems are, and what the potential attach vectors for your server are. For instance, in general it is more important to update your servers that are exposed to the outside world (ie. any servers that have external ports opened such as web or api servers) than an internal backend server not accessible from anywhere except internal systems. 

For this reason, Cloud 66 will promote restart notifications for any server with ports exposed to "anywhere" externally, although all restart notifications are visible on the server detail page. If the restart has not taken place for a long time then eventually it will be promoted up in your stack details page too. However, the urgency is very much application dependant.

<h2 id="how-to">How do I actually restart my servers?</h2>
In order to minimise down-time, you can restart one server at a time (assuming you have a [load balancer](/web-server/load-balancing) in place). Selecting an out-of-hours time is recommended to minimise disruption. You can also use the [maintenance page](/building-your-stack/stack-network-settings#maintenance) to temporarily notify your users that you are performing maintenance.

To restart your server, it is recommended that you <a href="/building-your-stack/ssh-to-your-server">SSH to your server</a> and run either of the following terminal commands:

<pre class="terminal">
sudo reboot 
</pre>

<pre class="terminal">
sudo shutdown -r now
</pre>

<div class="notice">
    <h3>Important</h3>
    <p>Depending on your cloud provider, if you instead choose to shut your server down, then start it again via the cloud provider dashboard, you may have new IP addresses assigned to your server. That can take a little while to propagate to Cloud 66 and your DNS provider, meaning you may have some unnecessary downtime should you choose this restart method.</p>
</div>

<h2 id="how-does-it-work">How does Cloud 66 determine my server needs a restart?</h2>
The unattended-upgrades package signals to the operating system that a restart is required by creating a file <i>/var/run/reboot-required</i>. Cloud 66 will check periodically if this file is present and bring that forward into the UI. 

<h2 id="notification-delay">I've restarted, but I still see the notification</h2>
Due to the periodic checking of your server (as stated above) it can take up to 12 hours for your notifications to be cleared. Deploying your stack will cause an immediate refresh of your restart notification state (after deployment completes). You can also manually check your restart required status on your server by running the command:

<pre class="terminal">
sudo bash -c "if [ -f /var/run/reboot-required ]; then echo 'Server is requesting restart'; fi"
</pre>

<h2 id="additional-information">Additional information</h2>
Visit the <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">Ubuntu documentation on automatic security updates</a> for additional information about Ubuntu unattended-upgrades.