# GetConnectorResourceResponse

ConnectorResources

## Example Usage

```typescript
import { GetConnectorResourceResponse } from "apideck/models/components";

let value: GetConnectorResourceResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "companies",
    name: "Companies",
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
    downstreamUnsupportedOperations: [
      "upload",
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
    supportedFields: [],
    supportedListFields: [],
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status Code                                                    | 200                                                                          |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status                                                         | OK                                                                           |
| `data`                                                                       | [components.ConnectorResource](../../models/components/connectorresource.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `meta`                                                                       | [components.Meta](../../models/components/meta.md)                           | :heavy_minus_sign:                                                           | Response metadata                                                            |                                                                              |
| `links`                                                                      | [components.Links](../../models/components/links.md)                         | :heavy_minus_sign:                                                           | Links to navigate to previous or next pages through the API                  |                                                                              |