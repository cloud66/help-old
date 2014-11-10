---
layout: post
template: two-col
title:  "Replacing SQLite with MySQL or PostgreSQL"
so_title: "sqlite"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1895-09-26 15:33:13
categories: 
lead: SQLite is not suitable for production environments
search-tags: ['']
tags: ['Database']
tutorial: true
difficulty: 0
---


## Instructions
Switching to another SQL-based database is easy, and the following instructions show you how to switch to MySQL or PostgreSQL in five simple steps.

### MySQL

<ol class="article-list">
	<li>Replace <code>adapter: sqlite</code> with <code>adapter: mysql2</code> in your config/database.yml file.</li>
	<li>Replace <code>gem 'sqlite*'</code> with <code>gem 'mysql2'</code> in your Gemfile.</li>
	<li>Run <code>bundle install</code>.</li>
    <li>Commit and check changes in.</li>
    <li>Rebuild your stack.</li>
</ol>

### PostgreSQL

<ol class="article-list">
	<li>Replace <code>adapter: sqlite</code> with <code>adapter: postgresql</code> in your config/database.yml file.</li>
	<li>Replace <code>gem 'sqlite*'</code> with <code>gem 'pg'</code> in your Gemfile.</li>
	<li>Run <code>bundle install</code>.</li>
    <li>Commit and check changes in.</li>
    <li>Rebuild your stack.</li>
</ol>

More information about [databases](http://help.cloud66.com/database-management/database-management) supported by Cloud 66.