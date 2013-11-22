---
layout: post
template: two-col
title:  "Notifications"
date:   2013-11-18 13:35:00
categories: stack-features
lead: Email, iOS, Hipchat and Webhook notifications.
---


## Account Notifications
You can control the when and how you would like to receive notifications from Cloud 66. These is a range of events that trigger notifications. These notficiations can be sent as emails or via iOS push, Hipchat or Webhooks.

![cloud66_notifications](http://cdn.cloud66.com/images/help/notifications_menu_item.png)

<div class="notice">
	<h3>Note</h3>
	<p>Notifications are per user. Each user under an account can modify their own notifications.</p>
</div>

![cloud66_alert_types](http://cdn.cloud66.com/images/help/notifications_list.png)

## Emails
Email notifications are enabled by default on all accounts. You will get an email in almost all cases (Deployment Start email notification is disabled by default). You can trun email notifications on or off for each type of event by clicking on the email icon.

## iOS
If you have the [Cloud 66 App](https://itunes.apple.com/us/app/cloud-66/id642299804?mt=8&uo=4) on your iOS device then you will be able to get iOS push notifications on your phone.

## Hipchat
[Hipchat](http://hipchat.com/) is a hosted realtime chat service by [Atlassian](https://www.atlassian.com/). You can get Cloud 66 notifications on Hipchat by linking to your Hipchat account.

First, generate a new Notification API token from your Hipchat admin panel:

![cloud66_hipchat_api](http://cdn.cloud66.com/images/help/cloud66_hipchat_link.png)

Now you can use the generate API token and the name of the room you would like to receive the notifications in Cloud 66. Click on the Hipchat icon and you enter your API token and room name. After that, clicking on the Hipchat icon will turn the notification on or off. You can change the API token or room name under the **Channels** tab.

![cloud66_hipchat](http://cdn.cloud66.com/images/help/cloud66_hipchat.png)

Now you will receive the notifications.

![cloud66_hipchat_sample](http://cdn.cloud66.com/images/help/cloud66_hipchat_screenshot.png)

## Webhooks
[Webhooks](http://www.webhooks.org/) is a standard to use HTTP POST as a way to connect different systems. It is very simple to use but very powerful.

All notification types from Cloud 66 can trigger a webhook as well. To setup your webhook, click on the Webhook (globe) icon. There you can enter the URL for your webhook endpoint and test it to see how it behaves.

![cloud66_webhooks](http://cdn.cloud66.com/images/help/cloud66_webhooks.png)

Each event type has it's own payload which is sent to the endpoint via HTTP POST. The payload is the same as the one used with the API with two additional fields: `timestamp` and `event_type`

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
			<td>Type of the event. See below</td>
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
		<tr><td>stack.provision.ok</td><td>Stack provisioned ok</td></tr>
		<tr><td>stack.provision.fail</td><td>Stack provision failed</td></tr>
		<tr><td>stack.redeploy.ok</td><td>Stack redeployed ok</td></tr>
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