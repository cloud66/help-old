---
layout: post
template: two-col
title:  "Toolbelt job management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your jobs with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Job management</a></li>
    <li><a href="#list">List jobs</a></li>
            <li>
                <ul>
                <li><a href="#usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example">Example</a></li>
                </ul>
            </li>
    <li><a href="#set">Run a job immediately</a></li>
            <li>
                <ul>
                <li><a href="#usage2">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params2">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example2">Example</a></li>
                </ul>
            </li>
</ul>

<h2 id="about">Job management</h2>
These commands allow you to list jobs and run a job immediately.

<h2 id="list">List jobs</h2>
This command lists all jobs on a stack or a server.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx jobs list [-s &lt;stack&gt;] --server &lt;server name&gt;|&lt;server ip&gt;|&lt;server role&gt; --service &lt;service name&gt;
</pre>

<h3 id="params">Parameters</h3>
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
            <td><i>stack</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>server name</i> (optional)</td>
            <td>&mdash;</td>
            <td>Name of the target server</td>
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
            <td><i>service name</i> (optional)</td>
            <td>&mdash;</td>
            <td>Name of the target service</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>&mdash;</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx jobs list -s My_Awesome_App
$ cx jobs list -s My_Awesome_App --server dingo
$ cx jobs list -s My_Awesome_App --server web -e production
</pre>

<h2 id="set">Run a job immediately</h2>
Use this command to run a job from the command line.

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx job list [-s &lt;stack&gt;] --args &lt;job parameters&gt; &lt;job name&gt;
</pre>

<h3 id="params2">Parameters</h3>

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
            <td><i>stack</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>server name</i></td>
            <td>&mdash;</td>
            <td>Name of the job to run</td>
        </tr>
        <tr>
            <td><i>args</i> (optional)</td>
            <td>&mdash;</td>
            <td>Parameters you would like to pass job</td>
        </tr>        
    </tbody>
</table>

<h3 id="example2">Examples</h3>

<pre class="prettyprint">
$ cx job run -s "My Awesome App" my_job
$ cx job run -s "My Awesome App" -args "arg1 arg2" my_job
</pre>
