---
layout: post
template: one-col
title:  "What is ChatOps"
date:   2036-12-24 10:51:22
cloud66_text: "What is ChatOps"
cloud66_sticky: true
categories: igor
lead: Manage your stacks from Slack with ChatOps
search-tags: ['slack','chatops','igor']
tags: ['']
---

# Cloud 66 ChatOps
ChatOps is an open source Slack-bot, build by [Cloud 66](http://www.cloud66.com/?utm_source=gh&utm_medium=ghp&utm_campaign=robochat). It is your very own personal-assistant that operates on your stacks directly from the Slack chat window. Now, you can display the state of your stacks, deploy them and cancel them with simple commands such as `list` , `deploy` and `cancel`.

- Website: http://www.igor-bot.io/
- [Download Igor](app.cloud66.com/easydeploys)
- Articles: http://blog.cloud66.com/tag/igor-bot/

### Key features:
__________________________________________________________________
- Open Source project
- Easy to customise to your work-flow
- Manage your Cloud 66 stacks from Slack
- Allows you to deploy specific services from specific stacks
- Allows you to cancel deploying stacks
- Allows you to display the state of your stacks for you or your team

### Quick Start:
__________________________________________________________________
#### Create a Slack bot

First thing you will need to do is to create your ChatOps bot on Slack.
- Go to `https://you_slack_team.slack.com/apps/manage/custom-integrations`
- Go to `Bots`
- Go to `Add Configuration`
- Choose the name of your bot, the name will be required before each commands
- Save the token for later

Once you have filled the registration page you can invite your bot to any slack channels from your team you want : `/invite @bot-name`.

#### Download the app

Then you must install the ChatOps app from the Cloud66's app store
-   Go to ` https://app.cloud66.com/easydeploys`
-   Install the `ChatOps` app
-   Deploy the stack
-   Click on 'Browse' to access the web resgistration page for your bot.

#### Deregister

You may want to remove your bot, if so you just have to go to the registration page from the `Browse` of your ChatOps container and then clic on deregister. You will need to redeploy the stack for this to take effect.

### Developing RoboChat:
__________________________________________________________________

If you wish to work on the project itself, don't worry ChatOps is open source!
