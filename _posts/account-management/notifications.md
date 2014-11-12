---
layout: post
template: one-col
title:  "Account notifications"
nav_sticky: true
nav: true
date:   2030-09-24 10:51:22
categories: account-management
lead: Manage your account notification settings
search-tags: ['']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">About receiving account notifications</a></li>
    <li><a href="#view">Viewing your account notifications</a></li> 
    <li><a href="#setup">Setting up your notification types</a></li>
        <ul style="margin-bottom:0em">
	        <li><a href="#emails">Emails</a></li>
	        <li><a href="#hipchat">Hipchat</a></li>
	        <li><a href="#ios">iOS</a></li>
	        <li><a href="#slack">Slack</a></li>
	        <li><a href="#webhooks">Webhooks</a></li>
        </ul>
    </li>    
</ul>

<h2 id="about">About receiving account notifications</h2>
You can control when and how you would like to receive notifications from Cloud 66. There is a range of events that trigger notifications, which can be sent as emails, Hipchat, via iOS push, Slack or Webhooks.

<h2 id="view">Viewing your account notifications</h2>
_Account notifications_ can be accessed from your _Account_ page, under the _Settings_ menu and feature notifications for events such as failed payments and third party applications being granted access to your account.

<h2 id="setup">Setting up your notification types</h2>
<h3 id="emails">Emails</h3>
Email notifications are enabled by default for all users. By default, you will get an email for a number of events, with the exception of <i>account suspended</i> notifications. You can easily turn email notifications _on_ or _off_ for each type by clicking on the email icon.

<h3 id="hipchat">Hipchat</h3>
[Hipchat](http://hipchat.com/) is a hosted realtime chat service by Atlassian, and you can link your account to Cloud 66 to receive notifications on Hipchat.

From the Hipchat _Account settings_ menu, click _API access_, and then the link for _API version 1_. Once on the API v1 page, create an API token. By selecting the Hipchat icon on the _account notifications_ page, you can add this token and select which room you would like your notifications to appear in. 

<h3 id="ios">iOS</h3>
Download the [Cloud 66 iOS application](https://itunes.apple.com/us/app/cloud-66/id642299804?mt=8&uo=4) to get iOS push notifications on your phone.

<h3 id="slack">Slack</h3>
[Slack](https://slack.com/) is a real-time messaging, archiving and search application developed by Tiny Speck.

Visit the Slack [Integrations page](https://slack.com/integrations) and select the Cloud 66 integration. Choose the channel you would like to receive notifications in (or create a new one), and click _Add Cloud 66 Integration_. You will then receive a URL, which you can provide in Cloud 66 integration modal.

<h3 id="webhooks">Webhooks</h3>
The [Webhooks](http://www.webhooks.org/) standard uses HTTP POST to connect different systems, and is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook. To setup your webhook, click on the <i>Webhook</i> icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

Each event type has its own payload that is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: <i>timestamp</i> and <i>event_type</i>:

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>timestamp</td>
			<td>Epoch timestamp of when the event was sent</td>
		</tr>
		<tr>
			<td>event_type</td>
			<td>Type of the event, see below</td>
		</tr>
	</tbody>
</table>

The following event types are available:

<table class='table table-bordered table-striped'>
	<thead></tr>
		<tr>
			<th>Event Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>account.provision.ok</td><td>account provisioned succesfully</td></tr>
		<tr><td>account.provision.fail</td><td>account provision failed</td></tr>
		<tr><td>account.redeploy.ok</td><td>account redeployed succesfully</td></tr>
		<tr><td>account.redeploy.fail</td><td>account redeploy failed</td></tr>
		<tr><td>server.stopped</td><td>Server heartbeat stopped</td></tr>
		<tr><td>server.backon</td><td>Sever heartbeat restored</td></tr>
		<tr><td>job.fail</td><td>Job run failed</td></tr>
		<tr><td>job.backon</td><td>Job run succeeded (after fail)</td></tr>
		<tr><td>process.down</td><td>Process is down</td></tr>
		<tr><td>app.auth</td><td>App authorized to access the account</td></tr>
		<tr><td>app.deauth</td><td>App deauthorized from accessing the account</td></tr>
		<tr><td>account.redeploy.hook.fail</td><td>account redeployment hook failed</td></tr>
		<tr><td>account.deploy.started</td><td>account deployment started</td></tr>
	</tbody>
</table>