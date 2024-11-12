# GetSharedLinksResponse

Shared Links

## Example Usage

```typescript
import { GetSharedLinksResponse } from "apideck/models/components";

let value: GetSharedLinksResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "Shared Links",
  operation: "all",
  data: [
    {
      url: "https://www.box.com/s/vspke7y05sb214wjokpk",
      downloadUrl:
        "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
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
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | dropbox                                                          |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | Shared Links                                                     |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | all                                                              |
| `data`                                                           | [components.SharedLink](../../models/components/sharedlink.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `meta`                                                           | [components.Meta](../../models/components/meta.md)               | :heavy_minus_sign:                                               | Response metadata                                                |                                                                  |
| `links`                                                          | [components.Links](../../models/components/links.md)             | :heavy_minus_sign:                                               | Links to navigate to previous or next pages through the API      |                                                                  |