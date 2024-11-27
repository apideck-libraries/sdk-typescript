# GetCollectionsResponse

List Collections

## Example Usage

```typescript
import { GetCollectionsResponse } from "@apideck/sdk/models/components";

let value: GetCollectionsResponse = {
  statusCode: 200,
  status: "OK",
  service: "jira",
  resource: "Tickets",
  operation: "all",
  data: [
    {
      id: "12345",
      parentId: "12345",
      type: "Technical",
      name: "Main IT Issues",
      description: "IT Issues",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | jira                                                             |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | Tickets                                                          |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | all                                                              |
| `data`                                                           | [components.Collection](../../models/components/collection.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `meta`                                                           | [components.Meta](../../models/components/meta.md)               | :heavy_minus_sign:                                               | Response metadata                                                |                                                                  |
| `links`                                                          | [components.Links](../../models/components/links.md)             | :heavy_minus_sign:                                               | Links to navigate to previous or next pages through the API      |                                                                  |