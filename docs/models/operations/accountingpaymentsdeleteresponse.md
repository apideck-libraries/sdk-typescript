# AccountingPaymentsDeleteResponse

## Example Usage

```typescript
import { AccountingPaymentsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletePaymentResponse`                                                                  | [components.DeletePaymentResponse](../../models/components/deletepaymentresponse.md)     | :heavy_minus_sign:                                                                       | Payment deleted                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |