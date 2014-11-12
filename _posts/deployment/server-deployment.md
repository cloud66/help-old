---
layout: post
template: one-col
title:  "Deploy to your own server"
nav_sticky: false
date:   2088-01-25 16:27:22
categories: deployment
lead: Some benefits of Cloud 66 on your own server
search-tags: []
tags: ['']
---

## About deploying to your own server
Cloud 66 supports deploying to your own server - it just needs to be accessible to our service and meet our operating system requirements. We officially support <strong>Ubuntu 14.04</strong> and <strong>Debian 7.0 Wheezy</strong>, and you will have to configure either of these on your server. 

We also have a number of other requirements:

1. Connection: For security reasons, Cloud 66 only connects to your server using your secure keys on <b>port 22</b>. See our documentation on [generating SSH keys on your server](http://community.cloud66.com/articles/setting-up-ssh-keys).
2. Sudo: As Cloud 66 connects to your server and provisions applications from scratch, administrator permissions are sometimes necessary. The user that you provide for use should therefore also be a member of the sudoers group, and must not require a password to invoke sudo.
3. Bash: We currently only support Bourne-again shell (Bash). The error `sh: n: source: not found` during deployment may arise if you are not using the Bash shell.

Given that we don't know anything about your local infrastructure (as we do with cloud vendors), our service offering when deploying to your own server is limited in the following regards:

- Scaling your application
- Load balancing

For the best experience possible, we strongly recommend that you deploy to your cloud.

## Deploy to your own server
To deploy to your own server, you must first analyze your code. In the _Where are you deploying to?_ selection, choose _Deploy to my own server_. You will be asked to provide the private SSH key that can be used to access the server, as well as a name for the key for future use. Once this has been added, provide a _Username_ for the server, as well as the server _IP address_.

Once you click _Deploy_, Cloud 66 will connect to your server, configure it with security, monitoring and more, and deploy your application to it. 