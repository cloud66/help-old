---
layout: post
template: two-col
title:  "Deployment hook use cases"
so_title: "deployment hook"
nav_sticky: false
date:   2097-03-28 16:27:22
categories: how-to
lead: Common use-cases and examples for deployment hooks
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#copy">Copy a file</a>
	</li>
	    <li>
            <ul>
                <li><a href="#repo">From your repository</a></li>
            </ul>
            <ul>
                <li><a href="#remote">From a remote location</a></li>
            </ul>
        </li>
	<li>
		<a href="#install">Install packages/fonts</a>
	</li>
	<li>
		<a href="#rake">Rake tasks</a>
	</li>
	<li>
		<a href="#permissions">Setting permissions</a>
	</li>
	<li>
		<a href="#curl">Curl scripts</a>
	</li>
</ul>

[Deployment hooks](/stack-features/deploy-hooks.html) are a simple yet powerful feature that allow you to take action at various points during your stack build and/or deployment. This help page will outline some common use-cases and examples of how you can use them.

In addition to this page, feel free to have a look at or contribute to our <a href="https://github.com/cloud66/deploy_hooks" target="_blank">deploy hooks repository</a>.

<h2 id="copy">Copy a file</h2>

<h3 id="repo">From your repository</h3>

Use this hook to simply copy a file from within your repository to somewhere on your server.

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

development:
    first_thing:
      - source: /.cloud66/files/abc.sh
        destination: /tmp/def.sh
        target: rails
        run_on: all_servers
{% endhighlight %}

This deployment hook will copy the file `/.cloud66/files/abc.sh` to `/tmp/def.sh` on _all_ your Rails servers, as the first thing that will happen on the server.

<h3 id="remote">From a remote location</h3>

Use this hook to copy a file from a remote location to your server.

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

development:
    after_checkout:
      - source: /.cloud66/wget.sh
        destination: /tmp/wget.sh
        target: rails
        execute: true
        sudo: true
        apply_during: build_only
        run_on: all_servers
      - source: /tmp/ft-id.yml
        destination: <%= ENV['STACK_PATH'] %>/config/remote_config.yml
        target: rails
        apply_during: build_only
        run_on: all_servers
{% endhighlight %}

{% highlight yaml %}
### /.CLOUD66/WGET.SH ###

wget https://raw.github.com/cloud66/file.yml
{% endhighlight %}

This deployment hook will copy `/.cloud66/wget.sh` to `/tmp/wget.sh` on all Rails servers during their initial build, and execute it with sudo permissions.
The `wget.sh` script will fetch a file from a remote location, and then second after_checkout hook will copy it into your application folder.

<h2 id="install">Install packages/fonts</h2>

Use this hook example to install anything from packages to fonts on your server.

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

production:
    first_thing:
      - source: /.cloud66/scripts/install.sh
        destination: /tmp/install.sh
        target: rails
        apply_during: build_only
        run_on: all_servers
        execute: true
        sudo: true
{% endhighlight %}

{% highlight yaml %}
### /.CLOUD66/SCRIPTS/INSTALL.SH ###

apt-get install libicu-dev -y
apt-get install acl -y
{% endhighlight %}

This hook will copy `/.cloud66/scripts/install.sh` to `/tmp/install.sh` on all Rails servers during their initial build, and execute the script with sudo permissions. This specific script will install 2 packages on these servers.

<div class="notice">
    <h3>Important</h3>
    <p>When automating the installation of packages, please remember to use the -y flag to answer yes to all prompts.</p>
</div>

<h2 id="rake">Rake tasks</h2>

Use this hook if you have custom rake tasks that you need to run on your server during build. If you need to run it more than once, consider using the [Rake task add-in](/add-ins/rake-task.html).

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

last_thing:
  - source: /.cloud66/scripts/seed.sh
    destination: /tmp/seed.sh
    target: rails
    apply_during: build_only
    execute: true
    sudo: true
{% endhighlight %}

{% highlight yaml %}
### /.CLOUD66/SCRIPTS/SEED.SH ###

cd $STACK_PATH
bundle exec rake dev:setup
{% endhighlight %}

This hook will copy `/.cloud66/scripts/seed.sh` to `/tmp/seed.sh` on your Rails server during build and execute with sudo permissions. The script will in turn run the rake task.

<h2 id="permissions">Setting permissions</h2>
Use this hook if you need to set custom permissions on your server.

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

production:
    first_thing:
      - source: /.cloud66/scripts/permissions.sh
        destination: /tmp/scripts/permissions.sh
        target: postgresql
        apply_during: build_only
        execute: true
        sudo: true
{% endhighlight %}

{% highlight yaml %}
### /.CLOUD66/SCRIPTS/PERMISSIONS.SH ###

sudo chmod 0644 -R /var/.cloud66_env
{% endhighlight %}

This hook will copy `/.cloud66/scripts/permissions.sh` to `/tmp/scripts/permissions.sh` on your Postgresql server and execute with sudo permissions. The script will in turn issue the relevant permission commands.

<h2 id="curl">Curl scripts</h2>
If you have performed custom configuration commands on your server and are running Passenger, it may take a while to load the first time you access it. You can use this Curl hook to warm the server up for quicker loading.

{% highlight yaml %}
### /.CLOUD66/DEPLOY_HOOKS.YML ###

production:
    last_thing
      - source: /.cloud66/scripts/curl.sh
        destination: /tmp/curl.sh
        target: rails
        apply_during: build_only
        execute: true
        sudo: true
{% endhighlight %}

{% highlight yaml %}
### /.CLOUD66/SCRIPTS/CURL.SH ###

COUNTER=0
while [  $COUNTER -lt 5 ]; do
    curl localhost
    let COUNTER=COUNTER+1
done
{% endhighlight %}

This hook will copy `/.cloud66/scripts/curl.sh` to `/tmp/curl.sh` on your Rails server during build and execute with sudo permissions. The script will in turn issue the command five times to warm up your server.
