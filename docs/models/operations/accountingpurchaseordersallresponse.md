# AccountingPurchaseOrdersAllResponse

## Example Usage

```typescript
import { AccountingPurchaseOrdersAllResponse } from "@apideck/unify/models/operations";

let value: AccountingPurchaseOrdersAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getPurchaseOrdersResponse`                                                                  | [components.GetPurchaseOrdersResponse](../../models/components/getpurchaseordersresponse.md) | :heavy_minus_sign:                                                                           | PurchaseOrders                                                                               |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |