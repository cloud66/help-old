---
layout: post
template: two-col
title:  "Redeployment hooks"
so_title: "redeployment"
nav_sticky: false
date:   2090-01-25 16:27:22
categories: stack-features
lead: Use redeployment hooks to setup continuous deployment
---

<h2>GitHub Redeployment Hook</h2>

<ol class="instruction-list">
	<li>
		<p>From the stack drop-down menu - click <i>Information</i>:</p>
		<p>
			<img src="http://cdn.cloud66.com/images/help/stack_information.png" alt="">
		</p>
	</li>
	<li>
		<p>Copy the URL.</p>
		<p>
			<img src="http://cdn.cloud66.com/images/help/stack_info_overlay.png" alt="">
		</p>
	</li>
	<li>
		<p>Access the <i>Settings</i> page of your GitHub repository.</p>
		<p>
			<img src="http://cdn.cloud66.com/images/help/github_settings_nav.png" alt="">
		</p>
	</li>
	<li>
		<p>In the left navigation, click <i>Webhooks & Services</i>, and then click <i>Add webhook</i>.</p>
		<p>
			<img src="http://cdn.cloud66.com/images/help/github_webhook.png" alt="">
		</p>
	</li>
	<li>
		<p>Paste the redeployment hook into the <b>Payload URLs</b> field.</p>
	</li>
</ol>

<div class="notice">
    <h3>Important</h3>
	<p>Only pushing code to the same branch as the stacks git branch will redeploy your stack. If you push code to another branch, nothing happens. This allows you to push code on your development branch without an automatic redeploy on your production stack.</p>
</div>

## Using Redeployment Hook Manually
To use the redeployment hook, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

<pre class="terminal">
curl -X POST -d "" [your redeployment hook URL]
</pre>