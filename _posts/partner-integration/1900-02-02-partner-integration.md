---
layout: post
template: one-col
title:  "Partner integration"
date:   2014-02-02 00:00:00
categories: partner-integration
lead: Partner Integration API
search-tags: []
tags: ['Partners']
---

Throughout this document, "user" is a Cloud 66 customer and "partner" is a Cloud 66 integration partner. 

You will need a partner account with Cloud 66 to use this integration. Please contact [support@cloud66.com](mailto:support@cloud66.com) to setup a partner account.

## User integration API

This API is used to add a partner's service to the user's account automatically.

An example of this is the addition of a new cloud vendor to a user's Cloud 66 account without user's manual intervention.

User integration API has three steps:

1. Redirect from Cloud 66 website to Partner website
2. Provisioning of service on the partner side and addition to user's account.
3. Redirect from partner's website to Cloud 66 website.

### Redirecting to Partner's website

Cloud 66 user sees an integration option on his dashboard and clicks on it. He is redirected to the partner's website with the following payload:

<pre>
GET http://partner/url?uid=abc123&email=jon@smith.com&callback=https://app.cloud66.com/url
</pre>

- **uid**       A unique ID of the user
- **email**     user email address
- **callback**  The URL to redirect the user back when the provisioning is done on the partner side.

### Provisioning

Once the user is redirected to partner's website, the partner will try to provision an new account for the user or locate an existing one based on the email of the user. Depending on the outcome the partner can make an API call to Cloud 66 to add the provisioned information about the user to his Cloud 66 account. This could be the API keys of a cloud vendor or the project UID for an exception handling service.

Each partner is given a unique API endpoint. If you don't have your partner endpoint, please contact [support@cloud66.com](mailto:support@cloud66.com)

You can make an HTTP POST to the partner integration API with the following payload:

- **link_uid** The UID sent to the partner in the original redirect.
- **user_email** User email. Should be the same as the one in the original redirect.

Any other partner specific payload will be here.

#### Failure

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>HTTP Code</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
    <tr><td>403</td><td>link_uid is missing</td></tr>
    <tr><td>403</td><td>user_email is missing</td></tr>
    <tr><td>403</td><td>invalid user_email (invalid email or not enough privileges to accept this integration by this user).</td></tr>
    <tr><td>403</td><td>invalid link_uid</td></tr>
    <tr><td>403</td><td>xxx is already linked to this account</td></tr>
  </tbody>
</table>

#### Success

<table class='table table-bordered table-striped'>
	<thead>
		<tr>
			<th>HTTP Code</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
    <tr><td>200</td><td>service added (integration successful)</td></tr>
    <tr><td>403</td><td>integration specific errors</td></tr>
  </tbody>
</table>
