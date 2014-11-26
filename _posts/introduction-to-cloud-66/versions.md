---
layout: post
template: one-col
title:  "Technical specifications"
date:   2022-09-24 10:51:22
categories: introduction-to-cloud-66
lead: Cloud 66 technical specifications
search-tags: ['']
tags: ['Maintenance']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#os">Operating system</a>
    </li>
    <li>
        <a href="#clouds">Supported cloud providers</a>
    </li>
    <li>
        <a href="#frameworks">Supported frameworks</a>
    </li>
    <li>
        <a href="#versions">Component versions</a>
    </li>
</ul>

<h2 id="os">Operating system</h2>
Depending on which cloud you deploy to, your servers will be deployed with <b>Ubuntu 14.04 LTS</b> or <b>Debian 7.0 Wheezy</b>.

<h2 id="clouds">Supported cloud providers</h2>
Cloud 66 currently supports the following cloud providers:

<ul class="list">
    <li><a href="/deployment/amazon-web-services-cloud" target="_blank">Amazon Web Services</a></li>
    <li><a href="/deployment/digitalocean-cloud" target="_blank">Digital Ocean</a></li>
    <li><a href="/deployment/google-compute-engine-cloud" target="_blank">Google Compute Engine</a></li>
    <li><a href="/deployment/joyent-cloud" target="_blank">Joyent</a></li>
    <li><a href="/deployment/linode-cloud" target="_blank">Linode</a></li>
    <li><a href="/deployment/rackspace-cloud" target="_blank">Rackspace</a></li>
    <li><a href="/deployment/vexxhost-cloud" target="_blank">Vexxhost</a></li>
</ul>

<h2 id="frameworks">Supported frameworks</h2>
We currently support Rack-based applications - Ruby on Rails, Sinatra and Padrino. Join our [beta program](https://cloud66.typeform.com/to/wnHfN8) to gain access to our newest features.

<h2 id="versions">Component versions</h2>
Cloud 66 servers have two types of components with differing policies on versioning.

<h3 id="apt">Components built via apt-packages</h3>
We don't have fine-grain control over the version, and use the latest version available via the apt source.

<h3 id="source">Components built from source</h3>
Cloud 66 maintains an internal list of versions for most components built from source, which is updated periodically after testing.

You are free to specify a version for a number of components in your [manifest file](/building-your-stack/manifest-files).

<div class="notice notice-warning">
    <h3>Warning</h3>
    <p>We cannot take responsibility for issues arising from non-recognized or incompatible versions.</p>
</div>

<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Component</th>
            <th align="center">Default version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ElasticSearch</td>
            <td>1.3.2</td>
        </tr>
        <tr>
            <td>LibYAML</td>
            <td>0.1.6</td>
        </tr>
        <tr>
            <td>MongoDB</td>
            <td>2.4.10</td>
        </tr>
        <tr>
            <td>Phusion Passenger</td>
            <td>4.0.50</td>
        </tr>
        <tr>
            <td>PostGIS</td>
            <td>2.1.3</td>
        </tr>
        <tr>
            <td>PostgreSQL</td>
            <td>9.3.5</td>
        </tr>
        <tr>
            <td>Redis</td>
            <td>2.8.13</td>
        </tr>
        <tr>
            <td>Ruby</td>
            <td>2.1.3</td>
        </tr>
    </tbody>
</table>

<div class="notice">
    <h3>Important</h3>
    <p>Would you like to suggest a version change? <a href="mailto:support@cloud66.com?subject=Version update">Email us</a>!</p>
</div>