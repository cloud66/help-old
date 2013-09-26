---
layout: post
title:  "Running Rails console"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">You can easily run Rails console with a single command.</p>

## On your servers

Go on your `RAILS_STACK_PATH` and run the following command:

<p>
<kbd>bundle exec rails c &lt;environment&gt;</kbd>
</p>

<div class="notice">
    <h3>Note</h3>
	<p>Possible values for &lt;environment&gt; :</p>
    <ul>
		<li>development (default)</li>
		<li>test</li>
		<li>production</li>
    </ul>
</div>

To have a terminal access to your servers, please refer to this [documentation](/help/shell_to_your_servers).
