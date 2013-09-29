---
layout: post
title:  "Using Environment Variables"
date:   2013-09-26 15:26:22
categories: stack-features
---

<p class="lead">You can use environment variables in your Ruby/Rails code normally. Cloud 66 is compatible with Linux environment variables</p>

<div class="notice">
	<h3>Important</h3>
	<p>You would need to redeploy your stack for environment variable changes to take effect.</p>
</div>

## Configuration Files
Many developers use environment variables to store database username and passwords and use environment variables in database configuration files instead of hard coding credentials.
This best practice is supported by Cloud 66 and there is no need to change anything to get it to work.

<pre class="terminal">
production:
  adapter: mysql2
  host: db.prod.myapp.com
  database: myapp_prod
  username: &lt;%= ENV['DB_USER'] %&gt;
  password: &lt;%= ENV['DB_PASSWORD'] %&gt;
</pre>

## Environment Variables in the Code
You can also use ENV in your code. All assigned environment variables will be available to all users of all web servers in your stack. This includes you rake tasks as well as web processes (nginx).

## Assigning Environment Variables
You can assign environment variables both before and after deploying your stacks.

To do it before deployment (useful when you use them in your configurations), click on the Add Environemnt Vars link in the analysis results page:

![environment variables](http://cdn.cloud66.com.s3.amazonaws.com/images/help/environment_vars.png)

After deployment, you can always change, remove or add new environment variables to your stack by clicking the Environment Variables link of the stack.

![environment variables](http://cdn.cloud66.com.s3.amazonaws.com/images/help/environment_vars_menu.png)

Now you can add, remove and edit your environment variables:

![enter environment vars](http://cdn.cloud66.com.s3.amazonaws.com/images/help/envrionment_var_form.png)
