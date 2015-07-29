---
layout: post
template: one-col
title:  "Redeployment hooks"
so_title: "redeployment"
nav_sticky: false
date:   2090-01-25 16:27:22
categories: deployment
lead: Use redeployment hooks to setup continuous deployment
search-tags: []
tags: ['commit hook','git push','redeployment hook','git hook','redeployment']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About redeployment hooks</a>
<ul>
<li><a href="#docker">For Docker Stacks</a></li>
<li><a href="#classic">For Classic Stacks</a>
	<ul>
		<li><a href="#github_events">Github Integration</a></li>
	</ul>
</li>
</ul>
</li>
<li><a href="#configuring">Adding Redeployment Hooks</a></li>
	<ul>
	<li>
		<a href="#github">GitHub Setup</a>
	</li>
	<li>
		<a href="#bitbucket">Bitbucket Setup</a>
	</li>
	<li>
		<a href="#generic">Generic Setup</a>
	</li>
</ul>
</li>
	<li>
		<a href="#manual">Invoking your redeployment hook manually</a>
	</li>
</ul>

<h2 id="about">About redeployment hooks</h2>
Redeployment hooks allow you to achieve continuous deployment by deploying your stack when you push a change to your Git repository or have a CI push success. Redeployment hooks differ slightly for Classic and Docker Stacks see sections below.

<h3 id="docker">For Docker Stacks</h3>
Docker Stacks can have multiple services which can rely on a combination of either Image or Git sources. Furthermore, the Git sources can be the same or different branches, or even completely different repositories. To handle this, we have introduced and addition <i>services modifier</i> that can be appended to the redeployment hook tp specify which services to redeploy (the <i>services modifier</i> is a querystring parameter).

When a redeployment hook is invoked:
<ol>
<li>
If the commit hook payload includes Git information (Git source, branch and/or reference) then we will attempty to find a matching service on your stack that corresponds to the above information. If there is a match then we will deploy <i>only</i> the services that have a Git type (<i>not</i> the Image based services). Note that the matching service will also build based on the Git ref that is present in the payload.
</li>
<li>
If the commit hook payload does not include Git information, then we will automatically redeploy <i>all</i> services defined on your stack.
</i>
<li>
If you use the <b>services</b> modifier to specify which specific services you want to deploy when the commit hook is invoked, then the same logic applies as in 1) and 2) above, the only difference being that we will always deploy the services you have specified if deployment will occur.
</i>
</ol>

An example redeployment hook <b>without a services modifier</b> is:

<pre class="terminal">
https://hooks.cloud66.com/stacks/redeploy/b176cdb705fca90f38fd93d2680be026/51c16aa60f52a59dc936526cc5af857e
</pre>

An example redeployment <b>hook with a single services modifier</b> is:

<pre class="terminal">
https://hooks.cloud66.com/stacks/redeploy/b176cdb705fca90f38fd93d2680be026/51c16aa60f52a59dc936526cc5af857e?services=web
</pre>

An example redeployment <b>hook with a many-service modifier</b> is:

<pre class="terminal">
https://hooks.cloud66.com/stacks/redeploy/b176cdb705fca90f38fd93d2680be026/51c16aa60f52a59dc936526cc5af857e?services=web,app
</pre>

<h3 id="classic">For Classic Stacks</h3>
All Classic Stacks are based on a Git repository and branch. Pushing code to the same branch as your stack Git branch will invoke your stack redeployment. If you push code to another branch, nothing will happen - this allows you to push code to your development branch without an automatic redeploy on your production stack for example. If it is available in the payload, the Git Ref of the latest commit will be used for the stack redeployment.

<div class="notice">
  <h3>Note</h3>
  <p>In the case where the payload of the commit hook does not contain any branch information (Github and Bitbucket payload formats are supported) then the stack will redeploy without attempting to match branch</p>
</div>

<h4 id="github_events">Github Integration</h4>
Users who have signed in through Github (and who have enough access to create and edit deployement events for their stacks on GitHub) can activate continuous deployments on GitHub. To do this: access your [Stack settings](/toolbelt/toolbelt-settings-command) via [Toolbelt](/toolbelt/toolbelt-introduction) and set `continuous.deploy` to `true`.

<pre class="prettyprint">
$ cx settings set -s my_stack continuous.deploy true
</pre>

This will create a new webhook for your repository on GitHub or simply modify and existing one to let Cloud66 recieve _deployment_ events as well.

With this feature enabled, whenever you push new commit, Cloud 66 will automatically generate a new _deployment event_ based on recieving the _push event_ from GitHub. We will also send _deployment status events_ on different deployment statuses, such as started, cancelled, succeeded and failed.

For more information please refer to the <a href="https://developer.github.com/v3/repos/deployments/">Github Deployment API</a>.

<h2 id="configuring">Adding Redeployment Hooks</h2>

The process of adding the hook differs by your Git host, so we will guide you through doing this with GitHub, Bitbucket and a generic solution.

<h3 id="github">GitHub Setup</h3>
On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your GitHub repository, click _Settings_ in the right sidebar, and then _Webhooks & Services_ in the left sidebar.

In the _Webhooks_ window, click _Add webhook_ and paste the redeployment hook URL into the _Payload URL_ field. When you confirm by clicking _Add webhook_, GitHub will automatically test your hook, so your stack should deploy automatically.

<h3 id="bitbucket">Bitbucket Setup</h3>
On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your Bitbucket repository, click _Settings_ in the left sidebar, and then _Hooks_ in the settings menu that appears. In the _Select a hook_ field, select a _POST_ hook, click _Add hook_ and paste your redeployment hook URL into the field provided. Click _Save_ to confirm.

<h3 id="generic">Generic Setup</h3>
Most Git providers have a commit hook mechanism that you can use to post to the Cloud 66 redeployment hook URL. Please check your Git provider documentation for this information. If your Git provider has a non-conforming payload format (not compatible with Github or BitBucket formats) then please get in touch and we can extend our support.

<h3 id="manual">Use a redeployment hook manually</h3>
To use the redeployment hook, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

<pre class="terminal">
curl -X POST [your redeployment hook URL]
</pre>

<div class="notice">
  <h3>Note</h3>
  <p>If you are manually invoking redeployments you should consider rather using the <a href="http://help.cloud66.com/toolbelt/toolbelt-redeploy-command">Cloud 66 CommandLine Tool</a> as it has additional features</p>
</div>
