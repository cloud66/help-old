---
layout: post
template: two-col
title:  "Deploying stacks with multiple database types"
date:   2013-09-26 15:33:13
categories: how-to
lead: How to deploy with Cloud 66 when your application relies on multiple database types.
---


## The Basics

Cloud 66 does not automatically deploy applications that rely on multiple database types.
The detection of database type by Cloud 66 is based on a combination of Gems and database.yml/mongoid.yml analysis.

An example of a multi-db type of application is an application that has MySQL as it's activerecord store, but additionally uses MongoDB for specific targeted functionality.

## A Workaround

A solution to deploy a multi-db stack with Cloud 66 would be to pass the initial analysis phase, then create the non-activerecord database yourself (if necessary) using deploy hooks.

<div class="notice">
        <h3>Note</h3>
        <p>When modifying your Gemfile don't forget to run 'bundle install' and commit your changed Gemfile.lock file</p>
</div>

<ol>
    <li>
        <p>
            <strong>Temporarily remove</strong> your non-activerecord (auxiliary) database Gem specification from your Gemfile.
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
    first&#95;thing:
      - source: /.cloud66/files/my&#95;db&#95;install&#95;script.sh
        destination: ~/my&#95;db&#95;install&#95;script.sh
        target: rails
        execute: true
        sudo: true
        apply&#95;during: build&#95;only
        halt&#95;on&#95;error: true
</pre>



<div class="notice">
    <h3>Important</h3>

	<p>The specifics of the script to install your database depend on the database - most database types have detailed installation instructions via their websites</p>
	<p>You can only target an existing stack server, using this method you cannot have your auxiliary database on a standalone server</p>

</div>

<ol start="3">
	<li><strong>Proceed through the analysis phase</strong>. You will see that Cloud 66 will have detected a single database type. Proceeding to deploy your application would then create the database, and servers as required.</li>

	<li> <strong>Once deployed</strong> or if it failed deployment due to requirement of the auxiliary database you can add your auxiliary database gem(s) back into your Gemfile, commit and redeploy.</li>
</ol>