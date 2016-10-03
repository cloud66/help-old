---
layout: post
template: two-col
title:  "Pricing"
so_title: false
nav_sticky: true
nav: true
nav_prev: "/compliance-guides/pci-dss-compliance-guide"
nav_next: "/account-management/referral-program"
date:   2038-12-24 10:51:22
categories: account-management
lead: Detailed information about Cloud 66 pricing
search-tags: ['']
tags: ['Your account']
---

<h2>Contents</h2>
<ul class="page-toc">
	<li>
		<a href="#intro">Introduction</a>
	</li>
	<li>
		<a href="#example">Comparing Cloud 66 with Heroku and DIY</a>
	</li>
</ul>

<h2 id="intro">Introduction</h2>

Our pricing is simple - you only pay for what you use, and there are no setup fees or fixed term contracts.

The billing cycle for your account is every 30 days, and your account charges are calculated on an hourly basis.
Your account will be charged for the accumulated amount you've accrued during the last 30 days at the end of each cycle.

The first server in your account is charged at $19 per month, with additional servers up to 50 costing $12 per month. <b>Development servers are always free</b>.

To learn more about feature-based pricing, please see our feature pages:

<ul class="page-toc">
<li><a href="/stack-add-ins/database-backups#pricing">Database backups</a></li>
<li><a href="/database-management/backup-verification#pricing">Backup verifiers</a></li>
<li><a href="/account-management/team-accounts#pricing">Teams</a></li>
<li><a href="/account-management/support-plans">Support</a></li>
</ul>

<h2 id="example">Comparing Cloud 66 with Heroku and DIY</h2>

For this example, we will use a simple Rails application with common requirements - scalable, backed by a single database and protected by SSL.

* Framework: Rails 3
* Database: PostgreSQL
* Environment: Production
* Other requirements: SSL, Memcache

<table class='table table-bordered table-striped table-small'>
<tr>
  <td></td>
  <td><b>Cloud 66 & cloud vendor</b></td>
  <td><b>Heroku</b></td>
  <td><b>DIY</b></td>
</tr>
<tr>
  <td>App server x 1</td>
  <td>$24 ($19 + $5)</td>
  <td>$36</td>
  <td>$10</td>
</tr>
<tr>
  <td>Load balancer x 1</td>
  <td>$17 ($12 + $5)</td>
  <td>&mdash;</td>
  <td>$5</td>
</tr>
<tr>
  <td>Database server x 1</td>
  <td>$22 ($12 + $10)</td>
  <td>$50</td>
  <td>$10</td>
</tr>
<tr>
  <td>SSL certificate</td>
  <td>&mdash;</td>
  <td>$20</td>
  <td>&mdash;</td>
</tr>
<tr>
  <td>Memcache</td>
  <td>&mdash;</td>
  <td>$15</td>
  <td>&mdash;</td>
</tr>
<tr>
  <td>Maintenance and updates</td>
  <td>&mdash;</td>
  <td>&mdash;</td>
  <td>$60</td>
</tr>
<tr>
  <td>Monitoring service</td>
  <td>&mdash;</td>
  <td>&mdash;</td>
  <td>$45</td>
</tr>
<tr>
  <td>Setup fee</td>
  <td>&mdash;</td>
  <td>&mdash;</td>
  <td>$300</td>
</tr>
<tr>
  <td><b>Total cost</b></td>
  <td><b>$63*</b></td>
  <td><b>$121</b></td>
  <td><b>$430</b></td>
</tr>
</table>
<h5>*Drops to $56/month for the second stack as only the first server of the account is $19.</h5>

### Assumptions

<ul class="list">
<li>Cloud 66 is used together with <a href="http://digitalocean.com">DigitalOcean</a> or <a href="http://vexxhost.com">Vexxhost</a>.</li>
<li>The DIY solution is based on a developer salary of $60,000 per year.</li>
<ul class="list">
	<li>Business overhead (tax, insurance, benefits etc.) of 50% per year</li>
	<li>Setup fee is based on 5 hours of DevOp work ($60/h to business)</li>
	<li>This DevOp uses Chef, Puppet, Capistrano or similar solutions</li>
	<li>Maintenance fee includes 1 hour per stack per month</li>
	<li><a href="http://www.serverdensity.com/">Server Density</a> is used as a monitoring prodiver</li>
</ul>
</ul>

Feel free to contact us on <a href="mailto:hello@cloud66.com">hello@cloud66.com</a> if you'd like us to provide you with a price estimate for your setup.
