# GetNoteResponse

Note

## Example Usage

```typescript
import { GetNoteResponse } from "@apideck/sdk/models/components";

let value: GetNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
  operation: "one",
  data: {
    id: "12345",
    title: "Meeting Notes",
    content: "Office hours are 9AM-6PM",
    ownerId: "12345",
    contactId: "12345",
    companyId: "12345",
    opportunityId: "12345",
    leadId: "12345",
    active: true,
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: "2020-09-30T07:43:32.000Z",
    createdAt: "2020-09-30T07:43:32.000Z",
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
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `statusCode`                                       | *number*                                           | :heavy_check_mark:                                 | HTTP Response Status Code                          | 200                                                |
| `status`                                           | *string*                                           | :heavy_check_mark:                                 | HTTP Response Status                               | OK                                                 |
| `service`                                          | *string*                                           | :heavy_check_mark:                                 | Apideck ID of service provider                     | zoho-crm                                           |
| `resource`                                         | *string*                                           | :heavy_check_mark:                                 | Unified API resource name                          | notes                                              |
| `operation`                                        | *string*                                           | :heavy_check_mark:                                 | Operation performed                                | one                                                |
| `data`                                             | [components.Note](../../models/components/note.md) | :heavy_check_mark:                                 | N/A                                                |                                                    |