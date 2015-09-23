---
layout: post
template: one-col
title:  "Jobs"
date:   2040-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: stack-add-ins
lead: Run a scheduled or on-demand tasks on a server host or against a docker service
search-tags: ['job, task, docker']
tags: ['Add in']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Overview</a></li>
    <li><a href="#run">Run a job</a></li>
    <li><a href="#list">Variety of jobs</a></li>
    <li><a href="#params">Using parameters</a></li>
        <li>
            <ul>
               <li><a href="#notation">Notation</a></li>
            </ul>
            <ul>
               <li><a href="#default">Default values</a></li>
            </ul>
            <ul>
               <li><a href="#arguments">Pass parameters to job</a></li>
            </ul>
        </li>

</ul>

<h2 id="about">Overview</h2>

To add a job, simply click on the _+_ button on the add-ins menu of your stack page.
Your run results (success, failure and any output) can be seen in real-time on the job detail page.

<h2 id="run">Run a job</h2>
You can set the timing of the job in either minutes, hours, a daily, weekly and monthly time, as well as on demand (under the hood, scheduled jobs are run as cronjobs on your server).

<h2 id="list">Variety of jobs</h2>
There are a variety of jobs for your stack.

<ul>
    <li><a href="/stack-add-ins/server-task">Docker server task</a></li>
    <li><a href="/stack-add-ins/service-task">Docker service task</a></li>
    <li><a href="/stack-add-ins/shell">Shell command</a></li>
    <li><a href="/stack-add-ins/rake-task">Rake task</a></li>
</ul>

<h2 id="params">Using parameters</h2>

When you are running a job on demand via dashboard or [toolbelt](/toolbelt/toolbelt-job-management), you can pass parameters if you used in your command.

<h3 id="notation">Notation</h3>
Jobs use a facility in the shell called <i>positional parameters</i>. Positional parameters are a series of special variables ($1, $2 ... $n) that contain the contents of the command line. Where <strong>n</strong> is greater than 9 using braces. For example, to refer to the 15th positional parameter, use the notation `${15}`. 
 
<pre class="prettyprint">
cp $1 $2
ls $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}
</pre>

<h3 id="default">Default values</h3>
You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default

<pre class="prettyprint">
cp $1 ${2:-/tmp}
</pre>

<h3 id="arguments">Pass parameters to job</h3>

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value. Also don't forget to use quotes if you are using toolbelt and you wants to pass more than one arguments.

<pre class="prettyprint">
job command: cp $1 ${2:-/tmp}
passing arguments: "log*.txt" tmp/logs
</pre>
