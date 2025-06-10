# AccountingBillPaymentsDeleteResponse

## Example Usage

```typescript
import { AccountingBillPaymentsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsDeleteResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deleteBillPaymentResponse`                                                                  | [components.DeleteBillPaymentResponse](../../models/components/deletebillpaymentresponse.md) | :heavy_minus_sign:                                                                           | Bill Payment deleted                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |