# VaultValidateConnectionStateResponse

## Example Usage

```typescript
import { VaultValidateConnectionStateResponse } from "apideck/models/operations";

let value: VaultValidateConnectionStateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  validateConnectionStateResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      id: "crm+salesforce",
      state: "authorized",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `validateConnectionStateResponse`                                                                        | [components.ValidateConnectionStateResponse](../../models/components/validateconnectionstateresponse.md) | :heavy_minus_sign:                                                                                       | Connection access token refreshed                                                                        |
| `unexpectedErrorResponse`                                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                 | :heavy_minus_sign:                                                                                       | Unexpected error                                                                                         |