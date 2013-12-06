---
layout: post
template: two-col
title:  "Stack security"
nav_sticky: false
date:   2038-01-25 16:27:22
categories: stack-features
lead: Configure security and firewall for the servers in your stack
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#default">Default firewall rules</a>
	</li>
	<li>
		<a href="#custom">Custom firewall rules</a>
	</li>
	        <li>
                <ul>
                <li><a href="#source">Source (from)</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#destination">Destination (to)</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#protocol">Protocol</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#port">Port</a></li>
                </ul>
            </li>
	<li>
		<a href="#rules">Changing firewall rules</a>
	</li>
	<li>
		<a href="#temporary">Temporary shell access</a>
	</li>
	<li>
		<a href="#protect">Protecting against attacks</a>
	</li>
	        <li>
                <ul>
                <li><a href="#brute">SSH bruteforce attacks</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#dos">HTTP/HTTPS DoS attacks</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#monitor">Monitoring the attacks</a></li>
                </ul>
            </li>
</ul>

The security page is available from <i>Stack security</i> menu item on the <i>Stack detail</i> page:

![Cloud 66 Firewall](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_menu_item.png)

<h2 id="default">Default firewall rules</h2>
Stack security allows you to configure and apply firewall rules per server for your stack. It acts as a UI in front of an [IP-table based firewall mechanism](https://help.ubuntu.com/community/IptablesHowTo).

By default, [Cloud 66 gateway servers](/stacks/security.html) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](/how-to/implementing-faye.html).

Editing and removing the default firewall rules is not allowed to ensure secure accessibility to the servers at all times.

![Cloud 66 Firewall Rules](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_rules.png)

<h2 id="custom">Custom firewall rules</h2>
You can add and remove custom rules to the firewall through the Stack Security page.

To add a new rule, click on the <i>Add new firewall rule</i> link and add your firewall rules.

<h3 id="source">Source (from)</h3>
This is either the name or the IP address of the source of the traffic. For example, to grant access to traffic from IP address `23.45.67.89` only, enter `23.45.67.89` in the box.

Alternatively, you can allow traffic from a range of IP addresses. For example, to allow traffic from sources with IP address from `23.45.67.0` to `23.45.67.255` you can use `23.45.67.89/24`. This notation is based on [subnet masks](http://en.wikipedia.org/wiki/CIDR_notation#IPv4_CIDR_blocks).

You can also specify the source of the traffic by name, if that name is known in your stack. This can be chosen from the drop-down. The valid values can be `Anywhere`, the name of the any of the server groups in your stack (like `Rails Servers`, `MySQL Servers`) or the name of the individual server (like `Coyote`).

![Cloud 66 Firewall Sources](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_from_dropdown.png)

<h3 id="destination">Destination (to)</h3>
This is the destination of the traffic. Only the servers or server groups within the stack are the valid values you can choose from the drop-down.

<h3 id="protocol">Protocol</h3>
Can be either `TCP` or `UDP`

<h3 id="port">Port</h3>
This is the port number of the traffic. You can either type in the port number or choose from the list of most commonly used port numbers by typing the service name (like `ssh` or `mongodb`).

<h2 id="rules">Changing firewall rules</h2>
Changes to firewall rules are applied immediately after clicking on the "Apply Rules" button.

<h2 id="temporary">Temporary shell access</h2>
Sometimes you need to access your servers temporarily. To avoid the dangers of leaving firewall ports open permanently, you can use the <i>temporary SSH connection</i> feature.

![Access Leasing](http://cdn.cloud66.com.s3.amazonaws.com/images/help/access_least_button.png)

Just click on the plug icon on the top right on the security page and you are presented with a form filled with your current IP address and the period you would like to grant SSH access to that IP address. This access is to all of your servers in the stack from that IP address and once the given period is over the access rights will be revoked and the firewall port will be closed.

![Access Leasing](http://cdn.cloud66.com.s3.amazonaws.com/images/help/access_least_overlay.png)

<h2 id="protect">Protecting against attacks</h2>
All new stacks deployed with Cloud 66 are automatically protected against basic [DoS](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [bruteforce](http://en.wikipedia.org/wiki/Brute-force_attack) attacks.

<h3 id="brute">SSH bruteforce attacks</h3>
Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against bruteforce SSH attacks, the servers are also configured to only accept SSH keys and no passwords. However, it is possible that user configurations result in a more relaxed security configuration. To protect the servers in such cases, repeated SSH login attempts are detected (more than 6 failed attempts from the same IP address per minute) and blocked for at least 10 minutes.

<h3 id="dos">HTTP/HTTPS DoS attacks</h3>
For Internet-facing servers (eg. web servers and load balancers), repeated HTTP/HTTPS requests (more than 1200 requests per minute from the same server) will be blocked for at least 10 minutes.

<h3 id="monitor">Monitoring the attacks</h3>
You can monitor attacks by clicking on the <i>Stack security</i> item on the <i>Stack details</i> menu. The page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

![Cloud 66 DDoS Protection](http://help.cloud66.com.s3.amazonaws.com/images/cloud66_ddos_protection.png)
