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
			<tr><td>STK&#95;QUEUED</td><td>0</td><td>Pending analysis</td></tr>
			<tr><td>STK&#95;SUCCESS</td><td>1</td><td>Deployed successfully</td></tr>
			<tr><td>STK&#95;FAILED</td><td>2</td><td>Deployment failed</td></tr>
			<tr><td>STK&#95;ANALYSING</td><td>3</td><td>Analyzing</td></tr>
			<tr><td>STK&#95;ANALYSED</td><td>4</td><td>Analyzed</td></tr>
			<tr><td>STK&#95;QUEUED&#95;FOR&#95;DEPLOYING</td><td>5</td><td>Queued for deployment</td></tr>
			<tr><td>STK&#95;DEPLOYING</td><td>6</td><td>Deploying</td></tr>
			<tr><td>STK&#95;TERMINAL&#95;FAILURE</td><td>7</td><td>Unable to analyze</td></tr>
		</tbody>
	</thead>
</table>
