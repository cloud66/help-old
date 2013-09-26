---
layout: post
title:  "Environment Variables"
date:   2013-09-24 10:51:22
categories: stack-features
---


<p class="lead">You can use Environment variables in your code and configuration. Cloud 66 ensures they are available during your deployment and run of the application.</p>

<div class="notice">
	<h3>Important</h3>
	<p>You would need to redeploy your stack for environment variable changes to take effect.</p>
</div>

After code analysis you can enter the environment variables your code or configuration requires by clicking on Add Environment Vars link.

![environment variables](http://cdn.cloud66.com.s3.amazonaws.com/images/help/environment_vars.png)

You can now enter the environment variables you need to deploy or run your app. These will be available to all users on all web server boxes including all web server processes (<em>nginx</em>) and your rake tasks.

![enter environment vars](http://cdn.cloud66.com.s3.amazonaws.com/images/help/envrionment_var_form.png)

See how you can [use environment variables](/help/environments) in your <kbd>database.yml</kbd> or code.

## Escaping and Multiline Environment Variables

Environment Variables that are entered or uploaded are not escaped. However they are always wrapped in double quotes `"` so you can use them with multiline variables like SSH keys.

## Uploading your environment variables

You can enter environment variables as a batch using the Upload functionality.

This is available from the Environment Variables option on the Stack dropdown menu. Your file should be in the following format:
<pre class="terminal-commands">
	KEY_1=value_1
	KEY_2=value_2
</pre>
