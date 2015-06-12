---
layout: post
template: one-col
title:  "Live-Logs"
so_title: "live logs"
date:   3999-01-28 10:51:22
categories: managing-your-stack
lead: Live stream logs from your servers and Docker services
search-tags: []
tags: ['Management']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li><a href="#what">What is LiveLogs?</a></li>
	<li><a href="#how">How does LiveLogs work?</a></li>
	<li><a href="#how-do">How do I use LiveLogs?</a></li>
	<li><a href="#how-custom">How do I add custom logs to LiveLogs?</a></li>
</ul>

<h2 id="what">What is LiveLogs?</h2>

Live logs allow you to stream logs from your server, including Docker services and host logs.  You can add log sources from the right hand side menu, via the groups or individual checkboxes, and for Docker stacks you can select these based on service too. This feature is intended as a live monitoring and debugging tool - to view historic logs you would still need to look at your servers manually or use a traditional logging provider.

<h2 id="how">How does LiveLogs work?</h2>
When you check one of the live log sources, we will automatically start listening to that source, and stream the output to your view. By default, the logs will be populated with the last 100 lines of the log (approximately). When you click on a log source, it sends logs for up to 10 minutes and then will automatically stop. The logs are ephemeral, meaning that they will disappear from the UI once you navigate to a different page or refresh.

<h2 id="how-do">How do I use LiveLogs?</h2>
You can select to view a log file by selecting it from the right menu, and all of the checked log sources will be appended to the central log UI in the order that they arrive. To make it easier for you to navigate the logs, we provide an easy way for you to zoom in on the log entries that happen around any given line (by clicking the source on the left side of the log line). The log title on each row is in the same color as the log source menu item, and as each log line comes in, the corresponding log source indicator will flash. This should help you to see which sources are sending data at a glance.

Note that log sources that are not checked will not have any log sources streamed in (and will therefore not flash). Simply clicking on the title of that log line will open a context of several previous and next lines <b>from the same log source</b>. You can search further backwards or forwards within this context by clicking the *previous context* or *next context* links. If you were to uncheck a previously checked source, the corresponding logs for that item will also be removed from the UI.

In terms of the filtering, this occurs dynamically over your logs, and you can filter the results down to only those that match your search term, or clear the filter at any time. Logs will still be streamed, but you'll only see new logs matching your filter until it's cleared.

If you have a lot of log volume coming in, you can autoscroll to remain on the tail of your logs, alternatively you can temporarily pause your log sources by clicking on the <i>pause</i> button. You can additionally clear existing logs from the UI with the <i>clear logs</i> button.

<h2 id="how-custom">How do I add additional logs to LiveLogs?</h2>
By default LiveLogs will look for logs in the following paths: 

<ul class="list">
 	<li>/var/log/containers/*.log</li>
 	<li>/var/log/containers/**/*.log</li>
 	<li>/tmp/web_server_bluepill.log</li>
 	<li>$STACK_BASE/shared/log/*.log</li>
 </ul>

You can add your own custom paths to this by using a [manifest files](/building-your-stack/building-your-manifest-file) and adding the key `***/configuration/custom_log_files`. 

See the example below to add custom log files to all Rails servers: 

<pre class="prettyprint">
production:    
    rails:
        configuration:
            custom_log_files: ["/my_special_logs/my_log_file"]                        
</pre>

You can also have multiple custom log files defined for different server roles; for instance see the example below to add custom log files to all Docker servers with different custom log files for all MySQL servers (on the same stack)

<pre class="prettyprint">
production:    
    docker:
        configuration:
            custom_log_files: ["/tmp/dockerlogs/*/*.log"]
    mysql:                     
        configuration:
            custom_log_files: 
            - "/another_mysql_dump_log/*.log"
            - "/var/log/mysql/error.log"
</pre>


<div class="notice">
    <h3>Note</h3>
	<p>Server log file paths changes are calculated after each deployment, so if you change your logs in your manifest, be sure to redeploy in order to see them on the LiveLogs page.</p>
</div>




