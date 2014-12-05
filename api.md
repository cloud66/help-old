FORMAT: 1A
HOST: https://app.cloud66.com/api/3

# Group Introduction
[Cloud 66](http://www.cloud66.com) is DevOps as a Service. It allows you to build, provision, configure and manage your servers to run [Rack](http://rack.github.io/) backed web applications on any server.
You can find more information on Cloud 66 on [our help site](http://help.cloud66.com/).

### Resource model
The Cloud 66 API is organised around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). It is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors.

We use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients.

[JSON](http://www.json.org/) will be returned in all responses from the API, including errors (though if you're using API bindings, we will convert the response to the appropriate language-specific object).

### Authentication
Cloud 66 uses [OAuth2](http://oauth.net/2/) to authenticate users and grant access to stacks and redeployments. To use it, you need an OAuth 2.0 compatible client. To submit API requests, you must pass an OAuth token. An OAuth token functions as a complete authentication request, acting as a substitute for a username and password pair. Because of this, it is absolutely essential that you keep your OAuth tokens secure.

To authenticate your requests with OAuth you need to send a bearer authorization header with your request. This is the preferred method of authenticating because it completes the authorization request in the header portion, away from the actual request.

Usually, you use a language binding (like a [Ruby gem](https://rubygems.org/) or [Go package](http://golang.org/pkg/)) to deal with the OAuth authentication. Alternatively, you can include the OAuth authentication token in the header of each request:

```http
Authorization: bearer 5262d64b892e8d4341000001
```
You can generate an OAuth token by visiting the [Apps](https://app.cloud66.com/oauth/authorized_applications) , under your Account.

#### How to authenticate with OAuth2
You can generate an OAuth token using the Your Account > [Apps](https://app.cloud66.com/oauth/authorized_applications) area of the Cloud 66 user interface or using the API. 

**Step 1 - Redirect users to request Cloud 66 access**
```http
GET https://app.cloud66.com/oauth/authorize
```
| Parameter | Description | Presence |
| ----------- | ---------------------------- | --------- |
| client_id | The client ID you received from Cloud 66 when you registered. | Required |
| redirect_url | URL in your app where users will be sent after authorization. | Required |
| scope | Comma separated list of scopes. | Optional |

**Step 2 - Cloud 66 redirects back to your site**

If the user accepts your request, Cloud 66 redirects back to your site with a temporary code in a code parameter as well as the state you provided in the previous step in a state parameter. If the states don’t match, the request has been created by a third party and the process should be aborted.

Exchange this for an access token:
```http
POST https://app.cloud66.com/oauth/token
```

| Parameter | Description | Presence |
| ----------- | ---------------------------- | --------- |
| client_id | The client ID you received from Cloud 66 when you registered. | Required |
| redirect_url | URL in your app where users will be sent after authorization. | Optional |
| client_secret | The client secret you received from Cloud 66 when you registered. | Required |

**Response**
By default, the response will take the following form:
```http
access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&amp;token_type=bearer
Accept: application/json {"access_token":"e72e16c7e42f292c6912e7710c838347ae178b4a","token_type":"bearer"}
```

**Step 3 - Use the access token to access the API**

The access token allows you to make requests to the API on behalf of a user.
```http
GET "https://app.cloud66.com/api/3/stack.json" -H "Authorization: Bearer e72e...b4a"   
```
### Scoped access
A user’s scope defines the limits of the actions the user can perform with the Cloud 66 API. The user’s scope is encrypted as part of the OAuth access token. Users cannot submit requests not allowed by their defined scopes.

For the web flow, requested scopes be displayed to the user on the authorize form.

**(no scope)**
Users with this scope have public read-only access and can view limited stack information.

**public**
Users with this scope have public read-only access and can view limited stack information.

**redeploy**
Users with this scope can redeploy any stacks they can access.

**jobs**
Users with this scope can view the scheduled jobs for the stacks they can access.

**users**
Users with this scope can manage other users’ mobile devices.

**admin**
Users with this scope can set and manage settings for the servers they can access.
_NOTE Your application can request scopes in the initial redirection. You can specify multiple scopes by separating them with a space character._
```http
https://app.cloud66.com/oauth/authorize?client_id=...&scope=public+redeploy
````

### Ruby example
This example shows how to get the first token using the Application (Client) ID and Secret. This is using `urn:ietf:wg:oauth:2.0:oob` for commandline tools.

Once you have the code, you can apply for a token. Tokens issued by the API server do not expire and are valid until the user revokes their access. You can see how to store and retrieve the token for future use in this example.

```ruby
require 'rubygems'
require 'oauth2'
require 'json'

base = 'https://app.cloud66.com'
api_url = 'https://app.cloud66.com/api/3'

if File.exists? '/tmp/cloud66_oauth_test.json'
    config = JSON.parse(File.read('/tmp/cloud66_oauth_test.json'))
    client = OAuth2::Client.new(config['app_id'], config['app_secret'], :site => base)
    token = OAuth2::AccessToken.new(client, config['token'])
else
    client = OAuth2::Client.new(ENV['APP_ID'], ENV['APP_SECRET'], :site => base)
    puts client.auth_code.authorize_url(:redirect_uri => 'urn:ietf:wg:oauth:2.0:oob', :scope => 'public admin redeploy')

    puts "Enter the code:"
    code = gets.strip

    token = client.auth_code.get_token(code, :redirect_uri => "urn:ietf:wg:oauth:2.0:oob")

    # save it
    File.write('/tmp/cloud66_oauth_test.json', { :app_id => ENV['APP_ID'], :app_secret => ENV['APP_SECRET'], :token => token.token }.to_json)
end

# Now you can use the toekn to call API methods, like:

# List all the stacks
response = token.get("#{api_url}/stacks.json")

# list all the servers in the stack
stack_uid = 'ENTER_STACK_UID'
response = token.get("#{api_url}/stacks/#{stack_uid}/servers.json")

# show the response (no error handling)
puts JSON.parse(response.body)['response']
````

### cURL Example 

You can use your **personal access token** to call the API with cURL - it just needs to be passed in as a header.

For example, you can get lists of stacks with this command:

```http
curl -X GET "https://app.cloud66.com/api/3/stacks.json"  -H "Authorization: Bearer PERSONAL_ACCESS_TOKEN"
```

You can find your **personal access token** in your Cloud 66 Accounts page, under _Authorized Applications_.

Assuming that your personal access token is `4c9c9b1111`, these are some examples for using cURL:

#### Simple GET
Get list of stacks: 

```http
curl -X GET "https://app.cloud66.com/api/3/stacks.json" -H "Authorization: Bearer 4c9c9b1111"
```

#### GET with some params
Get list of all `mysql` backups in `1345` backup group:

```http
curl -X GET "https://app.cloud66.com/api/3/stacks/f196c5b41758cb7977620d49eb1492ef/backups.json" -H "Authorization: Bearer 4c9c9b1111" -d group=1345 -d db_type=mysql
```
#### POST 
Add a new iPhone application to user ID 18 with 'wertqy' as a token: 

```http
curl -X POST "https://app.cloud66.com/api/3/users/18/devices.json" -H "Authorization: Bearer 4c9c9b1111" -d token=wertqy -d device_type=1 -d sub_type=1
```

#### PUT 
Update the type of device with token 'wertqy' to iPad:

```http
curl -X PUT "https://app.cloud66.com/api/3/users/18/devices/wertqy.json" -H "Authorization: Bearer 4c9c9b1111" -d device_type=1 -d sub_type=2
```

#### DELETE 
Delete device with token 'wertqy':

```http
curl -X DELETE "https://app.cloud66.com/api/3/users/18/devices/wertqy.json" -H "Authorization: Bearer 4c9c9b1111"
```

### Go Example

You can use the [Cloud 66 Go library repository](https://github.com/cloud66/cloud66) if you want to use Go.

### Synchronous vs. asynchronous requests
The Cloud 66 API uses both synchronous and asynchronous methods. Asynchronous methods are specified in the documentation for the associated calls; all others are generally considered synchronous.

**Synchronous** methods will wait for the server to return a response for the request before it will continue processing. Your application will not perform any additional actions until it receives a response from the server. 

**Asynchronous** methods will submit the request to the server, but the application will not wait for a response from the server to continue processing. When the server returns a response, the application can execute a callback function to retrieve the response object, but will continue processing until the response is received.

### Date formats
Cloud 66 accepts and returns date values according to the ISO 8601 standard. Combined date and time values appear in UTC including local time zone offsets. For example: `2014-06-15T14:13:18+00:00`

### Rate limiting
The Cloud 66 API can receive a maximum of 3,000 requests per user per hour. When the request level reaches the maximum rate, subsequent requests will return a `503: throttled` HTTP status message and the user must retry the request in the next hourly interval.

### Standard HTTP response statuses
Requests made using the Cloud 66 API can return any of the following response status codes.

| Code | Message | Description |
| :---: | ---------- | ---------------------------------------------------- |
| 200 | ok | The request completed successfully. |
| 400 | bad_request | The system cannot parse the request syntax. It might be missing required parameters or include an invalid value. |
| 401 | unauthenticated | No authentication token was passed in the request. |
| 402 | trial_expired | The user’s Cloud 66 trial period has expired. |
| 403 | forbidden | The user does not have the scope required to submit this request. |
| 404 | not_found | The system cannot find a response for this request URI. |
| 408 | time_out | The system did not return a response before the server timed out. |
| 409 | conflict | The system did not return a response because there is a current conflict with the resource. |
| 503 | not_implemented | This resource is not actively implemented in this version of the Cloud 66 API. |
| 503 | throttled | The user has reached or exceeded the maximum rate limit and must wait until the next hourly interval to retry the request. |

### Stack UID retrieval
Many requests in the Cloud 66 API rely on the Stack UID value, an alphanumeric string that uniquely identifies your stack. You can retrieve this value by accessing the _Stack information_ page from the right sidebar of your stack page or by submitting an API request to list all stacks. The Stack UID appears in the response body for each stack you maintain.

## Cloud vendor instance names [/]
### Amazon Web Services
| Instance size | Value |
| ------------- | ------------ |
| Micro instance | t1.micro |
| General purpose | m1.small |
| General purpose | m1.medium |
| General purpose | m1.large |
| General purpose | m1.xlarge |
| General purpose | m3.medium |
| General purpose | m3.large |
| General purpose | m3.xlarge |
| General purpose | m3.2xlarge |
| Compute optimized | c1.medium |
| Compute optimized | c1.xlarge |
| Compute optimized | c3.large |
| Compute optimized | c3.xlarge |
| Compute optimized | c3.2xlarge |
| Compute optimized | c3.4xlarge |
| Compute optimized | c3.8xlarge |
| Compute optimized | cc2.8xlarge |
| Memory optimized | m2.xlarge |
| Memory optimized | m2.2xlarge |
| Memory optimized | m2.4xlarge |
| Storage optimized | i2.xlarge |
| Storage optimized | i2.2xlarge |
| Storage optimized | i2.4xlarge |
| Storage optimized | i2.8xlarge |
| Memory optimized | cr1.8xlarge |
| Storage optimized | hi1.4xlarge |
| Storage optimized | hs1.8xlarge |
| GPU instances | cg1.4xlarge |
| GPU instances | g2.2xlarge |

### Digital Ocean
| Instance size | Value |
| --------- | --------- |
| 512MB - 1 CPU | 66 |
| 1GB - 1 CPU | 63 |
| 2GB - 2 CPU | 62 |
| 4GB - 2 CPU | 64 |
| 8GB - 4 CPU | 65 |
| 16GB - 8 CPU | 61 |
| 32GB - 12 CPU | 60 |
| 48GB - 16 CPU | 70 |
| 64GB - 20 CPU | 69 |
| 96GB - 24 CPU | 68 |

### Google Compute Engine
| Instance size | Value |
| ---------- | ---------- |
| f1-micro | f1-micro |
| g1-small | g1-small |
| n1-highcpu-2 | n1-highcpu-2 |
| n1-highcpu-2-d | n1-highcpu-2-d |
| n1-highcpu-4 | n1-highcpu-4 |
| n1-highcpu-4-d | n1-highcpu-4-d |
| n1-highcpu-8 | n1-highcpu-8 |
| n1-highcpu-8-d | n1-highcpu-8-d |
| n1-highmem-2 | n1-highmem-2 |
| n1-highmem-2-d | n1-highmem-2-d |
| n1-highmem-4 | n1-highmem-4 |
| n1-highmem-4-d | n1-highmem-4-d |
| n1-highmem-8 | n1-highmem-8 |
| n1-highmem-8-d | n1-highmem-8-d |
| n1-standard-1 | n1-standard-1 |
| n1-standard-1-d | n1-standard-1-d |
| n1-standard-2 | n1-standard-2 |
| n1-standard-2-d | n1-standard-2-d |
| n1-standard-4 | n1-standard-4 |
| n1-standard-4-d | n1-standard-4-d |
| n1-standard-8 | n1-standard-8 |
| n1-standard-8-d | n1-standard-8-d |

### Linode
| Instance size | Value |
| ---------- | ---------- |
| Linode 1024 | Linode 1024 |
| Linode 2048 | Linode 2048 |
| Linode 4096 | Linode 4096 |
| Linode 8192 | Linode 8192 |
| Linode 16384 | Linode 16384 |
| Linode 32768 | Linode 32768 |
| Linode 49152 | Linode 49152 |
| Linode 65536 | Linode 65536 |
| Linode 98304 | Linode 98304 |

### Rackspace
| Instance size | Value |
| ---------- | ---------- |
| 512MB Standard Instance | 512MB Standard Instance |
| 1GB Standard Instance | 1GB Standard Instance |
| 2GB Standard Instance | 2GB Standard Instance |
| 4GB Standard Instance | 4GB Standard Instance |
| 8GB Standard Instance | 8GB Standard Instance |
| 15GB Standard Instance | 15GB Standard Instance |
| 30GB Standard Instance | 30GB Standard Instance |
| 1 GB Performance | 1 GB Performance |
| 2 GB Performance | 2 GB Performance |
| 4 GB Performance | 4 GB Performance |
| 8 GB Performance | 8 GB Performance |
| 15 GB Performance | 15 GB Performance |
| 30 GB Performance | 30 GB Performance |
| 60 GB Performance | 60 GB Performance |
| 90 GB Performance | 90 GB Performance |
| 120 GB Performance | 120 GB Performance |

### Vexxhost Cloud
| Instance size | Value |
| ---------- | ---------- |
| 512MB | nb.512M |
| 1GB | nb.1G |
| 2GB | nb.2G |
| 4GB | nb.4G |
| 8GB | nb.8G |
| 16GB | nb.16G |
| 24GB | nb.24G |
| 32GB | nb.32G |
| 48GB | nb.48G 
| 64GB | nb.64G |

## Cloud vendor instance regions [/]
### Amazon Web Services
| Region | Value |
| ---------- | ---------- |
| US East (Northern Virginia)| us-east-1 |
| US West (Northern California) | us-west-1 |
| US West (Oregon) | us-west-2 |
| South America (Sao Paulo, Brazil) | sa-east-1 |
| Europe (Dublin, Ireland) | eu-west-1 |
| Asia Pacific (Singapore) | ap-southeast-1 |
| Asia Pacific (Tokyo) | ap-northeast-1 |
| Asia Pacific (Sydney) | ap-southeast-2 |

### Digital Ocean
| Region | Value |
| ---------- | ---------- |
| Amsterdam, Netherlands| 2 |
| Amsterdam, Netherlands (2nd Data Center) | 5 |
| Amsterdam, Netherlands (3rd Data Center) | 9 |
| New York, US | 1 |
| New York 2, US | 4 |
| New York 3, US | 8 |
| San Francisco, US | 3 |
| Singapore | 6 |
| London | 7 |

### Google Compute Engine
| Zone | Value |
| ---------- | ---------- |
| us-central1-a | us-central1-a |
| us-central1-b | us-central1-b |
| europe-west1-a | europe-west1-a |
| europe-west1-b | europe-west1-b |
| asia-east1-a | asia-east1-a |
| asia-east1-b | asia-east1-b |

### Linode
| Region | Value |
| ---------- | ---------- |
| Atlanta, GA, USA | Atlanta, GA, USA |
| Dallas, TX, USA | Dallas, TX, USA |
| Fremont, CA, USA | Fremont, CA, USA |
| London, England, UK | London, England, UK |
| Newark, NJ, USA | Newark, NJ, USA |
| Tokyo, JP | Tokyo, JP |

### Rackspace
| Region | Value |
| ---------- | ---------- |
| Chicago | chicago |
| Dallas | dallas |
| Hong Kong | hong_kong |
| London | london |
| Northern Virginia | northern_virginia |
| Sydney | sydney |

### Vexxhost Cloud
| Region | Value |
| ---------- | ---------- |
| Montreal | default |

# Stacks
Most interactions with the Cloud 66 API are performed at the stack level. Using the Stacks resource, you can list stacks and view stack details, but you can only create, update, or delete stacks using the UI dashboard.

**Methods**

Using the Stacks endpoint, you can submit requests using the following methods.
* List all stacks
* View a stack
* List all stack actions
* View a stack action
* Perform a stack action

**<a name="The stack object"></a> The stack object**

| Property | Data type | Description | Sample value |
| ---------- | ------------ | -------------------------------- | ------------- |
| uid | string | The unique identifier of the stack. | 5999b763474b0eafa5fafb64bff0ba80 |
| name | string | The name defined for the stack. | My Awesome App |
| git | string | The git repository URL associated with the stack. | http://github.com/mysamples/awesome-app.git |
| git_branch | string | The git repository branch associated with the stack. | fig |
| environment | string | The environment associated with the stack. | production |
| cloud | string | The cloud provider associated with the stack. | DigitalOcean |
| fqdn | string | The fully qualified namespace of the stack. | awesome-app.dev.c66.me |
| language | string | The programming language of the stack. | ruby |
| framework | string | The framework used for the stack. | rails |
| status | int | The current status code for the stack. | 1 | 
| health | int | The current health code for the stack. | 3 |
| last_activity | datetime | The date and time the last action was performed for the stack, in UTC datetime. | 2014-08-14T01:46:53+00:00 |
| last_activity_iso | datetime | The date and time the last action was performed for the stack, in UTC datetime | 2014-08-14T01:46:53+00:00 |
| maintenance mode | bool | Whether the stack currently has maintenance mode enabled. | false |
| has_loadbalancer | bool | Whether the stack has an associated load balancer add-in. | false |
| created_at | datetime | The date and time the stack was created, in iso8601 format | 2014-09-01T19:08:05Z |
| updated_at | datetime | The date and time the stack was last modified, in iso8601 format | 2014-09-01T19:18:05Z |
| deploy_directory | string | The target directory for stack deployment. | /var/deploy/awesome_app |
| cloud_status | string | The current cloud provider status associated with the stack. | partial |
| redeploy_hook | string | If applicable, the deploy hook URL associated with the stack. | http://hooks.cloud66.com/stacks/redeploy/ b806f1c3344eb3aa2a024b23254b75b3/ 6d677352a6b2eefec6e345ee2b491521 |

**<a name="The stack action object"></a> The stack action object**

| Property | Data type | Description | Sample value |
| ------------- | --------- | ----------------------------------- | ---------------- |
| id | int | The numeric identifier of the stack action. Identifiers increment by one for each performed action. | 10 |
| user | string | The email address of the user who performed the stack action. | hello@cloud66.com |
| resource_type | string | The resource for which the action was performed, which is stack in this case. | stack |
| action | string | The action that was performed for the stack. | restart |
| resource_id | int | The unique ID of the resource | 283 |
| started_via | string | The process that initiated the action, which is the UI, API, or command line. | api |
| started_at | datetime | The date and time the action was initiated, in UTC datetime. | 2014-09-01T19:08:05Z |
| finished_at | datetime | The date and time the action was completed, in UTC datetime. | 2014-09-01T19:08:09Z |
| finished_success | bool | Whether the action completed successfully. | true |
| finished_message | string | If applicable, the system message associated with the completed action. | null |

**<a name="Stack status values"></a> Stack status values**

| Status | Code | Description |
| ----------- | :---: | ----------------------------------------- |
| STK_QUEUED | 0 | Pending analysis |
| STK_SUCCESS | 1 | Deployed successfully |
| STK_FAILED | 2 | Deployment failed |
| STK_ANALYSING | 3 | Analyzing |
| STK_ANALYSED | 4 | Analyzed |
| STK_QUEUED_FOR_DEPLOYING | 5 | Queued for deployment | 
| STK_DEPLOYING | 6 | Deploying |
| STK_TERMINAL_FAILURE | 7 | Unable to analyze |

**<a name="Stack health status values"></a> Stack health status values**

| Status | Code | Description |
| ----------- | :---: | ------------------------------------------ |
| HLT_UNKNOWN | 0 | Unknown |
| HLT_BUILDING | 1 | Building |
| HLT_PARTIAL | 2 | Impaired |
| HLT_OK | 3 | Healthy |
| HLT_BROKEN | 4 | Failed |

# Group Stacks

## Stack List [/stacks]
Retrieves a paged list of all the stack objects the user can access. For more information about the object properties returned in the response, refer to [the stack object](#The stack object).

- Scope: _public_

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body

        {
            "response": [
                {
                    "uid": "5999b763474b0eafa5fafb64bff0ba80",
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

### List all stacks [GET]
Retrieves a paged list of all the stack objects the user can access.

+ Response 200

    [Stack List][]

## Stack [/stacks/{id}]
Retrieve the details of the stack specified in the request. For more information about the object properties returned in the response, refer to [the stack object](#The stack object).

- Scope: _public_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Unique identifier of the stack.

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

    	{
		 	"response":
				{
				 	"uid": "5999b763474b0eafa5fafb64bff0ba80",
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


### View a stack [GET]
Retrieve the details of the stack specified in the request.

+ Response 200

    [Stack][]

## Stack Action list [/stacks/{id}/actions]
Retrieve a paged list of all asynchronous actions performed for the stack specified in the request. For more information about the object properties returned in the response, refer to [the stack action object](#The stack action object).

- Scope: _public_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Unique identifier of the stack

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body
		{
			"response":
            [
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

### List all stack actions [GET]
Retrieve a paged list of all asynchronous actions performed for the stack specified in the request.

+ Response 200

    [Stack Action list][]

## Stack Action [/stacks/{stack_id}/actions/{id}]
Retrieve the details of an asynchronous action performed for the the stack specified in the request based on the supplied action ID. For more information about the object properties returned in the response, refer to [the stack action object](#The stack action object).

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Unique identifier of the stack
    + id (required, integer, `4153`) ... Identifier of the asynchronous action

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

### View a stack action [GET]
Retrieve the details of an asynchronous action performed for the the stack specified in the request based on the supplied action ID.

+ Response 200

    [Stack Action][]


## Run Stack action [/stacks/{stack_id}/actions]
Perform an asynchronous action for the stack specified in the request. You can use this method to restart the stack, clear the stack's cache, or enable maintenance mode. For more information about the object properties returned in the response, refer to [the stack action object](#The stack action object).

| Command | Comments | Extra Parameters |
| ---------- | ---------- | ---------------- |
| maintenance_mode | Enable to Disable maintenance mode for a stack. | value=1 for enable, value=0 for disable |
| clear_caches | Clear git caches for the stack | None |
| restart | Restarts all stack components (nginx, db, etc.) | None |

- Scope: _redeploy_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Unique identifier of the stack
    + command (required, string, `restart`) ... The action to perform for the stack. Valid values are clear_caches, maintenance_mode, and restart.

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

### Perform a stack action [POST]
Perform an asynchronous action for the stack specified in the request. You can use this method to restart the stack, clear the stack's cache, or enable maintenance mode.

+ Response 200

    [Run Stack action][]


# Group Deployments

## Deployment list [/stacks/{id}/deployments]
Get list of all deployments of stack

- Scope: _public_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + git_ref (optional, string `a_git_tag_or_hash`) ... Git reference (branch, tag or hash)

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

# Group Services

<style>
.notice {
  border-top: 1px solid #e2eaee;
  border-bottom: 1px solid #e2eaee;
  background: rgba( 209, 228, 240, 0.3 );
  padding-left: 0.8em;
  padding-right: 0.8em;
  /*margin-left: -12px;*/
  background: #FEFBED !important;
  border-top: 1px solid #EFE1A7;
  p:nth-child(2) {
    margin-top: -0.4em;
  }
}
</style>

<div class="notice">
<h3>Notice</h3>
<p>The Services API endpoints run against the Cloud 66 beta program, with Docker-based stacks.</p>
</div>

## Services list [/stacks/{id}/services]
Get list of all services of the stack

- Scope: _public_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + server_uid (optional, string `1239b763474b0eafa5fafb64bff0ba80`) ... Server UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
          "response": [
            {
              "name": "web",
              "containers": [
                {
                  "uid": "1339d2dfa5a86dfce497f8f2e1bb29492f246288c722d11c8e6fc9348bfeece6",
                  "server_uid": "edfbd7a9b97e999ebf17984282d4b457",
                  "server_name": "Cormorant",
                  "service_name": "web",
                  "image": "quay.io/cloud66/sample-rails",
                  "port_list": "[\"5128:3000\"]",
                  "command": "rackup -p 3000",
                  "started_at": "2014-09-30T09:59:45Z",
                  "web_ports": "80:443",
                  "created_at": "2014-09-30T09:59:45Z",
                  "updated_at": "2014-09-30T09:59:48Z"
                }
              ]
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

### Services list [GET]
Get list of all services of the stack

+ Response 200

	[Services list][]    

## Service show [/stacks/{stack_id}/services/{id}]
Get service of the stack

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `web`) ... The service name
    + server_uid (optional, string `1239b763474b0eafa5fafb64bff0ba80`) ... Server UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
          "response": {
            "name": "web",
            "containers": [
              {
                "uid": "1339d233a5a86dfce497f8f2e1bb29492f246288c722d11c8e6fc9348bfeece6",
                "server_uid": "1239b763474b0eafa5fafb64bff0ba80",
                "server_name": "Cormorant",
                "service_name": "web",
                "image": "quay.io/cloud66/sample-rails",
                "port_list": "[\"5128:3000\"]",
                "command": "rackup -p 3000",
                "started_at": "2014-09-30T09:59:45Z",
                "web_ports": "80:443",
                "created_at": "2014-09-30T09:59:45Z",
                "updated_at": "2014-09-30T09:59:48Z"
              }
            ]
          }
        }

### Service show [GET]
Get service of the stack

+ Response 200

	[Service show][]    
	
## Service scale [/stacks/{stack_id}/services]
Scale the given service over the stack

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    
    + service_name (required, string, `web`) ... The service name    
    + server_count (required, string, `{"123123cfcb7d3d2b54614b19e2a6c673":2}`) ... A hash of server uid to count of containers desired on that server

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

          {
            "response": {
              "id": 1234,
              "user": "theuser@yourdomain.com",
              "resource_type": "stack",
              "action": "service_scale",
              "resource_id": "15633",
              "started_via": "api",
              "started_at": "2014-09-30T11:36:58Z",
              "finished_at": null,
              "finished_success": null,
              "finished_message": null
            }
          }
        
### Service scale [POST]
Scale the given service over the stack

+ Response 200

    [Service scale][]	

## Service stop [/stacks/{stack_id}/services/{id}]
Stop all of the given service on the stack (across all servers, unless server_uid supplied)

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `web`) ... The service name
    + server_uid (optional, string `1239b763474b0eafa5fafb64bff0ba80`) ... Server UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

          {
            "response": {
              "id": 1234,
              "user": "theuser@yourdomain.com",
              "resource_type": "stack",
              "action": "service_stop",
              "resource_id": "15633",
              "started_via": "api",
              "started_at": "2014-09-30T11:36:58Z",
              "finished_at": null,
              "finished_success": null,
              "finished_message": null
            }
          }
        
### Service stop [DELETE]
Stop all of the given service on the stack (across all servers, unless server_uid supplied)

+ Response 200

    [Service stop][]          

# Group Containers

<div class="notice">
<h3>Notice</h3>
<p>The containers API endpoints are currently only available to <a href='http://go.c66.me/c66beta'>beta program members</a> with Docker-based stacks.</p>
</div>

## Containers list [/stacks/{id}/containers]
Get list of all containers of the stack

- Scope: _public_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + server_uid (optional, string `1239b763474b0eafa5fafb64bff0ba80`) ... Server UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
          "response": [
            {
              "uid": "12344cd3c84eb64591598312c9f12e5c3ed64454545f987016916f64ff25e363",
              "server_uid": "1239b763474b0eafa5fafb64bff0ba80",
              "server_name": "Cormorant",
              "service_name": "web",
              "image": "quay.io/cloud66/sample-rails",
              "port_list": "[\"5293:3000\"]",
              "command": "rackup -p 3000",
              "started_at": "2014-09-30T11:42:51Z",
              "web_ports": "80:443",
              "capture_output": true,
              "created_at": "2014-09-30T11:42:51Z",
              "updated_at": "2014-09-30T11:42:53Z"
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

### Containers list [GET]
Get list of all containers of the stack

+ Response 200

	[Containers list][]    

## Container show [/stacks/{stack_id}/containers/{id}]
Get container of the stack (includes container runtime information

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `12344cd3c84eb64591598312c9f12e5c3ed64454545f987016916f64ff25e363`) ... The container UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

        {
          "response": {
            "uid": "12344cd3c84eb64591598312c9f12e5c3ed64454545f987016916f64ff25e363",
            "server_uid": "1239b763474b0eafa5fafb64bff0ba80",
            "server_name": "Cormorant",
            "service_name": "web",
            "image": "quay.io/cloud66/sample-rails",
            "port_list": "[\"5293:3000\"]",
            "command": "rackup -p 3000",
            "started_at": "2014-09-30T11:42:51Z",
            "web_ports": "80:443",
            "capture_output": true,
            "created_at": "2014-09-30T11:42:51Z",
            "updated_at": "2014-09-30T11:42:53Z",
            "runtime": {
              "Args": [
                "-p",
                "3000"
              ],
              "Config": {
                "AttachStderr": false,
                "AttachStdin": false,
                "AttachStdout": false,
                "Cmd": [
                  "rackup",
                  "-p",
                  "3000"
                ],
                "CpuShares": 0,
                "Cpuset": "",
                "Domainname": "",
                "Entrypoint": null,
                "Env": [
                  ...
                ],
                "ExposedPorts": {
                  "3000/tcp": {
                  }
                },
                "Hostname": "...",
                "Image": "quay.io/cloud66/sample-rails",
                "Memory": 0,
                "MemorySwap": 0,
                "NetworkDisabled": false,
                "OnBuild": null,
                "OpenStdin": false,
                "PortSpecs": null,
                "StdinOnce": false,
                "Tty": false,
                "User": "",
                "Volumes": null,
                "WorkingDir": "/usr/src/app"
              },
              "Created": "2014-09-30T11:42:51.267660159Z",
              "Driver": "aufs",
              "ExecDriver": "native-0.2",
              "HostConfig": {
                "Binds": [
                  "/var/log/containers:/usr/src/app/log"
                ],
                "CapAdd": null,
                "CapDrop": null,
                "ContainerIDFile": "",
                "Devices": [
        
                ],
                "Dns": null,
                "DnsSearch": null,
                "Links": null,
                "LxcConf": [
        
                ],
                "NetworkMode": "bridge",
                "PortBindings": {
                  "3000/tcp": [
                    {
                      "HostIp": "",
                      "HostPort": "5293"
                    }
                  ]
                },
                "Privileged": false,
                "PublishAllPorts": false,
                "RestartPolicy": {
                  "MaximumRetryCount": 0,
                  "Name": "always"
                },
                "VolumesFrom": null
              },
              "HostnamePath": "...",
              "HostsPath": "...",
              "Id": "...",
              "Image": "...",
              "MountLabel": "",
              "Name": "/lonely_yonath",
              "NetworkSettings": {
                "Bridge": "docker0",
                "Gateway": "172.17.42.1",
                "IPAddress": "172.17.0.7",
                "IPPrefixLen": 16,
                "PortMapping": null,
                "Ports": {
                  "3000/tcp": [
                    {
                      "HostIp": "0.0.0.0",
                      "HostPort": "5293"
                    }
                  ]
                }
              },
              "Path": "rackup",
              "ProcessLabel": "",
              "ResolvConfPath": "...",
              "State": {
                "ExitCode": 0,
                "FinishedAt": "0001-01-01T00:00:00Z",
                "Paused": false,
                "Pid": 30152,
                "Restarting": false,
                "Running": true,
                "StartedAt": "2014-09-30T11:42:51.396771169Z"
              },
              "Volumes": {
                "/usr/src/app/log": "/var/log/containers"
              },
              "VolumesRW": {
                "/usr/src/app/log": true
              }
            }
          }
        }

### Container show [GET]
Get container of the stack (includes container runtime information

+ Response 200

	[Container show][]    
	
## Container stop [/stacks/{stack_id}/containers/{id}]
Stop the given container 

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, string, `12344cd3c84eb64591598312c9f12e5c3ed64454545f987016916f64ff25e363`) ... The container UID

+ Model (application/json)

    + Headers

            X-RateLimit-Limit: 3600
            X-RateLimit-Remaining: 3597

    + Body

          {
            "response": {
              "id": 1234,
              "user": "theuser@yourdomain.com",
              "resource_type": "stack",
              "action": "container_stop",
              "resource_id": "15633",
              "started_via": "api",
              "started_at": "2014-09-30T11:36:58Z",
              "finished_at": null,
              "finished_success": null,
              "finished_message": null
            }
          }
        
### Container stop [DELETE]
Stop the given container

+ Response 200

    [Container stop][]          

# Group Environment Variables

## Environment Variable list [/stacks/{id}/environments]
Get list of all environment variables of stack

- Scope: _admin_

+ Parameters

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
    + id (required, integer, `4153`) ... The notification id
    + channels (optional, string, `[email,ios]`) ... Notification channels (valid channels are: email, ios, hipchat, webhook, slack)
	+ params (optional, string, `{'hipchat_room' : 'test'}`) ... Notification channel parameters (as JSON string with valid keys: hipchat_token, hipchat_room, slack_url, slack_channel, webhook_url)

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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID

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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... The stack UID
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

    + id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Stack UID
    + group (optional, integer, `15`) ... Backup group ID
    + db_type (optional, string, `mysql`) ... Backup database type (valid options are: mysql, postgresql, redis, mongodb)

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
Get a list of all backups in a stack.

+ Response 200

    [Backups list][]

## Backup [/stacks/{stack_id}/backups/{id}]
Get information about a single backup.

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Stack UID
    + id (required, integer, `4153`) ... Backup id

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
Get information about a single backup.

+ Response 200

    [Backup][]


## Import Backup [/stacks/{stack_id}/backups]
Import an external backup.

- Scope: _admin_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Stack UID
    + group (required, integer, `5`) ... The group id of backups that imported backup must restored in
    + db_type (required, string, `mysql`) ... Backup database type (valid options: mysql, postgresql, redis, mongodb)
    + remote_url (required, string, `https://s3.amazonaws.com/c66-managed-backup-non-prod/2aad2bb5a70e621ecf251fbd85af6927/backups/09a7dec0efdaa19b44148fccbf6128ec/redis/redis_23/2014.07.01.07.00.46/redis_23.tar`) ... A URL to backup file to be imported

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
Import an external backup.

+ Response 200

    [Import Backup][]


## Backup files [/stacks/{stack_id}/backups/{backup_id}/files]
Get list of all backup files.

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Stack UID
    + backup_id (required, integer, `4153`) ... Backup ID

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
Get list of all backup files.

+ Response 200

    [Backup files][]


## Backup file [/stacks/{stack_id}/backups/{backup_id}/files/{id}]
Get the public URL to a backup file.

- Scope: _public_

+ Parameters

    + stack_id (required, string, `5999b763474b0eafa5fafb64bff0ba80`) ... Stack UID
    + backup_id (required, integer, `4153`) ... Backup ID
    + id (required, string, `tar-aa`) ... The file ID

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
Get the public URL to a backup file.

+ Response 200

    [Backup file][]

# Group Accounts

## Account List [/accounts]
Get list of accounts that caller belongs to.

- Scope: _users_

+ Model (application/json)

    + Headers

        X-RateLimit-Limit: 3600
        X-RateLimit-Remaining: 3597

    + Body

        {
        	"response": [
        		{
                    "id": 139,
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
Get information about an account.

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
                    "id": 139,
        			"owner": "test@cloud66.com",
        			"created_at_iso": "2013-06-19T11:08:03Z",
        			"updated_at_iso": "2014-02-20T12:55:58Z",
        			"stack_count": 2,
        			"used_clouds": ["digitalocean","rackspace"]
				}
		}

### Get Account [GET]
Get information about an account.

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
Get list of users that caller has access to.

+ Response 200

    [User List][]

## User [/users/{id}]
Get detailed information about a user.

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
Get detailed information about a user.

+ Response 200

    [User][]

## Add Device [/users/{id}/devices]
Add a new device for the user.

- Scope: _users_

+ Parameters

    + id (required, integer, `1`) ... User ID
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
Add a new device for the user.

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
