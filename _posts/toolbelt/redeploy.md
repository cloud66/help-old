---
layout: post
template: two-col
title:  "Toolbelt redeploy command"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Redeploy your stacks with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#redeploy">Redeploy your stack</a></li>
    <li>
        <ul>
            <li><a href="#usage-redeploy">Usage</a></li>
            <li><a href="#params-redeploy">Parameters</a></li>            
            <li><a href="#example-redeploy">Example</a></li>
        </ul>
    </li>   
</ul>

<h2 id="redeploy">Redeploy your stack</h2>

This is an alias for the `stacks redeploy` command, which triggers the deployment of a stack from the command line, just like clicking on <i>redeploy</i> in the UI.

<h3 id="usage-redeploy">Usage</h3>

<pre class="prettyprint">
$ cx redeploy [-s &lt;stack&gt;] [-y] [--git-ref &lt;git_ref&gt;] [--service &lt;service&gt;] [--service &lt;service&gt;] [--service &lt;service&gt;]
</pre>

<h3 id="params-redeploy">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>stack</i></td>
            <td>Name of your stack</td>
        </tr>
        <tr>
        	<td><i>e</i> (optional)</td>
        	<td>Your stack environment</td>
        </tr>
        <tr>
            <td><i>y</i> (optional)</td>
            <td>Automatically answer yes to any prompts</td>
        </tr>
        <tr>
            <td><i>git-ref</i> (optional, non-Docker)</td>
            <td>Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only.</td>
        </tr>
        <tr>
            <td><i>service</i> (optional, repeatable, Docker only)</td>
            <td>Will deploy the specified services from your stack only. Each service can have an optional colon-separated reference which is <b>image tag</b> or <b>git reference</b> for image based services, or for git based services.</td>
        </tr>
        <tr>
            <td><i>listen</i> (optional)</td>
            <td>Will follow the deployment and log progress output</td>
        </tr>
    </tbody>
</table>

<h3 id="example-redeploy">Examples</h3>

<pre class="prettyprint">
$ cx redeploy -s "My Awesome App" -e production
</pre>
<pre class="prettyprint">
$ cx redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
</pre>
<pre class="prettyprint">
$ cx redeploy -s "My Awesome Docker App" --service web:8c7f3d393162f88b8b9493f6babec574b03ca957 --service api:latest
</pre>

Deploying a stack that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.