# GoodsReceiptsFilter

## Example Usage

```typescript
import { GoodsReceiptsFilter } from "@apideck/unify/models/components";

let value: GoodsReceiptsFilter = {
  updatedSince: new Date("2026-09-01T07:43:32.000Z"),
  supplierId: "123abc",
  purchaseOrderId: "123456",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2026-09-01T07:43:32.000Z                                                                      |
| `supplierId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by supplier id                                                                         | 123abc                                                                                        |
| `purchaseOrderId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return only receipts with at least one line created against this purchase order               | 123456                                                                                        |