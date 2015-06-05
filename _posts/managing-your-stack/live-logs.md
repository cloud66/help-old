---
layout: post
template: one-col
title:  "Live-Logs"
so_title: "live logs"
date:   3999-01-28 10:51:22
categories: managing-your-stack
lead: Live stream logs from your Docker services
search-tags: []
tags: ['Management']
---

Live logs allow you to stream logs from your server, including Docker services and host logs. When you check one of the live log sources, we will automatically start listening to that source, and stream the output to your view. By default, the logs will be populated with the last 100 lines of the log (approximately). You can add log sources from the right hand side menu, via the groups or individual checkboxes, and for Docker stacks you can select these based on service too. When you click on a log source, it only sends logs for up to 10 minutes and then will automatically stop.

<div class="notice">
		<h3>Important</h3>
		<p>
			This feature is currently in beta, so please let us know if you have any issues with it.
		</p>
</div>


The logs are ephemeral, meaning that they will disappear from the UI once you navigate to a different page or refresh. This feature is intended as a live monitoring and debugging tool - to view historic logs you would still need to look at your servers manually or use a traditional logging provider.

You can select to view a log file by selecting it from the right menu, and all of the checked log sources will be appended to the central log UI in the order that they arrive. To make it easier for you to navigate the logs, we provide an easy way for you to zoom in on the log entries that happen around any given line (by clicking the source on the left side of the log line). The log title on each row is in the same color as the log source menu item, and as each log line comes in, the corresponding log source indicator will flash. This should help you to see which sources are sending data at a glance.

Note that log sources that are not checked will not have any log sources streamed in (and will therefore not flash). Simply clicking on the title of that log line will open a context of several previous and next lines <b>from the same log source</b>. You can search further backwards or forwards within this context by clicking the *previous context* or *next context* links. If you were to uncheck a previously checked source, the corresponding logs for that item will also be removed from the UI.

In terms of the filtering, this occurs dynamically over your logs, and you can filter the results down to only those that match your search term, or clear the filter at any time. Logs will still be streamed, but you'll only see new logs matching your filter until it's cleared.

If you have a lot of log volume coming in, you can autoscroll to remain on the tail of your logs, alternatively you can temporarily pause your log sources by clicking on the <i>pause</i> button. You can additionally clear existing logs from the UI with the <i>clear logs</i> button.