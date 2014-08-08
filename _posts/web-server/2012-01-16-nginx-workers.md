---
layout: post
template: two-col
title:  "Nginx worker configurations"
so_title: "nginx"
date:   2033-09-24 10:51:22
categories: web-server
lead: The size of your instance affects your nginx configuration
search-tags: ['']
tags: ['Web server']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#config">Nginx configuration</a>
        <li>
            <ul>
                <li><a href="#aws">Amazon EC2</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#digitalocean">DigitalOcean</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#joyent">Joyent</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#linode">Linode</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#rackspace">Rackspace</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#telefonica">Telefonica</a></li>
            </ul>
        </li>
        <li>
            <ul>
                <li><a href="#vexxhost">Vexxhost</a></li>
            </ul>
        </li>
	</li>
</ul>

<h2 id="config">Nginx configuration</h2>
Stacks deployed with Cloud 66 use nginx as their frontend. Apart from the <a href="/web-server/nginx-config.html">nginx configuration</a> used, the number of workers running nginx are dependant on the number of CPU cores of the instance:
<h3 id="aws">Amazon EC2</h3>
<table class="table table-bordered table-striped">
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
		<td>t1.micro</td><td class="num">1</td>
		</tr>
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
        <td>m3.medium</td><td class="num">3</td>
        </tr>
        <tr>
       	<td>m3.large</td><td class="num">6</td>
        </tr>
		<tr>
		<td>m3.xlarge</td><td class="num">13</td>
		</tr>
		<tr>
		<td>m3.2xlarge</td><td class="num">26</td>
		</tr>
		<tr>
		<td>m2.xlarge</td><td class="num">6</td>
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
		<tr>
		<td>c3.large</td><td class="num">7</td>
		</tr>
		<tr>
		<td>c3.xlarge</td><td class="num">14</td>
		</tr>
		<tr>
		<td>c3.2xlarge</td><td class="num">28</td>
		</tr>
		<tr>
		<td>c3.4xlarge</td><td class="num">55</td>
		</tr>
		<tr>
		<td>c3.8xlarge</td><td class="num">108</td>
		</tr>
		<tr>
		<td>cc2.8xlarge</td><td class="num">88</td>
		</tr>
		<tr>
		<td>i2.xlarge</td><td class="num">4</td>
		</tr>
		<tr>
		<td>i2.2xlarge</td><td class="num">8</td>
		</tr>
		<tr>
		<td>i2.4xlarge</td><td class="num">16</td>
		</tr>
		<tr>
		<td>i2.8xlarge</td><td class="num">32</td>
		</tr>
		<tr>
		<td>cr1.8xlarge</td><td class="num">88</td>
		</tr>
		<tr>
		<td>hi1.4xlarge</td><td class="num">35</td>
		</tr>
		<tr>
		<td>hs1.8xlarge</td><td class="num">35</td>
		</tr>
		<tr>
		<td>cg1.4xlarge</td><td class="num">33</td>
		</tr>
		<tr>
		<td>g2.2xlarge</td><td class="num">26</td>
		</tr>
	</tbody>
</table>

<h3 id="digitalocean">DigitalOcean</h3>

<table class="table table-bordered table-striped">
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

<h3 id="joyent">Joyent</h3>

<table class="table table-bordered table-striped">
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

<h3 id="linode">Linode</h3>

<table class="table table-bordered table-striped">
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

<h3 id="rackspace">Rackspace</h3>

<table class="table table-bordered table-striped">
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

<h3 id="telefonica">Telefonica</h3>

<table class="table table-bordered table-striped">
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

<h3 id="vexxhost">Vexxhost</h3>

<table class="table table-bordered table-striped">
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
		<tr><td>512 MB</td><td class="num">2</td></tr>
		<tr><td>1 GB</td><td class="num">4</td></tr>
		<tr><td>2 GB</td><td class="num">4</td></tr>
		<tr><td>4GB</td><td class="num">4</td></tr>
		<tr><td>8 GB</td><td class="num">8</td></tr>
		<tr><td>16 GB</td><td class="num">8</td></tr>
		<tr><td>24 GB</td><td class="num">8</td></tr>
		<tr><td>32 GB</td><td class="num">16</td></tr>
		<tr><td>48 GB</td><td class="num">16</td></tr>
		<tr><td>64 GB</td><td class="num">16</td></tr>
	</tbody>
</table>
