---
layout: post
template: one-col
title:  "Specific settings for your Node.js application"
nav_sticky: false
date:   2088-01-25 16:27:22
categories: building-your-nodejs-stack
lead: Make sure your keep the following in mind when deploying a Node.js application
search-tags: []
tags: ['Scaling']
---

<h2 id="beta">WARNING: Node.js stacks are in BETA</h2>

Cloud 66 will analyze your code and detect a couple of things:

<ul>
 <li> The Node.js version you want to use.</li>
 <li> The framework, for example Express.js, your are using.</li>
 <li> The datasources, for example MongoDB, your want to use.</li>
</ul>

During the analyse phase we are using two files to determine the information of your application: <b>package.json</b> and <b>Procfile</b>. If the outcome of the analyze phase doesn't satisfy your needs, you need to update your package.json.

<h3> Change your Node.js version </h3>

To change your Node.js version you need to update your application.json <b>engines</b> settings. <a href="https://docs.npmjs.com/files/package.json#engines">Read more about how you can specify the version of node that your stuff works.</a>

<h3> Change your datasource(s) </h3>

During the analyse phase we analyse your runtime depencies defined in the <b>package.json</b>. The following packages will result in a datasource we want to provision for your.

<ul>
<li> the package <i>mysql</i> will trigger the provisioning of Mysql</li>
<li> the package <i>mongoose</i> or <i>mongodb</i> will trigger the provisioning of MongoDB</li>
<li> the package <i>pg</i> will trigger the provisioning of Postgresql</li>
<li> the package <i>redis</i> will trigger the provisioning of Redis</li>
</ul>

<h3> Expose your host port</h3>

Of course your application will bind to a port we need to expose to the internet and make sure we can load balance traffic to your application. We provide you with the environment variable called PORT to tell which port your need to bind your application to. Make sure your use the following line:

<pre class="prettyprint">
var port = process.env.PORT || 8080;
app.listen(port);
</pre>

<h3> Connect to your datasource(s)</h3>

Your application need to know which URL to use to connect to your database. We provide a couple of environment variables your can use to connect to your datasources. 

MongoDB

<pre class="prettyprint">
mongoose.connect(process.env.MONGODB_URL);
</pre>

Mysql

<pre class="prettyprint">
var connection = mysql.createConnection({
  host     : process.env.MYSQL_URL,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
});
connection.connect();
</pre>

Postgresql

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

Redis

<pre class="prettyprint">
redis.createClient(6379, process.env.REDIS_URL)
</pre>

<h3> Fire up some workers </h3>

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called Procfile.

A typical Procfile may look something like this:

<pre class="prettyprint">
web: node server.js
work: node some_work.js
</pre>

The commands above would run node server.js and node some_work.js and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.
