# GetApiResourceCoverageResponse

ApiResources

## Example Usage

```typescript
import { GetApiResourceCoverageResponse } from "@apideck/unify/models/components";

let value: GetApiResourceCoverageResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "companies",
    name: "Companies",
    coverage: [
      {
        downstreamId: "accounts",
        downstreamName: "Accounts",
        pagination: {
          mode: "native",
        },
        supportedOperations: [
          "all",
          "one",
          "add",
          "update",
          "delete",
        ],
        supportedFilters: [
          "name",
          "email",
        ],
        supportedSortBy: [
          "updated_at",
          "created_at",
          "name",
        ],
        supportedFields: [
          {
            unifiedProperty: "owner_id",
            childProperties: [],
          },
        ],
        supportedListFields: [
          {
            unifiedProperty: "owner_id",
          },
        ],
      },
    ],
  },
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status Code                                                        | 200                                                                              |
| `status`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status                                                             | OK                                                                               |
| `data`                                                                           | [components.ApiResourceCoverage](../../models/components/apiresourcecoverage.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `raw`                                                                            | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Raw response from the integration when raw=true query param is provided          |                                                                                  |
| `meta`                                                                           | [components.Meta](../../models/components/meta.md)                               | :heavy_minus_sign:                                                               | Response metadata                                                                |                                                                                  |
| `links`                                                                          | [components.Links](../../models/components/links.md)                             | :heavy_minus_sign:                                                               | Links to navigate to previous or next pages through the API                      |                                                                                  |