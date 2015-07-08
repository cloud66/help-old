---
layout: post
template: two-col
title:  "Setting up custom LiveLog files"
so_title: "LiveLogs"
date:   2015-7-06 10:33:13
categories:
lead: Specify additional LiveLog files
search-tags: ['Log', 'LiveLogs']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

Depending on your requirements, you may need to have access to additional log files from your liveLogs page. You can add custom live log file(s) for each application type in your manifest file:

<div class="notice">
        <h3>Note</h3>
        <p>Server log file paths changes are calculated after each deployment, so if you change your logs in your [manifest](http://help.cloud66.com/building-your-stack/building-your-manifest-file), be sure to redeploy in order to see them on the LiveLogs page.</p>
</div>


<pre class="prettyprint">
production:   
    docker:
        configuration:
            custom_log_files: ["/my_special_logs/my_log_file"]                       
</pre>

You can also have multiple custom log files defined for different server roles; for instance see the example below to add custom log files to all Docker servers with different custom log files for all MySQL servers (on the same stack):

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