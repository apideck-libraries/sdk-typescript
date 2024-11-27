# GetSubsidiariesResponse

Subsidiaries

## Example Usage

```typescript
import { GetSubsidiariesResponse } from "@apideck/sdk/models/components";

let value: GetSubsidiariesResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "subsidiaries",
  operation: "all",
  data: [
    {
      id: "12345",
      parentId: "12345",
      name: "SpaceX",
      status: "active",
      rowVersion: "1-12345",
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
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | xero                                                             |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | subsidiaries                                                     |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | all                                                              |
| `data`                                                           | [components.Subsidiary](../../models/components/subsidiary.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `meta`                                                           | [components.Meta](../../models/components/meta.md)               | :heavy_minus_sign:                                               | Response metadata                                                |                                                                  |
| `links`                                                          | [components.Links](../../models/components/links.md)             | :heavy_minus_sign:                                               | Links to navigate to previous or next pages through the API      |                                                                  |