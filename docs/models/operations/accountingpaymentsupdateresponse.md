# AccountingPaymentsUpdateResponse

## Example Usage

```typescript
import { AccountingPaymentsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatePaymentResponse`                                                                  | [components.UpdatePaymentResponse](../../models/components/updatepaymentresponse.md)     | :heavy_minus_sign:                                                                       | Payment Updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |