---
layout: post
template: two-col
title:  "Permission errors during deployment"
so_title: "permissions"
date:   2013-09-26 15:33:13
categories: 
lead: Troubleshooting permission errors during deployment
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

If your application needs to write back to your web server then you may have permission errors.
Your webserver runs under a different user to the user that does your deployment.
This user (*nginx*) does not have elevated permissions, and so does not have write access to your filesystem (except explicitly to the */tmp* and the *$STACK&#95;PATH/tmp* folders).

This drastically improves security on your application. However, some gems/applications require the ability to write to local files that are not in the above folders by default.

<div class="notice">
		<h3>Important</h3>
		<p>An example error you'd receive in the above case could look like <b>Errno::EACCES (Permission denied...)</b></p>
</div>

To resolve these issues you can do one of the following:

<ol class="article-list">
<li>Configure the gem to use one of the paths above.</li>
<li>Use a deploy hook to permission the required path after deployment.</li>
</ol>

<h3>Resolution 1: Configuring the gem</h3>

Many gems allow the use of a configuration file, or have initializers to configure them, so these can be used to set the directory needed for deployment. This will vary depending on the gem that is causing your issue - we recommend that you have a look at the documentation provided by your gem to see if an alternative configuration is indeed possible.

<h3>Resolution 2: Deploy hook</h3>

You can use a [deploy hook](http://help.cloud66.com/deployment/deploy-hooks) to execute a script after each deployment that will setup the permissions required:

<pre class="prettyprint">
production:
    after_rails:
      - command: sudo mkdir $STACK_PATH/tmp/folder && sudo chmod 0775 -R $STACK_PATH/tmp/folder
        target: rails
</pre>