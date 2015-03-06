---
layout: post
template: two-col
title:  "Running Rails console"
so_title: "console"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1890-09-26 15:33:13
categories: 
lead: You can easily run Rails console with a single command
search-tags: ['']
tags: ['Customization']
tutorial: true
difficulty: 0
---

Start by [SSHing to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server). Then go to your `STACK_PATH` (eg. `cd $STACK_PATH`) and run the following command:

<pre class="prettyprint">
$ bundle exec rails c &lt;environment&gt;
</pre>

**Possible values for &lt;environment&gt;:**

<ul class="article-list">
    <li>development (default)</li>
    <li>test</li>
    <li>production</li>
</ul>

To run your Rails console as the Nginx user, you can use the following command:

<pre class= "prettyprint">
$ sudo -u nginx bash -c 'source /var/.cloud66_env && bundle exec rails c'
</pre>