---
layout: post
template: one-col
title:  "Logentries"
date:   2055-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: stack-add-ins
lead: Simple web-based log analysis service for your servers
search-tags: ['log entries', 'logentries']
tags: ['Logs', 'Add ins']
---

## About using Logentries
Logentries is a great service for centralizing your log files, and this add-in makes it easy to add across your servers.

## Add Logentries to your stack
To add Logentries, access the add-ins menu of your stack and click _Logentries_.

We'll ask you for your Logentries account key - if you don't have one, you can signup to a Logentries account.

You can find your Logentries account ID in your account page. For more information, please see the [Logentries guide to integrating with Cloud 66](https://logentries.com/doc/cloud66/).

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>For docker stacks this will be added to the host not as a container.</p>
</div>

## Troubleshoot

### Logs are empty in Logentries

If your log files show up in your Logentries account but they are empty, try to <b>SCAN FOR NEW LOGS</b>. In order to do that you will need to:

- Go to your log analyzer config page (click on logentries in your stack page under External add-ins).
- Push the SCAN FOR NEW LOGS button.