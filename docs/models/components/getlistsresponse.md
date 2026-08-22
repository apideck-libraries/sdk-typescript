# GetListsResponse

Lists

## Example Usage

```typescript
import { GetListsResponse } from "@apideck/unify/models/components";

let value: GetListsResponse = {
  statusCode: 200,
  status: "OK",
  service: "hubspot",
  resource: "lists",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "Newsletter Subscribers",
      description: "Contacts who opted in to the monthly newsletter.",
      type: "dynamic",
      visibility: "shared",
      ownerId: "12345",
      filterCriteria: {
        "type": "and",
        "queries": [
          {
            "type": "object_type",
            "object_type": "contact",
          },
        ],
      },
      recordCount: 42,
      folderId: "12345",
      objectType: "contacts",
      isDynamic: true,
      isFavorite: false,
      isDefault: false,
      isSystem: false,
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      tags: [
        "New",
      ],
      updatedBy: "12345",
      createdBy: "12345",
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
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
      },
    ],
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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | hubspot                                                                 |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | lists                                                                   |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.List](../../models/components/list.md)[]                    | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |