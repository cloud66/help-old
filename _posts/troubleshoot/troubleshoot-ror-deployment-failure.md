---
layout: post
template: one-col
title:  "Deployment failure"
so_title: false
nav_sticky: true
nav: false
date:   2016-06-06 01:01:01
categories: troubleshoot
lead: Troubleshoot Rails stack failures
search-tags: ['']
tags: ['']
---

<ul class="page-toc">
    <li>
        <a href="#f1">Cap deploy failed</a>
    </li>
 </ul>

<h2 id="f1">Cap deploy failed</h2>

For deploying Rails stack C66 uses capistrano, so if your deployment fails during the capistrano you'll see this error <b>Cap deploy failed</b> To see why it's faild you need to:

<ol class="article-list">
<li> Click on full details and help</li>
<li> Under "Error Log Server" Click on view logs (which takes you to the server that's failed)</li>
<li> If it doesn't give you the full log details click on "MORE LOGS" on the top right corner of log box</li>
<li> From the bottom, you can scroll up to find why it's failed</li>
 </ol>