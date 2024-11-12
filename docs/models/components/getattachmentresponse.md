# GetAttachmentResponse

Attachments

## Example Usage

```typescript
import { GetAttachmentResponse } from "apideck/models/components";

let value: GetAttachmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
  operation: "one",
  data: {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | HTTP Response Status Code                                      | 200                                                            |
| `status`                                                       | *string*                                                       | :heavy_check_mark:                                             | HTTP Response Status                                           | OK                                                             |
| `service`                                                      | *string*                                                       | :heavy_check_mark:                                             | Apideck ID of service provider                                 | xero                                                           |
| `resource`                                                     | *string*                                                       | :heavy_check_mark:                                             | Unified API resource name                                      | payments                                                       |
| `operation`                                                    | *string*                                                       | :heavy_check_mark:                                             | Operation performed                                            | one                                                            |
| `data`                                                         | [components.Attachment](../../models/components/attachment.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |