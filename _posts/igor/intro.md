---
layout: post
template: one-col
title:  "Manage your stacks from Slack with ChatOps"
date:   2036-12-24 10:51:22
cloud66_text: "Manage your stacks with ChatOps"
cloud66_sticky: true
categories: igor
lead: Manage your stacks from Slack with ChatOps
search-tags: ['slack','chatops','igor']
tags: ['']
---

# Cloud 66 ChatOps : Igor
Igor is an open source Slack-bot, built by [Cloud 66](http://www.cloud66.com/?utm_source=gh&utm_medium=ghp&utm_campaign=igor). It is your very own personal assistant that operates on your stacks directly from the Slack chat window. Now, you can display the state of your stacks, perform deployments and cancel them with simple commands such as `list` , `deploy` and `cancel`.


### Quick Start:
__________________________________________________________________
#### Create a Slack bot

First thing you will need to do is to create a bot on Slack.
- Go to `https://you_slack_team.slack.com/apps/manage/custom-integrations`
- Go to `Bots`
- Go to `Add Configuration`
- Choose the name of your bot - the name will be required before each command
- Save the token for later

Once you have created the bot you can invite it to any slack channel you want : `/invite @bot-name`.

#### Download Igor

Your can install Igor either using the docker compose file or from the Cloud 66 app store :

From Cloud 66 app store :

Then you must install Igor from the Cloud66 app store
-   Go to ` https://app.cloud66.com/easydeploys`
-   Install the `Igor` app
-   Deploy the stack
-   Click on 'Browse' to access the web registration page for your bot

or

use the `igor/docker-compose.yml` file

### For any informations on how to use Igor:
__________________________________________________________________

Please go to : http://chatops.cloud66.com
