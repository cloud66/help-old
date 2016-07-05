---
layout: post
template: one-col
title:  "Elasticsearch scaling"
so_title: "elasticsearch"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   2016-05-25 14:22:22
categories: database-management
lead: Cloud 66 supports Elasticsearch horizontal scaling
search-tags: ['elasticsearch', 'scaling', 'nodes', 'cluster', 'shard']
tags: ['Elasticsearch scaling']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#about">About scaling your Elasticsearch cluster</a>
	</li>
	<li>
		<a href="#recommendations">General recommendations</a>
	</li>
</ul>

<h2 id="about">About scaling your Elasticsearch cluster</h2>
You can scale your Elasticsearch cluster through the Cloud 66 dashboard on the Elasticsearch server group page.

Elasticsearch scaling works by splitting your **indices** into **shards**, and placing them on an Elasticsearch running instance called a **node** on another server. A collection of nodes is called a **cluster**. 

You specify the number of shards for individual indices when creating them, and can dynamically change the number of replicas with the API. 

By moving primary and replica shards to different nodes, Elasticsearch achieves both data reduncancy and improved performance.

<h2 id="recommendations">General recommendations</h2>
- **It is preferable to scale to three or more servers.** This is because that in order to avoid a [split brain](https://en.wikipedia.org/wiki/Split-brain_(computing)), there must be a majority of the master eligible nodes present for the cluster to be active and elect a master node. For two nodes this number is two, so loss of connectivity between the nodes for whatever reason will render the cluster inoperable until connectivity is restored.

- **Please make sure that all of your indices have replicas!** Elasticsearch distributes the replica shards such that if any one server goes down, a replica shard on another server will be promoted to a primary shard, so there is no loss of data. However, if the server holds the only primary shard and there are no replicas, you will lose data.

- Elasticsearch and its underlying search engine, Lucene, **are extremely RAM hungry applications**. Running them on low RAM servers is highly unadvisable, as illustrated by the next point. 

- Unlike more traditional database stores that will attempt to perform less strenuous operations if server resourses are limited, **Elasticsearch assumes you give it enough resources to work with, and will crash if that is not the case**. As such, please stress test with realistic data sets for your application before using Elasticsearch in production. We cannot advise you how much resources your cluster will require, as it is very much dependent on your application.

- Scaling will produce a node that is both master-eligible, and data storing. Dedicated master or data nodes are currently not supported.
