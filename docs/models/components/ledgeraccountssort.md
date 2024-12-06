# LedgerAccountsSort

## Example Usage

```typescript
import { LedgerAccountsSort } from "@apideck/unify/models/components";

let value: LedgerAccountsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `by`                                                                               | [components.LedgerAccountsSortBy](../../models/components/ledgeraccountssortby.md) | :heavy_minus_sign:                                                                 | The field on which to sort the Ledger Accounts                                     | updated_at                                                                         |
| `direction`                                                                        | [components.SortDirection](../../models/components/sortdirection.md)               | :heavy_minus_sign:                                                                 | The direction in which to sort the results                                         |                                                                                    |