---
layout: post
template: two-col
title:  "Toolbelt gateway management"
date:   2040-01-18 01:01:01
categories: toolbelt
lead: Manage your gateways with the toolbelt
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Gateway management</a></li>
    <li><a href="#list">List gateways</a></li>
            <li>
                <ul>
                <li><a href="#usage1">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params1">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example1">Example</a></li>
                </ul>
            </li>
    <li><a href="#add">Add gateway</a></li>
            <li>
                <ul>
                <li><a href="#usage2">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params2">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example2">Example</a></li>
                </ul>
            </li>
    <li><a href="#open">Open gateway</a></li>
            <li>
                <ul>
                <li><a href="#usage3">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params3">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example3">Example</a></li>
                </ul>
            </li>
    <li><a href="#close">Close gateway</a></li>
            <li>
                <ul>
                <li><a href="#usage4">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params4">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example4">Example</a></li>
                </ul>
            </li>
    <li><a href="#remove">Remove gateway</a></li>
            <li>
                <ul>
                <li><a href="#usage5">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params5">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example6">Example</a></li>
                </ul>
            </li>
</ul>

<h2 id="about">Gateway management</h2>
These commands allow you to manage your gateways.

<h2 id="list">List gateways</h2>
This command lists all gateways on your account.

<h3 id="usage1">Usage</h3>

<pre class="prettyprint">
$ cx gateways list [ --verbose]
</pre>

<h3 id="params1">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>verbose</i> (optional) </td>
            <td>&mdash;</td>
            <td>Show more information about gateways</td>
        </tr>
    </tbody>
</table>

<h3 id="example1">Example</h3>

<pre class="prettyprint">
$ cx gateways list
$ cx gateways list --verbose
</pre>

<h2 id="add">Add gateway</h2>
This command add a gateway into your account.

<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx gateways add --name &lt;gateway name&gt; --address &lt;gateway address&gt; --username &lt;gateway username&gt;  --private-ip &lt;private ip of gateway&gt;
</pre>

<h3 id="params2">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>name</i></td>
            <td>&mdash;</td>
            <td>The name of the gateway</td>
        </tr>
        <tr>
            <td><i>address</i></td>
            <td>&mdash;</td>
            <td>Public address of the gateway. It could be the IP or DNS address</td>
        </tr>
        <tr>
            <td><i>username</i></td>
            <td>&mdash;</td>
            <td>The username which should be used to connect to gateway</td>
        </tr>
        <tr>
            <td><i>private-ip</i></td>
            <td>&mdash;</td>
            <td>The private ip of the gateway.</td>
        </tr>
    </tbody>
</table>

<h3 id="example2">Example</h3>

<pre class="prettyprint">
$ cx gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
</pre>

<h2 id="open">Open gateway</h2>
Make the gateway available to use with cloud66 for ttl amount of time.

<h3 id="usage3">Usage</h3>

<pre class="prettyprint">
$ cx gateways open --name &lt;gateway name&gt; --key &lt;The path to the gateway server key&gt; --ttl &lt;time to live &gt;
</pre>

<h3 id="params3">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>name</i></td>
            <td>&mdash;</td>
            <td>The name of the gateway</td>
        </tr>
        <tr>
            <td><i>key</i></td>
            <td>&mdash;</td>
            <td>The path to the key you want to add</td>
        </tr>
        <tr>
            <td><i>ttl</i></td>
            <td>&mdash;</td>
            <td>Amount of time you want the gateway available (e.g 1h, 30m, 30s,... )</td>
        </tr>
    </tbody>
</table>

<h3 id="example3">Example</h3>

<pre class="prettyprint">
$ cx gateways open --name aws_bastion --key /tmp/gateway.pem --ttl 45m
</pre>

<h2 id="close">Close gateway</h2>
Invalidate the gateway key so it will not be available for cloud66 usage.

<h3 id="usage4">Usage</h3>

<pre class="prettyprint">
$ cx gateways close --name &lt;gateway name&gt;
</pre>

<h3 id="params4">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>name</i></td>
            <td>&mdash;</td>
            <td>The name of the gateway</td>
        </tr>
    </tbody>
</table>

<h3 id="example4">Example</h3>

<pre class="prettyprint">
$ cx gateways close --name aws_bastion
</pre>

<h2 id="remove">Remove gateway</h2>
This command will remove the gateway from your account

<h3 id="usage5">Usage</h3>

<pre class="prettyprint">
$ cx gateways remove --name &lt;gateway name&gt;
</pre>

<h3 id="params5">Parameters</h3>
<table class='table table-bordered table-striped table-small'>
    <thead>
        <tr>
            <th align="center">Parameter</th>
            <th align="center">Default</th>
            <th align="center">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>name</i></td>
            <td>&mdash;</td>
            <td>The name of the gateway</td>
        </tr>
    </tbody>
</table>

<h3 id="example5">Example</h3>

<pre class="prettyprint">
$ cx gateways remove --name aws_bastion
</pre>

