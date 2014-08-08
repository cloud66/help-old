---
layout: post
template: two-col
title:  "Notifications"
so_title: "notifications"
nav_sticky: false
date:   2091-03-29 16:27:22
categories: stack-features
lead: Email, iOS, Hipchat, Slack and Webhook notifications
search-tags: []
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
		<a href="#account">Account notifications</a>
	</li>
	<li>
		<a href="#stack">Stack notifications</a>
	</li>
	<li>
    	<a href="#types">Notification types</a>
    	</li>
	        <li>
                <ul>
                <li><a href="#emails">Emails</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#hipchat">Hipchat</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#ios">iOS</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#slack">Slack</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#webhooks">Webhooks</a></li>
                </ul>
            </li>
</ul>

<h2 id="intro">Introduction</h2>
You can control when and how you would like to receive notifications from Cloud 66. There is a range of events that trigger notifications, which can be sent as emails, Hipchat, via iOS push, Slack or Webhooks.

<div class="notice">
	<h3>Note</h3>
	<p>Notifications are set on a per-user basis, and each user can modify their own notifications under their account settings or stack menu.</p>
</div>

There are two types of notifications: _account_ and _stack_. _Account_ notifications are global across your account and _stack_ notifications are related to events for a specific stack.

<h2 id="account">Account notifications</h2>
You can access _account_ notifications under your account settings:

![cloud66_notifications](http://cdn.cloud66.com/images/help/notifications_menu.png)

You will have the following notifications available to you:

![cloud66_alert_types](http://cdn.cloud66.com/images/help/notifications_account.png)

<h2 id="stack">Stack notifications</h2>

Stack level notifications can be accessed from stack control menu

![cloud66_notifications](http://cdn.cloud66.com/images/help/notifications_stack.png)

You will have the following notifications available to you:

![Stack notifications](http://cdn.cloud66.com/images/help/notifications_stack_type.png)

<h2 id="types">Notification types</h2>

<h3 id="emails">Emails</h3>
Email notifications are enabled by default for all users. You will get an email for most of the cases above, with the exception of <i>deployment start</i> notifications. You can easily turn email notifications on or off for each type by clicking on the email icon.

<h3 id="hipchat">Hipchat</h3>
[Hipchat](http://hipchat.com/) is a hosted realtime chat service by [Atlassian](https://www.atlassian.com/). You can get Cloud 66 notifications on HipChat by linking it to your HipChat account.

First, generate a new Notification API token from your HipChat admin panel:

![cloud66_hipchat_api](http://cdn.cloud66.com/images/help/cloud66_hipchat_link.png)

Now you can use the generated API token and the name of the room you would like to receive the notifications from Cloud 66 in. Click on the HipChat icon and you enter your API token and room name. After that, clicking on the HipChat icon will turn the notification on or off. You can change the API token or room name under the <i>Channels</i> tab.

![cloud66_hipchat](http://cdn.cloud66.com/images/help/cloud66_hipchat.png)

You will then start to receive notifications in your HipChat room.

![cloud66_hipchat_sample](http://cdn.cloud66.com/images/help/cloud66_hipchat_screenshot.png)

<h3 id="ios">iOS</h3>
If you have the [Cloud 66 App](https://itunes.apple.com/us/app/cloud-66/id642299804?mt=8&uo=4) on your iOS device then you will be able to get iOS push notifications on your phone.

<h3 id="slack">Slack</h3>
[Slack](https://slack.com/) is a real-time messaging, archiving and search application developed by Tiny Speck.

Start by adding a service integration through the Slack dashboard, and follow the setup instructions provided. You simply need to use the URL provided by Slack in the Cloud 66 UI:

![Slack URL](http://cdn.cloud66.com/images/help/slack_notification.png)

Specify your integration settings such as the channel you would like to broadcast to in the Slack UI:

![Slack integration](http://cdn.cloud66.com/images/help/slack_integration.png)

You will then start to see notifications from Cloud 66 events in your Slack:

![Slack notification](http://cdn.cloud66.com/images/help/slack_notifications.png)

<h3 id="webhooks">Webhooks</h3>
[Webhooks](http://www.webhooks.org/) is a standard that uses HTTP POST to connect different systems, and is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook. To setup your webhook, click on the <i>webhook</i> icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

![cloud66_webhooks](http://cdn.cloud66.com/images/help/cloud66_webhooks.png)

Each event type has its own payload that is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: `timestamp` and `event_type`

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

#### Event Types

<table class='table table-bordered table-striped'>
	<thead></tr>
		<tr>
			<th>Event Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>stack.provision.ok</td><td>Stack provisioned succesfully</td></tr>
		<tr><td>stack.provision.fail</td><td>Stack provision failed</td></tr>
		<tr><td>stack.redeploy.ok</td><td>Stack redeployed succesfully</td></tr>
		<tr><td>stack.redeploy.fail</td><td>Stack redeploy failed</td></tr>
		<tr><td>server.stopped</td><td>Server heartbeat stopped</td></tr>
		<tr><td>server.backon</td><td>Sever heartbeat restored</td></tr>
		<tr><td>job.fail</td><td>Job run failed</td></tr>
		<tr><td>job.backon</td><td>Job run succeeded (after fail)</td></tr>
		<tr><td>process.down</td><td>Process is down</td></tr>
		<tr><td>app.auth</td><td>App authorized to access the account</td></tr>
		<tr><td>app.deauth</td><td>App deauthorized from accessing the account</td></tr>
		<tr><td>stack.redeploy.hook.fail</td><td>Stack redeployment hook failed</td></tr>
		<tr><td>stack.deploy.started</td><td>Stack deployment started</td></tr>
	</tbody>
</table>