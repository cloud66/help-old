---
layout: post
title:  "Stack Status"
date:   2013-09-24 10:51:22
categories: API
---

<p class="lead">Stack Status values and their meanings</p>

## Stack Status Values
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Status</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
		<tbody>
			<tr><td>STK_QUEUED</td><td>0</td><td>Pending analysis</td></tr>
			<tr><td>STK_SUCCESS</td><td>1</td><td>Deployed successfully</td></tr>
			<tr><td>STK_FAILED</td><td>2</td><td>Deployment failed</td></tr>
			<tr><td>STK_ANALYSING</td><td>3</td><td>Analyzing</td></tr>
			<tr><td>STK_ANALYSED</td><td>4</td><td>Analyzed</td></tr>
			<tr><td>STK_QUEUED_FOR_DEPLOYING</td><td>5</td><td>Queued for deployment</td></tr>
			<tr><td>STK_DEPLOYING</td><td>6</td><td>Deploying</td></tr>
			<tr><td>STK_TERMINAL_FAILURE</td><td>7</td><td>Unable to analyze</td></tr>
		</tbody>
	</thead>
</table>
