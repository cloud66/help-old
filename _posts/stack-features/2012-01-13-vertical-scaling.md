---
layout: post
template: two-col
title:  "Scaling vertically"
so_title: "scaling"
nav_sticky: false
date:   2087-01-25 16:27:22
categories: stack-features
lead: Scaling the size of an existing server
---

A number of cloud vendors allow you to scale up/down an existing server via their control panel, allowing you to increase or decrease the memory and CPU for existing servers.

Cloud 66 is compatible with this behaviour, and we only require that the cloud vendor doesn't change the server's unique identifier during this process.

<div class="notice">
 		<h3>Note</h3>
 		<p>The reported size of your server in the Cloud 66 UI will not necessarily change if you scale up your server via your vendors own UI. However, you should see the changed server capacity in the server memory/CPU/disk graph report.</p>
 </div>


We have verified that vertical scaling **works** with the following cloud vendors:

- DigitalOcean (if there are resources available on your hypervisor)
- Linode
- Rackspace (ensure that you *confirm* the resizing on your Rackspace account after resizing - if you attempt to delete the server without confirming then it could become stuck)

Unfortunately this functionality **does not work** on the following cloud vendors:

 - Amazon Web Servers (due to the vendor changing the server identifier as mentioned above)
 - Joyent (not supported by vendor)
 - Telefonica (not supported by vendor)

## Workaround

By taking a snapshot of the image running on your server, you can resize your server manually. The procedure is different for each provider, but this is the general outline:

1. Shutdown the server and take a snapshot of it.
2. Create a new server (with your new size) based on that snapshot.

It will take up to 20 minutes for the new server to be discovered by Cloud 66, but once this is done, you can go ahead and delete the original server.

This process varies slightly on DigitalOcean and Amazon.

#### DigitalOcean
1. SSH to the server and copy its public key: `cat ~/.ssh/authorized_keys`.
2. Add this public key to your DigitalOcean dashboard.
3. Shutdown the server.
4. Take a snapshot of the server, and delete it (so that the IP address is freed).
5. Create a new droplet, based on the aforementioned snapshot and SSH key.

If you'd like to create the server in a different region, you'd need to distribute your snapshot image globally within the _images_ menu in the DigitalOcean dashboard.

#### Amazon
1. Follow the instructions in the [Amazon documentation](http://docs.aws.amazon.com/AWSEC2/2011-05-15/UserGuide/index.html?Tutorial_CreateImage.html) to create an image from your server, and then turn the server off.
2. Create another instance from that same image. Assign the new server the old SSH key (it should show up in the menu) as well as security group. If you have several security groups, you can see the specific security group required on your server page.
3. Wait up to 20 minutes for the new server to be discovered by Cloud 66.