---
layout: post
template: two-col
title:  "Updating Toolbelt"
so_title: "toolbelt"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2042-03-06 14:26:13
categories: 
lead: updating your toolbelt
search-tags: ['']
tags: ['Getting started']
tutorial: true
difficulty: 0
---

Cloud 66 toolbelt makes it possible for users to interact with Cloud 66 from the comfort of command line :
<ul>
<p>We rollout update for our toolbelt periodically to allow users to have more features accesible through the command line.</p>
<p>We always try to keep our customer updated to the latest version of the toolbelt. Whenever a user executes <code>cx</code> command it will verify with the latest version and if you are using the older version it will automatically do a silent update to the latest version.</p>
<li>You can check the toolbelt version with the following command :</li>
<pre class="prettyprint">
cx -v
</pre>
For example:
<pre class="prettyprint">
$ cx -v
0.1.20
</pre>

<li>How to update the latest version of Toolbelt?</li>
<p>Having the latest version will allow you to manage your servers with the fetures released with the latest toolbelt version .You can update the latest version with the following command.</p>
<pre class="prettyprint">
cx update 
</pre>
<li>Do a user needs sudo command to update the Toolbelt?</li>
<p>Basically you don't need to use the sudo commnad to update the Toolbelt. There are many case, where the toolbelt is installed in the shared folder and so the toolbelt will not get automatically updated to the latest version. To be able to update the toolbelt you can elevate your permissions to SuperUser and execute the <code>cx update </code>command.</p>
<p><code>sudo su</code>- will put you into a root environment but it will ask you for your user password and than you can update the toolbelt.
<p>You can have alook at the example below :</p>
<pre class="prettyprint">
$sudo su
Password:
#cx update
#cx -v
0.1.20
#exit
$cx info
</pre>
<p>Once you have updated the toolbelt in root environment. You can check the detail of toolbelt with the following command <code>cx -info</code></p>

</ul>