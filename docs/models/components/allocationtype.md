# AllocationType

Type of entity this payment should be attributed to.

## Example Usage

```typescript
import { AllocationType } from "@apideck/unify/models/components";

let value: AllocationType = "over_payment";
```

## Values

```typescript
"invoice" | "order" | "expense" | "credit_memo" | "over_payment" | "pre_payment" | "journal_entry" | "other" | "bill"
```