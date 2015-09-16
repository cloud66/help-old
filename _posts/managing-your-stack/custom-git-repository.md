---
layout: post
template: one-col
title:  "Custom Git Repository"
so_title: "custom git repository"
date:   3999-02-28 10:51:22
categories: managing-your-stack
lead: Customize deployed configuration files with git
search-tags: []
tags: ['Customization']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li><a href="#custom">What is Custom Git Repository?</a></li>
	<li><a href="#Access">Access to Custom Git Repository</a></li>
	<li><a href="#submit_ui">Submit changes through dashboard</a></li>
	<li><a href="#submit_git">Submit changes through Git</a></li>
</ul>

<h2 id="custom">What is Custom Git Repository?</h2>

It is a Git repository for Customconfig files managed by Cloud 66 that enables you to manage your customconfigs using git commands or dashboard. Each change will be pushed to the servers after redeployment either updated via dashboard or updated using a git client tool.

You can push changes of CustomConfig files into this repository which will update CustomConfig of the stack and will be ready to be pushed to real servers with next release.

If you change CustomConfigs through dashboard, the changes will be pushed to _Custom Git Repository_ as well, so you can see the changes in your git client too.

<h2 id="access">Access to Custom Git Repository</h2>

To access to the _Custom Git Repository_ you'd need to upload the content of your public personal key to your cloud66 account. You can find _public key_ under the _Account/Keys_ in dashboard.

You should find your public personal key `id_rsa.pub` in `~/.ssh` directory of your local machine. Otherwise you'd need to generate a public/private ssh keys first and upload the contents of the public one on to your cloud66 account.

After you upload your public personal key, you can clone the _Custom Git Repository_ of the stack and start managing your CustomConfigs by pushing your changes in it. You can find the address of _Custom Git Repository_ in `Stack Information` page.

<div class="notice">
    <h3>Important</h3>
    <p>You can use any public/private ssh key to access to <b>Custom Git Repository</b> but the personal key should be loaded into <b>ssh-agent</b> of the local machine you are using for configuration. If you are using <b>~/.ssh/id_rsa.pub</b> of local machine as personal public key, it should be loaded by default. You can use <b>ssh-add</b> command to list/add keys in <b>ssh-agent</b>.</p>
</div>

<h2 id="submit_ui">Submit changes through dashboard</h2>

When you push your changes to a CustomConfig through dashboard, Cloud66 will merge and push your changes into _Custom Git Repository_.

If there are no merge conflicts, your changes will be applied directly to your servers.

If there are some merge conflict, cloud66 will raise a warning and the changes will cached on local to go to real servers on next deploy so you have this option to solve the conflict before deployment.

<h2 id="submit_git">Submit changes through Git</h2>

When you push your changes for a CustomConfig to _Custom Git Repository_, Cloud66 will push and merge your changes into stack local cache to go to real servers with next deploy.

If there are no merge conflicts there will be a warning message on your stack page showing `Redeploy (Config changes)`.

If there are merge conflicts, your changes will not be applied into stack local cache, so your next deployment will go with old configs. You'd have to solve the merge conflicts and push again in order to update your CustomConfigs.