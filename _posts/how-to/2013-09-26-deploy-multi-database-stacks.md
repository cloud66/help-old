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

<div class="notice">
    <div class="notice-header">
        <b>Note</b>
    </div>
    <div class="notice-body">
        <p>When modifying your Gemfile don't forget to run 'bundle install' and commit your changed Gemfile.lock file</p>
    </div>
</div>

<ol>
    <li>
        <p>
            <strong>Temporarily remove</strong> your non-activerecord (auxillary) database Gem specification from your Gemfile.
        </p>
    </li>
    <li>
        <p>
            <strong><a href="/stack-features/redeployment-hook.html">Add a redeployment hook</a></strong> script that will install your required auxillary database(s) if required. If you are looking to make use of a database that is hosted externally then you don't need to do this part. An example deploy hook could look something like:
        </p>
    </li>
</ol>

<pre class="terminal">
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

	<p>The specifics of the script to install your database depend on the database - most database types have detailed installation instructions via their websites</p>
	<p>You can only target an existing stack server, using this method you cannot have your auxillary database on a standalone server</p>

</div>

<ol start="3">
<li><strong>Proceed through the analysis phase</strong>. You will see that Cloud 66 will have detected a single database type. Proceeding to deploy your application would then create the database, and servers as required.</li>

<li> <strong>Once deployed</strong> or if it failed deployment due to requirement of the auxillary database you can add your auxillary database gem(s) back into your Gemfile, commit and redeploy.</li>