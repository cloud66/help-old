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
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/stack-info.png" alt="">
		</p>
	</li>
	<li>
		<p>Copy the URL.</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/stack-info-overlay.png" alt="">
		</p>
	</li>
	<li>
		<p>Access the <i>Settings</i> page of your GitHub repository.</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/github-admin-nav.png" alt="">
		</p>
	</li>
	<li>
		<p>In the left navigation click <i>Service Hooks</i>.</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/github-service-hooks-nav.png" alt="">
		</p>
	</li>
	<li>
		<p>Click <i>WebHook URLs</i></p>
				<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/github-webhook.png" alt="">
		</p>
	</li>
	<li>
		<p>Paste the Redeployment hook into the <b>WebHook URLs</b> field.</p>
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