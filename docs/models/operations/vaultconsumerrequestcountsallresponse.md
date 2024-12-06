# VaultConsumerRequestCountsAllResponse

## Example Usage

```typescript
import { VaultConsumerRequestCountsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConsumerRequestCountsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  consumerRequestCountsInDateRangeResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      applicationId: "1111",
      consumerId: "test_user_id",
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-10T12:00:00.000Z",
      aggregatedRequestCount: 40,
      requestCounts: {
        unify: 100,
        proxy: 10,
        vault: 21,
      },
    },
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `consumerRequestCountsInDateRangeResponse`                                                                                 | [components.ConsumerRequestCountsInDateRangeResponse](../../models/components/consumerrequestcountsindaterangeresponse.md) | :heavy_minus_sign:                                                                                                         | Consumers Request Counts within Date Range                                                                                 |
| `unexpectedErrorResponse`                                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                                   | :heavy_minus_sign:                                                                                                         | Unexpected error                                                                                                           |