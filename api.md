FORMAT: 1A
HOST: https://app.cloud66.com/api/v3

# Cloud 66 API
[Cloud 66](http://www.cloud66.com) is DevOps as a Service. It allows you to build, provision, configure and manage your servers to run [Rack](http://rack.github.io/) backed web applications on any server.
You can find more information on Cloud 66 on [our help site](http://help.cloud66.com/).

## API Reference
The Cloud 66 API is organised around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer).

Our API is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors.

We use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients.

[JSON](http://www.json.org/) will be returned in all responses from the API, including errors (though if you're using API bindings, we will convert the response to the appropriate language-specific object).

### Authentication
You authenticate to the Cloud 66 API by providing [OAuth2](http://oauth.net/2/).

You can generate an OAuth token by visiting the [Apps](https://app.cloud66.com/oauth/authorized_applications), under your Account of the control panel for your account.

An OAuth token functions as a complete authentication request. In effect, it acts as a substitute for a username and password pair.

Because of this, it is absolutely essential that you keep your OAuth tokens secure.

#### How to Authenticate with OAuth
To authenticate your requests with OAuth you need to send a bearer authorization header with your request. This is the preferred method of authenticating because it completes the authorization request in the header portion, away from the actual request.

Usually, you use a language binding (like a [Ruby gem](https://rubygems.org/) or [go package](http://golang.org/pkg/)) to deal with the OAuth authentication.

Alternatively, you can include the OAuth authentication token in the header of each request:

```http
Authorization: bearer 5262d64b892e8d4341000001
```

# Group Stacks
Most of the interactions with Cloud 66 API is at the stack level. Stacks are created using the UI dashboard but can be listed and returned via the API.

## Stack List [/stacks]
Get list of all stacks accessible by the caller.

- Scope: _public_

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body

        {
            "response": [
                {
                    "uid": "5be6b763474b0eafa5fafb64bff0ba80",
                    "name": "Awesome App",
                    "git": "http://github.com/cloud66-samples/awesome-app.git",
                    "git_branch": "fig",
                    "environment": "production",
                    "cloud": "DigitalOcean",
                    "fqdn": "awesome-app.dev.c66.me",
                    "language": "ruby",
                    "framework": "rails",
                    "status": 1,
                    "health": 3,
                    "last_activity": "2014-08-14T01:46:53+00:00",
                    "last_activity_iso": "2014-08-14T01:46:53+00:00",
                    "maintenance_mode": false,
                    "has_loadbalancer": false,
                    "created_at": "2014-08-14 00:38:14 UTC",
                    "updated_at": "2014-08-14 01:46:52 UTC",
                    "deploy_directory": "/var/deploy/awesome_app",
                    "cloud_status": "partial",
                    "created_at_iso": "2014-08-14T00:38:14Z",
                    "updated_at_iso": "2014-08-14T01:46:52Z",
                    "redeploy_hook": "http://hooks.cloud66.com/stacks/redeploy/b806f1c3344eb3aa2a024b23254b75b3/6d677352a6b2eefec6e345ee2b491521"
                }
            ],
            "count": 1,
            "pagination": {
                "previous": null,
                "next": null,
                "current": 1,
                "per_page": 30,
                "count": 1,
                "pages": 1
            }
        }

### Stack List [GET]
Get a list of all stacks accessible by the caller.

+ Response 200

    [Stack List][]

## Stack [/stacks/{id}]
Get a single stack.

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
		 	"response":
				{
				 	"uid": "5be6b763474b0eafa5fafb64bff0ba80",
				  	"name": "Awesome App",
				  	"git": "http://github.com/cloud66-samples/awesome-app.git",
				  	"git_branch": "fig",
				  	"environment": "production",
				  	"cloud": "DigitalOcean",
				  	"fqdn": "awesome-app.dev.c66.me",
				  	"language": "ruby",
				  	"framework": "rails",
				  	"status": 1,
				  	"health": 3,
				  	"last_activity": "2014-08-14T01:46:53+00:00",
				  	"last_activity_iso": "2014-08-14T01:46:53+00:00",
				  	"maintenance_mode": false,
				  	"has_loadbalancer": false,
				  	"created_at": "2014-08-14 00:38:14 UTC",
				  	"updated_at": "2014-08-14 01:46:52 UTC",
				  	"deploy_directory": "/var/deploy/awesome_app",
				  	"cloud_status": "partial",
				  	"created_at_iso": "2014-08-14T00:38:14Z",
				  	"updated_at_iso": "2014-08-14T01:46:52Z",
				  	"redeploy_hook": "http://hooks.cloud66.com/stacks/redeploy/b806f1c3344eb3aa2a024b23254b75b3/6d677352a6b2eefec6e345ee2b491521"
			  }
    	}


### Get Stack [GET]
Get a single stack.

+ Response 200

    [Stack][]

## Stack Action list [/stacks/{id}/actions]
Get list of all async actions that happened to stack.

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":[
				{
					"id":10,
					"user":"test@cloud66.com",
					"resource_type":"stack",
					"action":"clear_caches",
					"resource_id":"283",
					"started_via":"api",
					"started_at":
					"2014-09-01T19:08:05Z",
					"finished_at":"2014-09-01T19:08:09Z",
					"finished_success":true,
					"finished_message":null
				}
			],
			"count":1,
			"pagination":
				{
					"previous":null,
					"next":null,
					"current":1,
					"per_page":30,
					"count":1,
					"pages":1
				}
		}

### Stack Action list [GET]
Get list of all async actions that happened to stack.

+ Response 200

    [Stack Action list][]

## Stack Action [/stacks/{stack_id}/actions/{id}]
Get information of a single stack async action

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The async action id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":
				{
					"id":10,
					"user":"test@cloud66.com",
					"resource_type":"stack",
					"action":"clear_caches",
					"resource_id":"283",
					"started_via":"api",
					"started_at":
					"2014-09-01T19:08:05Z",
					"finished_at":"2014-09-01T19:08:09Z",
					"finished_success":true,
					"finished_message":null
				}
		}


### Stack Action [GET]
Get information of a single stack async action

+ Response 200

    [Stack Action][]


## Run Stack action [/stacks/{stack_id}/actions]
Start running an action(clear_caches, maintenance_mode, restart) on stack

- Scope: _redeploy_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + command (required, string, `restart`) ... Valid commands are clear_caches, maintenance_mode, restart

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response":
    			{
    				"id":10,
    				"user":"test@cloud66.com",
    				"resource_type":"stack",
    				"action":"clear_caches",
    				"resource_id":"283",
    				"started_via":"api",
    				"started_at":"2014-09-01T19:08:05Z",
    				"finished_at":null,
    				"finished_success":null,
    				"finished_message":null
    			}
    	}

### Run Stack action [POST]
Start running an action(clear_caches, maintenance_mode, restart) on stack

+ Response 200

    [Run Stack action][]



# Group Deployments

## Deployment list [/stacks/{id}/deployments]
Get list of all deployments of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


    	{
    		"response":[
    			{
    				"id":107,
    				"triggered_by":"test@cloud66.com",
    				"triggered_via":
    					{
    						"code":0,
    						"meaning":"web"
    					},
    				"started_at":"2014-08-29T17:46:16Z",
    				"finished_at":"2014-08-29T17:58:23Z",
    				"outcome":
    					{
    						"code":1,
    						"meaning":"success"
    					},
    				"git_hash":"5675fcd8f9e6dc534ecf1410c0661c066097e310",
    				"deploy_session":"OhBHNzkXSl",
    				"deploy_type":
    					{
    						"code":0,
    						"meaning":"build"
    					},
    				"is_head":true,
    				"is_live":true,
    				"reverted":null,
    				"reverted_by":null,
    				"reverted_at":null,
    				"is_deploying":false,
    				"commit_url":"https://github.com/cloud66-samples/rails-test/commit/5675fcd8f9e6dc534ecf1410c0661c066097e310"
    			}
    		],
    		"count":1,
    		"pagination":
    			{
    				"previous":null,
    				"next":null,
    				"current":1,
    				"per_page":30,
    				"count":1,
    				"pages":1
    			}
    		}


### Deployment list [GET]
Get list of all deployments of stack

+ Response 200

    [Deployment list][]

## Deployment [/stacks/{stack_id}/deployments/{id}]
Get information of a single deployment

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `107`) ... The deployment id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
        	"response":
        		{
        			"id":107,
        			"triggered_by":"test@cloud66.com",
        			"triggered_via":
        				{
        					"code":0,
        					"meaning":"web"
        				},
        			"started_at":"2014-08-29T17:46:16Z",
        			"finished_at":"2014-08-29T17:58:23Z",
        			"outcome":
        				{
        					"code":1,
        					"meaning":"success"
        				},
        			"git_hash":"5675fcd8f9e6dc534ecf1410c0661c066097e310",
        			"deploy_session":"OhBHNzkXSl",
        			"deploy_type":
        				{
        					"code":0,
        					"meaning":"build"
        				},
        			"is_head":true,
        			"is_live":true,
        			"reverted":null,
        			"reverted_by":null,
        			"reverted_at":null,
        			"is_deploying":false,
        			"commit_url":"https://github.com/cloud66-samples/rails-test/commit/5675fcd8f9e6dc534ecf1410c0661c066097e310"
        		}
        	}
        }

