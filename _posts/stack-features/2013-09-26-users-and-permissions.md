---
layout: post
template: two-col
title:  "Cloud 66 Team Accounts"
date:   2013-09-24 10:51:22
categories: stack-features
lead: Share your Cloud 66 account with your development team. Fine-tune their access rights per Stack.
---


You can add new users to your Cloud 66 account and share it with your other team members.
The access rights can be fine-tuned per Stack. They can range from no visibility over a Stack to full admin rights.

## Team Lead
The person who invites other team members to the team is the Team Lead. Team Lead is the only member who is allowed to invite others and change access rights for Team members.

## Invite Your Team Members
As a Team lead, you can invite new team members to your team.

To do that click on Account menu item on the left then select the Users tab.

![](http://help.cloud66.com.s3.amazonaws.com/pages/account_menu.png)

![](http://help.cloud66.com.s3.amazonaws.com/pages/users_tab.png)

![](http://help.cloud66.com.s3.amazonaws.com/pages/new_user.png)

Here you can enter the email address of the person you would like to invite.

![](http://help.cloud66.com.s3.amazonaws.com/pages/new_user_form.png)

<div class="notice">
		<h3>Important</h3>
		<p>You can only invite users that are NOT currently using Cloud 66 with the same email address.</p>
</div>

You can also specify the exact access rights you would like to grant to a specific users per Stack. The available access rights are:


- No Access
- View Stack
- Deploy Stack
- Control Stack (Add/Remove load balancers, setup backups, etc)
- Shell to Servers (root access to servers via embedded terminal)
- Delete Stack
- Stack Admin (download server SSH keys)

Any user with a higher access right, will have all the lower access rights automatically.

You can also allow team members to create a new Stack. Creator of a Stack is a Stack Admin by default although this can be changed by the Account Admin (Team lead).


## Signup as a team member
After receiving the invitation email, team members can signup for Cloud 66 with their specified email address. At that point they will be presented with a choice:
- Accept becoming a team member of your team
- Create a normal (non-team) account on Cloud 66.

<div class="notice">
		<h3>Important</h3>
		<p>This decision cannot be undone.</p>
</div>

## Leaving a Team
To leave a team, you need to delete your account. All the Stacks belonging to the team member will be transferred to the Team lead.

Team Lead can also remove team members.

