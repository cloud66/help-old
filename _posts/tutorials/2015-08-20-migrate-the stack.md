---
layout: post
template: two-col
title:  "How to migrate your stack"
so_title: "Failover"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2015-08-20 15:33:13
categories: 
lead: Using failover to migrate your stack
search-tags: ['']
tags: ['migrate', 'stack migration']
tutorial: true
difficulty: 0
---

There are various reasons for cloning an existing stack - for example, you may want to deploy a production environment of an existing staging stack, or migrate across regions or data centers.

<li>The scenario is to migrate stack `A` to a new stack called `B`</li>

<h3>1. Set a failover group </h3>

- On your dashboard click on "Failover Groups"
- Add a new failover group
- Choose stack `A` as primary stack
- Click on "add group" 

<h3>2. Add a CNAME record in your DNS provider dashboard </h3>
To point at the address provided in the failover group and wait for 24 hours to propagate. While you are waiting for the DNS to get propagated you can follow the steps till step 8.

<div class="notice notice-warning">
	<h3>Note:</h3> 
	<p>If TTL of your DNS is 300 seconds you don't need to wait just continue till the end.</p>
</div>

<h3>3. Database backup</h3>
<p>On stack `A`set backup for your databases (through add-ins)</p>

<h3>4. Clone primary stack</h3>
Visit the stack page of stack `A`, click "Clone" from the right sidebar. This will allow you to choose a new stack name and environment. Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.

<h3>5. Add your database to backup stack</h3>

Add database or all the databases you need on to the stack `B`

<h3>6. Set up a replication between two stacks</h3>

On stack `B` go on stack page/database server (Redis, MySQL or etc.) and choose the server. On the right side bar click on "configure replication" choose stack A (you have to be Administrator on stack A otherwise it won't be listed). This makes stack B databases slave for stack `A`.

<h3>7. Add the second stack to the failover group</h3>

to add stack B as a backup to failover group, edit the related failover group and add stack B as a backup stack

<div class="notice notice-danger">
	<h3>Note:</h3> <p>Make sure DNS record for the failover group is populated</p>
</div>

<h3>8. Put the primary site in to maintenance mode:</h3>
- Go to the Stack page of `A`
- Click on Configure Network / Redirects
- Check <em>"Put stack in Maintenance Mode"</em> box
- Apply

<h3>9. Change the second database master</h3>

Do the step 6 but this time in the drop-down menu choose "No data source" (this makes `B`'s db, master)

<h3>10. swithch to the new stack</h3> 
Go to the failover group and switch to `B`.

<h3>11. Switch your DNS record to the new stack</h3>
You can now point your DNS to stack `B` and wait till it propagates (24 hours)