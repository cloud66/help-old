---
layout: post
template: one-col
title:  "Deployment Authorisation"
date:   2016-07-15 11:18:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Deployment Lockdown For Docker Stacks
search-tags: ['restrict', 'deployment', 'lockdown']
tags: ['Authorisation']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About Deployment Authorisation</a>
	</li>
	<li>
		<a href="#lockdown">Cloud Lockdown</a>
	</li>
</ul>

<h2 id="about">About Deployment Authorisation</h2>

For docker stacks where you want additional control over deployment authorizations, you can now go to the stack settings page an choose a deployment lockdown strategy. There are currently three deployment strategies available:
 
 - <b> No Deployment Lockdown:</b>
   This is the default behaviour and means that deployments will go through without any additional approval.
 - <b>Anyone on your team:</b>
   This setting implies that deployments will only happen if *at least* two members on your project with deploy permissions agree to deploy your stack. This is commonly known as four-eyes authorization.
 - <b>Specific team members:</b>
   This setting implies that only a specific user (or users in this group) will have permissions to approve depoyment requests.

If a deployment lockdown strategy is in place, then the "Deploy" button will be replaced with a "Request Deploy" button. Users with approval rights can then go to the stack's Deployment Timeline on the "Build & Deployment right navigation option". There they can approve or deny deployment requests. Note that the person who raised the request can also cancel that request here.

Once a deployment request is approved, the deployment will take place. The audit log and deployment history pages will list who raised the deployment request and who approved it.

<div class="notice notice-warning">
	<h3>IMPORTANT</h3> At this time, this setting applies to Docker stacks only.
 </div>

<h2 id="lockdown">Cloud Lockdown</h2>

For larger organisations with multiple cloud keys and multiple departments requiring access to different cloud keys, we now allow deployment "targets" to be locked down at a user permission level for all users in your team. 

From the Account -> Teams menu, you can edit permissions for any user; specifically now you can "Restrict deployment targets" to a list of deployment targets (including "Registered Servers")