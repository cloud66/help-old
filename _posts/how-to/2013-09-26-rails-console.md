---
layout: post
template: two-col
title:  "Running Rails console"
date:   2013-09-26 15:33:13
categories: how-to
lead: You can easily run Rails console with a single command.
---


## On your servers

Go on your `STACK_PATH` and run the following command:

<pre class="terminal">
<kbd>bundle exec rails c &lt;environment&gt;</kbd>
</pre>

## Possible values for &lt;environment&gt; :
<ul>
    <li>development (default)</li>
    <li>test</li>
    <li>production</li>
</ul>


 [Getting terminal access to your servers](/how-to/shell-to-your-servers.html).
