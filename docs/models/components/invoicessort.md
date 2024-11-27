# InvoicesSort

## Example Usage

```typescript
import { InvoicesSort } from "@apideck/sdk/models/components";

let value: InvoicesSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `by`                                                                   | [components.InvoicesSortBy](../../models/components/invoicessortby.md) | :heavy_minus_sign:                                                     | The field on which to sort the Invoices                                | updated_at                                                             |
| `direction`                                                            | [components.SortDirection](../../models/components/sortdirection.md)   | :heavy_minus_sign:                                                     | The direction in which to sort the results                             |                                                                        |