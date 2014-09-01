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
Get a list of all stacks accessible by the caller.

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
Stack description.

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
