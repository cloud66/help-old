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
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#what">What are redeployment hooks?</a>
	</li>
	<li>
		<a href="#github-event">Use continuous deployment on GitHub</a>
	</li>
	<li>
		<a href="#github">Use a redeployment hook with GitHub</a>
	</li>
	<li>
		<a href="#bitbucket">Use a redeployment hook with Bitbucket</a>
	</li>
	<li>
		<a href="#manual">Use a redeployment hook manually</a>
	</li>
	<li>
		<a href="#git-ref">Support for deployment from Git refs</a>
	</li>
</ul>

<h2 id="what">What are redeployment hooks?</h2>
Redeployment hooks allow you to deploy your stack when you push a change to your Git repository or Docker image, to achieve continuous deployment. The process of adding the hook differs by Git host, so we will guide you through doing this with GitHub and Bitbucket.

Only pushing code to the same branch as your stack Git branch will redeploy your stack. If you push code to another branch, nothing happens. This allows you to push code on your development branch without an automatic redeploy on your production stack.

<h2 id="github-event">Use continuous deployment on GitHub</h2>
This option is available for GitHub users that have enough access to create and edit deployement events for stacks on GitHub.

On your _Stack settings_ modal, turn on _Continuous deployment on Github_. This will create a new webhook for your repository on GitHub or simply modify and existing one to let Cloud66 recieve _deployment_ events as well.

With this feature enabled, whenever you push new commit, Cloud 66 will automatically generate a new _deployment event_ based on recieving the _push event_ from GitHub. We will also send _deployment status events_ on different deployment statuses, such as started, cancelled, succeeded and failed.

For more information please refer to the <a href="https://developer.github.com/v3/repos/deployments/">Github Deployment API</a>.

<h2 id="github">Use a redeployment hook with GitHub</h2>
On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your GitHub repository, click _Settings_ in the right sidebar, and then _Webhooks & Services_ in the left sidebar.

In the _Webhooks_ window, click _Add webhook_ and paste the redeployment hook URL into the _Payload URL_ field. When you confirm by clicking _Add webhook_, GitHub will automatically test your hook, so your stack should deploy automatically.

<h2 id="bitbucket">Use a redeployment hook with Bitbucket</h2>
On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your Bitbucket repository, click _Settings_ in the left sidebar, and then _Hooks_ in the settings menu that appears. In the _Select a hook_ field, select a _POST_ hook, click _Add hook_ and paste your redeployment hook URL into the field provided. Click _Save_ to confirm.

<h2 id="manual">Use a redeployment hook manually</h2>
To use the redeployment hook, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

<pre class="terminal">
curl -X POST -d "" [your redeployment hook URL]
</pre>

<h2 id="git-ref">Support for deployment from Git refs</h2>
Redeployment hooks support custom <a href="http://git-scm.com/book/en/v2/Git-Internals-Git-References">Git refs</a>. Using deployments from Git refs you can use any valid git ref, like a commit SHA hash, git tag or branch to tell Cloud 66 what code you would like to deploy to your servers. You can do this in cURL like follows:

<pre class="terminal">
curl -X POST -d "git_ref=[tag]" [your redeployment hook URL]
</pre>

<pre class="terminal">
curl -X POST -d "git_ref=[SHA hash]" [your redeployment hook URL]
</pre>

<pre class="terminal">
curl -X POST -d "git_ref=[branch]" [your redeployment hook URL]
</pre>

This is a sample request to deploy with specific SHA hash:

<pre class="terminal">
curl -X POST -d "git_ref=a57b7b025b" https://hooks.cloud66.com/hooks/v1/stacks/redeploy/85f5f5964d9fe914e62219d368a323d4/204f3d4610d725b436b473788ad9ab6b
</pre>
