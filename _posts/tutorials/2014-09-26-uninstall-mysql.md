---
layout: post
template: two-col
title:  "Uninstalling MySQL"
so_title: "mysql"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1559-09-26 15:33:13
categories: 
lead: Uninstall MySQL completely from your Ubuntu server
search-tags: ['']
tags: ['Database']
tutorial: true
---

When using Cloud 66 to [deploy to your own servers](/getting-started/standalone-servers.html), you might experience trouble with an existing MySQL installation on your server.

<p>
<a target="_blank" rel="nofollow" class="button-home" href="http://app.cloud66.com/?utm_source=help&utm_medium=web&utm_campaign=help-page">Deploy and manage your applications with Cloud 66 &#10141;</a>
</p>

Along with our [general operating system requirements](/stacks/operating-system-information.html) for the deployment to your server to work, we also recommend that you uninstall all MySQL related files from your server before deploying.

Use apt to uninstall and remove all MySQL packages:

{% highlight bash %}
sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
sudo apt-get autoremove -y
sudo apt-get autoclean
{% endhighlight %}

Remove the MySQL folder:
{% highlight bash %}
rm -rf /etc/mysql
{% endhighlight %}

Delete all MySQL files on your server:
{% highlight bash %}
sudo find / -iname 'mysql*' -exec rm -rf {} \;
{% endhighlight %}

Your system should no longer contain MySQL related files.
