---
layout: post
template: one-col
title:  "Amazon Web Services cloud"
date:   2038-09-24 10:51:22
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
categories: deployment
lead: Use your Amazon Web Services account with Cloud 66
search-tags: ['aws', 'reserved instances', 'amazon', 'amazon web services']
tags: ['']
---

<h2>Contents</h2>
<ul class="page-toc">
    <li>
        <a href="#about">About using Amazon Web Services cloud</a>
    </li>
        <ul style="margin-bottom:0em">
            <li><a href="#reserved">Reserved instances</a></li>
            <li><a href="#vpc">Classic and VPC platforms</a></li>
        </ul>
    <li>
        <a href="#generate">Generate AWS access keys</a>
    </li>
        <ul style="margin-bottom:0em">
            <li><a href="#security">Security credentials</a></li>
            <li><a href="#iam">IAM</a></li>
        </ul>    
    <li>
        <a href="#add">Add AWS keys to a stack</a>
    </li>
    <li>
        <a href="#external">External links</a>
    </li>
</ul>


<h2 id="about">About using Amazon Web Services cloud</h2>
You can use Cloud 66 to provision and deploy your code to servers in any Amazon Web Services (AWS) region. 

<h3 id="reserved">Reserved instances</h3>
[AWS reserved instances](http://aws.amazon.com/ec2/purchasing-options/reserved-instances/) enable users of EC2 or RDS to reserve instances for one to three years, which has pricing benefits when compared to on-demand instances.

It's very simple to use Cloud 66 with AWS reserved instances: start by reserving an instance with your size/region requirements. Now, simply use Cloud 66 to deploy to a server of that size in the same region, and we'll use your reserved instance.

<h3 id="vpc">Classic and VPC platforms</h3>
You can choose to create servers in both the [Classic and VPC platforms](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html). To use a VPC, your account must conform with the [default VPC guidelines](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html#launching-into). 

Certain instances types, such as the T2, require the use of VPC. 

<h2 id="generate">Generate AWS access keys</h2>
You need to provide your AWS access keys in order for Cloud 66 to access your account. To generate these, access the your account menu by clicking _Account name_ in the top right corner of your AWS account, and select _Security Credentials_. On the next screen, some users will be asked to choose between _Security Credentials_ and using _IAM users_, and this selection is at your discretion. 

_IAM_ stands for _Identity and Access Management_, and allows you to set permissions for specific users. This may be useful in certain cases, but may be confusing for non-advanced users. We will now guide you through generating access keys based on both of these methods:

<h3 id="security">Security credentials</h3>
After selecting the _Security Credentials_ option, select the _Access Keys_ option from the menu. Now click _Create new access key_, and either download the key file or click _Show access key_ and take note of your _access key ID_ and _secret access key_. These are the credentials needed for Cloud 66 to access your account.

<h3 id="iam">IAM</h3>
After selecting the _IAM_ option, click _Create new users_ in the top left corner. Enter a descriptive username in the field provided, such as _cloud66_, and click _Create_. Now, click _Show user security credentials_ and take note of your _access key ID_ and _secrete access key_. Alternatively, you can download these credentials. 

Back in the _Users_ view, we now need to attach a user policy for this user. Click the username, and then select _Attach user policy_. Although you could grant _Administrator access_ to the account, you may wish to grant more fine-grained controls. In that case, your selection will depend on whether or not you are using VPC or EC2. In the former case, you would select _Amazon VPC full access_, and in the latter, select _Amazon EC2 full access_. You can also set more fine-grained permissions, but doing so is out of the scope of this guide.

<h2 id="add">Add AWS keys to a stack</h2>
Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Amazon Web Services_ and provide your credentials.
<br/>

<div class="notice notice-warning">
    <h3>Notice</h3>
    <p>Should you wish to delete your stack on Cloud 66, your servers <b>will not</b> be deleted on your cloud provider.</p>
</div>

<h2 id="external">External links</h2>
<ul>
    <li><a href="http://aws.amazon.com/about-aws/globalinfrastructure/" target="_blank">AWS regions</a></li>
    <li><a href="http://aws.amazon.com/ec2/pricing/" target="_blank">AWS pricing</a></li>
</ul>