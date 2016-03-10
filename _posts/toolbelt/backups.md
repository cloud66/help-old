---
layout: post
template: two-col
title:  "Toolbelt backup management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your backups from the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About backup management</a>
    </li>
	<li>
		<a href="#list">List your backups</a>
	</li>
	        <li>
                <ul>
                <li><a href="#list_usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list_params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#list_example">Example</a></li>
                </ul>
            </li>
	<li>
		<a href="#download">Download your backups</a>
	</li>
	        <li>
                <ul>
                <li><a href="#download_usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#download_params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#download_example">Example</a></li>
                </ul>
            </li>
	<li>
		<a href="#new">Create backup</a>
	</li>
	        <li>
                <ul>
                <li><a href="#new_usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#new_params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#new_example">Example</a></li>
                </ul>
            </li>

</ul>

<h2 id="about">About backup management</h2>
The following commands help you manage your backups, such as listing, downloading and initiating backups on your stacks.

<h2 id="list">List your backups</h2>
This will list all the managed backups of a stack grouped by their database type and/or backup schedule.

<h3 id="list_usage">Usage</h3>

<pre class="prettyprint">
$ cx backups list [-s &lt;stack&gt;] [-l] [&lt;db type&gt;]
</pre>

<h3 id="list_params">Parameters</h3>
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
            <td><i>db type</i> (optional)</td>
            <td>The type of DB you'd like to list backups for (eg. mysql)</td>
        </tr>
        <tr>
            <td><i>l</i> (optional)</td>
            <td>Returns the latest successful backup</td>
        </tr>
        <tr>
            <td><i>e</i> (optional)</td>
            <td>Your stack environment</td>
        </tr>
    </tbody>
</table>

<h3 id="list_example">Example</h3>

<pre class="prettyprint">
$ cx backups list -s "My Awesome App" -e production
</pre>

{% include toolbelt_footer.html %}

<h2 id="download">Download your backups</h2>

Allows you to download a database backup through the command line, concatenating separate files into one automatically if it consists of numerous files.

<h3 id="download_usage">Usage</h3>

<pre class="prettyprint">
$ cx backups download [-s &lt;stack&gt;] [-d &lt;download directory&gt;] &lt;backup id&gt;
</pre>

<h3 id="download_params">Parameters</h3>
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
            <td><i>stack</i> </td>
            <td><i>&mdash;</i></td>
            <td>Name of your stack</td>
        </tr>        
        <tr>
            <td><i>d</i> (optional)</td>
            <td>~/cx_backups</td>
            <td>Directory to download backup to</td>
        </tr>
        <tr>
            <td><i>backup id</i></td>
            <td><i>&mdash;</i></td>
            <td>The ID of the backup you'd like to download</td>
        </tr>

    </tbody>
</table>

<h3 id="download_example">Example</h3>

<pre class="prettyprint">
$ cx backups download -s "My Awesome App" 15
</pre>

<h2 id="new">Create backup</h2>

Allows you to create a new backup task through the command line.

<h3 id="new_usage">Usage</h3>

<pre class="prettyprint">
$ cx backups new [-s &lt;stack&gt;]	[--dbtypes &lt;DB types&gt;] [--frequency &lt;Frequency&gt;] [--keep &lt;Keep&gt;] [--gzip &lt;Gzip&gt;] [exclude-tables &lt;Exclude tables&gt;] [--run-on-replica &lt;Run on replica&gt;]

</pre>

<h3 id="new_params">Parameters</h3>
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
            <td><i>stack</i> </td>
            <td><i>&mdash;</i></td>
            <td>Name of your stack</td>
        </tr>        
        <tr>
            <td><i>dbtypes</i> (optional)</td>
            <td>all</td>
            <td>Comma separated list of Database types which need backup tasks</td>
        </tr>
        <tr>
            <td><i>frequency</i> (optional)</td>
            <td>0 */1 * * *</td>
            <td>Frequency of backup task in cron schedule format</td>
        </tr>
        <tr>
            <td><i>keep</i> (optional)</td>
            <td>100</td>
            <td>Number of previous backups to keep</td>
        </tr>
        <tr>
            <td><i>gzip</i> (optional)</td>
            <td>true</td>
            <td>Compress your backups with gzip</td>
        </tr>
        <tr>
            <td><i>exclude-tables</i> (optional)</td>
            <td><i>&mdash;</i></td>
            <td>Tables that must be excluded from the backup</td>
        </tr>
        <tr>
            <td><i>run-on-replica</i> (optional)</td>
            <td>true</td>
            <td>Run backup task on replica server if available</td>
        </tr>

    </tbody>
</table>

<h3 id="new_example">Example</h3>

<pre class="prettyprint">
$ cx backups new -s mystack --dbtypes=postgresql --frequency="0 */1 * * *" --keep 50 --gzip=true exclude-tables=my_log_table --run-on-replica=false
</pre>
