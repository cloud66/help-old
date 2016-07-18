---
layout: post
template: two-col
title:  "Easy Login"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Login to Cloud 66 web UI from your terminal
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">Cloud 66 Easy Deploy</a>
    </li>
	<li>
		<a href="#access-control-for-toolbelt-login">Access Control for Toolbelt Login</a>
	</li>
</ul>

<h2 id="about">Cloud 66 Easy Login</h2>
<p>
Cloud 66 Toolbelt uses OAuth 2 for authentication and authorization. Once you have authorized Toolbelt with your Cloud 66 account you can create, delete, scale and deploy your stacks right from the terminal window. All these actions are accessible from the Cloud 66 web UI as well. As a matter of fact, Cloud 66 Toolbelt is more powerful than its web UI.</p>

<p>
Cloud 66 Easy Login allows you to login to Cloud 66 web UI from your terminal without entering your password or 2fa. Once you have Cloud 66 Toolbelt authorized on your computer, simple use the <code>login</code> command to open up a browser and login to your account.
</p>
<p>
<kbd>$ cx login</kbd>
</p>

<h2 id="access-control-for-toolbelt-login">Access Control for Toolbelt Login</h2>
<p>Account owners can control who on their teams can use the Toolbelt to login to their account. This is done through the permissions configurable on the Teams page for each user in the team.</p>
