# AccountingLocationsDeleteResponse

## Example Usage

```typescript
import { AccountingLocationsDeleteResponse } from "@apideck/sdk/models/operations";

let value: AccountingLocationsDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  deleteAccountingLocationResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "locations",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deleteAccountingLocationResponse`                                                                         | [components.DeleteAccountingLocationResponse](../../models/components/deleteaccountinglocationresponse.md) | :heavy_minus_sign:                                                                                         | Location deleted                                                                                           |
| `unexpectedErrorResponse`                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                   | :heavy_minus_sign:                                                                                         | Unexpected error                                                                                           |