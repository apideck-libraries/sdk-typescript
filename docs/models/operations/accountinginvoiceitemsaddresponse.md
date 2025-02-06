# AccountingInvoiceItemsAddResponse

## Example Usage

```typescript
import { AccountingInvoiceItemsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoiceItemsAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createInvoiceItemResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "invoice-items",
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createInvoiceItemResponse`                                                                  | [components.CreateInvoiceItemResponse](../../models/components/createinvoiceitemresponse.md) | :heavy_minus_sign:                                                                           | InvoiceItems                                                                                 |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |