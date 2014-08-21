---
layout: post
template: two-col
title:  "Server setup"
date:   2020-01-20 01:01:01
categories: toolbelt
lead: 
search-tags: ['']
tags: ['Toolbelt']
---

## About using Toolbelt to manage servers
## Server setup parameters
You can change stack settings from the command line - the `settings` command will list the possible settings for a specific stack:

{% highlight bash %}
$ cx settings [-s <stack>]
{% endhighlight %}

<h3 id="available">Available settings</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>git.branch</i></td>
            <td>Change the Git branch of the stack repository</td>
        </tr>
        <tr>
            <td><i>git.repository</i></td>
            <td>Change the Git repository URL</td>
        </tr>
        <tr>
            <td><i>reconfigure.nginx</i></td>
            <td>If set to true, it will regenerate Nginx configuration and restart it</td>
        </tr>
        <tr>
            <td><i>allowed.web.source</i></td>
            <td>IP addresses that are allowed to access a stacks web servers</td>
        </tr>
        <tr>
            <td><i>asset.prefix</i></td>
            <td>If you change your default Rails assets folder, you can set it here</td>
        </tr>
        <tr>
            <td><i>stack.name</i></td>
            <td>Change your stack name</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="parameters">Parameters</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>s</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
            <td><i>setting_name</i></td>
            <td>A valid setting from the list above</td>
        </tr>
        <tr>
            <td><i>value</i></td>
            <td>A valid value for the setting</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="usage">Usage</h3>
{% highlight bash %}
$ cx set [-s <stack>] <setting> <value>
{% endhighlight %}

<h3 id="examples">Examples</h3>

{% include toolbelt_footer.html %}

<h4 id="branch">Change Git branch</h4>
{% highlight bash %}
$ cx set -s "My Awesome App" git.branch master -e production
{% endhighlight %}

<h4 id="url">Change Git URL</h4>
{% highlight bash %}
$ cx set -s "My Awesome App" git.repository git://github.com/cloud66-samples/rails-mysql.git -e production
{% endhighlight %}

<h4 id="nginx">Reconfigure Nginx</h4>
{% highlight bash %}
$ cx set -s "My Awesome App" reconfigure.nginx true -e production
{% endhighlight %}

The `reconfigure.nginx` setting is restricted to only affect the next deployment. It can only be set to `true` and will be reset back to `false` after the next deployment.

Setting it to true will force the deployment process to regenerate Nginx settings. This can be useful when you change an Nginx-related setting in your [manifest file](/stack-features/manifest-files.html), like enabling _Perfect Forward Secrecy_.

<h4 id="web">Set allowed web source</h4>
You can specify the addresses that can access your web servers by changing the value of `allowed.web.source`. The default value is empty, and will allow all public access to your web servers.

{% highlight bash %}
$ cx set -s "My Awesome App" allowed.web.source 10.10.1.4/24,23.12.1.4 -e production
{% endhighlight %}

You can either specify IP addresses in the command or use a CSV file with IP addresses as an input.


## Restart your web server
Allows you to restart Nginx on your stack with one simple command.

## Usage
{% highlight bash %}
$ cx restart [-s <stack>]
{% endhighlight %}

## Parameters
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>s</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

{% include toolbelt_footer.html %}

## Modify server settings
You can change server settings from the command line - the `server-settings` command will list the possible settings for a specific stack:

{% highlight bash %}
$ cx server-settings [-s <stack>] <server name>|<server ip>|<server role> [settings]
{% endhighlight %}

<h3 id="available">Available settings</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>server.name</i></td>
            <td>The name of your server</td>
        </tr>
    </tbody>
</table>

<h3 id="parameters">Parameters</h3>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>s</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>server name</i> (optional)</td>
            <td>&mdash;</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>server ip</i> (optional)</td>
            <td>&mdash;</td>
            <td>IP of the server to access</td>
        </tr>
        <tr>
            <td><i>server role</i> (optional)</td>
            <td>&mdash;</td>
            <td>Role of the server to access (eg. web)</td>
        </tr>
       <tr>
            <td><i>settings</i></td>
            <td>&mdash;</td>
            <td>List of multiple settings as separate parameters</td>
        </tr>
    </tbody>
</table>

<h3 id="usage">Usage</h3>
{% highlight bash %}
$ cx server-set [-s <stack>] <server name>|<server ip>|<server role> <setting> <value>
{% endhighlight %}

<h3 id="examples">Examples</h3>

{% include toolbelt_footer.html %}

<h4 id="name">Server name</h4>
{% highlight bash %}
$ cx server-set -s My_Awesome_App lion server.name tiger
{% endhighlight %}


## Tail your server logs
You can [tail your server logs](http://unixhelp.ed.ac.uk/CGI/man-cgi?tail) straight from CX - it will use the _-f_ flag to follow your logs.

## Usage
{% highlight bash %}
$ cx tail [-s <stack>] <server name>|<server ip>|<server role> <log filename>
{% endhighlight %}

<h3>Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>s</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>server name</i> (optional)</td>
            <td>&mdash;</td>
            <td>Name of the server to access</td>
        </tr>
        <tr>
            <td><i>server ip</i> (optional)</td>
            <td>&mdash;</td>
            <td>IP of the server to access</td>
        </tr>
        <tr>
            <td><i>server role</i> (optional)</td>
            <td>&mdash;</td>
            <td>Role of the server to access (eg. web)</td>
        </tr>
       <tr>
            <td><i>log filename</i></td>
            <td>&mdash;</td>
            <td>The logfile to tail (eg. nginx_error.log)</td>
        </tr>
    </tbody>
</table>

<h3>Example</h3>
{% highlight bash %}
$ cx tail -s My_Awesome_App web nginx_error.log
{% endhighlight %}

{% include toolbelt_footer.html %}