### Deployment [GET]
Get information of a single deployment

+ Response 200

    [Deployment][]

## Redeploy [/stacks/{stack_id}/deployments]
Redeploy a stack

- Scope: _redeploy_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response":
    			{
    				"ok":true,
    				"message":"Stack queued for redeployment"
    			}
    	}


### Redeploy [POST]
Redeploy a stack

+ Response 200

    [Redeploy][]

## Cancel deployment [/stacks/{stack_id}/deployments/{id}]
Cancel a live stack deployment

- Scope: _redeploy_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `112`) ... The deployment id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":
				{
					"ok":true,
					"message":"Cancelling deployment"
				}
		}

### Cancel deployment [DELETE]
Cancel a live stack deployment

+ Response 200

    [Cancel deployment][]

# Group Environment Variables

## Environment Variable list [/stacks/{id}/environments]
Get list of all environment variables of stack

- Scope: _admin_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response": [
    			{
    				"id": 4152,
    				"key": "STACK_GIT_BRANCH",
    				"value": "master",
    				"readonly": true,
    				"created_at": "2014-08-29T17:21:25Z",
    				"updated_at": "2014-08-29T17:21:25Z",
    				"is_password":false,
    				"is_generated": true
    			},
    			{
    				"id": 4153,
    				"key": "STACK_PATH",
    				"value": "/var/deploy/test-elastic-1/web_head/current",
    				"readonly": true,
    				"created_at": "2014-08-29T17:21:25Z",
    				"updated_at": "2014-08-29T17:21:25Z",
    				"is_password": false,
    				"is_generated": true
    			},
    			{
    				"id": 4167,
    				"key": "POSTGRESQL_USERNAME",
    				"value": "tja",
    				"readonly": false,
    				"created_at": "2014-08-29T17:21:26Z",
    				"updated_at":"2014-08-29T17:21:26Z",
    				"is_password":false,
    				"is_generated":true
    			},
    			{
    				"id":4168,
    				"key": "POSTGRESQL_PASSWORD",
    				"value": "tjena",
    				"readonly":false,
    				"created_at":"2014-08-29T17:21:26Z",
    				"updated_at":"2014-08-29T17:21:26Z",
    				"is_password":true,
    				"is_generated":true
    			}
    		],
    		"count":30,
    		"pagination":
    			{
    				"previous":null,
    				"next":null,
    				"current":1,
    				"per_page":30,
    				"count":4,
    				"pages":1
    			}
    	}

