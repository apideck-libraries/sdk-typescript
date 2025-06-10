# AccountingBillPaymentsAllResponse

## Example Usage

```typescript
import { AccountingBillPaymentsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBillPaymentsResponse`                                                                | [components.GetBillPaymentsResponse](../../models/components/getbillpaymentsresponse.md) | :heavy_minus_sign:                                                                       | Bill Payments                                                                            |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |