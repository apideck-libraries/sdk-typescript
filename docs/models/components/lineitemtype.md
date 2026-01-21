# LineItemType

Line Item type

## Example Usage

```typescript
import { LineItemType } from "@apideck/unify/models/components";

let value: LineItemType = "expense_account";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"expense_item" | "expense_account" | "other" | Unrecognized<string>
```