### Environment Variable list [GET]
Get list of all environment variables of stack

+ Response 200

    [Environment Variable list][]

## Environment Variable [/stacks/{stack_id}/environments/{id}]
Get information of a single environment variable

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The environment variable id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


		{
			"response":
				{
					"id": 4153,
					"key":
					"STACK_PATH",
					"value":"/var/deploy/test-elastic-1/web_head/current",
					"readonly":true,
					"created_at":"2014-08-29T17:21:25Z",
					"updated_at":"2014-08-29T17:21:25Z",
					"is_password":false,
					"is_generated":true
				}
			}

### Environment Variable [GET]
Get information of a single environment variable

+ Response 200

    [Environment Variable][]

## Add Environment Variable [/stacks/{stack_id}/environments]
Add a new environment variable

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + key (required, string, `MY_ENVIRONMENT_VALUE`) ... The new environment variable key
    + value (required, string, `SOME_VALUE`) ... The new environment variable new value

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


		{
			"response":
				{
					"id":5,
					"user":"test@cloud66.com",
					"resource_type": "stack",
					"action": "env-var-new",
					"resource_id": "280",
					"started_via":"api",
					"started_at": "2014-09-01T10:56:57Z",
					"finished_at": null,
					"finished_success":null,
					"finished_message":null
				}
		}


### Add Environment Variable [POST]
Add a new environment variable

+ Response 200

    [Add Environment Variable][]

## Update Environment Variable [/stacks/{stack_id}/environments/{key}]
Update value of an environment variable if it is not readonly

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + key (required, string, `POSTGRESQL_SLAVE_ADDRESSES`) ... The environment variable key
    + value (required, string, `127.0.0.1`) ... The environment variable new value

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


		{
			"response":
				{
					"id":3,
					"user": "test@cloud66.com",
					"resource_type": "stack",
					"action": "env-var-update",
					"resource_id":"280",
					"started_via":"api",
					"started_at": "2014-09-01T10:44:52Z",
					"finished_at": null,
					"finished_success":null,
					"finished_message":null
				}
		}


### Update Environment Variable [PUT]
Update value of an environment variable if it is not readonly

+ Response 200

    [Update Environment Variable][]


## Delete Environment Variable [/stacks/{stack_id}/environments/{key}]
Delete an environment variable if it is not readonly or generated by cloud66

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + key (required, string, `MY_ENV_1`) ... The environment variable key

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597


### Delete Environment Variable [DELETE]
Delete an environment variable if it is not readonly or generated by cloud66

+ Response 200

    [Delete Environment Variable][]


# Group Firewall rules

## Firewall rules list [/stacks/{id}/firewalls]
Get list of all firewall rules of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response": [
    			{
    				"id": 5027,
    				"from_ip": "0.0.0.0/0",
    				"from_group_id": null,
    				"from_server_id": null,
    				"to_ip": null,
    				"to_group_id": 128,
    				"to_server_id": null,
    				"protocol": "tcp",
    				"port": 80,
    				"rule_type": "dynamic",
    				"comments":null,
    				"created_at": "2014-08-29T17:58:23Z",
    				"updated_at": "2014-08-29T17:58:23Z"
    			},
    			{
    				"id":5028,
    				"from_ip":"0.0.0.0/0",
    				"from_group_id":null,
    				"from_server_id":null,
    				"to_ip":null,
    				"to_group_id":128,
    				"to_server_id":null,
    				"protocol":"tcp",
    				"port":443,"rule_type":
    				"dynamic",
    				"comments":null,
    				"created_at":
    				"2014-08-29T17:58:23Z",
    				"updated_at":"2014-08-29T17:58:23Z"
    			}
    		],
    		"count":2,
    		"pagination":
    			{
    				"previous":null,
    				"next":null,
    				"current":1,
    				"per_page":30,
    				"count":11,
    				"pages":1
    			}
    		}

