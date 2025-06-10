# AccountingBillPaymentsAddResponse

## Example Usage

```typescript
import { AccountingBillPaymentsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsAddResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createBillPaymentResponse`                                                                  | [components.CreateBillPaymentResponse](../../models/components/createbillpaymentresponse.md) | :heavy_minus_sign:                                                                           | Bill Payment created                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |