# AccountingTrackingCategoriesUpdateResponse

## Example Usage

```typescript
import { AccountingTrackingCategoriesUpdateResponse } from "apideck/models/operations";

let value: AccountingTrackingCategoriesUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateTrackingCategoryResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "tracking-categories",
    operation: "update",
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updateTrackingCategoryResponse`                                                                       | [components.UpdateTrackingCategoryResponse](../../models/components/updatetrackingcategoryresponse.md) | :heavy_minus_sign:                                                                                     | Tracking category updated                                                                              |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |