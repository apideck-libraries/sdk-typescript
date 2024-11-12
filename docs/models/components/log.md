# Log

## Example Usage

```typescript
import { Log } from "apideck/models/components";

let value: Log = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiStyle`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Indicates if the request was made via REST or Graphql endpoint.                          | REST                                                                                     |
| `baseUrl`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | The Apideck base URL the request was made to.                                            | unify.apideck.com                                                                        |
| `childRequest`                                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | Indicates whether or not this is a child or parent request.                              | false                                                                                    |
| `consumerId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | The consumer Id associated with the request.                                             | test-consumer                                                                            |
| `duration`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | The entire execution time in milliseconds it took to call the Apideck service provider.  | 2220.379304                                                                              |
| `errorMessage`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | If error occurred, this is brief explanation                                             | Refresh token is invalid                                                                 |
| `execution`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | The entire execution time in milliseconds it took to make the request.                   | 2248                                                                                     |
| `hasChildren`                                                                            | *boolean*                                                                                | :heavy_check_mark:                                                                       | When request is a parent request, this indicates if there are child requests associated. | false                                                                                    |
| `httpMethod`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | HTTP Method of request.                                                                  | GET                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID acting as Request Identifier.                                                       | 0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f                                                     |
| `latency`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | Latency added by making this request via Unified Api.                                    | 27.620695999999953                                                                       |
| `operation`                                                                              | [components.Operation](../../models/components/operation.md)                             | :heavy_check_mark:                                                                       | The request as defined in OpenApi Spec.                                                  |                                                                                          |
| `parentId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | When request is a child request, this UUID indicates it's parent request.                | 0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f                                                     |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The path component of the URI the request was made to.                                   | /vault/connections                                                                       |
| `sandbox`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | Indicates whether the request was made using Apidecks sandbox credentials or not.        | false                                                                                    |
| `service`                                                                                | [components.Service](../../models/components/service.md)                                 | :heavy_check_mark:                                                                       | Apideck service provider associated with request.                                        |                                                                                          |
| `sourceIp`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The IP address of the source of the request.                                             | 94.227.131.238                                                                           |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | HTTP Status code that was returned.                                                      | 200                                                                                      |
| `success`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not the request was successful.                                               | true                                                                                     |
| `timestamp`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | ISO Date and time when the request was made.                                             | 2021-07-12T14:26:17.420Z                                                                 |
| `unifiedApi`                                                                             | [components.UnifiedApi](../../models/components/unifiedapi.md)                           | :heavy_check_mark:                                                                       | Which Unified Api request was made to.                                                   | vault                                                                                    |