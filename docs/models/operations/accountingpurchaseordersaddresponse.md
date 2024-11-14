# AccountingPurchaseOrdersAddResponse

## Example Usage

```typescript
import { AccountingPurchaseOrdersAddResponse } from "apideck/models/operations";

let value: AccountingPurchaseOrdersAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createPurchaseOrderResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "PurchaseOrders",
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
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createPurchaseOrderResponse`                                                                    | [components.CreatePurchaseOrderResponse](../../models/components/createpurchaseorderresponse.md) | :heavy_minus_sign:                                                                               | PurchaseOrders                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |