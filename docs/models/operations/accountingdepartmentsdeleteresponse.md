# AccountingDepartmentsDeleteResponse

## Example Usage

```typescript
import { AccountingDepartmentsDeleteResponse } from "apideck/models/operations";

let value: AccountingDepartmentsDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  deleteAccountingDepartmentResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "departments",
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
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `deleteAccountingDepartmentResponse`                                                                           | [components.DeleteAccountingDepartmentResponse](../../models/components/deleteaccountingdepartmentresponse.md) | :heavy_minus_sign:                                                                                             | Department deleted                                                                                             |
| `unexpectedErrorResponse`                                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                       | :heavy_minus_sign:                                                                                             | Unexpected error                                                                                               |