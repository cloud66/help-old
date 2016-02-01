---
layout: post
template: two-col
title:  "Toolbelt user commands"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Commands to manage users with Toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
<li><a href="#list">List command</a></li>
<li><a href="#show">Show command</a></li>
<li><a href="#apply-profile">Apply Profile command</a></li>
</ul>

<h2 id="list">List command</h2>

This command shows a list of all users you have access to. This is a list of all users within all the accounts you own or have enough access rights to manage users for.

<kbd>
$ cx users list
</kbd>

This will result in a simple list of users shows as below:

<pre>
1   jim@gmail.com
2   jack@gmail.com
</pre>

<h2 id="show">Show command</h2>

This command shows details about a single user.

<kbd>
$ cx users show jim@gmail.com
</kbd>

Which returns:

<pre>
Email: jim@gmail.com
Locked: false
Access Profile
	Account Profile
	CanCreateStack: true
	CanAdminUsers: false
	CanAdminPayments: false
	CanAddCloudKey: false
	CanDelCloudKey: true
	CanViewAccountNotifications: false
	CanEditAccountNotifications: true
	CanViewAudit: false
	CanViewDockerImageKey: false
	CanDelSshKey: false
	CanEditPersonalToken: false
	CanDelAuthorizedApp: false
	CanViewCustomEnv: false
	CanEditCustomEnv: false
	CanAddDevelopersApp: false
	CanDelDevelopersAdd: false
	CanEditGitKey: false
	CanEditGateway: false
	Default Roles: [Viewer]

	Stack: My Stack Name (production) - [740f81b98eb847fab0df538ea8780d9d]
		Roles: Deployer
	Stack: My Stack Name 1 (development) - [b5f4eaaf56b5768f272ab875d2ba48b1]
		Roles: Viewer
	Stack: My Stack Name (production) - [740f81b98eb847fab0df538ea8780d9d]
		Roles: Administrator
	Stack: My Stack Name 1 (development) - [b5f4eaaf56b5768f272ab875d2ba48b1]
		Roles: Administrator

Uses Two Factor Authentication: false
Timezone: UTC
Has Valid Phone: false
Developer Program: false
Github Login: false
Last Login: 2016-01-28 13:12:16 +0000 GMT
Created At: 2016-01-28 13:12:13 +0000 GMT
Updated At: 2016-01-28 13:12:16 +0000 GMT
</pre>

You can export this into a `json` file. This is called an **Access Profile** and can be used as a template for other users' access rights in an account.

<kbd>
$ cx users show jim@gmail.com --json=/tmp/jim_profile.json
</kbd>

This will generate `/tmp/jim_profile.json` which contains this:

<pre class="prettyprint">
{
	"id": 2,
	"email": "jim@gmail.com",
	"primary_account_id": 2,
	"locked": false,
	"access_profile": {
		"account_profile": {
			"can_create_stack": true,
			"can_admin_users": false,
			"can_payment": false,
			"can_add_cloud_key": false,
			"can_del_cloud_key": true,
			"can_view_acc_notifications": false,
			"can_edit_acc_notifications": true,
			"can_view_audit": false,
			"can_view_docker_img_key": false,
			"can_del_ssh_key": false,
			"can_edit_personal_token": false,
			"can_del_authorized_app": false,
			"can_view_custom_env": false,
			"can_edit_custom_env": false,
			"can_add_developers_app": false,
			"can_del_developers_app": false,
			"can_edit_git_key": false,
			"can_edit_gateway": false,
			"default_roles": [
				"Viewer"
			]
		},
		"stack_profiles": [
			{
				"stack_uid": "740f81b98eb847fab0df538ea8780d9d",
				"role": "Deployer"
			},
			{
				"stack_uid": "b5f4eaaf56b5768f272ab875d2ba48b1",
				"role": "Viewer"
			},
			{
				"stack_uid": "740f81b98eb847fab0df538ea8780d9d",
				"role": "Administrator"
			},
			{
				"stack_uid": "b5f4eaaf56b5768f272ab875d2ba48b1",
				"role": "Administrator"
			}
		]
	},
	"uses_tfa": false,
	"timezone": "UTC",
	"has_valid_phone": false,
	"developer_program": false,
	"github_login": false,
	"last_login": "2016-01-28T13:12:16Z",
	"devices": [],
	"created_at": "2016-01-28T13:12:13Z",
	"updated_at": "2016-01-28T13:12:16Z",
	"cloud_status": "healthy"
}
</pre>

You can change this file to suite any changes you require (or use it as it is) and apply it to other users in your account using the `apply-profile` command.

<div class="notice notice-info">
  <h3>Note</h3>
  <p>You can download the same Access Profile from the web dashboard, under each user's access rights page under the Teams left hand menu (click on the Accounts on top right to get there).</p>
</div>

<h2 id="apply-profile">Apply Profile command</h2>

Apply Profile allows you to apply a user's Access Profile to another one. To use this command you need to have an Access Profile as a `json` file. This can be generated using the `users show` command with the `json` option. Once you have the file you can modify it to make any changes you require in the Access Profile.

<kbd>
$ cx users apply-profile jack@gmail.com --json=/tmp/jim_profile.json
</kbd>

This will apply Jim's profile to Jack.

<p>By default Access Profiles will be <i>added</i> to the user. This means if any access right in the uploaded profile will be added to the user's existing access rights. To overwrite a user's Access Profile with an uploaded one, add a <code>json</code> node to the profile called <code>override</code> with the value <code>true</code>. See the example below: </p>

<pre class="prettyprint">
{
	"access_profile": {
		"account_profile": {
			"can_edit_git_key": false,
			"default_roles": [
				"Viewer"
			]
		},
		"stack_profiles": [
			{
				"stack_uid": "b5f4eaaf56b5768f272ab875d2ba48b1",
				"role": "Administrator"
			}
		]
	},

  "override" : true
}
</pre>

<div class="notice notice-info">
  <h3>A note on overwriting Access Profiles</h3>
  <p>Any missing attribute for the <code>json</code> Access Profile will be left unchanged even if the <code>override</code> is <code>true</code>.
  Also, <code>overrirde</code> doesn't have any effects on the contents of the <code>account_profile</code> section.</p>
</div>
