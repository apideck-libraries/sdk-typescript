# AccountingCustomersDeleteResponse

## Example Usage

```typescript
import { AccountingCustomersDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingCustomersDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteCustomerResponse`                                                                 | [components.DeleteCustomerResponse](../../models/components/deletecustomerresponse.md)   | :heavy_minus_sign:                                                                       | Customers                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |