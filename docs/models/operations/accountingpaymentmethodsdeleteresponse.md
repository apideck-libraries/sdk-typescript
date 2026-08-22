# AccountingPaymentMethodsDeleteResponse

## Example Usage

```typescript
import { AccountingPaymentMethodsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentMethodsDeleteResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deletePaymentMethodResponse`                                                                    | [components.DeletePaymentMethodResponse](../../models/components/deletepaymentmethodresponse.md) | :heavy_minus_sign:                                                                               | Payment Methods                                                                                  |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |