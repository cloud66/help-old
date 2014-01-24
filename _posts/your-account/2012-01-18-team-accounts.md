---
layout: post
template: two-col
title:  "Team accounts"
nav_sticky: true
nav: true
nav_prev: "/getting-started/security.html"
nav_next: "/getting-started/cloud66-status.html"
date:   2034-09-24 10:51:22
categories: your-account
lead: You can share your Cloud 66 account with your team
---

Adding new users to your Cloud 66 account is a great way to work in a team, and access rights can be fine-tuned per stack. They range from no privileges on a stack to full administrative privileges.

## Team lead
The team lead is the only user who can invite other members and change access rights for these members.

To invite your team members, access your <i>Account</i> page and select the <i>Users</i> menu. 

You need to give your team a name before inviting other members. This is the same as your Company name on the Payments page. If you already have entered a company name, you will skip this part.

![Users tab](http://cdn.cloud66.com.s3.amazonaws.com/images/help/users_tab.png)

Clicking <i>Add a new user</i> will allow you to enter your team member's email address.

![](http://help.cloud66.com.s3.amazonaws.com/pages/new_user_form.png)

## Permissions

You can specify the exact access rights you would like to grant to a specific users per stack. The available access rights are:

- No access
- View stack
- Deploy stack
- Control stack (can add/remove load balancer, setup backups etc.)
- Shell to servers (given root access to servers via embedded terminal)
- Delete stack
- Stack administrator (can download server SSH keys)

By definition, any user with access to a stack will automatically be given the rights the the lower levels of permissions. For example, a user who can control a stack will also be able to deploy and view that same stack.

You also have the option of allowing team members to create a new stack. The creator of a stack becomes its default stack administrator, although this setting can be changed by the team lead.

## Sign up a team member
After receiving the invitation email, team members can sign up for Cloud 66 with their specified email address. 

If the invited email already has a Cloud 66 account, they will be notified of the pending invitation. By accepting the invitation, they will join your team.

## Switching Organization
By default, you can see all the stacks you have access to under any organization. However, some pages are only acceible by the primary user of the account (Organization owner). You can select your current organization using the Organizations page under your Account menu.

![Switch Organization](http://cdn.cloud66.com/images/help/cloud66_switch_org.png)

## Leaving a team
To leave a team, you can go to the Organizations page under your Account menu and click on the Leave button of the appropriate organization.

You cannot leave your primary organization (the one you own).
