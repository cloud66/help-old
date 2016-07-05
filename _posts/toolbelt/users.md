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

This command shows a list of all users you have access to. This is a list of all users within the organization you specify and have enough access rights to manage users for.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx --org &lt;organization_name&gt; users list
</pre>

<h3 id="params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>organization_name</i></td>
            <td>&mdash;</td>
            <td>Name of the organization -you can find it by using <em>cx info</em>-</td>
        </tr>
    </tbody></table>

<h3 id="example1">Examples</h3>

<pre class="prettyprint">
$ cx --org My_Awesome_org users list
</pre>

This will result in a simple list of users shows as below:

<pre>
Id  Email
1   jim@gmail.com
2   jack@gmail.com
</pre>


<h2 id="show">Show command</h2>

This command shows details about a single user.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx --org &lt;organization_name&gt; users show &lt;username&gt; [--json &lt;json_file_path&gt;]
</pre>

<h3 id="params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>organization_name</i></td>
            <td>&mdash;</td>
            <td>Name of the organization -you can find it by using <em>cx info</em>-</td>
        </tr>
        <tr> 
            <td><i>json_file_path</i></td>
            <td>&mdash;</td>
            <td>File path to save the user's info in json's format</td>
        </tr>
    </tbody></table>

 <h3 id="example2">Examples</h3>   

<pre class="prettyprint">
$ cx --org My_Awesome_org users show jim@gmail.com
$ cx --org My_Awesome_org users show jim@gmail.com --json /tmp/jim_profile.json
</pre>


You can change the json file to suite any changes you require (or use it as it is) and apply it to other users in your account using the `apply-profile` command.

<div class="notice notice-info">
  <h3>Note</h3>
  <p>You can download the same Access Profile from the web dashboard, under each user's access rights page under the Teams left hand menu (click on the Accounts on top right to get there).</p>
</div>

<h2 id="apply-profile">Apply Profile command</h2>

Apply Profile allows you to apply a user's Access Profile to another one. To use this command you need to have an Access Profile as a `json` file. This can be generated using the `users show` command with the `json` option. Once you have the file you can modify it to make any changes you require in the Access Profile.

<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx --org &lt;organization_name&gt; users apply-profile &lt;username&gt; --json &lt;json_file_path&gt; [--override]
</pre>

<h3 id="params">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>organization_name</i></td>
            <td>&mdash;</td>
            <td>Name of the organization -you can find it by using <em>cx info</em>-</td>
        </tr>
        <tr> 
            <td><i>json_file_path</i></td>
            <td>&mdash;</td>
            <td>File path to the saved json's file</td>
        </tr>
        <tr> 
            <td><i>override</i></td>
            <td>&mdash;</td>
            <td>will override the access rights instead of append</td>
        </tr>
    </tbody></table>

 <h3 id="example2">Examples</h3>   

<pre class="prettyprint">
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json --override
</pre>


These will apply Jim's profile to Jack's; first one will append the access rights and the second one will overwrite them.

<div class="notice notice-info">
  <h3>A note on overwriting Access Profiles</h3>
  <p>Any missing attribute for the <code>json</code> Access Profile will be left unchanged even if the <code>override</code> is <code>used</code>.
  Also, <code>overrirde</code> doesn't have any effects on the contents of the <code>account_profile</code> section.</p>
</div>
