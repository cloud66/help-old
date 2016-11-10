---
layout: post
template: one-col
title:  "Specific settings for your Node.js application"
nav_sticky: false
date:   2088-01-25 16:27:22
categories: building-your-node-js-stack
lead: Make sure your keep the following in mind when deploying a Node.js application
search-tags: []
tags: ['Scaling']
---

Cloud 66 will analyze your code and detect a few things:

<ul>
 <li> The Node.js version you want to use.</li>
 <li> The <a href="/building-your-node-js-stack/supported-node-js-frameworks">framework</a>, for example Express.js, you are using.</li>
 <li> The datasources, for example MongoDB, you want to use.</li>
</ul>

During the analysis phase we are using two files to determine the information about application: `package.json` and `Procfile`. If the outcome of the analyze phase doesn't satisfy your needs, you need to update your `package.json`.

<h2> Change your Node.js version </h2>

To change your Node.js version you need to update your `package.json` `engines` settings. <a href="https://docs.npmjs.com/files/package.json#engines">Read more about how you can specify the version of node so your application works.</a>

<h2> Change your datasource(s) </h2>

During the analyse phase we analyze your runtime depencies defined in the `package.json`. Inclusion of the following packages will result in relevant datasource to be provisioned on your stack.

<ul>
<li> the package <code>mysql</code> will trigger the provisioning of Mysql</li>
<li> the package <code>mongoose</code> or <code>mongodb</code> will trigger the provisioning of MongoDB</li>
<li> the package <code>pg</code> will trigger the provisioning of Postgresql</li>
<li> the package <code>redis</code> or <code>ioredis</code> will trigger the provisioning of Redis</li>
</ul>

If you need other datasources later on, you can always add new datasource using the <a href="/category/stack-add-ins">Add-in feature</a>.

<h2> Expose your host port</h2>

If your application binds to a port, we need to expose it to the internet and make sure we can load balance traffic to your application. We provide you with an environment variable called `PORT` to tell which port your need to bind your application to. Make sure your use the following line:

<pre class="prettyprint">
var port = process.env.PORT || 8080;
app.listen(port);
</pre>

<h2> Connect to your datasource(s)</h2>

Your application need to know which URL to use to connect to your database. We provide a couple of environment variables your can use to connect to your datasources.

### MongoDB

<pre class="prettyprint">
mongoose.connect(process.env.MONGODB_URL);
</pre>

### Mysql

<pre class="prettyprint">
var connection = mysql.createConnection({
  host     : process.env.MYSQL_URL,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
});
connection.connect();
</pre>

### Postgresql

<pre class="prettyprint">
var config = {
  user: process.env.POSTGRESDB_USERNAME,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASSWORD,
  host: process.env.POSTGRESDB_URL,
  max: 10,
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);
</pre>

### Redis

<pre class="prettyprint">
redis.createClient(6379, process.env.REDIS_URL)
</pre>

<h2> Fire up some workers </h2>

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called `Procfile`.

A typical Procfile may look something like this:

<pre class="prettyprint">
web: node server.js
work: node some_work.js
</pre>

The commands above would run node `server.js` and node `some_work.js` and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.


<h2> Final notes on managing storage</h2>

None of the files created on the filesystem after the stack is deployed are persistent. If you need persistency for files, for example some uploaded data, <a href="/stack-add-ins/glusterfs">please use the GlusterFS add-in</a> or <a href="/managing-your-stack/service-storage">change your service.yml</a> to use the storage of your host.
