# AccountingTrackingCategoriesAddResponse

## Example Usage

```typescript
import { AccountingTrackingCategoriesAddResponse } from "apideck/models/operations";

let value: AccountingTrackingCategoriesAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createTrackingCategoryResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "tracking-categories",
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createTrackingCategoryResponse`                                                                       | [components.CreateTrackingCategoryResponse](../../models/components/createtrackingcategoryresponse.md) | :heavy_minus_sign:                                                                                     | Tracking category created                                                                              |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |