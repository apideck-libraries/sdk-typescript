# EcommerceStoresOneResponse

## Example Usage

```typescript
import { EcommerceStoresOneResponse } from "@apideck/sdk/models/operations";

let value: EcommerceStoresOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getStoreResponse: {
    statusCode: 200,
    status: "OK",
    service: "shopify",
    resource: "stores",
    operation: "one",
    data: {
      id: "12345",
      name: "My Store",
      storeUrl: "https://mybrand.com/shop",
      adminUrl: "https://mybrand.com/admin",
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `getStoreResponse`                                                                       | [components.GetStoreResponse](../../models/components/getstoreresponse.md)               | :heavy_minus_sign:                                                                       | Stores                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |