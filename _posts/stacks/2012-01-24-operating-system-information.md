---
layout: post
template: two-col
title:  "Operating system information"
date:   2018-09-24 10:51:22
categories: stacks
lead: Operating system requirements and configurations
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#cloud">Deploying to your cloud</a>
	</li>
	<li>
    	<a href="#byos">Deploying to your own servers</a>
        	<ul>
        		<li><a href="#errors">Permission errors</a></li>
        	</ul>
    </li>
	<li>
		<a href="#packages">Default packages installed</a>
	</li>
</ul>

<h2 id="cloud">Deploying to your cloud</h2>

Cloud 66 officially supports <strong>Ubuntu Linux 12.04</strong> and this is what we deploy to your cloud. We will automatically configure the OS on your behalf.

<div class="notice">
	<h3>Important</h3>
    <p>At this point no other Linux distributions are supported, but future releases will enable support for additional distributions.</p>
</div>

<h2 id="byos">Deploying to your own servers</h2>

If you are deploying to your own servers, you will have to configure the operating system on your server. We have certain requirements for our set up to work:

1. **Connection:**<br/>
For security reasons, Cloud 66 only connects to your server using your secure keys. Please see our documentation on [generating an SSH key on your server](/how-to/ssh-keys.html).
2. **Sudoer (passwordless):**<br/>
As Cloud 66 connects to your server and provisions applications from scratch, administrator permissions are sometimes necessary. Therefore the user that you provide for use should also be a member of the sudoers group, and must not require a password to invoke sudo.
3. **BASH**:<br/>
At this point, we only support the the Bourne-again shell (BASH). You may encounter the error "sh: n: source: not found" during deployment if you are not using the BASH shell.

<h4 id="errors">Permission errors</h4>
If you experience permission errors after deploying to your own server, you may want to follow these guidelines.

1. [SSH to your server](/how-to/shell-to-your-servers.html)
2. `chown admin /tmp`
3. `chmod 777 -R /tmp`
4. `chmod o+t -R /tmp`

<h2 id="packages">Default packages installed</h2>

Depending on the stack that you are deploying, Cloud 66 will install slightly different packages on your server. Sometimes the packages are installed via the default OS package management system, but other times the package will be installed directly from a stable source distribution.
However, by default the following packages are usually installed:

<ul class="multi-col">
    <li>acl</li>
    <li>bison</li>
    <li>build-essential</li>
    <li>facter</li>
    <li>gcc</li>
    <li>git</li>
    <li>libcurl4-openssl-dev</li>
    <li>libffi6</li>
    <li>libreadline6</li>
    <li>libreadline6-dev</li>
    <li>libssl-dev</li>
    <li>libxml2-dev</li>
    <li>libxslt-dev</li>
    <li>libyaml-dev</li>
    <li>make</li>
    <li>sysstat</li>
    <li>wget</li>
    <li>zlib1g-dev</li>
</ul>

For a more complete list of packages that are installed on your system you can do the following.
<ol>
<li>List of installed packages: <pre class="terminal">dpkg --get-selections</pre></li>
<li>File installation locations of a given pacakge: <pre class="terminal">dpkg -L wget</pre></li>
</ol>

