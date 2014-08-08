---
layout: post
template: two-col
title:  "Integration with Semaphore"
so_title: "semaphore"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1930-09-26 15:33:13
categories: partners
lead: Use Semaphore for continuous integration with Cloud 66
search-tags: []
tags: ['Partners']
---

What follows is how to integrate [Semaphore](https://semaphoreapp.com) with Cloud 66.

1. Make sure your stack is deployed with Cloud 66.
2. Setup your project on [Semaphore](https://semaphoreapp.com). Since you're reading this page, you probably have a Semaphore project setup already!
3. In Semaphore, go to your project setting and click on Deployment.
![](http://cdn.cloud66.com/images/help/semaphore_project_settings.png)

4. If you have no deployments configured, you can add your first server.
![](http://cdn.cloud66.com/images/help/semaphore_project_deployment.png)

5. Select Cloud 66 from the list of Deployment Methods and choose Automatic.
![](http://cdn.cloud66.com/images/help/deployment_method.png)

6. You will be redirected to your Cloud 66 account and asked if you give Semaphore permission to deploy your stacks on your behalf.
![](http://cdn.cloud66.com/images/help/oauth_access_rights.png)

7. Select the project you would like to deploy once the tests are successful.

Done!
