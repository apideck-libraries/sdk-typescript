# HrisTimeOffRequestsDeleteResponse

## Example Usage

```typescript
import { HrisTimeOffRequestsDeleteResponse } from "@apideck/unify/models/operations";

let value: HrisTimeOffRequestsDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  deleteTimeOffRequestResponse: {
    statusCode: 200,
    status: "OK",
    service: "bamboohr",
    resource: "time-off-requests",
    operation: "delete",
    data: {
      id: "12345",
    },
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deleteTimeOffRequestResponse`                                                                     | [components.DeleteTimeOffRequestResponse](../../models/components/deletetimeoffrequestresponse.md) | :heavy_minus_sign:                                                                                 | TimeOffRequests                                                                                    |
| `unexpectedErrorResponse`                                                                          | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)           | :heavy_minus_sign:                                                                                 | Unexpected error                                                                                   |