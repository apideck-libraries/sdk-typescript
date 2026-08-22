# AccountingPaymentMethodsAllResponse

## Example Usage

```typescript
import { AccountingPaymentMethodsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentMethodsAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getPaymentMethodsResponse`                                                                  | [components.GetPaymentMethodsResponse](../../models/components/getpaymentmethodsresponse.md) | :heavy_minus_sign:                                                                           | Payment Methods                                                                              |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |