# AccountingPurchaseOrdersDeleteResponse

## Example Usage

```typescript
import { AccountingPurchaseOrdersDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingPurchaseOrdersDeleteResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deletePurchaseOrderResponse`                                                                    | [components.DeletePurchaseOrderResponse](../../models/components/deletepurchaseorderresponse.md) | :heavy_minus_sign:                                                                               | PurchaseOrders                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |