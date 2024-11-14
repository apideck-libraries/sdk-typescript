# AccountingInvoicesUpdateResponse

## Example Usage

```typescript
import { AccountingInvoicesUpdateResponse } from "apideck/models/operations";

let value: AccountingInvoicesUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateInvoiceResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "invoices",
    operation: "update",
    data: {
      id: "12345",
      downstreamId: "12345",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateInvoiceResponse`                                                                  | [components.UpdateInvoiceResponse](../../models/components/updateinvoiceresponse.md)     | :heavy_minus_sign:                                                                       | Invoice updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |