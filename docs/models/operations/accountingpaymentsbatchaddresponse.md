# AccountingPaymentsBatchAddResponse

## Example Usage

```typescript
import { AccountingPaymentsBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsBatchAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `batchPaymentsResponse`                                                                  | [components.BatchPaymentsResponse](../../models/components/batchpaymentsresponse.md)     | :heavy_minus_sign:                                                                       | Payments batch processed                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |