---
layout: post
template: two-col
title:  "Migrate from Heroku to Cloud 66"
so_title: "heroku"
date:   1915-09-26 15:33:13
categories: how-to
lead: Some pointers to move from Heroku to Cloud 66
---


## Git Repository

Simply provide Cloud 66 with a URL to your git repository and we'll be able to analyze your code.
Use your unique SSH key to provide us [access to your code](/getting-started/your-first-stack.html).

## Procfile

With Cloud 66, you can use [Procfiles](/stack-features/proc-files.html) to manage your background jobs.

## Asset Pipeline Compilation

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation.

Cloud 66 allows you to [specify whether or not to run this](/how-to/asset-pipeline.html) during deployment.

## Database

Take note of these database settings from your [Heroku database dashboard](https://postgres.heroku.com/databases):

- &lt;db&#95;name&gt;
- &lt;db&#95;username&gt;
- &lt;db&#95;password&gt;

Modify your <code>config/database.yml</code> by adding those settings for your environment:
<pre class="terminal">
development:
    adapter: postgresql
    database: &lt;db&#95;name&gt;
    username: &lt;db&#95;username&gt;
    password: &lt;db&#95;password&gt;
    host: localhost
    port: 5432
</pre>

From the Heroku Toolbelt, you can create a publicly accessible backup URL:

<p>
<kbd>heroku pgbackups:url</kbd>
</p>

Please refer to [Heroku documentation](https://devcenter.heroku.com/articles/pgbackups#creating-a-backup) for more information.

Once you have your <code>&lt;backup&#95;url&gt;</code>, you need to download it to your Cloud 66 server.
You can do that by [connecting to your database server](/how-to/connect-db-servers.html) and using the following command:

<p>
<kbd>curl -o myBackup.dump "&lt;backup&#95;url&gt;"</kbd>
</p>

Once complete, you can [restore your database backup](https://devcenter.heroku.com/articles/heroku-postgres-import-export#restore-to-local-database):

<p>
    <kbd>pg&#95;restore --verbose --clean --no-acl --no-owner -U &lt;db&#95;username&gt; -d &lt;db&#95;name&gt; myBackup.dump</kbd>
</p>

Finally, redeploy your application or restart PostgreSQL:

<p>
    <kbd>sudo -u postgres pg&#95;ctl -D /usr/local/pgsql/data -m immediate restart</kbd>
</p>

## Dynos &amp; Scaling up

Dynos are the unit of computing power on Heroku, and adding new dynos often results in better overall performance.

On Cloud 66 you can use [horizontal](/stack-features/horizontal-scaling.html) and/or [vertical scaling](/stack-features/vertical-scaling.html)
to improve performance.