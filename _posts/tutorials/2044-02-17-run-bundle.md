---
layout: post
template: two-col
title:  "Running bundle installation"
date:   2044-02-17 15:33:13
categories: 
lead: Bundle Installation
search-tags: ['Bundle', 'Install']
tags: ['Deployment']
tutorial: true
difficulty: 0
---

**Bundle Install**

<ul><li>Elivate the permissions for the user : </li> 
<p>Certain user would like to have access to thier server as a root user.
This sometimes cause issue while loading thier environment varaibles. To be able to use the environment variables with the root account you can use this following command.</p>
<pre class= "prettyprint">
sudo su 
source /var/.cloud66_env 
</pre>
<p>First you will need to elivate the user to the root user by this command "sudo su". And after that you need to load the variable execute the following command <br>"source /var/.cloud66_env" </p>

<li>To run the assets as the nginx user : </li>

<p>User needs to run rails console as the nginx user. Please refer to the command below </p>
<pre class= "prettyprint">
cd $STACK_PATH
sudo -u nginx bash -c 'source /var/.cloud66_env && bundle exec rails c'
</pre>
</ul>