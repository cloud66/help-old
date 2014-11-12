---
layout: post
template: two-col
title:  "Local cached copy error"
so_title: "cached copy"
date:   2034-09-26 15:33:13
categories: 
lead: Manually clearing your cache-copy
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 0
---

When you deploy to your web servers, a cache-copy of your application is automatically kept in the `$STACK_BASE/shared/cached-copy` folder.
This folder exists to make re-deployments of your application quicker.

However, if you change your Git URL or branch, or perform a Git action such as forcing or rebasing a commit, it's possible that this cached-copy can get out of sync, and then needs to be manually removed.

When you change your Git URL or branch, Cloud 66 is involved and will automatically purge your old cached-copy from your web servers for you. However, if you force or rebase a commit, that happens outside of Cloud 66, and it is therefore not possible to automatically detect and purge your servers.

In this case, the easiest thing to do is to use the [Cloud 66 toolbelt](http://help.cloud66.com/toolbelt/toolbelt-stack-management) to clear your caches:

<pre class="prettyprint">
$ cx clear-caches [-s stack]
</pre>