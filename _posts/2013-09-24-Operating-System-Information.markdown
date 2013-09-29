---
layout: post
title:  "Operating System Information"
date:   2013-09-24 10:51:22
categories: stacks
---

<p class="lead">Information about operating system requirements/configuration</p>

## Supported OS

Cloud 66 officially supports <strong>Ubuntu Linux 12.04</strong> and this is the OS/version that is fired up in your cloud.
Other versions of Ubuntu Linux should work, however are not all completely tested.

<div class="notice">

		<h3>Important</h3>


		<p>At this point no other Linux distros are supported. Future releases will enable support for additional Linux distros.</p>

</div>

## OS Requirements/Configuration

If your servers are created by Cloud 66 via your cloud provider, then Cloud 66 will automatically configure the OS on your behalf.

However, if you are using your own standalone servers then the following is relevant.
The following are required by Cloud 66:

1. **Connection:** For additional security, Cloud 66 only connects to your server using your secure keys. Therefore you need to ensure that you provide a relevant SSH key, and that that SSH key allows access to your server. (see [how to generate SSH keys, and connect to your server](/help/ssh_keys) if you need a hand with this)
2. **Sudoer (passwordless):** Because Cloud 66 will connect to your server and provision applications from scratch, administrator permissions will sometimes be required. Therefore the user that you provide for use should also be a member of the sudoers group (and must not require a password to invoke sudo)
3. **BASH** At this point, only the Bourne-again shell (BASH) is supported. You may encounter the error "sh: n: source: not found" during deployment if you are not using the BASH shell.

## Default Packages Installed

Depending on the stack that you are deploying, Cloud 66 will install slightly different packages on your server. Sometimes the packages are installed via the default OS package management system, but other times the package will be installed directly from a stable source distribution.
However, by default the following packages are usually installed:

- acl
- bison
- build-essential
- facter
- gcc
- git
- libcurl4-openssl-dev
- libffi6
- libreadline6
- libreadline6-dev
- libssl-dev
- libxml2-dev
- libxslt-dev
- libyaml-dev
- make
- sysstat
- wget
- zlib1g-dev

For a more complete list of packages that are installed on your system you can do the following.
<ol>
<li>List of installed packages: <pre class="terminal">dpkg --get-selections</pre></li>
<li>File installation locations of a given pacakge: <pre class="terminal">dpkg -L wget</pre></li>
</ol>



