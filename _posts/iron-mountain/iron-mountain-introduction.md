---
layout: post
template: two-col
title:  "Iron Mountain introduction"
date:   2016-04-27 11:37:00
categories: iron-mountain
lead: Keep your secrets safe
search-tags: ['iron', 'mountain', 'secret', 'vault', 'token', 'environment variable']
tags: ['Iron Mountain']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">What is Iron Mountain?</a>
	</li>
	<li>
		<a href="#install">Iron Mountain client</a>
	</li>
	<li>
		<a href="#commands">Command summary</a>
	</li>
</ul>

<h2 id="intro">What is Iron Mountain?</h2>
Iron Mountain is a service for storing and retrieving private information. It accomplishes this task using the concept of __vaults__, __secrets__, and __tokens__.

A __secret__ is a piece of private information stored as an encrypted value and a key used to identify it.

Secrets are stored inside __vaults__, and can only be accessed when the vault is open. To open a vault, it is required to specify a duration before it closes - vaults never stay open indefinitely.

Vaults belong to a user. In order to restrict access to vaults and secrets, a user can have several __tokens__ with various restrictions - allowed IPs, allowed/denied vaults, and allowed/denied actions. These can be set through the Cloud 66 website.

<h2 id="install">Iron Mountain client</h2>
The [Iron Mountain client](https://app.cloud66.com/iron-mountain) is available for Linux, Mac, and Windows - to get started, unzip and copy it to a directory accessible in your PATH. On Mac OS X, your PATH is likely `/usr/local/bin`, but you can run `echo $PATH` in your terminal to determine your specific path. Placing the executable in this folder allows it to be used globally.

<h2 id="commands">Command summary</h2>
Every command requires you to provide a token that will authenticate you and check that you have the permissions to perform the command. It can be provided with the `IRON_MOUNTAIN_TOKEN` environment variable, or the global `--token` flag:

```
$ iron-mountain [--token=token_key] command
```

<h3>Vault related commands</h3>

<pre class="prettyprint">
# List all the vaults that you have permission to act on
# Shows information such as vault name, UID, and whether it's open or not
$ <b>iron-mountain vaults list</b>

# Open the vault for the given duration
# A valid open_duration is a positive integer followed by one of "s", "m", or "h": 10s for example
$ <b>iron-mountain vault open</b> <i>vault_uid open_duration</i>

# Close the vault
$ <b>iron-mountain vault close</b> <i>vault_uid</i>

# Create a new vault
$ <b>iron-mountain vault add</b> <i>vault_name</i>

# Delete the vault - this will delete its secrets too!
$ <b>iron-mountain vault delete</b> <i>vault_uid</i>
</pre>

<h3>Secret related commands</h3>
In order to perform any of the secret related commands, __the given vault must be open__.

<pre class="prettyprint">
# List all the secrets in the vault without their values
$ <b>iron-mountain secrets list</b> <i>vault_uid</i>

# Get the value of the secret from the vault
$ <b>iron-mountain secret get</b> <i>vault_uid key</i>

# Create a new secret in the vault
$ <b>iron-mountain secret add</b> <i>vault_uid key value</i>

# Delete the secret from the vault
$ <b>iron-mountain secret delete</b> <i>vault_uid key</i>

# Generate a URL that will return the secret key and value
# Optionally provide the number of seconds before the URL expires - 5 seconds by default
$ <b>iron-mountain secret url</b> <i>vault_uid key [seconds_before_expiry(default: 5)]</i>
</pre>
<!-- command code style []... -->

<!--
<pre class="prettyprint">
$ cx stacks list
</pre>

<div class="notice">
	<h3>Advanced</h3>
    <p>The authorization information is stored in the <b>~/.cloud66/cx.json</b> file. Removing this file will remove the authorization code from your client.</p>
</div>

```
$ cx stacks list
```

-->

