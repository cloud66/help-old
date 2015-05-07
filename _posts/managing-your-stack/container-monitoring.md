---
layout: post
template: one-col
title:  "Container monitoring"
so_title: "monitoring"
date:   2085-09-24 10:51:22
categories: managing-your-stack
lead: We help you monitor your container CPU, memory, disk and network usage
search-tags: []
tags: ['']
---

We use [cAdvisor](https://github.com/google/cadvisor) to monitor your containers for their CPU, memory, disk-io and network usage. cAdvisor is a running daemon that collects, aggregates, processes, and exports information about running containers, it also has native support for Docker containers. The charts for this information are displayed on your container page, and you can choose which interval you'd like to see.

#### CPU usage
Contrary to other CPU usage metrics, the cAdvisor does not collect percentages - instead it collects nanoseconds that each container used. We are using collected information by cAdvisor to calculate the percentage of CPU usage.

#### Memory usage
Memory udage chart will show memory usage of a container , this includes all memory regardless of when it was accessed.

#### Disk-IO usage
Disk-IO chart shows number of bytes transferred to/from each disk.

#### Network usage
Network chart shows number of bytes transferred/received to/from each container.
