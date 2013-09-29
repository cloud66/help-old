---
layout: post
title:  "Permission errors during deployment"
date:   2013-09-26 15:33:13
categories: Troubleshooting
---

<p class="lead">If your application needs to write back to your webserver (and it isn't to a <i>tmp</i> folder) then you will have permission errors. You can use deploy hooks to get around these.</p>

## The basics
When you deploy a stack through Cloud 66, your webserver will run under a different user to the user that you've used to do the deployments.
This user (*nginx*) does not have elevated permissions, and does not have write access to your filesystem (except explicitly to the */tmp* and the *$RAILS_STACK_PATH/tmp* folders)

This drastically improves security on your application. However, some gems/applications required the ability to write to local files that are not in the above folders by default.
To resolve these issues you can do one of the following:
1. Configure the gem to use one of the paths above.
2. Use a deploy hook to permission the required path after code deployment.

<div class="notice">
		<h3>Important</h3>
		<p>An example error you'd receive in the above case could look like: <b>Errno::EACCES (Permission denied...)</b></p>
</div>

## Resolution 1: Configuring the gem

Many gems allow the use of a configuration file, or allow initializers to configure them, however this is completely dependant on the gem that is causing your issue.
The best bet is to go through the gems available documentation to see if an alternative configuration is indeed possible.

## Resolution 2: Use a deploy hook to change folder permissions

You can use a deploy hook to execute a script after each deployment that will open up the permissions you require.

Add a bash script to your stack that will perform the permission modification. For example create the file */.cloud66/files/open_folder_permissions.sh* as below:
<pre class="terminal-commands">
&#35;!/bin/bash
&#35;load environment variables
source /var/.cloud66_env
&#35;assign desired permissions
sudo chmod 0775 -R $RAILS_STACK_PATH/*your_path_here*
</pre>

Then, add a deploy_hook to execute the above script on each deploy. For example create the file *.cloud66/deploy_hooks.yml* as below:
<pre class="terminal-commands">
production:
  after_rails:
    - source: /.cloud66/files/open_folder_permissions.sh
      destination: /tmp/open_folder_permissions.sh
      target: rails
      execute: true
      run_on: all_servers
      apply_during: all
      sudo: true
</pre>

**Note:** More detailed information on [deploy hooks is here.](/help/deploy_hooks)