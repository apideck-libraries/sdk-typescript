# GetLogsResponse

Logs

## Example Usage

```typescript
import { GetLogsResponse } from "@apideck/sdk/models/components";

let value: GetLogsResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      apiStyle: "REST",
      baseUrl: "unify.apideck.com",
      childRequest: false,
      consumerId: "test-consumer",
      duration: 2220.379304,
      errorMessage: "Refresh token is invalid",
      execution: 2248,
      hasChildren: false,
      httpMethod: "GET",
      id: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      latency: 27.620695999999953,
      operation: {
        id: "connectionsAll",
        name: "Get All Connections",
      },
      parentId: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
      path: "/vault/connections",
      sandbox: false,
      service: {
        id: "apideck-vault",
        name: "Apideck Vault",
      },
      sourceIp: "94.227.131.238",
      statusCode: 200,
      success: true,
      timestamp: "2021-07-12T14:26:17.420Z",
      unifiedApi: "vault",
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP Response Status Code                                   | 200                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | HTTP Response Status                                        | OK                                                          |
| `data`                                                      | [components.Log](../../models/components/log.md)[]          | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `meta`                                                      | [components.Meta](../../models/components/meta.md)          | :heavy_minus_sign:                                          | Response metadata                                           |                                                             |
| `links`                                                     | [components.Links](../../models/components/links.md)        | :heavy_minus_sign:                                          | Links to navigate to previous or next pages through the API |                                                             |