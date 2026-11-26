# GoodsReceiptCreateInput

A narrow, purchase-order-anchored body for creating a goods receipt. Unlike the other create bodies it is not the full model, and unlike the batch `*CreateInput` schemas it is not the model minus its read-only fields (so it is not covered by the create-input parity guard): it holds only what a receipt against a purchase order can be created from. A goods receipt is created against a purchase order: `purchase_order_id` is required and every line names the purchase order line it receives against. A receipt that is not tied to a purchase order cannot be created.

## Example Usage

```typescript
import { GoodsReceiptCreateInput } from "@apideck/unify/models/components";

let value: GoodsReceiptCreateInput = {
  purchaseOrderId: "4500000004",
  receivedDate: new Date("2026-09-01"),
  postedDate: new Date("2026-09-01"),
  reference: "DN-78910",
  notes: "Partial delivery, remainder expected next week.",
  locationId: "1710/171A",
  lineItems: [
    {
      purchaseOrder: {
        id: "123456",
        lineId: "123456",
        lineNumber: "1",
      },
      quantityReceived: 4,
      unitOfMeasure: "pc.",
      description: "Pallet 1 of 2",
      locationId: "1710/171A",
    },
  ],
  passThrough: [
    {
      serviceId: "<id>",
      extendPaths: [
        {
          path: "$.nested.property",
          value: {
            "TaxClassificationRef": {
              "value": "EUC-99990201-V1-00020000",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purchaseOrderId`                                                                                                                                       | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | ID of the purchase order the goods are received against, as returned by `GET /accounting/purchase-orders`.                                              | 4500000004                                                                                                                                              |
| `receivedDate`                                                                                                                                          | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | Date the goods were received - YYYY-MM-DD.                                                                                                              | 2026-09-01                                                                                                                                              |
| `postedDate`                                                                                                                                            | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | Accounting posting date of the receipt - YYYY-MM-DD, for accounting systems that distinguish it from the received date.                                 | 2026-09-01                                                                                                                                              |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Supplier-side reference, typically the supplier's delivery note or packing slip number.                                                                 | DN-78910                                                                                                                                                |
| `notes`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Internal notes or description recorded on the receipt.                                                                                                  | Partial delivery, remainder expected next week.                                                                                                         |
| `locationId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | ID of the warehouse or location the goods are received into. Used for every line that does not set its own `line_items[].location_id`.                  | 1710/171A                                                                                                                                               |
| `lineItems`                                                                                                                                             | [components.GoodsReceiptLineCreateInput](../../models/components/goodsreceiptlinecreateinput.md)[]                                                      | :heavy_check_mark:                                                                                                                                      | The quantities received, one entry per purchase order line (or per delivery of a line).                                                                 |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |