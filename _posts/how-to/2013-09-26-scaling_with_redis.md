---
layout: post
template: two-col
title:  "Scaling up with Redis"
date:   2013-09-26 15:33:13
categories: how-to
lead: When a stack is created with Redis, the Redis connection is often initialized in the code using localhost.
---


## Scaling up
When scaling up, the new servers will look Redis on localhost (which doesn't exist). When Cloud 66 installs Redis as part of your stack we automatically create an ENV var "REDIS&#95;ADDRESS" that you can use to point the servers to your Redis address.

To initialize your Redis connection, change the server address to the **ENV&#91;'REDIS&#95;ADDRESS'&#93;** value and all your servers will point to the correct Redis instance!

<div class="notice">
	<h3>Important</h3>
	<p>
		Unlike with MySQL, PostgreSQL and MongoDB, Cloud 66 will not automatically update your Redis paths depending on where you deploy Redis. You will need to update the code yourself, and check it in. Using ENV['REDIS&#95;ADDRESS'] allows you to easily reference the location of your Redis server.
	</p>
</div>
