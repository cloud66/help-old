---
layout: post
title:  "Agent communication issue"
date:   2040-09-24 10:51:22
categories:
lead: How to deal with agent communication issues
tutorial: true
difficulty: 1
search-tags: ['Agent']
tags: ['Troubleshooting']
---

You will be notified in the case that Cloud 66 is unable to connect to your server for at least 20 minutes. This may happen for the following reasons:

- Your server cron daemon has stopped running
- Your server is under high load, preventing it from accepting communication
- Your server is unable to connect to Cloud 66 due to network connectivity issues
- Your server is down

If you receive a notification about this, please see the following steps:

<ol class="list">
<li>Is your web endpoint functioning? This could be a matter of visiting your server IP address through your browser.</li>
<li>Can you <a href="http://help.cloud66.com/building-your-stack/ssh-to-your-server">connect to the server yourself via SSH</a>?</li>
<li>Is your cloud vendor experiencing any issues?</li>
<ul class="list">
	<li>DigitalOcean (<a href="https://twitter.com/digitalocean">Twitter</a>, <a href="https://status.digitalocean.com/">Status page</a>)</li>
	<li>AWS (<a href="https://twitter.com/awscloud">Twitter</a>, <a href="http://status.aws.amazon.com/">Status page</a>)</li>	
	<li>Rackspace (<a href="https://twitter.com/Rackspace">Twitter</a>, <a href="https://status.rackspace.com/">Status page</a>)</li>	
	<li>Google Cloud (<a href="https://twitter.com/googlecloud">Twitter</a>)</li>	
	<li>Linode (<a href="https://twitter.com/StatusLinode">Twitter</a>, <a href="http://status.linode.com/">Status page</a>)</li>	
	<li>Vexxhost (<a href="https://twitter.com/vexxhost">Twitter</a>, <a href="">Status page</a>)</li>	
	<li>Microsoft Azure (<a href="https://twitter.com/azure">Twitter</a>, <a href="http://azure.microsoft.com/en-us/status/">Status page</a>)</li>	
</ul>
<li>Is Cloud 66 experiencing issues? See the <a href="https://twitter.com/cloud66status">Twitter</a> and <a href="http://status.cloud66.com/">Status page</a>.</li>
<li>Try rebooting the server from your cloud vendor dashboard - this would help if it's under heavy load</li>
</ol>

If you have verified all of the above scenarios without finding the problem, please contact Cloud 66 support through your dashboard.