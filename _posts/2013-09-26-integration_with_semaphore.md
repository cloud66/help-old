---
layout: post
title:  "Integration with Semaphore"
date:   2013-09-26 15:33:13
categories: how-to
---

<p class="lead">Semaphore is a simple and powerful hosted continious integration service for Rails and has native integration with Cloud 66.</p>

## Introduction
In best development teams, making coffee should be difficult, deployment should be easy!
Here is how to integrate [Semaphore](https://semaphoreapp.com) with Cloud 66.

## Integration
1. Make sure your stack is deployed with Cloud 66. Learn more about [deploying Rails stacks with Cloud 66](/help/first_stack).
2. Setup your project on [Semaphore](https://semaphoreapp.com). Since you're reading this page, you probably have a Semaphore project setup already!
3. In Semaphore, go to your project setting and click on Deployment.
![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/semaphore_project_settings.png)

4. If you have no deployments configured, you can add your first server.
![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/semaphore_project_deployment.png)

5. Select Cloud 66 from the list of Deployment Methods and choose Automatic.
![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/deployment_method.png)

6. You will be redirected to your Cloud 66 account and asked if you give Semaphore permission to deploy your stacks on your behalf.
![](http://cdn.cloud66.com.s3.amazonaws.com/images/help/oauth_access_rights.png)

7. Select the project you would like to deploy once the tests are successful.

Done!
