---
layout: post
template: one-col
title:  "Team accounts"
nav_sticky: true
nav: true
nav_prev: "/account-management/support-plans"
nav_next: "http://swordfish.new-help.c66.me/account-management/two-step-verification"
date:   2034-09-24 10:51:22
categories: account-management
lead: You can share your Cloud 66 account with your team
search-tags: ['team']
tags: ['Your account']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About using team accounts</a>
	</li>
	<li>
		<a href="#permissions">Account user roles and permissions</a>
	</li>
	<li>
		<a href="#add">Add a team member</a>
	</li>
	<li>
		<a href="#switch">Switch organizations</a>
	</li>
	<li>
		<a href="#leave">Leave a team</a>
	</li>
	<li>
		<a href="#pricing">Pricing</a>
	</li>
</ul>

<h2 id="about">About using team accounts</h2>
Adding new users to your Cloud 66 account is a great way to work in a team, and access rights can be fine-tuned per stack. They range from no privileges on a stack to full administrative privileges.

<h2 id="permissions">Account user roles and permissions</h2>
The account administrator is the only user who can invite other members and change access rights for these members (unless this latter privilege is granted to another user). There are two types of users - _Finance users_ and _Stack users_.

Finance users only have access to your _Payment_ page, and can change billing information. They will receive payment notifications (successful and unsuccessful payments), but have no access rights to stacks. We do not charge for Finance users.

Stack users have access rights to stacks, and you can specify the exact access rights you would like to grant to per stack. The available access rights for stack users are:

- No access
- View stack
- Deploy stack
- Control stack (can add/remove load balancer, setup backups etc.)
- Shell to servers
- Delete stack
- Stack administrator

By definition, any user with access to a stack will automatically be given the rights the the lower levels of permissions. For example, a user who can control a stack will also be able to deploy and view that same stack.

You also have the option of allowing team members to create a new stack. The creator of a stack becomes its default stack administrator, although this setting can be changed by the team lead. In addition to this, you can also allow a user to control permissions for others.

<h2 id="add">Add a team member</h2>
To invite your team members, access your <i>Account</i> page and select the <i>Organizations & Team</i> menu.

You need to give your team a name before inviting other members. This is the same as your _Company name_ on the _Payments_ page. If you already have entered a company name, you will skip this part.

Next, click into the _Team_ tab, and click the <i>+</i> button in the top right corner. This will allow you to choose a user type (Stack or Finance user), input an email address and set the user permissions.

Upon confirmation, an email will be sent to the email address specified, giving this user the option to sign up for Cloud 66 with their specified email address. If the invited email already has a Cloud 66 account, they will be notified of the pending invitation. By accepting the invitation, they will join your team.

<h2 id="switch">Switch organizations</h2>
If you are part of several organizations, you will have to switch organization to see stacks that belong to a different organization. To switch your organization, use the dropdown menu in the top right corner of your Cloud 66 account, and simply select the name of the organization you would like to switch to.

<h2 id="leave">Leave a team</h2>
To leave a team, visit the _Account_ page, then click _Organizations & Team_. Next, find the organization you would like to leave, and click the _Leave_ button.

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
