---
layout: post
template: two-col
title:  "Cloud Server Sizes"
date:   2013-09-24 10:51:22
categories: stack-features
lead: We configure the number of running threads in Nginx based on instance size and the cloud provider.
---


## Nginx Configuration
Stacks deployed with Cloud 66 use nginx as their frontend. You can find the <a href="/web-server/nginx-settings.html">nginx configuration</a> that's pushed out. The number of workers running nginx are dependend on the number of CPU cores of the instance. Here is how they are configured by default.

### Amazon EC2
<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%">
    <col width="30%">
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		<td>m1.small</td><td class="num">1</td>
		</tr>
		<tr>
		<td>m1.medium</td><td class="num">2</td>
		</tr>
		<tr>
		<td>m1.large</td><td class="num">4</td>
		</tr>
		<tr>
		<td>m1.xlarge</td><td class="num">8</td>
		</tr>
		<tr>
		<td>m3.xlarge</td><td class="num">13</td>
		</tr>
		<tr>
		<td>m3.2xlarge</td><td class="num">26</td>
		</tr>
		<tr>
		<td>t1.micro</td><td class="num">1</td>
		</tr>
		<tr>
		<td>m2.xlarge</td><td class="num">7</td>
		</tr>
		<tr>
		<td>m2.2xlarge</td><td class="num">13</td>
		</tr>
		<tr>
		<td>m2.4xlarge</td><td class="num">26</td>
		</tr>
		<tr>
		<td>c1.medium</td><td class="num">5</td>
		</tr>
		<tr>
		<td>c1.xlarge</td><td class="num">20</td>
		</tr>
	</tbody>
</table>

### Rackspace

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			512MB Standard Instance</td><td class="num">1</td>
		</tr>
		<tr>
			<td>
			1GB Standard Instance</td><td class="num">2</td>
		</tr>
		<tr>
			<td>
			2GB Standard Instance</td><td class="num">4</td>
		</tr>
		<tr>
			<td>
			4GB Standard Instance</td><td class="num">4</td>
		</tr>
		<tr>
			<td>
			8GB Standard Instance</td><td class="num">8</td>
		</tr>
		<tr>
			<td>
			15GB Standard Instance</td><td class="num">8</td>
		</tr>
		<tr>
			<td>
			30GB Standard Instance</td><td class="num">8</td>
		</tr>
	</tbody>
</table>

### Linode

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Linode 1024</td><td class="num">8</td></tr>
		<tr><td>Linode 2048</td><td class="num">8</td></tr>
		<tr><td>Linode 4GB</td><td class="num">8</td></tr>
		<tr><td>Linode 8GB</td><td class="num">8</td></tr>
		<tr><td>Linode 16GB</td><td class="num">8</td></tr>
		<tr><td>Linode 24GB</td><td class="num">8</td></tr>
		<tr><td>Linode 32GB</td><td class="num">8</td></tr>
		<tr><td>Linode 40GB</td><td class="num">8</td></tr>
	</tbody>
</table>

### Joyent

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Extra Small 512 MB</td><td class="num">1</td></tr>
		<tr><td>Small 1GB</td><td class="num">1</td></tr>
		<tr><td>Medium 2GB</td><td class="num">2</td></tr>
		<tr><td>Medium 4GB</td><td class="num">4</td></tr>
		<tr><td>Large 16GB</td><td class="num">12</td></tr>
		<tr><td>Large 8GB</td><td class="num">8</td></tr>
		<tr><td>XL 32GB</td><td class="num">16</td></tr>
		<tr><td>XXL 48GB</td><td class="num">16</td></tr>
		<tr><td>XXXL 64GB</td><td class="num">16</td></tr>
	</tbody>
</table>

### DigitalOcean

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>512MB - 1 CPU</td><td class="num">1</td></tr>
		<tr><td>1GB - 1 CPU</td><td class="num">1</td></tr>
		<tr><td>2GB - 2 CPU</td><td class="num">2</td></tr>
		<tr><td>4GB - 2 CPU</td><td class="num">2</td></tr>
		<tr><td>8GB - 4 CPU</td><td class="num">4</td></tr>
		<tr><td>16GB - 8 CPU</td><td class="num">8</td></tr>
		<tr><td>32GB - 12 CPU</td><td class="num">12</td></tr>
		<tr><td>48GB - 16 CPU</td><td class="num">16</td></tr>
		<tr><td>64GB - 20 CPU</td><td class="num">20</td></tr>
		<tr><td>96GB - 24 CPU</td><td class="num">24</td></tr>
	</tbody>
</table>

### Telefonica

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th class="num">Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>1 CPU, 512MB</td><td class="num">1</td></tr>
		<tr><td>1 CPU, 1GB</td><td class="num">1</td></tr>
		<tr><td>1 CPU, 2GB</td><td class="num">1</td></tr>
		<tr><td>1 CPU, 4GB</td><td class="num">1</td></tr>
		<tr><td>3 CPU, 16GB</td><td class="num">3</td></tr>
		<tr><td>2 CPU, 8GB</td><td class="num">2</td></tr>
	</tbody>
</table>

