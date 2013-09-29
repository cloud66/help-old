---
layout: post
title:  "Migrate from Heroku to Cloud 66"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">It's easy to migrate from Heroku to Cloud 66 - here are some pointers to get you started</p>

## Git Repository

Simply provide Cloud 66 with a URL to your git repository and we'll be able to analyze your code.
Use your unique SSH key to provide us [access to your code](/help/first_stack#2_accessing_your_code).

## Procfile

With Cloud 66, you can use [Procfiles](/help/proc_files) to manage your background jobs.

## Asset Pipeline Compilation

If you haven't compiled assets locally, Heroku will attempt to run the assets:precompile task during slug compilation.

Cloud 66 allows you to specify whether or not to run this during deployment.
Please see our documentation on [asset pipeline compilation](/help/asset_pipeline_compilation) to learn more about how to do this.

## Database

Take note of these database settings from your [Heroku database dashboard](https://postgres.heroku.com/databases):

- &lt;db_name&gt;
- &lt;db_username&gt;
- &lt;db_password&gt;

Modify your <code>config/database.yml</code> by adding those settings for your environment:
<pre class="terminal">
    development:
        adapter: postgresql
        database: &lt;db_name&gt;
        username: &lt;db_username&gt;
        password: &lt;db_password&gt;
        host: localhost
        port: 5432
</pre>

From the Heroku Toolbelt, you can create a publicly accessible backup URL:

<p>
<kbd>heroku pgbackups:url</kbd>
</p>

Please refer to [Heroku documentation](https://devcenter.heroku.com/articles/pgbackups#creating-a-backup) for more information.

Once you have your <code>&lt;backup_url&gt;</code>, you need to download it to your Cloud 66 server.
You can do that by [connecting to your database server](/help/connect_db_servers) and using the following command:

<p>
<kbd>curl -o myBackup.dump "&lt;backup_url&gt;"</kbd>
</p>

Once complete, you can [restore your database backup](https://devcenter.heroku.com/articles/heroku-postgres-import-export#restore-to-local-database):

<p>
<kbd>pg_restore --verbose --clean --no-acl --no-owner -U &lt;db_username&gt; -d &lt;db_name&gt; myBackup.dump</kbd>
</p>

Finally, redeploy your application or restart PostgreSQL:

<p>
<kbd>sudo -u postgres pg_ctl -D /usr/local/pgsql/data -m immediate restart</kbd>
</p>&deg;

## Dynos & Scaling up

Dynos are the unit of computing power on Heroku, and adding new dynos often results in better overall performance.

On Cloud 66 you can use [horizontal](/help/horizontal_scaling) and/or [vertical scaling](/help/vertical_scaling)
to improve performance.