# AccountingPaymentMethodsAddResponse

## Example Usage

```typescript
import { AccountingPaymentMethodsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentMethodsAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createPaymentMethodResponse`                                                                    | [components.CreatePaymentMethodResponse](../../models/components/createpaymentmethodresponse.md) | :heavy_minus_sign:                                                                               | Payment Methods                                                                                  |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |