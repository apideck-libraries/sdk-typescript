# LedgerAccountClassification

The classification of account.

## Example Usage

```typescript
import { LedgerAccountClassification } from "@apideck/unify/models/components";

let value: LedgerAccountClassification = "asset";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"asset" | "equity" | "expense" | "liability" | "revenue" | "income" | "other_income" | "other_expense" | "costs_of_sales" | "other" | Unrecognized<string>
```