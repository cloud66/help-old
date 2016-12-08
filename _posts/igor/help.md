---
layout: post
template: one-col
title:  "ChatOps help"
date:   2036-12-24 10:51:22
cloud66_text: "ChatOps help"
cloud66_sticky: true
categories: ChatOps
lead: How to solve ChatOps errors
search-tags: ['igor','chatops','slack']
tags: ['']
---

### Help:
__________________________________________________________________


###### If the bot doesn't connect to Slack


If you can't see your bot connected among the members of your channel on Slack it means the container running Igor ChatOps failed to launch due to an incorrect slack token, you will need to redeploy your stack and set a valid one.

!!!!!?
(in reality if the service fail to launch is will try again every x seconds a certain number of times but I am not sure about this rule, so if the user realize he sent a wrong slack token, he can change it and it will work. But if he waits for too long before updating with a valid one then the service will not try to relaunch, should we say something in the help or just do your redeploy ?)
!!!!!?


###### If the bot doesn't connect to Cloud 66 API


If you successfully connected igor to slack you may however have set a wrong Cloud 66 token. In this case Igor will answer you saying he can’t access Cloud 66 and you must update your token on the registration page. You will be warn if you try to set an invalid Cloud 66 token during the registration process.


###### If you get an error while registration


If you are redirected to the error page it means we had trouble creating a file on the host and you should set the rights to the service.
