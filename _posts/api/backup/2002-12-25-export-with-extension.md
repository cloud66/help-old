---
layout: api_post
title: 'Export with extension'
categories:
  - api
  - backup
type: 'Get'
path: 'backups/:backup_id/export/:extension'
scope: 'admin'
---

Generate a public URL for a file in a multi-part backup. <i>:backup_id</i> is the ID of multi-part backup that is going to be exported. <i>:extension</i> is the extension of the file that is going to be exported.

### Request

* None

### Response

A successful export will return a JSON object:

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Value</th>
			<th>Comments</th>
		</tr>
  </thead>
	<tbody>
		<tr><td>ok</td><td>True</td><td></td></tr>
		<tr><td>file_name</td><td>File name of backup</td><td></td></tr>
		<tr><td>url</td><td>URL that can be used to download backup</td><td>URL is valid for 5 minutes</td></tr>
		<tr><td>next_extension</td><td>Extension of the next backup file </td><td>Big backups are saved in multi-part format. If this value is empty it means the backup only contains a single file</td></tr>
	</tbody>
</table>

### Error

* 404 - Cannot find backup ID.
* 404 - No file with extension.