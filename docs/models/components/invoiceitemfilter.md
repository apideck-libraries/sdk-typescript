# InvoiceItemFilter

## Example Usage

```typescript
import { InvoiceItemFilter } from "@apideck/unify/models/components";

let value: InvoiceItemFilter = {
  type: "service",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.InvoiceItemFilterInvoiceItemType](../../models/components/invoiceitemfilterinvoiceitemtype.md) | :heavy_minus_sign:                                                                                         | The type of invoice item, indicating whether it is an inventory item, a service, or another type.          | service                                                                                                    |