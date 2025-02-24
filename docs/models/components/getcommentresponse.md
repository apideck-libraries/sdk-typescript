# GetCommentResponse

Get a Comment

## Example Usage

```typescript
import { GetCommentResponse } from "@apideck/unify/models/components";

let value: GetCommentResponse = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Tickets",
  operation: "one",
  data: {
    id: "12345",
    body: "What internet provider do you use?",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | HTTP Response Status Code                                                                | 200                                                                                      |
| `status`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | HTTP Response Status                                                                     | OK                                                                                       |
| `service`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Apideck ID of service provider                                                           | sage-hr                                                                                  |
| `resource`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Unified API resource name                                                                | Tickets                                                                                  |
| `operation`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Operation performed                                                                      | one                                                                                      |
| `data`                                                                                   | [components.CollectionTicketComment](../../models/components/collectionticketcomment.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `raw`                                                                                    | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | Raw response from the integration when raw=true query param is provided                  |                                                                                          |