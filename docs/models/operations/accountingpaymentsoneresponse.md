# AccountingPaymentsOneResponse

## Example Usage

```typescript
import { AccountingPaymentsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPaymentResponse`                                                                     | [components.GetPaymentResponse](../../models/components/getpaymentresponse.md)           | :heavy_minus_sign:                                                                       | Payment                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |