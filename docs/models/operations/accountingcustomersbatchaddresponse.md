# AccountingCustomersBatchAddResponse

## Example Usage

```typescript
import { AccountingCustomersBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingCustomersBatchAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `batchCustomersResponse`                                                                 | [components.BatchCustomersResponse](../../models/components/batchcustomersresponse.md)   | :heavy_minus_sign:                                                                       | Customers batch processed                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |