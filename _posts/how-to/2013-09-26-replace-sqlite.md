---
layout: post
title:  "Replacing SQLite with MySQL or PostgreSQL"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">While SQLite is easy to use, it is not intended as a production grade database and is not supported by Cloud 66.</p>

## Instructions
Switching to another SQL-based database is easy, and the following instructions show you how to switch to MySQL or PostgreSQL in five simple steps.

### MySQL

<ol>
	<li>
		<p>
			Replace <code>adapter: sqlite</code> with <code>adapter: mysql2</code> in your config/database.yml file.
		</p>
	</li>
	<li>
		<p>
			Replace <code>gem 'sqlite*'</code> with <code>gem 'mysql2'</code> in your Gemfile.
		</p>
	</li>
	<li>
    	<p>
    		Run <code>bundle install</code>.
    	</p>
    </li>
    <li>
        <p>
            Commit and check changes in.
        </p>
    </li>
    <li>
        <p>
           	Rebuild your stack.
        </p>
    </li>
</ol>

### PostgreSQL

<ol>
	<li>
		<p>
			Replace <code>adapter: sqlite</code> with <code>adapter: postgresql</code> in your config/database.yml file.
		</p>
	</li>
	<li>
		<p>
			Replace <code>gem 'sqlite*'</code> with <code>gem 'pg'</code> in your Gemfile.
		</p>
	</li>
	<li>
    	<p>
    		Run <code>bundle install</code>.
    	</p>
    </li>
    <li>
        <p>
            Commit and check changes in.
        </p>
    </li>
    <li>
        <p>
           	Rebuild your stack.
        </p>
    </li>
</ol>

Please visit the [databases](http://localhost:3000/help/databases) page to read more about databases supported by Cloud 66.