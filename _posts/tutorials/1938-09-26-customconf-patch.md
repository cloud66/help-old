---
layout: post
template: two-col
title:  "Dealing with CustomConfig patches"
so_title: "customconfig"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1957-08-26 15:33:13
categories: 
lead: How to keep your configuration files up-to-date
search-tags: ['']
tags: ['Customization']
tutorial: true
---

Every so often, Cloud 66 needs to update the base configuration files used for your application to run. Some of these files are part of [CustomConfig](/stack-features/custom-config.html), which allows users to customize their configuration files.

When a patch is released, having customized configurations introduces complexities due to the differences in settings. If you don't have customized content, the patch will be automatically applied.

<div class="notice">
    <h3>Note</h3>
    <p>Failure to apply configuration updates may lead to unexpected behaviour.</p>
</div>

If you do have changes you will need to download a patch file, which is an archive containing the current template and the patch file. Extract the contents of the archive and run the following command:

{% highlight bash %}
patch <current_template> -i <patch_file> -o <merged_template>
{% endhighlight %}

This will result in a merged_template file being created - please ensure that there are no merge errors at this point. Unfortunately we cannot deal with every single use case generically, so it is your responsibility to ensure that the new file conforms with your requirements.

In the absence of merge errors, copy and paste the contents of the merged_template into your [CustomConfig](/stack-features/custom-config.html) form and commit it.