### Firewall rules list [GET]
Get list of all firewall rules of stack

+ Response 200

    [Firewall rules list][]

## Firewall rule [/stacks/{stack_id}/firewalls/{id}]
Get information of a single firewall rule

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The firewall rule id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


		{
			"response":
				{
					"id":5027,
					"from_ip":"0.0.0.0/0",
					"from_group_id":null,
					"from_server_id":null,
					"to_ip":null,
					"to_group_id":128,
					"to_server_id":null,
					"protocol":"tcp",
					"port":80,
					"rule_type":"dynamic",
					"comments":null,
					"created_at":"2014-08-29T17:58:23Z",
					"updated_at":"2014-08-29T17:58:23Z"
				}
		}

### Firewall rule [GET]
Get information of a single firewall rule

+ Response 200

    [Firewall rule][]

## Add Firewall rule [/stacks/{stack_id}/firewalls]

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
	+ ttl (optional, integer, `20`) ... Time that firewall rule will be expires in
	+ from_ip (optional, string, `123.123.123.123`) ... From IP value of rule
	+ from_group_id (optional, integer, `19`) ...  You can specify a server group id as From
	+ from_server_id (optional, integer, `193`) ...  You can specify a server id as From
	+ to_ip (optional, string, `123.123.123.123`) ... To IP value of rule
	+ to_group_id (optional, integer, `19`) ...  You can specify a server group id as To
	+ to_server_id (optional, integer, `1`) ...  You can specify a server id as To
	+ protocol (required, integer, `1`) ...  Protocol of firewall rule . TCP = 1 , UDP = 2 , ICMP = 3
	+ port (required,integer, `80`) ... Port of firewall rule


+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


### Add Firewall rule [POST]
Add a firewall rule.
One of the from/to params must be specified.
If you specify ttl , from_ip can be set as 'AUTO', then caller IP will be set as from_ip

+ Response 200

    [Add Firewall rule][]




# Group Notifications

## Notifications list [/stacks/{id}/notifications]
Get list of all notifications of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + alert_type (optional,string, `server.stopped`) ... Type of alert

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":[
				{
					"id":1189,
					"user_id":18,
					"alert_type":"stack.provision.ok",
					"channels":["email"],
					"stack_id":"5acd43412ea412e32897c40d46f91183",
					"params":{},
					"created_at":"2014-05-29T17:29:54Z",
					"updated_at":"2014-05-29T17:29:54Z"
				},
				{
					"id":1190,
					"user_id":18,
					"alert_type":"stack.provision.fail",
					"channels":["email"],
					"stack_id":"5acd43412ea412e32897c40d46f91183",
					"params":{},
					"created_at":"2014-05-29T17:29:54Z",
					"updated_at":"2014-05-29T17:29:54Z"
				},
				{
					"id":1191,
					"user_id":18,
					"alert_type":"stack.redeploy.ok",
					"channels":["email"],
					"stack_id":"5acd43412ea412e32897c40d46f91183",
					"params":{},
					"created_at":"2014-05-29T17:29:54Z",
					"updated_at":"2014-05-29T17:29:54Z"
				}
			],
			"count":30,
			"pagination":
				{
					"previous":null,
					"next":2,
					"current":1,
					"per_page":30,
					"count":48,
					"pages":2
				}
			}

### Notifications list [GET]
Get list of all environment variables of stack

+ Response 200

    [Notifications list][]

## Notification [/stacks/{stack_id}/notifications/{id}]
Get information of a single notification

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The notification id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":
				{
					"id":1191,
					"user_id":18,
					"alert_type":
					"stack.redeploy.ok",
					"channels":["email"],
					"stack_id":"5acd43412ea412e32897c40d46f91183",
					"params":{},
					"created_at":"2014-05-29T17:29:54Z",
					"updated_at":"2014-05-29T17:29:54Z"
				}
		}

### Notification [GET]
Get information of a single notification

+ Response 200

    [Notification][]

## Update Notification [/stacks/{stack_id}/notifications/{id}]
Update channel/params of a notification

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The notification id
    + channels (optional, string, `[email,ios]`) ... Channels of notification , Valid channels are : email,ios,hipchat,webhook,slack
	+ params (optional, string, `{'hipchat_room' : 'test'}`) ... parameters of notification channel . It must be a valid json string. Valid keys are : hipchat_token, hipchat_room, slack_url, slack_channel, webhook_url

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

### Update Notification [PUT]
Update channel/params of a notification

+ Response 200

    [Update Notification][]




# Group Stack settings

