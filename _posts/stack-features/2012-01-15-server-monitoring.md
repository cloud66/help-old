---
layout: post
template: two-col
title:  "Server monitoring"
so_title: "monitoring"
date:   2085-09-24 10:51:22
categories: stack-features
lead: We help you monitor your CPU, memory and disk space
---

We use [Collectd](https://collectd.org) to monitor your servers for their CPU, memory and disk space. Collectd is a light-weight daemon that collects, transfers and stores performance data for servers. The charts for this information are displayed on your server page, and you can choose which interval you'd like to see:

![Collectd interval](http://cdn.cloud66.com/images/help/collectd_interval.png)

#### CPU usage
Contrary to other CPU usage metrics, the [Collectd CPU plugin](https://collectd.org/wiki/index.php/Plugin:CPU) does not collect percentages - instead it collects "jiffies", the units of scheduling.
On many Linux systems there are circa 100 jiffies in one second, but this does not mean you will end up with a percentage.
Depending on system load, hardware, whether or not the system is virtualized and possibly half a dozen other factors there may be more or less than 100 jiffies in one second.
There is absolutely no guarantee that all states add up to 100, an absolute must for percentages.

![Collectd cpu usage](http://cdn.cloud66.com/images/help/collectd_cpu.png)

#### Memory usage
Collectd uses the [Memory plugin](https://collectd.org/wiki/index.php/Plugin:Memory) to collect physical memory utilization. The values are reported by their use by the operating system, and include _used_, _buffered_, _cached_ and _free_.

![Collectd memory usage](http://cdn.cloud66.com/images/help/collectd_memory.png)

#### Disk usage
Collectd uses the [DF plugin](https://collectd.org/wiki/index.php/Plugin:DF) to collect system usage information. It will show the same information as when running the `df` command directly on your server (divide the value given by 1024 to get MB).

![Collectd disk usage](http://cdn.cloud66.com/images/help/collectd_df.png)