---
layout: post
template: two-col
title:  "Asset Pipeline Compilation"
date:   1980-09-24 10:51:22
categories: how-to
lead: Improve performance in Rails applications => 3.1.0
---


## Requirements

Asset pipeline compilation uses *ExecJS* to run *JavaScript* code from within Ruby.

The ExecJS library in turn requires that you have at least one library available on your server that is capable of compiling Javascript.
Libraries for Javascript compilation on your server that are currently supported by Cloud 66 are:

1. **therubyracer** &mdash;  Google V8 embedded within Ruby. Installed by including "therubyracer" in your Gemfile.
2. **Node.js** &mdash; Cloud 66 will *automatically* install this on your server if you don't include "therubyracer" in your Gemfile.


## Enabling/Disabling Asset Pipeline Precompilation

You can enable/disable asset pipeline precompilation when you setup your stack or in your manifest file.

![Asset Pipeline Setting](http://cdn.cloud66.com.s3.amazonaws.com/images/help/asset_pipeline.png)

This will be hidden if you have enabled/disabled asset pipeline compilation in your application.rb or in the manifest file.

<div class="notice notice-error">

    <h3>Important</h3>
    <p>
        If you disable Asset Pipeline Precompilation but want to use Asset Pipeline Compilation, you need to use Live Compilation (on demand) by adding the following line into your <kbd>application.rb</kbd>:
    </p>
    <p>
        <pre>config.assets.compile = true</pre>
    </p>
</div>

<p>Live Compilation (on-demand) <a href="http://guides.rubyonrails.org/asset_pipeline.html#live-compilation">does not perform as well as Precompilation</a> and is generaly not recommended for production environments.
</p>


### application.rb

Asset Pipeline precompilation will be disabled if <code>config.assets.enabled</code> variable is assigned to *false* in your <code>application.rb</code> file:

<pre class="terminal">
config.assets.enabled = false
</pre>

<p>
    <span class="highlighted">Setting this value to false means that your application doesn't use the asset pipeline at all, so precompilation is not relevant</span>.
</p>

### manifest.yml

Use our [Cloud 66 manifest file](/stack-features/manifest-files.html) to enable/disable asset pipeline precompilation using the following parameter with a true or false, find <td>an example</td> below:

<pre class="terminal">
development:
rails:
configuration:
use&#95;asset&#95;pipeline: true
</pre>

There is an hierarchical order to set up asset pipeline precompilation. The top one will override the others.

<ol>
    <li>In application.rb</li>
    <li>In the Cloud 66 manifest file</li>
    <li>On Cloud 66 interface</li>
</ol>

## Compiling Only the Modified Assets

Cloud 66 supports this through [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3). All you need to do is to add Turbo Sprocket gem to your Gemfile. This is only supported for Rails 3.2 and above.