---
layout: post
title:  "Deploying stacks with multiple database types"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">How to deploy with Cloud 66 when your application relies on multiple database types.</p>

## The Basics

Cloud 66 does not automatically deploy applications that rely on multiple database types.
The detection of database type by Cloud 66 is based on a combination of Gems and database.yml/mongoid.yml analysis.

An example of a multi-db type of application is an application that has MySQL as it's activerecord store, but additionally uses MongoDB for specific targeted functionality.

## A Workaround

A solution to deploy a multi-db stack with Cloud 66 would be to pass the initial analysis phase, then create the non-activerecord database yourself (if necessary) using deploy hooks.

**Firstly:** temporarily remove your non-activerecord (auxillary) database Gem specification from your Gemfile.

<div class="notice">
    <div class="notice-header">
        <b>Note</b>
    </div>
    <div class="notice-body">
		<p>When modifying your Gemfile don't forget to run 'bundle install' and commit your changed Gemfile.lock file</p>
    </div>
</div>

**Secondly:** add a [deploy hook](/help/deploy_hooks) script that will install your required auxillary database(s) if required. If you are looking to make use of a database that is hosted externally then you don't need to do this part.
An example deploy hook could look something like:
<pre class="terminal-commands">
production:
    first_thing:
      - source: /.cloud66/files/my_db_install_script.sh
        destination: ~/my_db_install_script.sh
        target: rails
        execute: true
        sudo: true
        apply_during: build_only
        halt_on_error: true
</pre>



<div class="notice">
        <h3>Important</h3>
    	<ol>
			<li>The specifics of the script to install your database depend on the database - most database types have detailed installation instructions via their websites</li>
			<li>You can only target an existing stack server, using this method you cannot have your auxillary database on a standalone server</li>
		</ol>
</div>

**Thirdly:** proceed through the analysis phase on Cloud 66. You will see that Cloud 66 will have detected a single database type. Proceeding to deploy your application would then create the database, and servers as required.

**Lastly:** once your application has been deployed (or if it failed deployment due to requirement of the auxillary database) you can add your auxillary database gem(s) back into your Gemfile, commit and redeploy.