---
layout: post
template: two-col
title:  "Toolbelt environment variables"
date:   2037-01-01 01:01:01
categories: toolbelt
lead: List and set environment variables
search-tags: ['environment variables','toolbelt','commandline']
tags: ['Toolbelt']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li><a href="#about">Environment variable setup</a></li>
	<li><a href="#list">List environment variables</a></li>
	        <li>
                <ul>
                <li><a href="#usage">Usage</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#params">Parameters</a></li>
                </ul>
            </li>
            <li>
                <ul>
                <li><a href="#example">Example</a></li>
                </ul>
            </li>
	<li><a href="#set">Set environment variables</a></li>
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
</ul>

<h2 id="about">Environment variable setup</h2>
These commands allow you to list and set environment variables on your stack.

<h2 id="list">List environment variables</h2>
<h3 id="usage">Usage</h3>

<pre class="prettyprint">
$ cx env-vars [-s &lt;stack&gt;] [environment_variables]
</pre>

<h3 id="params">Parameters</h3>

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
            <td><i>stack</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>environment variables</i> (optional)</td>
            <td>&mdash;</td>
            <td>List of multiple environment variables as separate parameters</td>
        </tr>
    </tbody>
</table>

<h3 id="example">Example</h3>

<pre class="prettyprint">
$ cx env-vars -s My_Awesome_App
</pre>

<h2 id="set">Set environment variables</h2>
<h3 id="usage2">Usage</h3>

<pre class="prettyprint">
$ cx env-vars-set [-s &lt;stack&gt;] &lt;setting&gt; &lt;value&gt;
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
            <td><i>stack</i></td>
            <td>&mdash;</td>
            <td>Name of the stack</td>
        </tr>
        <tr>
            <td><i>setting</i></td>
            <td>&mdash;</td>
            <td>Name of environment variable</td>
        </tr>
        <tr>
            <td><i>value</i></td>
            <td>&mdash;</td>
            <td>Value for environment variable</td>
        </tr>
    </tbody>
</table>

<h3 id="example2">Example</h3>

<pre class="prettyprint">
$ cx env-var-set -s My_Awesome_App FIRST_VAR 123
</pre>
