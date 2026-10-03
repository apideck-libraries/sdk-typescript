# AccountingBillPaymentsBatchAddResponse

## Example Usage

```typescript
import { AccountingBillPaymentsBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsBatchAddResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `batchBillPaymentsResponse`                                                                  | [components.BatchBillPaymentsResponse](../../models/components/batchbillpaymentsresponse.md) | :heavy_minus_sign:                                                                           | Bill Payments batch processed                                                                |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |