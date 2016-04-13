---
layout: post
template: two-col
title:  "NewRelic deploy hooks for Docker"
so_title: "Docker"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2016-04-07 10:23:22
categories:
lead: How to install NewRelic on Docker stacks
search-tags: ['new relic']
tags: ['Docker']
tutorial: true
difficulty: 1
---

This will walk you through how to install NewRelic on your Docker stack using deploy hooks.

Create a new docker stack, provide the git information or the docker image and any databases your application might need and go the next step. Now your custom git repository is created, on the side bar on the right you should see:

><p><b>Deploy Hooks</b></p>
>Use custom git repository to add your deploy_hooks.yml : git@git1.cloud66.com:your_git_name_and_id.git

Since Docker stacks do not have a git repository we create one for you to use for your deploy hooks amongst another things.

<ol class="article-list">
<li><p>The first thing to do is to clone this repository on your machine:</li></p>
<p><code>git clone git@git1.cloud66.com:your_git_name_and_id.git</code></p>

<li><p>Then create a new file in that folder called <code>deploy_hooks.yml</code> and add the following:</li></p>

<pre class="prettyprint">
production:
  first_thing:
    - snippet: cloud66/newrelic
      target: any
      sudo: true
      execute: true
      apply_during: all
</pre>

<p>If <code>apply_during</code> is set to <code>all</code> this will run on every deployment - set this value to <code>build_only</code> to only run during stack build.</p>

<p>This deploy hook will run the following code snippet to automate the installation of NewRelic, and requires the <code>NEWRELIC_KEY</code> environment variable to be set on a stack. This snippet is open source and can be found <a href="https://github.com/cloud66/snippets/blob/master/cloud66/newrelic">here</a>.</p>

<li><p>Then add this file to the git repository with:</li></p>
<p><code>git add deploy_hooks.yml</code></p>

<li><p>Check that is has been added:</li></p>
<p><code>git status</code></p>

<li><p>And then commit to the repository and push:</li></p>
<p><code>git commit -m 'Deploy hook - initial commit'</code></p>
<p><code>git push origin master</code></p>
</ol>

<li><p>Back on Cloud 66 stack creation page click on <i>Add environment variables</i> button on the right and add a new one called <code>NEWRELIC_KEY</code> with your key from NewRelic.</li></p>

<p>When you now deploy your stack the snippet will be the first thing (after after_checkout) that will run on the server and will install everything that is needed.</p>