## Settings list [/stacks/{id}/settings]
Get list of all settings of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":[
				{
					"id":"allowed-web-source",
					"key":"allowed.web.source",
					"value":null,
					"readonly":false,
					"warning_text":""
				},
				{
					"id":"asset-prefix",
					"key":"asset.prefix",
					"value":"assets",
					"readonly":false,
					"warning_text":""
				},
				{
					"id":"git-branch",
					"key":"git.branch",
					"value":"master",
					"readonly":false,
					"warning_text":""
				},
				{
					"id":"reconfigure-nginx",
					"key":"reconfigure.nginx",
					"value":false,
					"readonly":false,
					"warning_text":""
				},
				{
					"id":"stack-name",
					"key":"stack.name",
					"value":"test-elastic-1",
					"readonly":true,
					"warning_text":"Warning! Changing this value will also modify your Cloud 66 *.c66.me DNS values"}
			],
			"count":5,
			"pagination":
				{
					"previous":null,
					"next":null,
					"current":1,
					"per_page":30,
					"count":6,
					"pages":1
				}
			}


### Settings list [GET]
Get list of all settings of stack

+ Response 200

    [Settings list][]


## Setting [/stacks/{stack_id}/settings/{id}]
Get information of a single setting item

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `git-branch`) ... The setting item id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":
				{
					"key":"git.branch",
					"value":"master"
				}
		}

### Setting [GET]
Get information of a single setting item

+ Response 200

    [Setting][]

## Update Setting [/stacks/{stack_id}/settings/{id}]
Update value of a setting item

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `git-branch`) ... The setting item id
    + value (required, string, `staging`) ... The setting item new value

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
        	"response":
        		{
        			"id":7,
        			"user":"test@cloud66.com",
        			"resource_type":"stack",
        			"action":"stack-set: git.branch",
        			"resource_id":"280",
        			"started_via":"api",
        			"started_at":"2014-09-01T12:47:24Z",
        			"finished_at":null,
        			"finished_success":null,
        			"finished_message":null
        		}
        }


### Update Setting [PUT]
Update value of a setting item

+ Response 200

    [Update Setting][]


# Group Server Groups

## Server Group List [/stacks/{id}/server_groups]
Get list of all server groups of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response": [
				{
					"id": 128,
					"name": "Rails Server",
					"type": "rails",
					"created_at": "2014-08-29T17:21:47Z",
					"updated_at": "2014-08-29T17:21:47Z"
				},
				{
					"id":129,
					"name":
					"PostgreSQL Server",
					"type": "postgresql",
					"created_at": "2014-08-29T17:21:47Z",
					"updated_at":"2014-08-29T17:21:47Z"
				}
			],
			"count": 2,
			"pagination":
				{
					"previous": null,
					"next": null,
					"current": 1,
					"per_page": 30,
					"count":2,
					"pages":1
				}
		}

### Server Group List [GET]
Get list of all server groups of stack

+ Response 200

    [Server Group List][]

## Server Group [/stacks/{stack_id}/server_groups/{id}]
Get information of a single server group

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `128`) ... The server group id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
    	{

    		"response":
    			{
    				"id": 128,
    				"name": "Rails Server",
    				"type": "rails",
    				"created_at": "2014-08-29T17:21:47Z",
    				"updated_at": "2014-08-29T17:21:47Z"
    			}
    	}

### Server Group [GET]
Get information of a single server group

+ Response 200

    [Server Group][]


# Group Servers

## Server List [/stacks/{id}/servers]
Get list of all servers of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response": [
				{
					"uid": "f8468fc145ea49bac474b30a8fea888d",
					"vendor_uid": "2492780",
					"name": "Caribou",
					"address": "146.185.133.183",
					"distro": "ubuntu",
					"distro_version": "14.04",
					"dns_record": "caribou.sb-elastic-1.dev.c66.me",
					"user_name": "root",
					"server_type": "Cloud (DigitalOcean) ",
					"server_roles": [
						"rails",
						"postgresql",
						"elasticsearch",
						"web",
						"app",
						"db"
					],
					"server_group_id": 128,
					"stack_uid": "5acd43412ea412e32897c40d46f91183",
					"has_agent": true,
					"params":
						{
							"availability_zone": "2",
							"size": "63",
							"region": "2",
							"ips":["146.185.133.183"],
							"was_baselined": true,
							"cached_cores":1,
							"cached_memory": 1042336972,
							"passenger_version": "4.0.48",
							"passenger_enterprise": false,
							"supports_nginx_realip": true,
							"passenger_pool_max": 4
						},
					"created_at": "2014-08-29T17:21:47Z",
					"updated_at": "2014-08-29T17:54:41Z",
					"region":"2",
					"availability_zone": "2",
					"ext_ipv4": "146.185.133.183",
					"health_state": 3,
					"int_ipv4": "146.185.133.183",
					"int_ipv6": null,
					"ext_ipv6": null
				}
			],
			"count":1,
			"pagination":
				{
					"previous": null,
					"next": null,
					"current": 1,
					"per_page": 30,
					"count": 1,
					"pages": 1
				}
		}

### Server List [GET]
Get list of all servers of stack

+ Response 200

    [Server List][]

