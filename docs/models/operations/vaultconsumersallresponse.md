# VaultConsumersAllResponse

## Example Usage

```typescript
import { VaultConsumersAllResponse } from "@apideck/unify/models/operations";

let value: VaultConsumersAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getConsumersResponse: {
    statusCode: 200,
    status: "OK",
    data: [
      {
        consumerId: "test_consumer_id",
        applicationId: "1111",
        metadata: {
          accountName: "SpaceX",
          userName: "Elon Musk",
          email: "elon@musk.com",
          image: "https://www.spacex.com/static/images/share.jpg",
        },
        aggregatedRequestCount: 101,
        requestCounts: {
          unify: 100,
          proxy: 10,
          vault: 21,
        },
        created: "2021-05-07T12:55:42.242Z",
        modified: "2021-05-07T12:55:42.242Z",
        requestCountUpdated: "2021-05-07T12:55:42.242Z",
        services: [
          "salesforce",
          "stripe",
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConsumersResponse`                                                                   | [components.GetConsumersResponse](../../models/components/getconsumersresponse.md)       | :heavy_minus_sign:                                                                       | Consumers                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |