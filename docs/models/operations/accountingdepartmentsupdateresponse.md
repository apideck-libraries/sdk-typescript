# AccountingDepartmentsUpdateResponse

## Example Usage

```typescript
import { AccountingDepartmentsUpdateResponse } from "apideck/models/operations";

let value: AccountingDepartmentsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateAccountingDepartmentResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "departments",
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
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updateAccountingDepartmentResponse`                                                                           | [components.UpdateAccountingDepartmentResponse](../../models/components/updateaccountingdepartmentresponse.md) | :heavy_minus_sign:                                                                                             | Department                                                                                                     |
| `unexpectedErrorResponse`                                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                       | :heavy_minus_sign:                                                                                             | Unexpected error                                                                                               |