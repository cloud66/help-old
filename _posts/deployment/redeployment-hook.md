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
			<li><a href="#where">Where to find your redeployment hook?</a></li>
      <li><a href="#docker">For Docker Stacks</a></li>
      <li><a href="#classic">For Classic Stacks</a>
	      <ul>
		      <li><a href="#github_events">Github Integration</a></li>
	      </ul>
      </li>
    </ul>
  </li>
  <li><a href="#configuring">Adding Redeployment Hooks</a>
	  <ul>
	    <li><a href="#github">GitHub Setup</a></li>
   	  <li><a href="#bitbucket">Bitbucket Setup</a></li>
	    <li><a href="#generic">Generic Setup</a></li>
    </ul>
  </li>
	<li><a href="#manual">Invoking your redeployment hook manually</a></li>
</ul>

<h2 id="about">About redeployment hooks</h2>
Redeployment hooks allow you to achieve continuous deployment by deploying your stack when you push a change to your Git repository or have a CI push success. Redeployment hooks differ slightly for Classic and Docker Stacks see sections below.

<div class="notice">
  <h3 id="where">Where to find your redeployment hook?</h3>
  <p>Your redeployment hook URL is automatically generated for each of your stacks. You can found your unique redeployment hook URL on your stack information page (available via the <b>stack information</b> link on the main stack page's right hand navigation menu)</p>
</div>

<h3 id="docker">For Docker Stacks</h3>
Docker Stacks can have multiple services which can rely on a combination of either Image or Git sources. Furthermore, the Git sources can be the same or different branches, or even completely different repositories. To handle this, we have introduced and addition <i>services modifier</i> that can be appended to the redeployment hook tp specify which services to redeploy (the <i>services modifier</i> is a querystring parameter).

When a redeployment hook is invoked:
<ol>
  <li>
    If the commit hook payload includes Git information (Git source, branch and/or reference) then we will attempty to find a matching service on your stack that corresponds to the above information. If there is a match then we will deploy <i>only</i> the services that have a Git type (<i>not</i> the Image based services). Note that the matching service will also build based on the Git ref that is present in the payload.
  </li>
  <li>
    If the commit hook payload does not include Git information, then we will automatically redeploy <i>all</i> services defined on your stack.
  </li>
  <li>
    If you use the <b>services</b> modifier to specify which specific services you want to deploy when the commit hook is invoked, then the same logic applies as in 1) and 2) above, the only difference being that we will always deploy the services you have specified if deployment will occur.
  </li>
</ol>

Some examples below will illustrate how to add a <b>services modifier</b>. Note that the xxxx/yyyy in the examples is for illustrative purposes only and should be replaced with your redeployment URL on your stack information page.
An example redeployment hook <b>without a services modifier:</b>

<pre class="prettyprint">
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy
</pre>

An example redeployment <b>hook with a single services modifier:</b>

<pre class="prettyprint">
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=web
</pre>

An example redeployment <b>hook with a many-service modifier:</b>

<pre class="prettyprint">
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=web,app
</pre>

<h3 id="classic">For Classic Stacks</h3>
All Classic Stacks are based on a Git repository and branch. Pushing code to the same branch as your stack Git branch will invoke your stack redeployment. If you push code to another branch, nothing will happen - this allows you to push code to your development branch without an automatic redeploy on your production stack for example. If it is available in the payload, the Git Ref of the latest commit will be used for the stack redeployment.

<div class="notice">
  <h3>Note</h3>
  <p>In the case where the payload of the commit hook does not contain any branch information (Github and Bitbucket payload formats are supported) then the stack will redeploy without attempting to match branch</p>
</div>

<h4 id="github_events">Github Integration</h4>
Users who have signed in through Github (and who have enough access to create and edit deployement events for their stacks on GitHub) can activate continuous deployments on GitHub. To do this: access your <a href="/toolbelt/toolbelt-settings-command">Stack settings</a> via the <a href="/toolbelt/toolbelt-introduction">toolbelt<a/> and set <b>continuous.deploy</b> to <i>true</i>.

<pre class="prettyprint">
$ cx settings set -s my_stack continuous.deploy true
</pre>

This will create a new webhook for your repository on GitHub or simply modify and existing one to let Cloud66 recieve <i>deployment</i> events as well.

With this feature enabled, whenever you push new commit, Cloud 66 will automatically generate a new <i>deployment event</i> based on recieving the <i>push event</i> from GitHub. We will also send <i>deployment status events</i> on different deployment statuses, such as started, cancelled, succeeded and failed.

For more information please refer to the <a href="https://developer.github.com/v3/repos/deployments/">Github Deployment API</a>.

<h2 id="configuring">Adding Redeployment Hooks</h2>

The process of adding the hook differs by your Git host, so we will guide you through doing this with GitHub, Bitbucket and a generic solution.

<h3 id="github">GitHub Setup</h3>
On your stack detail page, click <i>Stack information</i> in the right sidebar and copy the URL provided in the <i>Redeployment hook</i> field. Next, visit your GitHub repository, click <i>Settings</i> in the right sidebar, and then <i>Webhooks & Services</i> in the left sidebar.

In the <i>Webhooks</i> window, click <i>Add webhook</i> and paste the redeployment hook URL into the <i>Payload URL</i> field. When you confirm by clicking <i>Add webhook</i>, GitHub will automatically test your hook with a <i>Ping</i> and you should get a green HTTP200 reponse.

<h3 id="bitbucket">Bitbucket Setup</h3>
On your stack detail page, click <i>Stack information</i> in the right sidebar and copy the URL provided in the <i>Redeployment hook</i> field. Next, visit your Bitbucket repository, click <i>Settings</i> in the left sidebar, and then <i>Hooks</i> in the settings menu that appears. In the <i>Select a hook</i> field, select a <i>POST</i> hook, click <i>Add hook</i> and paste your redeployment hook URL into the field provided. Click <i>Save</i> to confirm.

<h3 id="generic">Generic Setup</h3>
Most Git providers have a commit hook mechanism that you can use to post to the Cloud 66 redeployment hook URL. Please check your Git provider documentation for this information. If your Git provider has a non-conforming payload format (not compatible with Github or BitBucket formats) then please get in touch and we can extend our payload support!

<h3 id="manual">Invoking your redeployment hook manually</h3>
To invoke the redeployment hook manually, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

<pre class="prettyprint">
curl -X POST [your redeployment hook URL]
</pre>

<div class="notice">
  <h3>Note</h3>
  <p>If you are manually invoking redeployments you should consider using the <a href="http://help.cloud66.com/toolbelt/toolbelt-redeploy-command">Cloud 66 CommandLine Tool</a> instead, as it has additional features!</p>
</div>
