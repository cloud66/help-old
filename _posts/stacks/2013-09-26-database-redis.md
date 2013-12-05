---
layout: post
template: two-col
title:  "Redis Servers"
date:   2013-09-24 10:51:22
categories: stacks
lead: Information about Cloud 66 support for Redis Databases
---


Redis databases are now automatically supported for new Cloud 66 stacks.
During analysis, Cloud 66 automatically detects whether you application relies on Redis or not.
This detection is based on the presence of the *Redis*, *Resque* or *Sidekiq*" gems.

After analysis, Cloud 66 will then present you with additional options for deployment if you want to deploy Redis.

## Redis Server Addresses

If you want Cloud 66 to deploy Redis, then you will need to ensure that the redis url in your source code is updated appropriately and checked in.
The easiest thing to do is to simply use the environment variable **REDIS&#95;ADDRESS** in your source that Cloud 66 will then ensure is populated appropriately.

Your resulting ruby code could then be (from a redis.rb initializer in this example)
<p>
<kbd>
	$redis = Redis.new(:host => ENV['REDIS&#95;ADDRESS'], :port => 6379)
</kbd>
</p>

<div class="notice">
	<h3>Important</h3>

	<p>Unlike with MySQL, PostgreSQL and MongoDB, Cloud 66 will not automatically update your Redis paths depending on where you deploy Redis. You will need to update you code yourself, and check it in. Using ENV['REDIS&#95;ADDRESS'] allows you to easily reference the location of your Redis server.</p>
</div>
