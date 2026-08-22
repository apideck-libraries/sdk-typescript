# AccountingPaymentMethodsOneResponse

## Example Usage

```typescript
import { AccountingPaymentMethodsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentMethodsOneResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getPaymentMethodResponse`                                                                 | [components.GetPaymentMethodResponse](../../models/components/getpaymentmethodresponse.md) | :heavy_minus_sign:                                                                         | Payment Methods                                                                            |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |