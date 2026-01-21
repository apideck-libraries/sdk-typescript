# LedgerAccountsSortBy

The field on which to sort the Ledger Accounts

## Example Usage

```typescript
import { LedgerAccountsSortBy } from "@apideck/unify/models/components";

let value: LedgerAccountsSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```