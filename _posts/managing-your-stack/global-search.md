---
layout: post
template: one-col
title:  "Global Search"
so_title: "global search"
date:   3999-01-28 10:51:22
categories: managing-your-stack
lead: Powerful search for your infrastructure inventory
search-tags: []
tags: ['Management']
---

Global search is available on all pages and searches your stacks, servers, services, containers and more across your account.

## Basic Search

You can type and word or phrase in the search bar at the top of each page to start your search. By default this will search the following:

- Stacks
- Servers
- Services
- Containers
- Firewall Rules

All queries can be a full or partial string. So both `awesome` and `awes` will find all entities with `awesome` somewhere.

## Advanced Search

You can narrow the search down with the "advanced search syntax". The general search syntax is `key:value`. This means you can run queries like this:


```
type:server
```

Global search supports thse generic search directives:

- `tag` Search the tags
- `type` Search by type. Valid values are `stack`, `server`, `service`, `container`, `firewall`

Each specific type might have some specific directives.

### Stack directives

- `env` Search the stack environment
- `name` Search the stack name

### Server directives

- `name` Search the server name
- `address` Search server's IP address or DNS name
- `vid` Search the cloud provider (vendor's) ID for the VM

### Service directives

- `name` Search the service name
- `image` Search by the image name (applicable only to services built from an image)

### Firewall directives

Firewalls can be search only by their tags.

### Container directives

- `service` Search containers by service name
- `id` Search container by Docker UID
- `state` Search containers by running state. Valid values are `running`, `stopped`
- `address` Search by Docker or ContainerNet container IP addresses
- `image` Search by the image name used by the container
- `server` Search by the name of the server running containers

## Complex queries

You can always combine queries to narrow your search donw. Some examples are below:


`type:server type:stack`

`env:production tag:active`

`type:firewall type:service name:bigcustomer`


