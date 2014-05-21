---
layout: post
template: two-col
title:  "Team accounts"
nav_sticky: true
nav: true
nav_prev: "/your-account/support.html"
nav_next: "/your-account/recover-two-step-verification.html"
date:   2034-09-24 10:51:22
categories: your-account
lead: You can share your Cloud 66 account with your team
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#lead">Team lead</a>
	</li>
	<li>
		<a href="#permissions">Permissions</a>
	</li>
	<li>
		<a href="#memeber">Sign up a team member</a>
	</li>
	<li>
		<a href="#switch">Switching organization</a>
	</li>
	<li>
		<a href="#leave">Leaving a team</a>
	</li>
	<li>
		<a href="#pricing">Pricing</a>
	</li>
</ul>

Adding new users to your Cloud 66 account is a great way to work in a team, and access rights can be fine-tuned per stack. They range from no privileges on a stack to full administrative privileges.

<h2 id="lead">Team lead</h2>
The team lead is the only user who can invite other members and change access rights for these members (unless this latter privilege is granted to another user).

To invite your team members, access your <i>Account</i> page and select the <i>Users</i> menu.

You need to give your team a name before inviting other members. This is the same as your Company name on the Payments page. If you already have entered a company name, you will skip this part.

![Users tab](http://cdn.cloud66.com/images/help/users_tab.png)

Clicking <i>Add a new user</i> will allow you to enter your team member's email address.

![New user form](http://cdn.cloud66.com/images/help/new_user_form.png)

<h2 id="permissions">Permissions</h2>

You can specify the exact access rights you would like to grant to a specific users per stack. The available access rights are:

- No access
- View stack
- Deploy stack
- Control stack (can add/remove load balancer, setup backups etc.)
[//]: # - Shell to servers
- Delete stack
- Stack administrator (can download server SSH keys)

By definition, any user with access to a stack will automatically be given the rights the the lower levels of permissions. For example, a user who can control a stack will also be able to deploy and view that same stack.

You also have the option of allowing team members to create a new stack. The creator of a stack becomes its default stack administrator, although this setting can be changed by the team lead.

<h2 id="member">Sign up a team member</h2>
After receiving the invitation email, team members can sign up for Cloud 66 with their specified email address.

If the invited email already has a Cloud 66 account, they will be notified of the pending invitation. By accepting the invitation, they will join your team.

<h2 id="switch">Switching organization</h2>
By default, you can see all the stacks you have access to under any organization. However, some pages are only accessible by the primary user of the account (organization owner). You can select your current organization using the _organizations_ page under your Account menu.

![Switch Organization](http://cdn.cloud66.com/images/help/cloud66_switch_org.png)

<h2 id="leave">Leaving a team</h2>
To leave a team, you can go to the Organizations page under your Account menu and click on the Leave button of the appropriate organization.

You cannot leave your primary organization (the one you own).

<h2 id="pricing">Pricing</h2>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Team members</th>
            <th align="center">1&mdash;5</th>
            <th align="center">5+*</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Monthly</td>
            <td>$15</td>
            <td>$2</td>
        </tr>
    </tbody>
</table>
<h5>* For each additional user.</h5>
