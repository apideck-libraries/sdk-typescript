# AccountingPurchaseOrdersAddResponse

## Example Usage

```typescript
import { AccountingPurchaseOrdersAddResponse } from "@apideck/unify/models/operations";

let value: AccountingPurchaseOrdersAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createPurchaseOrderResponse`                                                                    | [components.CreatePurchaseOrderResponse](../../models/components/createpurchaseorderresponse.md) | :heavy_minus_sign:                                                                               | PurchaseOrders                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |