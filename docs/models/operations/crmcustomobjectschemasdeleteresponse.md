# CrmCustomObjectSchemasDeleteResponse

## Example Usage

```typescript
import { CrmCustomObjectSchemasDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectSchemasDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  deleteCustomObjectSchemaResponse: {
    statusCode: 200,
    status: "OK",
    service: "zoho-crm",
    resource: "custom-object-schemas",
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
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deleteCustomObjectSchemaResponse`                                                                         | [components.DeleteCustomObjectSchemaResponse](../../models/components/deletecustomobjectschemaresponse.md) | :heavy_minus_sign:                                                                                         | Custom object schema deleted                                                                               |
| `unexpectedErrorResponse`                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                   | :heavy_minus_sign:                                                                                         | Unexpected error                                                                                           |