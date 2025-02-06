# AccountingLocationsAddResponse

## Example Usage

```typescript
import { AccountingLocationsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingLocationsAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createAccountingLocationResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "locations",
    operation: "add",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createAccountingLocationResponse`                                                                         | [components.CreateAccountingLocationResponse](../../models/components/createaccountinglocationresponse.md) | :heavy_minus_sign:                                                                                         | Location                                                                                                   |
| `unexpectedErrorResponse`                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                   | :heavy_minus_sign:                                                                                         | Unexpected error                                                                                           |