## Server [/stacks/{stack_id}/servers/{id}]
Get information of a single server

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `f8468fc145ea49bac474b30a8fea888d`) ... The server UID
    + include_private_key (optional, integer, `1`) ... if set to 1 then private_key will included in response

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response":
    			{
    				"uid": "f8468fc145ea49bac474b30a8fea888d",
    				"vendor_uid": "2492780",
    				"name": "Caribou",
    				"address": "146.185.133.183",
    				"distro": "ubuntu",
    				"distro_version": "14.04",
    				"dns_record": "caribou.sb-elastic-1.dev.c66.me",
    				"user_name": "root",
    				"server_type": "Cloud (DigitalOcean) ",
    				"server_roles":[
    					"rails",
    					"postgresql",
    					"elasticsearch",
    					"web",
    					"app",
    					"db"
    				],
    				"server_group_id": 128,
    				"stack_uid": "5acd43412ea412e32897c40d46f91183",
    				"has_agent": true,
    				"params":
    					{
    				 		"availability_zone": "2",
    				 		"size": "63",
    				 		"region": "2",
    				 		"ips":["146.185.133.183"],
    				 		"was_baselined": true,
    				 		"cached_cores": 1,
    				 		"cached_memory": 1042336972,
    				 		"passenger_version": "4.0.48",
    				 		"passenger_enterprise": false,
    				 		"supports_nginx_realip": true,
    				 		"passenger_pool_max":4
    				 	},
    				 "created_at": "2014-08-29T17:21:47Z",
    				 "updated_at": "2014-08-29T17:54:41Z",
    				 "region": "2",
    				 "availability_zone": "2",
    				 "ext_ipv4": "146.185.133.183",
    				 "health_state":3,
    				 "int_ipv4": "146.185.133.183",
    				 "int_ipv6": null,
    				 "ext_ipv6": null
    			}
    	}

### Server [GET]
Get information of a single server

+ Response 200

    [Server][]

# Group Server settings

## Server Settings list [/stacks/{stack_id}/servers/{server_id}/settings]
Get list of all settings of a server

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + server_id (required, string, `f8468fc145ea49bac474b30a8fea888d`) ... The server UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":[
				{
					"key":"server.name",
					"value":"Caribou",
					"readonly":true,
					"warning_text":"Warning! Changing this value will also modify your Cloud 66 *.c66.me DNS values"}
			],
			"count":1,
			"pagination":
				{
					"previous":null,
					"next":null,
					"current":1,
					"per_page":30,
					"count":1,
					"pages":1
				}

### Server Settings list [GET]
Get list of all settings of a server

+ Response 200

    [Server Settings list][]


## Server Setting [/stacks/{stack_id}/servers/{server_id}/settings/{id}]
Get information of a single server setting item

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + server_id (required, string, `f8468fc145ea49bac474b30a8fea888d`) ... The server UID
    + id (required, string, `server-name`) ... The setting item id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

		{
			"response":
				{
					"key":"server.name",
					"value":"Caribou"
				}
		}

### Server Setting [GET]
Get information of a single server setting item

+ Response 200

    [Server Setting][]

## Update Server Setting [/stacks/{stack_id}/servers/{server_id}/settings/{id}]
Update value of a server setting item

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + server_id (required, string, `f8468fc145ea49bac474b30a8fea888d`) ... The server UID
    + id (required, string, `server-name`) ... The setting item id
    + value (required, string, `newname`) ... The setting item new value

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
        	"response":
        		{
        			"id":9,
        			"user":"test@cloud66.com",
        			"resource_type":"server",
        			"action":"server-set: server.name",
        			"resource_id":"445",
        			"started_via":"api",
        			"started_at":"2014-09-01T13:07:35Z",
        			"finished_at":null,
        			"finished_success":null,
        			"finished_message":null
        		}
        }


### Update Server Setting [PUT]
Update value of a server setting item

+ Response 200

    [Update Server Setting][]


# Group Backups

## Backups list [/stacks/{id}/backups]
Get list of all backups of stack.

- Scope: _public_

+ Parameters

    + id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + group (optional, integer, `15`) ... The backup group id
    + db_type (optional, string, `mysql`) ... Database type of backup . Valid options or : mysql, postgresql, redis, mongodb

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":[
				{
					"id":4,
					"server_uid":"e63e859d5ab72b0bcf14321f0ffb013d",
					"db_type":"mysql",
					"database_name":"test-db",
					"file_base":"",
					"backup_date_iso":"2014-09-01T19:00:33Z",
					"backup_status":0,
					"backup_result":"",
					"restore_status":0,
					"restore_result":null,
					"created_at_iso":"2014-09-01T19:00:33Z",
					"updated_at_iso":"2014-09-01T19:00:33Z",
					"verify_status":0,
					"verify_result":null,
					"storage_path":"2aad2bb5a70e621ecf251fbd85af6927/backups/3c656a1bcc160769762763c6276c18b9/mysql/test_db_11/2014.09.01.19.00.31",
					"skip_tables":"","backup_size":0
				},
				{
					"id":1,
					"server_uid":"e63e859d5ab72b0bcf14321f0ffb013d",
					"db_type":"mysql",
					"database_name":"test-db",
					"file_base":"",
					"backup_date_iso":"2014-09-01T18:16:16Z",
					"backup_status":0,
					"backup_result":"",
					"restore_status":0,
					"restore_result":null,
					"created_at_iso":"2014-09-01T18:16:16Z",
					"updated_at_iso":"2014-09-01T18:16:16Z",
					"verify_status":0,
					"verify_result":null,
					"storage_path":"2aad2bb5a70e621ecf251fbd85af6927/backups/3c656a1bcc160769762763c6276c18b9/mysql/test_db_11/2014.09.01.18.16.14",
					"skip_tables":"","backup_size":0
				}
			],
			"count":2,
			"pagination":
				{
					"previous":null,
					"next":null,
					"current":1,
					"per_page":30,
					"count":2,
					"pages":1
				}
		}

