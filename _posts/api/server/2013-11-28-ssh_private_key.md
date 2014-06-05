---
layout: api_post
title:  'SSH Private Key'
categories:
  - api
  - server
type: 'GET'
path: '/servers/:server_uid/ssh_private_key'
scope: 'admin'
tags: ['ssh private']
---

Receives the private SSH key for the server. Caller must have Admin rights over the stack.

This operation will send an email to the account users about the download of the SSH key.

### Request

* None

### Response

A successful response will look like this:

<code class="inline-code">{
	"ok" : true,
	"private_key" : "-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA5f0rvHDvIGeSQG3Y07zo7hadQks41Mw7UaePUht8h12rGR1I
C0y1Gp4Pe33ZG7LO0+pdMVnajdJmpfLUDtPslXqkcEli1I3Se5RbsFYEzimEhfta
DAqEXvjs/4j6kEISoSr3FDhfzCgyZuyzn8UFaNgFy+cfKfGSfDkwswoAnSf9E1mc
Undg/SB4aRrrSJstHoql68xTo36vdsRI3e7J/GMudljQ1qnCz6NN/I3I2hpyNTqa
TAiOz1J+dsAbMb5hqq3+gxWY/VKFFUVxvjSjof5za5LiTQD93ll0KOXaZLNDjeiY
YaaLf9e3gfvuMBDz/V/mz2ilJ3xfWZbDOXkXRwIDAQABAoIBAFT/rVNWtbnXLWEs
d89BaSDdML+Yh2d2F5JFCB4DVJG+14ZPoRmz/tbYhcZRK5UmD3SYkFq156U0loVM
an0Ua8KO8gkhxiniRGEx4nUYRWxgQb82tv/uPx/OheCnIluAX9w6wdgyQY11abNK
VdR9f1NRS0shnw3kXwwUIuB4mON7eXiKzGdkc+aGWpjqxr/Qvmp/zU7rpo81+E2/
3L4S3IgR2S/cw2TlL1/mEaW4IghEukux20ApXuHEVO3KY5fFymbOVoNL/CEVq/vy
J2NYrEBCAwy+OuTnV/EdeZci3omTrShNnjIxrGFvs5Pif5Z3w5skrzSF1MIKh1/A
kLdcwhkCgYEA/Hk3+UV9PYUDfGj7isBH9R2IJiJjfBHyNn3RMs/onkpA7wwXdbZn
8JxE8P/Za/UNS19oC5k9EcJ2/6/NHpvYNlMkPsaTG4W0yV08PJGB87GPBm3s3Xh8
GBGibBVXyZEvfLvUSAbpEQH5eD8JilPDPcwoNE7fUCkvh8jCwth/n/MCgYEA6TON
l71OkuxSB9XUp8YxWiaiYjTDRK1ksdameXBgQeGxGadjjj4xpavP52UW9NBu4WPk
2oBkySXk13v88F2dAakljw7O0/SXEujP4EbAMvqGtO2ndcs55jT/jQhAX7tyM+AT
VhMPbVTpPTRx5MO8mAdBFEQssFMKx39TcQ8vFF0CgYEAiAIhRjbKDh8ezqGbiJam
7QP4uVpjL45XZkWHMhFQph0oN97SsIYQHk2A0jdyADdl7wm5ei4V+QBCrOEe5fNc
mX9Wkj7VNsljp+qDLbnRQN+RRgxnwrNKXoj5b7JbtWlyJIbnB9o5KgFfTAjhcdRH
5H2b1vn6USuuwD5FtUN+FUMCgYEAt5zYwn3SbQpXOEYbzxHU7+d1eZ+Tk/J2UzPw
FbPuhlD+kXVjhK7hhlE2PDozDgVDGIH/wi7PrDUC7st4B4Wdxp34rZ/6J5bwkHnw
muT6Fel9wN1SOgQOjXxzLgcuMHI1ZDTs5JvTTMFLd95gQr//MTCdBCj9isOHvDY7
a8yJxB0CgYAI+PZol5eqDDAt7W1Y7EURFGsjUX62a/5to5JY9L8KelQ27pRd84Qu
yXo+j8LmeQ5Lv6VrlLsoQYDvHjaQBbyvvnAUpWWfZbdn1AXaZT0mL3sAwIkY10C5
yQANspZn/cUiTP1ab92WeHyp9t0JEQIMu9THb5uhE8Ll10TVxEoPXg==
-----END RSA PRIVATE KEY-----"
}</code>

### Error

* 400 - No Server UID specified
* 404 - Stack not found
* 404 - Server not found
* 400 - Insufficient rights - Caller doesn't have Shell rights over the stack
