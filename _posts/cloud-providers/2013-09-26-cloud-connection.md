---
layout: post
title:  "Connect Your Cloud"
date:   2013-09-26 15:33:13
categories: cloud-providers
---


<p class="lead">
    You can connect your cloud provider of choice to Cloud 66. Doing this allows Cloud 66 to automatically fire up and setup the boxes you need to run your stack.
</p>


## Supported Clouds

* Amazon Web Services (AWS)
* Rackspace
* DigitalOcean
* Linode
* Telefonica
* Joyent Cloud

## Example: How to get Amazon API Keys
You can find your Amazon API keys under Security Credentials on the top right menu in AWS Management Console.

![aws](http://cdn.cloud66.com.s3.amazonaws.com/images/help/aws_menu.png)

there you can find the key and secret

![aws](http://cdn.cloud66.com.s3.amazonaws.com/images/help/aws_credentials.png)

## IAM Credentials
If you are using [AWS Identity and Access Management (IAM)](http://aws.amazon.com/documentation/iam/) we recommend setting up a user for Cloud 66 so you can control the access to your AWS account better.

## Connecting Your Cloud
You can connect your cloud account to Cloud 66 while setting a new Stack. Once the analysis of the stack is finished, you can find the link to adding a new cloud vendor to your account.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_connect.png)

## Remove Cloud Connections
You can remove a Cloud connection from your Account page under Cloud Keys tab.

![cloud keys](http://cdn.cloud66.com.s3.amazonaws.com/images/help/cloud_keys.png)

## Deleting Servers in the Cloud
When you delete a stack, Cloud 66 tries to delete the servers associated with that stack in your cloud account. However, it is possible that we are not able to remove all the servers related to the deleted stack for different reasons like API key changes or temprorary connectivity issues. Please remember to check your cloud account to ensure all the servers are terminated properly to avoid surpirse charges from your cloud vendor.