### Backups list [GET]
Get list of all backups of stack.

+ Response 200

    [Backups list][]

## Backup [/stacks/{stack_id}/backups/{id}]
Get information of a single backup

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The backup id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":
				{
					"id":1,
					"server_uid":"e63e859d5ab72b0bcf14321f0ffb013d",
					"db_type":"mysql",
					"database_name":"shab-test-db",
					"file_base":"",
					"backup_date_iso":"2014-09-01T18:16:16Z",
					"backup_status":0,
					"backup_result":"",
					"restore_status":0,
					"restore_result":null,
					"created_at_iso":"2014-09-01T18:16:16Z",
					"updated_at_iso":"2014-09-01T18:16:16Z",
					"verify_status":0,
					"verify_result":null,
					"storage_path":"2aad2bb5a70e621ecf251fbd85af6927/backups/3c656a1bcc160769762763c6276c18b9/mysql/test_db_11/2014.09.01.18.16.14",
					"skip_tables":"",
					"backup_size":0
				}
		}


### Backup [GET]
Get information of a single backup

+ Response 200

    [Backup][]


## Import Backup [/stacks/{stack_id}/backups]
Import an external backup.

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + group (required, integer, `5`) ... The group id of backups that imported backup must be place in
    + db_type (required, string, `mysql`) ... Database type of backup . Valid options or : mysql, postgresql, redis, mongodb
    + remote_url (required, string, `https://s3.amazonaws.com/c66-managed-backup-non-prod/2aad2bb5a70e621ecf251fbd85af6927/backups/09a7dec0efdaa19b44148fccbf6128ec/redis/redis_23/2014.07.01.07.00.46/redis_23.tar`) ... A valid url to backup file that is going to be imported

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response":
    			{
    				"ok":true,
    				"message":"Your external backup queued for upload"
    			}
    	}

### Import Backup [POST]
Add a new environment variable

+ Response 200

    [Import Backup][]


## Backup files [/stacks/{stack_id}/backups/{backup_id}/files]
Get list of all files of a backup

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + backup_id (required, integer, `4153`) ... The backup id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
    		"response":[
    			{
    				"id":"tar",
    				"name":"test_db_11.tar"
    			}
    		],
    		"count":1,
    		"pagination":
    			{
    				"previous":null,
    				"next":null,
    				"current":1,
    				"per_page":30,
    				"count":1,
    				"pages":1
    			}
    	}


### Backup files [GET]
Get list of all files of a backup

+ Response 200

    [Backup files][]


## Backup file [/stacks/{stack_id}/backups/{backup_id}/files/{id}]
Get public url to a backup file

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5be6b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + backup_id (required, integer, `4153`) ... The backup id
    + id (required, string, `tar-aa`) ... The file id

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":
				{
					"ok":true,
					"public_url":"https://c66-managed-backup-non-prod.s3.amazonaws.com/2aad2bb5a70e621ecf251fbd85af6927/backups/3c656a1bcc160769762763c6276c18b9/mysql/test_db_11/2014.09.01.18.16.14/test_db_11.tar?AWSAccessKeyId=AKIAIKCYITLQBEJDIETQ\u0026Expires=1409603570\u0026Signature=C2au7Jq%252F1m6uHGHRfGJPn%252F2GSS8%253D"
				}
		}

### Backup file [GET]
Get public url to a backup file

+ Response 200

    [Backup file][]

# Group Accounts

## Account List [/accounts]
Get list of accounts that caller belongs to

- Scope: _users_

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body

        {
        	"response": [
        		{
        			"owner": "test@cloud66.com",
        			"created_at_iso": "2013-06-19T11:08:03Z",
        			"updated_at_iso": "2014-02-20T12:55:58Z",
        			"stack_count": 2,
        			"used_clouds": ["digitalocean","rackspace"]
        		}
        	],
        	"count":1,
        	"pagination":{
        		"previous": null,
        		"next": null,
        		"current": 1,
        		"per_page": 30,
        		"count": 1,
        		"pages": 1
        	}
        }

### Account List [GET]
Get a list of accounts that caller belongs to.

+ Response 200

    [Account List][]


## Account [/accounts/{id}]
Get information of an Account

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... The account ID

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body

		{
			"response":
				{
        			"owner": "test@cloud66.com",
        			"created_at_iso": "2013-06-19T11:08:03Z",
        			"updated_at_iso": "2014-02-20T12:55:58Z",
        			"stack_count": 2,
        			"used_clouds": ["digitalocean","rackspace"]
				}
		}

### Get Account [GET]
Get a single account.

