# GetSharedLinkResponse

Shared Link

## Example Usage

```typescript
import { GetSharedLinkResponse } from "@apideck/sdk/models/components";

let value: GetSharedLinkResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "Shared Links",
  operation: "one",
  data: {
    url: "https://www.box.com/s/vspke7y05sb214wjokpk",
    downloadUrl: "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
    target: {
      id: "12345",
      name: "sample.jpg",
      type: "file",
    },
    scope: "company",
    expiresAt: new Date("2022-09-30T07:43:32.000Z"),
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
| `service`                                                      | *string*                                                       | :heavy_check_mark:                                             | Apideck ID of service provider                                 | dropbox                                                        |
| `resource`                                                     | *string*                                                       | :heavy_check_mark:                                             | Unified API resource name                                      | Shared Links                                                   |
| `operation`                                                    | *string*                                                       | :heavy_check_mark:                                             | Operation performed                                            | one                                                            |
| `data`                                                         | [components.SharedLink](../../models/components/sharedlink.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |