# GetApiResponse

Apis

## Example Usage

```typescript
import { GetApiResponse } from "apideck/models/components";

let value: GetApiResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "file-storage",
    name: "File Storage API",
    description:
      "Manage API keys, access tokens, OAuth flows and integrations.",
    specUrl: "https://specs.apideck.com/file-storage.yml",
    apiReferenceUrl:
      "https://developers.apideck.com/apis/file-storage/reference",
    postmanCollectionId: "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
    categories: [
      "files",
      "file-storage",
      "cloud-storage",
      "object-storage",
    ],
    resources: [
      {
        id: "companies",
        name: "Companies",
        excludedFromCoverage: false,
      },
    ],
    events: [
      "crm.contact.updated",
      "accounting.invoice.created",
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP Response Status Code                                   | 200                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | HTTP Response Status                                        | OK                                                          |
| `data`                                                      | [components.Api](../../models/components/api.md)            | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `meta`                                                      | [components.Meta](../../models/components/meta.md)          | :heavy_minus_sign:                                          | Response metadata                                           |                                                             |
| `links`                                                     | [components.Links](../../models/components/links.md)        | :heavy_minus_sign:                                          | Links to navigate to previous or next pages through the API |                                                             |