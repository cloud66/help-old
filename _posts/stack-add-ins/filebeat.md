---
layout: post
template: one-col
title:  "Filebeat"
date:   2016-05-19 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: stack-add-ins
lead: Simple web-based log analysis service for your servers
search-tags: ['filebeat','file beat','elk']
tags: ['Logs', 'Add ins']
---

## About using Filebeat
[Filebeat](https://www.elastic.co/products/beats/filebeat) is an open source file harvester, used to fetch logs files and feed them into Logstash, and this add-in makes it easy to add across your servers.

## Add Filebeat to your stack
To add Filebeat, access the add-ins menu of your stack and click _Filebeat_ under the _External Addins_ category.

We'll ask you for your ELK stack endpoint - if you don't have one, you can deploy one using our [EasyDeploy App Store](/deployment/easydeploy-repositories).

An ELK stack consists of Elasticsearch, Logstash, and Kibana. Logstash is an open source tool for collecting, parsing, and storing logs for future use. Kibana is a web interface that can be used to search and view the logs that Logstash has indexed. Both of these tools are based on Elasticsearch, which is used for storing logs

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>For Docker stacks this will be added to the host, not as a container.</p>
</div>
