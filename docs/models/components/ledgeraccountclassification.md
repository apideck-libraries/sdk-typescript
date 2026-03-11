# LedgerAccountClassification

The classification of account.

## Example Usage

```typescript
import { LedgerAccountClassification } from "@apideck/unify/models/components";

let value: LedgerAccountClassification = "asset";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"asset" | "equity" | "expense" | "liability" | "revenue" | "income" | "other_income" | "other_expense" | "costs_of_sales" | "other" | Unrecognized<string>
```