---
layout: post
template: two-col
title:  "How to add management certificates in Azure new portal"
so_title: "azure management certificate new portal"
date:   1900-11-02 15:33:13
categories: 
lead: Users can not add management certificate in Azure new portal 
search-tags: ['']
tags: ['Troubleshooting']
tutorial: true
difficulty: 2
---

In Cloud66 we use **Management Certificate** for authentication against Azure cloud. So if you want to add an Azure cloud into your Cloud66 account you need to use a [Management Certificate](http://help.cloud66.com/deployment/microsoft-azure-cloud). The issue is there is no place in  **Azure New Portal** for adding management certificates.
To solve this issue you can use [Azure old portal](http://manage.windowsazure.com/) or if for any reason old portal is not available, you can use following instruction :
 
 1. Login to azure portal
 2. Visit [publishsettings](https://manage.windowsazure.com/publishsettings).  It should download a **publishsettings** file for you.
 3. Open the file with a text editor, you will see an XML file with some secure info in it. Copy **ManagementCertificate** part into another file and choose **.pfx** as the extension of new file.
 4. Use **.pfx** file in Cloud66 to add your Azure cloud. 

