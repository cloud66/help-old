---
layout: post
template: two-col
title:  "Installing SMTP on your server"
so_title: "smtp"
cloud66_text: "Try Cloud 66 for free"
cloud66_sticky: true
date:   1940-09-26 15:33:13
categories: 
lead: Follow these instructions to install SMTP on your server
search-tags: ['']
tags: ['Customization']
tutorial: true
---

Depending on the scale of your application, installing and maintaining a reliable emailing infrastructure can be a time consuming task. You might find it more practical to use a service like [SendGrid](http://sendgrid.com), [Postmark](https://postmarkapp.com/) or [Mandrill](http://mandrill.com/).

## Installing Postfix

Postfix is a free and open-source mail transfer agent that routes and delivers electronic mail, and we'll use it to set up your SMTP server.

Start by [SSHing to your server](/how-to/shell-to-your-servers.html) and installing it:

<pre class="terminal">
sudo apt-get install postfix
</pre>

The installation will ask you what type of installation you prefer - select _Internet site_. It will also ask you to input your domain name.

That's it! You now have a SMTP server installed. We just need to make some configurations to start using it:

<pre class="terminal">
sudo nano /etc/postfix/main.cf
</pre>

In the _myhostname_ field, input your hostname:
<pre class="terminal">
myhostname = example.com
</pre>

This one configuration is enough to have a functional SMTP server. Use [deploy hooks](/stack-features/deploy-hooks.html) to automate this procedure on any new servers you fire up through Cloud 66. You can go ahead and save and exit the configuration, and reload to put these changes into effect:
<pre class="terminal">
sudo /etc/init.d/postfix reload
</pre>

You can confirm that the server is running by issuing <code>nc localhost 25</code>, and you can also send a test email with <code>sendmail sample@example.com</code>.

Once you enter the command, you can type your message and hit _CTRL-D_ to send it.

## Configuring Rails

Add the following code (or variation thereof) to your Rails application environments configuration to send email through this SMTP server:

{% highlight ruby %}
config.action_mailer.delivery_method = :sendmail
config.action_mailer.smtp_settings = {
  :address => "localhost",
  :port => 25,
  :domain => "example.com",
}
{% endhighlight %}
