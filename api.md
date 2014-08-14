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
Actions on stacks accessible to the caller.

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

### Get Stack [GET]
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

### Get Stack [GET]
Get a single stack.

+ Response 200

    [Stack][]

# Group Users
Group description

## User List [/users{?name,joinedBefore,joinedAfter,sort,limit}]
A list of users

+ Parameters

    + name (optional, string, `alice`) ... Search for a user by name
    + joinedBefore (optional, string, `2011-01-01`) ... Search by join date
    + joinedAfter (optional, string, `2011-01-01`) ... Search by join date
    + sort = `name` (optional, string, `joined`) ... Which field to sort by

        + Values
            + `name`
            + `joined`
            + `-joined`

    + limit = `10` (optional, integer, `25`) ... The maximum number of users to return, up to `50`

+ Model

    + Headers

            Content-Type: application/json

    + Body

            [
                {
                    "name": "alice",
                    "image": "http://foo.com/alice.jpg",
                    "joined": "2013-11-01"
                },
                {
                    "name": "bob",
                    "image": "http://foo.com/bob.jpg",
                    "joined": "2013-11-02"
                }
            ]

    + Schema

            {
                "type": "array",
                "maxItems": 50,
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "image": {
                            "type": "string"
                        },
                        "joined": {
                            "type": "string",
                            "pattern": "\d{4}-\d{2}-\d{2}"
                        }
                    }
                }
            }

### Get users [GET]
Get a list of users. Example:

```no-highlight
https://api.mywebsite.com/users?sort=joined&limit=5
```

+ Response 200

    [User List][]

# Group Tags
Get or set tags on notes

## GET /tags
Get a list of bars

+ Response 200

## Get one tag [/tags/{id}]
Get a single tag

### GET

+ Response 200
