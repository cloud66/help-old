---
layout: post
template: two-col
title:  "Create symbolic links in Ubuntu"
so_title: "sym links"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1960-08-26 15:33:13
categories: how-to
lead: Follow this guide to create symbolic links
search-tags: ['']
tags: ['Customization']
tutorial: true
---

Depending on your application, you may need to have persisting local storage through multiple deploys by creating a symbolic link to a shared folder.

Cloud 66 uses Capistrano to deploy your application, which will create a new folder for every deployment and create a symbolic link to that folder
so that it can be served. This means that folders containing uploaded files for example also need a symbolic link.

There are generally two ways you can accomplish this.

### Public folder

If it's acceptable to serve your files from your public directory, you can re-use
the public/system folder which is already auto-symlinked to shared/system on each deploy. The down-side of doing this is that it bypasses your application
and your files get served directly by Nginx without security.

### Symbolic link

Alternatively, you can use [deploy hooks](/stack-features/deploy-hooks.html) to create the symbolic link. Also, you can use _$STACK_BASE_ for your stack base path (eg. _$STACK_BASE/shared/uploads_) for your deploy hook script.

To create the symbolic link, your deploy hook script could contain this:

{% highlight yaml %}
### /.CLOUD66/MY_SCRIPT.SH ###

mkdir -p $STACK_BASE/shared/uploads
chown nginx:app_writers $STACK_BASE/shared/uploads
rm -rf $STACK_PATH/uploads
ln -nsf $STACK_BASE/shared/uploads $STACK_PATH/uploads
{% endhighlight %}

The reason we are doing _rm -rf_ on the _$STACK_PATH/uploads_ directory is due to the way that the _ln_ command works. When you issue the _ln_ command,
it places a link to the source directory inside the target directory, so we have to remove the directory before creating the symbolic link.

The deploy hook would look like this:

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

production:
    after_symlink:
      - source: /.cloud66/my_script.sh
        destination: /tmp/my_script.sh
        target: rails
        execute: true
        sudo: true
        apply_during: all
        run_on: all_servers
{% endhighlight %}


