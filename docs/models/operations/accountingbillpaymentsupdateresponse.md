# AccountingBillPaymentsUpdateResponse

## Example Usage

```typescript
import { AccountingBillPaymentsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsUpdateResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updateBillPaymentResponse`                                                                  | [components.UpdateBillPaymentResponse](../../models/components/updatebillpaymentresponse.md) | :heavy_minus_sign:                                                                           | Bill Payment updated                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |