---
layout: post
title:  "Stack Security"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">You can configure your server security and firewall through for the servers in your stack.</p>

## Accessing the Stack Security Page
Stack Security page is available from Stack Security menu item on the Stack detail page.

![Cloud 66 Firewall](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_menu_item.png)

## Default Firewall Rules
Stack security allows you to configure and apply firewall rules per server for your stack. It acts as a UI in front of an IP table based firewall mechanism.

By default [Cloud 66 gateway servers](/stacks/security.html) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules includes DB and Web ports appropriate for the stack deployment but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket based applications like [Faye](/how-to/implementing-faye.html).

Editing and removing the default rules is not allowed through the firewall to ensure secure accessibility to the servers at all times.

![Cloud 66 Firewall Rules](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_rules.png)

## Custom Firewall Rules
You can add and remove custom rules to the firewall through the Stack Security page.

To add a new rule, click on the "Add new firewall rule" link and add your firewall rules.

![Cloud 66 Firewall Rule](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_rule.png)

### Source (From)
This is either the IP address to the name of the source of the traffic. For example to grant access to traffic from `23.45.67.89` IP address only, enter `23.45.67.89` in the box.

Alternatively you can allow traffic from a range of IP addresses. For example to allow traffic from sources with IP address from `23.45.67.0` to `23.45.67.255` you can use `23.45.67.89/24`.

You can also specify the source of the traffic by name, if that name is known in your stack. This can be chosen from the drop-down. The valid values can be `Anywhere`, the name of the any of the server groups in your stack (like `Rails Servers`, `MySQL Servers`) or the name of the individual server (like `Coyote`).

![Cloud 66 Firewall Sources](http://cdn.cloud66.com.s3.amazonaws.com/images/help/firewall_from_dropdown.png)

### Destination (To)
This is the destination of the traffic. Only the servers or server groups within the stack are the valid values you can choose from the drop-down.

### Protocol
Can be either `TCP` or `UDP`

### Port
This is the port number of the traffic. You can either type in the port number or choose from the list of most commonly used port numbers by typing the service name (like `ssh` or `mongodb`).

## Changing Firewall Rules
Changes to firewall rules are applied immediately after clicking on the "Apply Rules" button.

<div class="notice">
	<h3>Important</h3>
	<p>Make sure your servers have only the minimum required firewall rules applied to them.</p>
</div>

## Temporary Shell Access
Sometimes you need to have a shell access to your servers temporarily. To avoid the dangers of leaving firewall ports open permanently, you can use the Access Leasing feature.

![Access Leasing](http://cdn.cloud66.com.s3.amazonaws.com/images/help/access_least_button.png)

Just click on the plug icon on the top right on the security page and you are presented with a form filled with your current IP address and the period you would like to grant SSH access to that IP address. This access is to all of your servers in the stack from that IP address and once the given period is over the access rights will be revoked and the firewall port will be closed.

![Access Leasing](http://cdn.cloud66.com.s3.amazonaws.com/images/help/access_least_overlay.png)

## Protecting against attacks
All new stacks deployed with Cloud 66 are automatically protected against basic [DoS](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [bruteforce](http://en.wikipedia.org/wiki/Brute-force_attack) attacks.

### SSH bruteforce attacks
All Cloud 66 deployed servers only allow incoming SSH traffic from known IP addresses. To protect against bruteforce SSH attacks the servers are also configured to only accept SSH keys and no passwords. However, it is possible that user configuration results in a more relaxed security configuration. To protect the servers in such cases, repeated SSH login attempts are detected (more than 6 failed attempts from the same IP address per minute) and blocked for at least 10 minutes.

### HTTP/HTTPS DoS attacks
For internet facing servers (web servers and load balancers), repeated HTTP/HTTPS requests (more than 1200 requests per minute from the same server) will be blocked for at least 10 minutes.

### Monitoring the attacks
You can monitor attacks by clicking on the Stack Security item on the Stack details menu. The page will show a list of currently blocked attacks and previoulsy blocked attacks of the past 24 hours with information about the source and destination.

![Cloud 66 DDoS Protection](http://help.cloud66.com.s3.amazonaws.com/images/cloud66_ddos_protection.png)
