---
layout: post
title:  "Cloud 66 WebSocket Support"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">WebSocket is supported by Cloud 66. This page helps you to implement Websocket on your server.</p>

## About WebSocket

[WebSocket](http://www.websocket.org) allows bi-directional web communication between client and server and provides a true standard that can be used to build scalable, real-time web applications.

## Cloud 66 Configuration for WebSocket

Cloud 66 opens **8080** and **8443** ports by default on your rails servers to allow you to use WebSocket.

If you want to use WebSocket with Cloud 66, your WebSocket servers need to listen to the following ports:

- **8080**
- **8443** for SSL

You can use a different port to use WebSocket (not supported by Cloud 66) but you will need manually open the ports to allow external connections to your Rails servers.

Find out more about [Stack Security page](/stack-features/stack-security.html).

## WebSocket Through a Load Balancer

At any time, you can use a load balancer and scale up your servers to have more redundancy and capacity for your WebSocket servers.

<div class="notice">
        <h3>Note</h3>
        <p>ELB (Amazon) doesn't support WebSocket traffic.</p>
</div>

Learn more about [Cloud 66 HAProxy and WebSocket](/how-to/haproxy-for-websocket.html) setup.

**Linode** alternative HTTP ports 8080 and 8443 are opened on NodeBalancers and can be used for WebSockets.

## Test your WebSocket server

To test your WebSocket server, create a <code>.html</code> file with the code below, make sure to replace *&lt;your_address&gt;* with your WebSocket server IP address and finally, open it in a web browser.

<pre class='prettyprint lang-html'>
&lt;html&gt;
  &lt;head&gt;
    &lt;script src=&#39;http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js&#39;&gt;&lt;/script&gt;
    &lt;script&gt;
      $(document).ready(function(){
        function debug(str){ $(&quot;#debug&quot;).append(&quot;&lt;p&gt;&quot;+str+&quot;&lt;/p&gt;&quot;); };

        ws = new WebSocket(&quot;ws://your_address&quot;);
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
</pre>
