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
Your servers are deployed with <b>Ubuntu 14.04 LTS</b>.

<h2 id="clouds">Supported cloud providers</h2>
Cloud 66 currently supports the following cloud providers:

<ul class="list">
    <li><a href="/deployment/amazon-web-services-cloud" target="_blank">Amazon Web Services</a></li>
    <li><a href="/deployment/digitalocean-cloud" target="_blank">Digital Ocean</a></li>
    <li><a href="/deployment/google-compute-engine-cloud" target="_blank">Google Compute Engine</a></li>
    <li><a href="/deployment/linode-cloud" target="_blank">Linode</a></li>
    <li><a href="/deployment/microsoft-azure-cloud" target="_blank">Microsoft Azure</a></li>
    <li><a href="/deployment/rackspace-cloud" target="_blank">Rackspace</a></li>
    <li><a href="/deployment/vexxhost-cloud" target="_blank">Vexxhost</a></li>    
    <li><a href="/deployment/cloud-a-cloud" target="_blank">CloudA</a></li>    
</ul>

<h2 id="frameworks">Supported frameworks</h2>
We support end-to-end Docker deployments, meaning that we support any type of application. You can either let us build your Docker image (with a Dockerfile), or provide your own.

<h2 id="versions">Component versions</h2>
Cloud 66 servers have two types of components with differing policies on versioning.

<h3 id="apt">Components built via apt-packages</h3>
We don't have fine-grain control over the version, and use the latest version available via the apt source.

<h3 id="source">Components built from source</h3>
Cloud 66 maintains an internal list of versions for most components built from source, which is updated periodically after testing.

You are free to specify a version for a number of components in your [manifest file](/building-your-stack/getting-started-with-manifest-files).

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
            <td>Docker</td>
            <td>1.5.0</td>
        </tr>
        <tr>
            <td>ElasticSearch</td>
            <td>1.4.4</td>
        </tr>
        <tr>
            <td>LibYAML</td>
            <td>0.1.6</td>
        </tr>
        <tr>
            <td>MongoDB</td>
            <td>2.6.7</td>
        </tr>
        <tr>
            <td>MySQL</td>
            <td>5.6.19</td>
        </tr>
        <tr>
            <td>Phusion Passenger</td>
            <td>4.0.59</td>
        </tr>
        <tr>
            <td>PostGIS</td>
            <td>2.1.5</td>
        </tr>
        <tr>
            <td>PostgreSQL</td>
            <td>9.4.1</td>
        </tr>
        <tr>
            <td>Redis</td>
            <td>2.8.19</td>
        </tr>
        <tr>
            <td>Ruby</td>
            <td>1.9.3 - 2.2.1</td>
        </tr>
        <tr>
            <td>Weave</td>
            <td>0.9.0</td>
        </tr>        
    </tbody>
</table>

<div class="notice">
    <h3>Important</h3>
    <p>Would you like to suggest a version change? <a href="mailto:support@cloud66.com?subject=Version update">Email us</a>!</p>
</div>