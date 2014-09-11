---
layout: api_post
title: 'Managed Backups'
categories:
  - api
  - stack
type: 'GET'
path: '/stacks/:uid/managed_backups'
scope: 'public'
search-tags: ['']
tags: ['API']
---

Gets the list of all managed backups under this stack.

### Request

* None

### Response

A list of managed backup objects. Each object looks like :

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>id</td><td>Backup Id</td><td></td></tr>
		<tr><td>server_uid</td><td>Uid of the server that backup job run at</td><td></td></tr>
		<tr><td>file_name</td><td></td><td>Depreciated</td></tr>
		<tr><td>db_type</td><td>Db type of backup</td><td>mysql,postgresql,redis,mongodb</td></tr>
		<tr><td>database_name</td><td>Database that backup generated from</td><td></td></tr>
		<tr><td>file_base</td><td></td><td>Depreciated</td></tr>
		<tr><td>database_name</td><td>Database that backup generated from</td><td></td></tr>
		<tr><td>backup_date_iso</td><td>Backup created at</td><td>Date Time in UTC</td></tr>
		<tr><td>backup_status</td><td>Status of backup</td><td>0 = Ok  , 1 = Failed</td></tr>
		<tr><td>backup_result</td><td>Result of backup process</td><td></td></tr>
		<tr><td>restore_status</td><td>Restore status of backup</td><td>0 = Never restored ,1 = Restoring, 2 = Restored, 3 = Failed</td></tr>
		<tr><td>restore_result</td><td>Result of restore process</td><td></td></tr>
		<tr><td>created_at_iso</td><td>Record created at</td><td>Date Time in UTC</td></tr>
		<tr><td>updated_at_iso</td><td>Record updated at</td><td>Date Time in UTC</td></tr>
		<tr><td>verify_status</td><td>Verify status of backup</td><td>0 = Never verified, 1 = Verifying, 2 = Verified, 3 = Failed, 4 = Internal Issue </td></tr>
		<tr><td>verify_result</td><td>Result of verify process</td><td></td></tr>
		<tr><td>storage_path</td><td>Path that backup saved in cloud66 storage</td><td>Internal use</td></tr>
		<tr><td>skip_tables</td><td>Tables that skipped during backup</td><td>Applies on mysql/postgresql only</td></tr>
	</tbody>
</table>

### Example

<code class="inline-code">{
	"id"=>55,
    "server_uid"=>"34c196adc6bf9894a84c5304e1255170",
    "file_name"=>"",
    "db_type"=>"mysql",
    "database_name"=>"shab-test-db",
    "file_base"=>"",
    "backup_date_iso"=>"2014-06-29T20:00:16Z",
    "backup_status"=>0,
    "backup_result"=>"",
    "restore_status"=>0,
    "restore_result"=>nil, "
    created_at_iso"=>"2014-06-29T20:00:16Z",
    "updated_at_iso"=>"2014-06-29T20:00:37Z",
    "verify_status"=>2,
    "verify_result"=>nil,
    "storage_path"=>"2aad2bb5a70e621ecf251fbd85af6927/backups/4e95c73466a5c180b91fe8c64f5e7c71/mysql/shab_test_db_20/2014.06.29.20.00.14", "skip_tables"=>""
}</code>


