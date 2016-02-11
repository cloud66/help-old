---
layout: post
template: one-col
title:  "Deployment Gateway"
so_title: "deploy gateway"
nav_sticky: false
date:   2099-12-25 16:27:22
categories: deployment
lead: An overview of deploying stack behind the bastion server.
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About deployment gateways</a>
	</li>
	<li>
		<a href="#deploy">How to deploy your stack behind the gateway server</a>
	</li>
	<li>
		<a href="#access">Accessing your servers behind the gateway server</a>
	</li>
</ul>


<h2 id="about">About deployment gateways</h2>
If you want to deploy your stack in a DMZ, you should prepare a bastion server which enable you to connect to your DMZ. You should define a <b>Deployment Gateway</b> in your cloud66 account and specify the information of the bastion server, then you will be able to deploy your stack in the DMZ.

<div class="notice">
    <h3>Important</h3>
    <p>Team members should have <b>Edit Deploy Gateways</b> access rights to be able to use the deployment gateway.</p>
</div>

<h2 id="deploy">How to deploy your stack behind the gateway server</h2>

Gateway management is available through <a href="/toolbelt/toolbelt-gateway-management">toolbelt</a> .

First you need to define a gateway:

<pre class="prettyprint">
$ cx gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
</pre>

To use this gateway for stack deployment, you need to specify it in manifest:

<pre class="prettyprint">
production:
	gateway:
	    name: aws_bastion
	    username: ec2-user
</pre>

You should make gateway available before you start deployment:

<pre class="prettyprint">
$ cx gateways open --name aws_bastion --key /tmp/gateway.pem --ttl 1h
</pre>

Now you can start deploying your stack.

After deployment finished you can invalidate gateway although it will expire in the time you specified with ttl.

<pre class="prettyprint">
$ cx gateways close --name aws_bastion
</pre>

<h2 id="access">Accessing your servers behind the gateway server</h2>

If you want to connect to your servers which deployed behind the bastion server you need to have access to the key of bastion server. Then you can use toolbelt to connect to your server:

<pre class="prettyprint">
$ cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion
</pre>