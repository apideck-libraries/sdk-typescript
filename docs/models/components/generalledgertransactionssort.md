# GeneralLedgerTransactionsSort

## Example Usage

```typescript
import { GeneralLedgerTransactionsSort } from "@apideck/unify/models/components";

let value: GeneralLedgerTransactionsSort = {
  by: "posted_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                     | [components.GeneralLedgerTransactionsSortBy](../../models/components/generalledgertransactionssortby.md) | :heavy_minus_sign:                                                                                       | The field on which to sort the General Ledger Transactions.                                              | posted_at                                                                                                |
| `direction`                                                                                              | [components.SortDirection](../../models/components/sortdirection.md)                                     | :heavy_minus_sign:                                                                                       | The direction in which to sort the results                                                               |                                                                                                          |