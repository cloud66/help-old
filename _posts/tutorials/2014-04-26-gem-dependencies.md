---
layout: post
template: two-col
title:  "Gem dependency errors"
so_title: "gem dependencies"
date:   2035-08-15 15:33:13
categories: 
lead: Gem dependency errors may arise for a number of reasons
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
---

Depending on which gems you're using together with a specific Ruby version, you may see dependency issues such as:

{% highlight yaml %}
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
/usr/local/bin/ruby extconf.rb
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.
{% endhighlight %}

This may happen with a gem such as `debugger`, which is designed to hook into low level components of a language to dynamically stop and inspect the execution of code.

<ol>
<li><p>This should <i>not</i> be done in production, so you could start by moving the gem to your <code>development</code> group in your <code>Gemfile</code>:</p></li>

{% highlight ruby %}
group :development do
  gem "debugger"
end
{% endhighlight %}

<p>Once this is done, run <code>bundle install</code>, commit to your Git and re-deploy.</p>
<li><p>You may be running an old version of a gem while running a later version of Ruby - try running <code>bundle update debugger</code> to update the gem. Your other option is to downgrade your Ruby version.</p></li>

<li><p>You could investigate what dependencies are required by running <code>gem install debugger</code> on the server, and taking note of the required packages. You could then use a <a href="/stack-features/manifest-files.html">manifest file</a> or <a href="/stack-features/deploy-hooks.html">deploy hooks</a> to automate the installation of these packages as you scale.</p></li>

</ol>