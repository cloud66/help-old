---
layout: post
template: two-col
title:  "Running Rails console"
date:   1890-09-26 15:33:13
categories: how-to
lead: You can easily run Rails console with a single command.
---
Start by [SSHing to your server](/how-to/shell-to-your-servers.html). Then go to your `STACK_PATH` (eg. `cd $STACK_PATH`) and run the following command:

<pre class="terminal">
<kbd>bundle exec rails c &lt;environment&gt;</kbd>
</pre>

**Possible values for &lt;environment&gt;:**
<ul>
    <li>development (default)</li>
    <li>test</li>
    <li>production</li>
</ul>