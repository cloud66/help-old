---
layout: post
template: two-col
title:  "Configuring HAProxy for WebSocket"
so_title: "websocket"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1965-09-26 15:33:13
categories: 
lead: HAProxy for WebSocket is supported by Cloud 66
search-tags: ['']
tags: ['Customization']
tutorial: true
difficulty: 2
---


## Usage

If you want to use [HAProxy](http://haproxy.1wt.eu/) for [WebSocket](http://en.wikipedia.org/wiki/WebSocket) with Cloud 66, you need to configure your WebSocket server on your web servers to listen to port **8080** (or **8443** for SSL).

## How it works

By default, all HAProxy servers configured by Cloud 66 will redirect all WebSocket traffic from ports **80** or **443** to ports **8080** or **8443** of your web servers.

To by pass the auto detection and traffic redirection by HAProxy, you can connect your WebSocket servers through ports **8080** and **8443** of your HAProxy server. The HAProxy server is configured to pass through all traffic on ports **8080** and **8443** to the same ports of the web servers.

<div class="notice">
      <h3>Important</h3>
        <p> 8080 and 8443 ports should be opened by default on your rails servers and HAProxy. You can verify it on the <a href="/stack-features/stack-security.html">Stack Security</a> page.</p>
</div>


## Test your WebSocket servers

To test your WebSocket servers, create a <code>.html</code> file with the code below, make sure to replace *&lt;your&#95;address&gt;* with your own LB IP address and finally, open it in a web browser.

{% highlight bash %}
&lt;html&gt;
  &lt;head&gt;
    &lt;script src=&#39;http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js&#39;&gt;&lt;/script&gt;
    &lt;script&gt;
      $(document).ready(function(){
        function debug(str){ $(&quot;#debug&quot;).append(&quot;&lt;p&gt;&quot;+str+&quot;&lt;/p&gt;&quot;); };

        ws = new WebSocket(&quot;ws://your&#95;address&quot;);
        ws.onmessage = function(evt) { $(&quot;#msg&quot;).append(&quot;&lt;p&gt;&quot;+evt.data+&quot;&lt;/p&gt;&quot;); };
        ws.onclose = function() { debug(&quot;socket closed&quot;); };
        ws.onopen = function() {
          debug(&quot;connected...&quot;);
          ws.send(&quot;hello server&quot;);
        };
      });
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;debug&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;msg&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
{% endhighlight %}