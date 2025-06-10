# AccountingPaymentsAddResponse

## Example Usage

```typescript
import { AccountingPaymentsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createPaymentResponse`                                                                  | [components.CreatePaymentResponse](../../models/components/createpaymentresponse.md)     | :heavy_minus_sign:                                                                       | Payment created                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |