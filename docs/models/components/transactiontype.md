# TransactionType

The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.

## Example Usage

```typescript
import { TransactionType } from "@apideck/unify/models/components";

let value: TransactionType = "sale";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sale" | "purchase" | Unrecognized<string>
```