+ Response 200

    [Account][]

# Group Users

## User List [/users]
Get list of users that caller has access to.

- Scope: _users_

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body


    	{
    		"response": [
    			{
    				"id": 18,
    				"email": "test@cloud66.com",
    				"primary_account_id": 14,
    				"accounts": [
    					{
    						"account": 14,
    						"user": 18,
    						"role": "owner",
    						"can_create_stack": true,
    						"can_admin_users": true,
    						"default_permission_level": 60
    					}
    				],
    				"access_rights": [
    					{
    						"user": 18,
    						"stack": "5acd43412ea412e32897c40d46f91183",
    						"access_level":
    							{
    								"code": 60,
    								"meaning":"admin"
    							}
    					},
    					{
    						"user": 18,
    						"stack": "8cc984959ebe28bcb75d6bd6d810767e",
    						"access_level":
    							{
    								"code": 60,
    								"meaning": "admin"
    							}
    					}],
    				"locked": false,
    				"uses_tfa": false,
    				"timezone": "UTC",
    				"has_valid_phone": false,
    				"developer_program": true,
    				"github_login": false,
    				"last_login": "2014-08-29T17:17:11Z",
    				"devices": [
    					{
    						"device_type": 1,
    						"sub_type": 2,
    						"token": "wertqy",
    						"enabled": true,
    						"created_at": "2014-08-04 11:57:36 UTC",
    						"updated_at": "2014-08-04 12:03:22 UTC",
    						"created_at_iso": "2014-08-04T11:57:36Z",
    						"updated_at_iso": "2014-08-04T12:03:22Z"
    					}
    				],
    				"created_at": "2013-06-19T11:08:02Z",
    				"updated_at": "2014-09-01T08:11:34Z",
    				"cloud_status": "partial"
    			}
    		],
        	"count":1,
        	"pagination":{
        		"previous": null,
        		"next": null,
        		"current": 1,
        		"per_page": 30,
        		"count": 1,
        		"pages": 1
        	}
        }

### User List [GET]
Get list of users that caller has access to

+ Response 200

    [User List][]

## User [/users/{id}]
Get detail information about a user

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... The user ID

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body


		{
			"response":
				{
					"id": 18,
					"email": "test@cloud66.com",
					"primary_account_id": 14,
					"accounts": [
						{
							"account": 14,
							"user": 18,
							"role": "owner",
							"can_create_stack":true,
							"can_admin_users":true, "default_permission_level":60
						}
					],
					"access_rights": [
						{
							"user": 18,
							"stack": "5acd43412ea412e32897c40d46f91183",
							"access_level":
								{
									"code": 60,
									"meaning": "admin"
								}
						}
					],
					"locked": false,
					"uses_tfa": false,
					"timezone": "UTC",
					"has_valid_phone": false,
					"developer_program": true,
					"github_login": false,
					"last_login": "2014-08-29T17:17:11Z",
					"devices":[
						{
							"device_type": 1,
							"sub_type": 2,
							"token": "wertqy",
							"enabled": true,
							"created_at": "2014-08-04 11:57:36 UTC",
							"updated_at": "2014-08-04 12:03:22 UTC",
							"created_at_iso": "2014-08-04T11:57:36Z",
							"updated_at_iso": "2014-08-04T12:03:22Z"
						}
					],
					"created_at": "2013-06-19T11:08:02Z",
					"updated_at": "2014-09-01T08:33:43Z",
					"cloud_status": "partial"
				}
			}
		}

### Get User [GET]
Get information of a user.

+ Response 200

    [User][]

## Add Device [/users/{id}/devices]
Add a new device for user

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... The user ID
    + device_type (required, integer, `1`) ... Device type 1 = IOS, 2 = Android
    + sub_type (required, integer, `1`) ... 1 = IPHONE, 2 = IPAD, 3 = IPOD
    + token (required, string, `htyukjbnnmshthkr`) ... token of device

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
			"response":
				{
					"device_type": 1,
					"sub_type": 1,
					"token": "mmccdd",
					"enabled": true,
					"created_at": "2014-09-01 09:15:50 UTC",
					"updated_at": "2014-09-01 09:15:50 UTC",
					"created_at_iso": "2014-09-01T09:15:50Z",
					"updated_at_iso": "2014-09-01T09:15:50Z"
				}
		}

### Add Device [POST]
Add a new environment variable

+ Response 200

    [Add Device][]


## Update Device [/users/{id}/devices]
Update device_type/sub_type of a device

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... The user ID
    + token (required, string, `htyukjbnnmshthkr`) ... token of device
    + device_type (required, integer, `1`) ... Device type 1 = IOS, 2 = Android
    + sub_type (required, integer, `1`) ... 1 = IPHONE, 2 = IPAD, 3 = IPOD

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body


### Update Device [PUT]
Update device_type/sub_type of a device

+ Response 200

    [Update Device][]

## Delete Device [/users/{id}/devices/token]
Delete a device

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... The user ID
    + token (required, string, `htyukjbnnmshthkr`) ... token of device

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597


### Delete Device [DELETE]
Delete a device

+ Response 200

    [Delete Device][]
