# InvoiceItemFilter

## Example Usage

```typescript
import { InvoiceItemFilter } from "@apideck/unify/models/components";

let value: InvoiceItemFilter = {
  type: "service",
  transactionType: "purchase",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.InvoiceItemFilterInvoiceItemType](../../models/components/invoiceitemfilterinvoiceitemtype.md) | :heavy_minus_sign:                                                                                         | The type of invoice item, indicating whether it is an inventory item, a service, or another type.          | service                                                                                                    |
| `transactionType`                                                                                          | [components.InvoiceItemFilterTransactionType](../../models/components/invoiceitemfiltertransactiontype.md) | :heavy_minus_sign:                                                                                         | The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.           | purchase                                                                                                   |