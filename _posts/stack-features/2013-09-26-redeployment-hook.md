---
layout: post
title:  "Redeployment Hook"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">Use redeployment hooks to setup continuous deployment</p>

<h2>GitHub Redeployment Hook</h2>

<ol class="instruction-list">
	<li>
		<p>From the stack dropdown menu - click <b>Information</b>:</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/stack-info.png" alt="">
		</p>
	</li>
	<li>
		<p>Copy the URL</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/stack-info-overlay.png" alt="">
		</p>
	</li>
	<li>
		<p>Access the <b>settings</b> page of your GitHub repository.</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/github-admin-nav.png" alt="">
		</p>
	</li>
	<li>
		<p>In the left navigation click <b>Service Hooks</b>.</p>
		<p>
			<img src="http://cdn.cloud66.com.s3.amazonaws.com/images/help/github-service-hooks-nav.png" alt="">
		</p>
	</li>
	<li>
		<p>Click <b>WebHook URLs</b></p>
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
To use the redeployment hook, you would need to POST an HTTP request to your redeployment hook URL. You can do this in curl like this:
<pre class="terminal">
  curl -X POST -d "" [your redeployment hook URL]
</pre>