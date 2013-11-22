---
layout: post
template: two-col
title:  "Unicorn Rack Server"
date:   2013-09-24 10:51:22
categories: web-server
lead: Run your Rack apps with Unicorn
---


## Choosing Unicorn as your Rack server
To run a Unicorn Rack server, add a line to your Procfile labeled as custom&#95;web. Here is an example:

<pre class='terminal'>
custom&#95;web: bundle exec unicorn&#95;rails -c config/unicorn.rb -E $RAILS&#95;ENV -D
</pre>
Please take note that Unicorn is running in Daemon mode with the `-D` parameter.

<div class="notice">
	<h3>Important</h3>
	<p>You need to choose your web server at the time of initial build of the stack. Changes to the web server will not be applied after your stack has initially been analyzed. Passenger is used by default.</p>
</div>

Here is an example of a unicorn.rb configuration file that is compatible with Cloud 66 requirements (following the Procfile line above, this should be located under the `config` folder of your Rails app):

<pre class='prettyprint lang-ruby'>
	worker&#95;processes 2

	working&#95;directory "#{ENV['RAILS&#95;STACK&#95;PATH']}"

	listen "/tmp/web&#95;server.sock", :backlog => 64

	timeout 30

	pid '/tmp/web&#95;server.pid'

	stderr&#95;path "#{ENV['RAILS&#95;STACK&#95;PATH']}/log/unicorn.stderr.log"
	stdout&#95;path "#{ENV['RAILS&#95;STACK&#95;PATH']}/log/unicorn.stdout.log"

	preload&#95;app true
	GC.respond&#95;to?(:copy&#95;on&#95;write&#95;friendly=) and
		GC.copy&#95;on&#95;write&#95;friendly = true

	check&#95;client&#95;connection false

	before&#95;fork do |server, worker|
		old&#95;pid = '/tmp/web&#95;server.pid.oldbin'
		if File.exists?(old&#95;pid) && server.pid != old&#95;pid
			begin
				Process.kill("QUIT", File.read(old&#95;pid).to&#95;i)
			rescue Errno::ENOENT, Errno::ESRCH
				# someone else did our job for us
			end
		end

		defined?(ActiveRecord::Base) and
			ActiveRecord::Base.connection.disconnect!
	end

	after&#95;fork do |server, worker|
		defined?(ActiveRecord::Base) and
			ActiveRecord::Base.establish&#95;connection
	end
</pre>

## Web server process management
Cloud 66 uses the following signals to control Unicorn:

### kill -QUIT &lt;pid>
Stop the process

### kill -USR2 &lt;pid>
Spin off another master process.

### kill -s TTIN &lt;pid>
Add a new worker to the master process

## Manual control of the web servers
To control your web servers manually you can use the following commands:

### Stop the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server stop
</kbd>
</p>

### Start the web server
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server quit
</kbd><br/>
<kbd>
	sudo bluepill load /etc/bluepill/autoload/cloud66&#95;web&#95;server.pill
</kbd>
</p>

### Restart the web server (zero-downtime)
<p>
<kbd>
	sudo bluepill cloud66&#95;web&#95;server restart
</kbd>
</p>