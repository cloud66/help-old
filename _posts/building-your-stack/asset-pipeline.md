---
layout: post
template: one-col
title:  "Asset Pipeline Compilation"
so_title: "asset pipeline"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1980-09-24 10:51:22
categories: building-your-stack
lead: Improve performance in Rails applications => 3.1.0
search-tags: ['']
tags: ['Deployment']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#onoff">Enabling or disabling asset pipeline pre-compilation</a>
            <ul>
                <li><a href="#application">Application.rb</a></li>
            </ul>
            <ul>
                <li><a href="#manifest">Manifest.yml</a></li>
            </ul>
    </li>
    <li>
        <a href="#requirements">Asset pipeline compilation requirements</a>
    </li>
    <li>
        <a href="#modified">Compiling only modified assets</a>
    </li>
    <li>
        <a href="#speeding">About speeding up Rails deployments</a>
    </li>
</ul>

<h2 id="onoff">Enable/disable asset pipeline compilation</h2>
You can enable/disable asset pipeline precompilation for Rails stacks after the analysis step of your stack creation, or in your manifest file.

The asset pipeline compilation option will be hidden if you have enabled/disabled asset pipeline compilation in your application.rb or in the manifest file.

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


<h3 id="application">Application.rb</h3>

Asset Pipeline precompilation will be disabled if <code>config.assets.enabled</code> variable is assigned to *false* in your <code>application.rb</code> file:

<pre class="terminal">
config.assets.enabled = false
</pre>

<p>
    <span class="highlighted">Setting this value to false means that your application doesn't use the asset pipeline at all, so precompilation is not relevant</span>.
</p>

<h3 id="manifest">Manifest.yml</h3>

Use our [Cloud 66 manifest file](/building-your-stack/getting-started-with-manifest-files) to enable/disable asset pipeline pre-compilation using the following parameter with a true or false, find <td>an example</td> below:

<pre class="terminal">
development:
    rails:
        configuration:
            asset&#95;pipeline&#95;precompile: true
</pre>

There is an hierarchical order to set up asset pipeline precompilation. The top one will override the others.

<ol class="list">
    <li>In application.rb</li>
    <li>In the Cloud 66 manifest file</li>
    <li>In the Cloud 66 interface</li>
</ol>

<h2 id="requirements">Asset pipeline compilation requirements</h2>
Asset pipeline compilation uses *ExecJS* to run *JavaScript* code from within Ruby.

The ExecJS library in turn requires that you have at least one library available on your server that is capable of compiling Javascript.
Libraries for Javascript compilation on your server that are currently supported by Cloud 66 are:

1. **therubyracer** &mdash;  Google V8 embedded within Ruby. Installed by including "therubyracer" in your Gemfile.
2. **Node.js** &mdash; Cloud 66 will *automatically* install this on your server if you don't include "therubyracer" in your Gemfile.

<h2 id="modified">Compile only modified assets</h2>
Cloud 66 supports this through [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3). All you need to do is to add Turbo Sprocket gem to your Gemfile. This is only supported for Rails 3.2 and above.

<h2 id="speeding">About speeding up Rails deployments</h2>
While Cloud 66 works hard to improve your deployment speeds on our side, we recommend the following enhancements to [Asset Pipeline Compilation](http://guides.rubyonrails.org/asset_pipeline.html) on your side to speed up your deployments.

#### Below Rails 3.2
Unfortunately these measures are not available to Rails versions before 3.2.

#### Rails 3.2 and above
If you are running Rails 3.2 or later, you can use [Turbo Sprockets](https://github.com/ndbroadbent/turbo-sprockets-rails3), which speeds up deployments by only compiling changed assets.

It is also good practice to use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3. This means that only the first server in your stack will compile the assets and the rest will simply refer to the CDN.

#### Rails 4 and above
Rails 4 has Turbo Sprockets enabled by default, and again, we suggest that you use [Asset Sync](https://github.com/rumblelabs/asset_sync) to sync your assets with a CDN like S3.