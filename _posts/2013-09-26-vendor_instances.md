---
layout: post
title:  "Cloud Server Sizes"
date:   2013-09-24 10:51:22
categories: stack-features
---

<p class="lead">We configure the number of running threads in Nginx based on instance size and the cloud provider.</p>

## Nginx Configuration
Stacks deployed with Cloud 66 use nginx as their frontend. You can find the <a href="/help/nginx_settings">nginx configuration</a> that's pushed out. The number of workers running nginx are dependend on the number of CPU cores of the instance. Here is how they are configured by default.

### Amazon EC2
<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="70%"/>
    <col width="30%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Instance Size</th>
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		<td>m1.small</td><td>1</td>
		</tr>
		<tr>
		<td>m1.medium</td><td>2</td>
		</tr>
		<tr>
		<td>m1.large</td><td>4</td>
		</tr>
		<tr>
		<td>m1.xlarge</td><td>8</td>
		</tr>
		<tr>
		<td>m3.xlarge</td><td>13</td>
		</tr>
		<tr>
		<td>m3.2xlarge</td><td>26</td>
		</tr>
		<tr>
		<td>t1.micro</td><td>1</td>
		</tr>
		<tr>
		<td>m2.xlarge</td><td>7</td>
		</tr>
		<tr>
		<td>m2.2xlarge</td><td>13</td>
		</tr>
		<tr>
		<td>m2.4xlarge</td><td>26</td>
		</tr>
		<tr>
		<td>c1.medium</td><td>5</td>
		</tr>
		<tr>
		<td>c1.xlarge</td><td>20</td>
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
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			512MB Standard Instance</td><td>1</td>
		</tr>
		<tr>
			<td>
			1GB Standard Instance</td><td>2</td>
		</tr>
		<tr>
			<td>
			2GB Standard Instance</td><td>4</td>
		</tr>
		<tr>
			<td>
			4GB Standard Instance</td><td>4</td>
		</tr>
		<tr>
			<td>
			8GB Standard Instance</td><td>8</td>
		</tr>
		<tr>
			<td>
			15GB Standard Instance</td><td>8</td>
		</tr>
		<tr>
			<td>
			30GB Standard Instance</td><td>8</td>
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
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Linode 1024</td><td>8</td></tr>
		<tr><td>Linode 2048</td><td>8</td></tr>
		<tr><td>Linode 4GB</td><td>8</td></tr>
		<tr><td>Linode 8GB</td><td>8</td></tr>
		<tr><td>Linode 16GB</td><td>8</td></tr>
		<tr><td>Linode 24GB</td><td>8</td></tr>
		<tr><td>Linode 32GB</td><td>8</td></tr>
		<tr><td>Linode 40GB</td><td>8</td></tr>
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
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>Extra Small 512 MB</td><td>1</td></tr>
		<tr><td>Small 1GB</td><td>1</td></tr>
		<tr><td>Medium 2GB</td><td>2</td></tr>
		<tr><td>Medium 4GB</td><td>4</td></tr>
		<tr><td>Large 16GB</td><td>12</td></tr>
		<tr><td>Large 8GB</td><td>8</td></tr>
		<tr><td>XL 32GB</td><td>16</td></tr>
		<tr><td>XXL 48GB</td><td>16</td></tr>
		<tr><td>XXXL 64GB</td><td>16</td></tr>
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
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>512MB - 1 CPU</td><td>1</td></tr>
		<tr><td>1GB - 1 CPU</td><td>1</td></tr>
		<tr><td>2GB - 2 CPU</td><td>2</td></tr>
		<tr><td>4GB - 2 CPU</td><td>2</td></tr>
		<tr><td>8GB - 4 CPU</td><td>4</td></tr>
		<tr><td>16GB - 8 CPU</td><td>8</td></tr>
		<tr><td>32GB - 12 CPU</td><td>12</td></tr>
		<tr><td>48GB - 16 CPU</td><td>16</td></tr>
		<tr><td>64GB - 20 CPU</td><td>20</td></tr>
		<tr><td>96GB - 24 CPU</td><td>24</td></tr>
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
			<th>Number of Workers</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>1 CPU, 512MB</td><td>1</td></tr>
		<tr><td>1 CPU, 1GB</td><td>1</td></tr>
		<tr><td>1 CPU, 2GB</td><td>1</td></tr>
		<tr><td>1 CPU, 4GB</td><td>1</td></tr>
		<tr><td>3 CPU, 16GB</td><td>3</td></tr>
		<tr><td>2 CPU, 8GB</td><td>2</td></tr>
	</tbody>
</table>

