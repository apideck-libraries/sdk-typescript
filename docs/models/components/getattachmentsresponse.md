# GetAttachmentsResponse

Attachments

## Example Usage

```typescript
import { GetAttachmentsResponse } from "apideck/models/components";

let value: GetAttachmentsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "PurchaseOrders",
  operation: "all",
  data: [
    {
      id: "12345",
      displayId: "sample ID",
      name: "sample.jpg",
      mimeType: "image/jpeg",
      size: 1810673,
      reference: {
        type: "invoice",
        id: "12345",
      },
      description: "A sample image",
      parentFolderId: "123",
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      passThrough: [
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
      ],
    },
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP Response Status Code                                        | 200                                                              |
| `status`                                                         | *string*                                                         | :heavy_check_mark:                                               | HTTP Response Status                                             | OK                                                               |
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | quickbooks                                                       |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | PurchaseOrders                                                   |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | all                                                              |
| `data`                                                           | [components.Attachment](../../models/components/attachment.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `meta`                                                           | [components.Meta](../../models/components/meta.md)               | :heavy_minus_sign:                                               | Response metadata                                                |                                                                  |
| `links`                                                          | [components.Links](../../models/components/links.md)             | :heavy_minus_sign:                                               | Links to navigate to previous or next pages through the API      |                                                                  |