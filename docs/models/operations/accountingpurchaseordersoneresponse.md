# AccountingPurchaseOrdersOneResponse

## Example Usage

```typescript
import { AccountingPurchaseOrdersOneResponse } from "@apideck/unify/models/operations";

let value: AccountingPurchaseOrdersOneResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getPurchaseOrderResponse`                                                                 | [components.GetPurchaseOrderResponse](../../models/components/getpurchaseorderresponse.md) | :heavy_minus_sign:                                                                         | PurchaseOrders                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |